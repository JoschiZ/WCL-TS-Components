const path = require( "path");
const fs = require("fs");
const LZString = require("lz-string")
const webpack = require("webpack");
const {Compilation} = webpack
const ConcatSource = require("webpack-sources/lib/ConcatSource.js")


/**
 * This Plugin will attach the full source code to your component as a comment.
 */
class ClearSourcePlugin {
    #rawSources = {}
    #dependencies = {}
    #compress

    /**
     *  @param options {import("definitions/template").ClearSourcePluginOptions}
     */
    constructor(options = {compress: false}) {
        this.#compress = options.compress
    }

    #getSourceString(dependency) {
        if (!this.#rawSources[dependency]){
            return dependency + " could not be found"
        }
        return this.#rawSources[dependency]
    }

    /**
     * Apply the plugin
     * @param {import("webpack/types").Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler){
        compiler.hooks.normalModuleFactory.tap("ClearSourcePlugin", (factory) => {
            compiler.hooks.watchRun.tap("ClearSourcePlugin", () => {
                this.#rawSources = {}
                this.#dependencies = {}
            })


            factory.hooks.beforeResolve.tap("ClearSourcePlugin", (resolve) => {
                const filePath = path.resolve(__dirname, path.join(resolve.context, resolve.request))
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
                this.#rawSources[issuerFile] ??= fs.readFileSync(path.resolve(__dirname, resolve.contextInfo.issuer), "utf8")

                this.#dependencies[issuerFile] ??= new Set()
                this.#dependencies[issuerFile].add(fullPath)
                if (this.#rawSources[fullPath]){
                    return;
                }

                this.#rawSources[fullPath] = fs.readFileSync(fullPath, "utf8")
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
                            let comments = {}
                            comments[fileName] = this.#getSourceString(fileName)

                            for (const dependency of this.#dependencies[fileName]){
                                comments[fileName] = this.#getSourceString(dependency)
                            }
                            let commentString = this.#compress ?
                                "\n /*Source Code LZString compressed, Base64 encoded \n" + LZString.compressToBase64(JSON.stringify(comments))  + "\n*/" :
                                "\n /*\n" + JSON.stringify(comments) + "\n*/"

                            if (comments){
                                return  new ConcatSource(old,commentString )
                            }
                            return old

                        });
                    }
                }
            })
        })
    }
}

module.exports = ClearSourcePlugin