const path = require('path');
const fs = require("fs");
const crypto = require("crypto");
const LZString = require("lz-string");
const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin");
const {Compilation} = require("webpack");
const { ConcatSource } = require("webpack-sources");

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

class ClearSourcePlugin {
    #rawSources = {}
    #dependencies = {}
    #compress

    constructor(options = {compress: false}) {
        this.#compress = options.compress
    }

    #getSourceString(dependency) {
        return "\n/* " + dependency + "\n" + this.#rawSources[dependency] + "\n*/"
    }

    /**
     * Apply the plugin
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler){
        compiler.hooks.normalModuleFactory.tap("ClearSourcePlugin", (factory) => {
            compiler.hooks.watchRun.tap("ClearSourcePlugin", (compiler) => {
                this.#rawSources = {}
                this.#dependencies = {}
            })


            factory.hooks.beforeResolve.tap("ClearSourcePlugin", (resolve) => {
                const filePath = path.relative(__dirname, path.join(resolve.context, resolve.request))
                let fullPath
                if (fs.existsSync(filePath + ".ts")){
                    fullPath = filePath + ".ts"
                }
                else if (fs.existsSync(filePath + ".js")){
                    fullPath = filePath
                }
                else{
                    return
                }
                const issuerFile = resolve.contextInfo.issuer.split("\\").pop().replace(/.[t|j]s/, "")
                this.#rawSources[issuerFile] ??= this.#compress ?
                    LZString.compressToBase64(fs.readFileSync(path.relative(__dirname, resolve.contextInfo.issuer), "utf8")) :
                    fs.readFileSync(path.relative(__dirname, resolve.contextInfo.issuer), "utf8")

                this.#dependencies[issuerFile] ??= new Set()
                this.#dependencies[issuerFile].add(fullPath)
                if (this.#rawSources[fullPath]){
                    return;
                }

                this.#rawSources[fullPath] = this.#compress ?
                    LZString.compressToBase64(fs.readFileSync(fullPath, "utf8")) :
                    fs.readFileSync(fullPath, "utf8")
            })

        })

        compiler.hooks.thisCompilation.tap("ClearSourcePlugin", (compilation) => {
            compilation.hooks.processAssets.tap({
                name: "ClearSourcePlugin",
                stage: Compilation.PROCESS_ASSETS_STAGE_DEV_TOOLING,

            }, () => {
                for (const chunk of compilation.chunks) {
                    for (const file of chunk.files) {
                        compilation.updateAsset(file, old => {
                            const fileName = file.split(".").shift()
                            let comments
                            for (const dependency of this.#dependencies[fileName]){
                                comments ??= [this.#getSourceString(fileName)]
                                comments.push(this.#getSourceString(dependency))
                            }
                            if (this.#compress){
                                comments.unshift("//Base64 Encoded LZString Source")
                            } else {
                                comments.unshift("//Source Code")
                            }
                            if (comments.length > 0){
                                const newSource = new ConcatSource(old, "\n", ...comments)
                                return newSource
                            }
                            return old

                        });
                    }
                }
            })
        })
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
        }),
        new ClearSourcePlugin({compress: true})
    ]
};