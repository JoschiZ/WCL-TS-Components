/**@type {import("definitions/template").TemplateConfig} config*/
module.exports = {
    plugins: {
        clearSource: {
            compress: true
        },
        exportString: true
    },
    components: {
        exampleComponent: {
            h: 2,
            w: 2
        }
    }
}