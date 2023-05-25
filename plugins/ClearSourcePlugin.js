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
    #options


    /**
     *  @param options {import("definitions/template").ClearSourcePluginOptions}
     */
    constructor(options = {}) {
        this.#options = options
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
                const filePath = path.relative(path.join(__dirname, ".."), path.join(resolve.context, resolve.request))
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


                            if(this.#dependencies[fileName]){
                                const dependencies = Array.from(this.#dependencies[fileName])
                                while (dependencies.length > 0){
                                    const dependency = dependencies.pop()

                                    if (comments[dependency]){
                                        continue
                                    }

                                    comments[dependency] = this.#getSourceString(dependency)
                                    const dependencyFileName = dependency.split("\\").pop().replace(".ts", "")
                                    if (this.#dependencies[dependencyFileName]){
                                        for (const recDep of this.#dependencies[dependencyFileName]){
                                            dependencies.push(recDep)
                                        }
                                    }
                                }
                            }

                            let commentString = "\n /*Source Code LZString compressed, Base64 encoded \n" + LZString.compressToBase64(JSON.stringify(comments, undefined, 4))  + "\n*/"

                            if (comments){
                                return  new ConcatSource(old, commentString)
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