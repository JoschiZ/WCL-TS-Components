/**@type {import("definitions/template").TemplateConfig} config*/
module.exports = {
    plugins: {
        clearSource: {
            compress: true
        },
        exportString: true,
        autoTest: false,
        banner: {
            active: true,
            banner: "Created using the WCL-TS-Components Template https://github.com/JoschiGrey/WCL-TS-Components",
            include: /-*\.js/
        }
    },
    components: {
        exampleComponent: {
            h: 2,
            w: 2
        }
    },
    watch: true
}