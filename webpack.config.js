const path = require('path');
const fs = require("fs");
const crypto = require("crypto");
const LZString = require("lz-string");
const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin");

const getUUID = () =>
    (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (Number(c) ^ (crypto.randomBytes(1)[0] & (15 >> (Number(c) / 4)))).toString(16),
    );


class CompressToLZPlugin {
    apply(compiler) {
        compiler.hooks.assetEmitted.tap('CompressToLZPlugin', (file, {outputPath, content}) => {
            /**@type {import("definitions/ComponentObject").ComponentObject} compressionObject */
            const compressionObject = {
                i: getUUID(),
                w: 1,
                h: 2,
                component: {
                    script: new TextDecoder().decode(content)
                }
            }
            const export_string = LZString.compressToBase64(JSON.stringify(compressionObject))

            const ws = fs.createWriteStream(path.join(outputPath, `${file.replace(".js", ".lzstring.txt")}`))
            ws.write(export_string)
            ws.end()
        });
    }
}


function buildEntryObject(){
    const basePath = path.join(__dirname, "components")
    const files  = fs.readdirSync(basePath, {withFileTypes: false})

    const entry = {}
    for (const file of files){
        entry[file.replace(".ts", "")] = path.relative(__dirname, path.join(basePath, file))
    }

    return entry
}

module.exports = {
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
    plugins: [
        new CompressToLZPlugin(),
        new webpack.BannerPlugin({
            banner: "Created using the WCL-TS-Components Template https://github.com/JoschiGrey/WCL-TS-Components \n",
            include: /-*\.js/
        })
    ]
};