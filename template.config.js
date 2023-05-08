/**@type {import("definitions/template").TemplateConfig} config*/
module.exports = {
    plugins: {
        clearSource: {
            compress: true
        },
        exportString: true,
        autoTest: {
            loginMethod: "EUROPE",
            components: {
                exampleComponent: "https://www.warcraftlogs.com/reports/mTpzVhP4RfvD2FM8#fight=1&view=components"
            }
        }
    },
    components: {
        exampleComponent: {
            h: 2,
            w: 2
        }
    },
}