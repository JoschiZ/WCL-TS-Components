import path from "path";
import fs from "fs";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import ClearSourcePlugin from "./plugins/ClearSourcePlugin.js";
import CreateExportStringPlugin from "./plugins/CreateExportStringPlugin.js";
import templateConfig from "./template.config.js";

import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

function buildEntryObject(){
    const basePath = path.join(__dirname, "components")
    const files  = fs.readdirSync(basePath, {withFileTypes: false})

    const entry = {}
    for (const file of files){
        entry[file.replace(".ts", "")] = path.relative(__dirname, path.join(basePath, file))
    }

    return entry
}

function createPluginArray(){
    const plugins = []

    if (templateConfig.plugins.clearSource){
        plugins.push(new ClearSourcePlugin(templateConfig.plugins.clearSource))
    }

    if (templateConfig.plugins.exportString){
        plugins.push(new CreateExportStringPlugin())
    }

    plugins.push(new webpack.BannerPlugin({
        banner: "Created using the WCL-TS-Components Template https://github.com/JoschiGrey/WCL-TS-Components \n",
        include: /-*\.js/
    }))

    return plugins
}

export default {
    entry: buildEntryObject(),
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
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
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 400
    },
    plugins: createPluginArray()
};

