const webpack = require("webpack");
const {Compilation} = webpack
const ConcatSource = require("webpack-sources/lib/ConcatSource.js")

class WCLCompatibilityPlugin {
    apply(compiler){
        compiler.hooks.thisCompilation.tap("WCLCompatibilityPlugin", (compilation) => {
            compilation.hooks.processAssets.tap({
                name: "WCLCompatibilityPlugin",
                stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,

            }, () => {
                for (const chunk of compilation.chunks) {
                    for (const file of chunk.files) {
                        compilation.updateAsset(file, old => {
                            return new ConcatSource("let getComponent;\n", old)
                        });
                    }
                }
            })
        })
    }
}

module.exports = WCLCompatibilityPlugin