const puppeteer = require("puppeteer");
const {inspect} = require("util");
const path = require("path");
const fs = require("fs");
require('dotenv').config({path: ".env"});


class AutoTestPlugin {
    pageCache = {}
    browser = undefined

    /**@type {import("../definitions/template").AutoTestPluginOption}*/
    options

    /**
     * @type {Record<string, number>}
     */
    componentCache= {}

    /**
     * @param options {import("../definitions/template").AutoTestPluginOption}
     */
    constructor(options) {
        this.options = options
        this.setupTestingBrowser().then(browser => this.browser = browser)

        const tempPath = path.resolve(__dirname, "tmp/fileHashes.json")
        if (fs.existsSync(tempPath)){
            const cache = fs.readFileSync(tempPath)
            this.componentCache = JSON.parse(cache)
        }

    }

    cyrb53(str, seed = 0){
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for(let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };

    apply(compiler) {
        compiler.hooks.assetEmitted.tapAsync("AutoTestPlugin", (file, {content}, callback) => {
            const componentName = file.replace(".component.js", "")
            if (!this.options.components[componentName]) {
                callback()
                return
            }

            const code = new TextDecoder().decode(content)
            const hash = this.cyrb53(code)
            if (this.componentCache[componentName] && this.componentCache[componentName] === hash){
                return;
            }

            this.componentCache[componentName] = hash
            const folder = path.resolve(__dirname, "tmp")

            if (!fs.existsSync(folder)){
                fs.mkdirSync(folder);
            }

            const ws = fs.createWriteStream(path.join(folder, "/fileHashes.json"))
            ws.write(JSON.stringify(this.componentCache))

            this.getTestingPage(this.browser, componentName).then((page) => {
                this.runCode(page, code).then(() => {
                        callback()
                    }
                ).catch(() => {
                    callback()
                })
            })
        })
    }

    /**
     *
     * @param browser {import("puppeteer").Browser}
     * @param componentName {string}
     * @return {Promise<import("puppeteer").Page>}
     */
    async getTestingPage(browser, componentName) {
        if (this.pageCache[componentName]) {
            return this.pageCache[componentName]
        }

        const page = await browser.newPage()


        await page.setViewport({width: 1080, height: 1024});
        const testingURL = this.options.components[componentName];
        await page.goto(testingURL)

        const changeTitle = page.evaluate(({componentName}) => {
            // eslint-disable-next-line no-undef
            document.title = componentName
        }, {componentName})

        // enter dashboard edit
        await page.click("button.react-tile__action:nth-child(3)")
        const componentsCount = (await page.$$('.report-component-dashboard__cell-overlay')).length
        // create new component
        const newComponentButton = ".report-component-dashboard__component-buttons > button:nth-child(1)";
        await page.waitForSelector(newComponentButton, {timeout: 60000})
        await page.$eval(newComponentButton, element => element.click())

        await page.waitForFunction(componentsCount => {
            // eslint-disable-next-line no-undef
            return document.getElementsByClassName("report-component-dashboard__cell-overlay").length > componentsCount
        }, {}, componentsCount)

        const firstComponentSelector = "div.react-grid-item:nth-child(1) > div:nth-child(2)";
        await page.hover(firstComponentSelector)

        const editButton = "div.react-grid-item:nth-child(1) > div:nth-child(3) > button:nth-child(2)";
        await page.click(editButton)

        const printResponse = (response) => {
            if (response.url().includes('https://www.warcraftlogs.com/reports/evaluate-component-script') && response.ok()) {
                response.json().then((content) => {
                    //WCL Evals the newly created component. This will remove some log spam
                    if (content.result?.props?.content && content.result.props.content === "Hello world!") {
                        return
                    }
                    console.log(inspect(content, true, 10, true))
                })
            }
        }
        // Intercept request and response
        page.on('response', printResponse);

        await changeTitle
        this.pageCache[componentName] = page
        return page
    }

    async setupTestingBrowser() {
        if (this.browser) {
            return this.browser
        }

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.warcraftlogs.com/login');
        await page.click("#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button:nth-child(2)")

        await page.setViewport({width: 1080, height: 1024});

        switch (this.options.loginMethod) {
            case "WCL":
                await this.loginToWCLWithWCL(page)
                break
            case "USA":
                await this.loginWithBNET(page, 1)
                break
            case "EUROPE":
                await this.loginWithBNET(page, 2)
                break
            case "KOREA":
                await this.loginWithBNET(page, 3)
                break
            case "TAIWAN":
                await this.loginWithBNET(page, 4)
                break
        }
        return browser
    }

    /**
     * @param page {import("puppeteer").Page}
     * @return {Promise<void>}
     */
    async loginToWCLWithWCL(page) {
        const login = process.env.WCL_LOGIN_EMAIL ? process.env.WCL_LOGIN_EMAIL : ""
        const passwort = process.env.WCL_PASSWORD ? process.env.WCL_PASSWORD : ""
        await page.type("#email", login)
        await page.type("#password", passwort)


        await Promise.all([
            page.click(".dialog-table > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > input:nth-child(1)"),
            page.waitForNavigation({
                waitUntil: "networkidle0"
            })
        ]);
    }

    /**
     * @param page {import("puppeteer").Page}
     * @param regionNumber
     * @return {Promise<void>}
     */
    async loginWithBNET(page, regionNumber) {
        const nthButtonSelector = `.bnet-tab:nth-of-type(${regionNumber})`;

        const nthButton = await page.$(nthButtonSelector);

        if (nthButton) {
            await nthButton.click();
        } else {
            console.error(`No button found with selector ${nthButtonSelector}`);
        }

        await page.waitForNavigation({
            waitUntil: 'networkidle0',
        });

        const login = process.env.BNET_LOGIN_EMAIL ? process.env.BNET_LOGIN_EMAIL : ""
        const passwort = process.env.BNET_PASSWORD ? process.env.BNET_PASSWORD : ""
        await page.type("#accountName", login)
        await page.type("#password", passwort)
        await page.waitForFunction(() => {
            // eslint-disable-next-line no-undef
            return !document.URL.includes("battle.net")
        }, {timeout: 60000});

    }

    /**
     *
     * @param page {import("puppeteer").Page}
     * @param text {string}
     * @return {Promise<void>}
     */
    async runCode(page, text) {
        try {
            await page.bringToFront()
        } catch (e) {
            this.browser = undefined
            this.pageCache = {}
            this.browser = await this.setupTestingBrowser()
            this.pageCache = await this.getTestingPage(this.browser, await page.title())
        }

        const monacoEditor = ".monaco-editor.no-user-select"
        const editorHandle = (await page.$$(monacoEditor))[1]
        await editorHandle.click()
        await page.keyboard.down('ControlLeft')
        await page.keyboard.press('KeyA')
        await page.keyboard.up('ControlLeft')
        await page.keyboard.press('Backspace')
        const clipboardy = (await import("clipboardy")).default
        await clipboardy.writeSync(text)
        await page.keyboard.down('ControlLeft')
        await page.keyboard.press('KeyV')
        await page.keyboard.up('ControlLeft')
        const runButtonSelector = "#report-component-dashboard-container > div > div.react-tile.report-component-dashboard__cell-edited > div.react-tile__content.react-tile__content--regular > div > div:nth-child(1) > div.report-component-sandbox__buttons > button"

        await page.$eval(runButtonSelector, element => element.click())
    }
}

module.exports = AutoTestPlugin