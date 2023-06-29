const path = require('path');
const fs = require("fs");
const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin");
const ClearSourcePlugin = require("./plugins/ClearSourcePlugin")
const CreateExportStringPlugin = require("./plugins/CreateExportStringPlugin")
const templateConfig = require("./template.config")
const WCLCompatibilityPlugin = require("./plugins/WCLCompatibilityPlugin");
const AutoTestPlugin = require("./plugins/AutoTestPlugin");


function buildEntryObject(){
    const basePath = path.join(__dirname, "components")
    const files  = fs.readdirSync(basePath, {withFileTypes: false})

    const entry = {}
    for (const file of files){
        entry[file.replace(".ts", "")] = path.relative(__dirname, path.join(basePath, file))
    }

    return entry
}

function createPluginArray(env) {
    const plugins = []

    if (templateConfig.plugins.clearSource) {
        plugins.push(new ClearSourcePlugin(templateConfig.plugins.clearSource))
    }
    if (!env.noTest && templateConfig.plugins.autoTest && templateConfig.plugins.autoTest.active) {
        plugins.push(new AutoTestPlugin(templateConfig.plugins.autoTest))
    }
    if (templateConfig.plugins.exportString) {
        plugins.push(new CreateExportStringPlugin())
    }

    plugins.push(new WCLCompatibilityPlugin())

    if (templateConfig.plugins.banner && templateConfig.plugins.banner.active !== false) {
        plugins.push(new webpack.BannerPlugin(templateConfig.plugins.banner))
    }


    return plugins
}

module.exports = env => {
    const pluginArray = createPluginArray(env)


    return {
        entry: buildEntryObject(),
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.md$/,
                    use: ["raw-loader"],
                    exclude: /node_modules/
                }
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
            preferRelative: true
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                extractComments: false
            })]
        },
        output: {
            filename: '[name].component.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                name: "getComponent",
                type: "global",
                export: "default"
            },
            globalObject: "globalThis",
        },
        watch: templateConfig.watch,
        watchOptions: {
            aggregateTimeout: 400
        },
        plugins: pluginArray
    };
}

