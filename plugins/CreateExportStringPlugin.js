const LZString = require("lz-string");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const templateConfig = require("../template.config")

const getUUID = () =>
    (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (Number(c) ^ (crypto.randomBytes(1)[0] & (15 >> (Number(c) / 4)))).toString(16),
    );

class CreateExportStringPlugin {
    apply(compiler) {
        compiler.hooks.assetEmitted.tap('CreateExportStringPlugin', (file, {outputPath, content}) => {
            const componentName = file.replace(".component.js", "")
            const component = templateConfig.components[componentName] ?
                templateConfig.components[componentName] :
                {
                    w: 1,
                    h: 2,
                }
            component.component = {script: new TextDecoder().decode(content)}
            component.i ??= getUUID()
            const export_string = LZString.compressToBase64(JSON.stringify(component))

            const ws = fs.createWriteStream(path.join(outputPath, `${file.replace(".js", ".lzstring.txt")}`))
            ws.write(export_string)
            ws.end()
        });
    }
}

module.exports = CreateExportStringPlugin