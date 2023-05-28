# WCL TS Components Template
This is a template project that allows you to write Warcraft Logs Report Components
in Typescript and transpile it directly to JavaScript that can be copied and pasted into your component.

This project is **not** affiliated with the Warcraft Logs Team!

### Features
- Full typescript support for your components
- Easily share code between different components
- Include your source directly as comments
- Creates export strings for you to easily share components with others
- File watcher for a faster write - test cycle
- Automatically tests your component in WCL using Puppeteer
- Import Markdown files directly into your component
- [Github Action Example](#github-actions-example-not-included-in-template) to run a webpack build directly in your repo


## How to use
Clone this repository or create your own repository directly from the [template](https://github.com/JoschiGrey/WCL-TS-Components/generate).
>git clone https://github.com/JoschiGrey/WCL-TS-Components

Then run npm install to fetch all the dependencies.
>npm install

You can create components in the [components' folder](components). Each `.ts` file in that folder will 
be transpiled into its own standalone component. This allows you to easily share code between your different projects.

To transpile your code run
>npx webpack

The components can be found in the [dist folder](dist), which will be generated after running webpack.
By default, the [file watcher](#watcher) ist activated, that will automatically re-transpile your components on changes.
Beside the transpiled code a second lzstring.txt file is generated for each component. 
This contains Warcraft Logs [import](#import-string) string. 

___
### Template Config
You can configure the included plugins directly in the [template config](template.config.js). 
Omitting a property of `TemplateConfig.plugins` or assigning a falsy value will deactivate the plugin all together.

You can also define the width and height of your components in the config like this

```js
module.exports = {
    components: {
        exampleComponent: {
            w: 2,
            h: 2
        }
    }
}
```

Setting `componentName.i` will assign this as a static id instead of creating a new random one each time the export string is generated.


___
### Banner
This template includes an implementation for the webpack Banner Plugin.
You find the banner settings in the [webpack config](webpack.config.js) under `plugins`.

```ts
new webpack.BannerPlugin({
    banner: "Created using the WCL-TS-Components Template https://github.com/JoschiGrey/WCL-TS-Components \n",
    include: /-*\.js/
})
```

You can easily customize this banner by changing the `banner:` property or remove it completely, by just deleting this part of the config.
This is supposed to give you an easy way, to share a link to your components' repository.
That way other people can take a look at the human-readable version and maybe even contribute to your work.

___
### Imports
Webpack will take care of all your imports and insert the needed code into the resulting components.
Unlike the previous version of this project, you can use `exports` and `imports` without limitations.

___
### Watcher
Webpacks file watcher will react to all your changes and retranspile your code into components on the fly.
This will also update the `.lzstring` files.

Currently, the watcher cannot react to new files being created in [component,](components) and you will have to rerun
webpack, whenever you want to work on a new component.

The file watcher can be turned off by setting `watch` to `false` in the [webpack config](webpack.config.js).

___
### Import String
Warcraft Logs uses base64 encoded LZString of an object that represents the component as a whole as exports / imports.
This is directly generated for each of you components using the [CreateExportStringPlugin](plugins/CreateExportStringPlugin.js).

The height `h` and width `w` components are set to 1 and 2 respectively, which results in a rectangular component.
This is the same size as a newly created component on WCL.

You can set static ids and individual width and heights in the [template config](template.config.js)

___
### Source Code
By default, your full LZString compressed, Base64 encoded typescript source code is appended as comments to your export.
This is done by the [ClearSourcePlugin](plugins/ClearSourcePlugin.js).
Because of issues with correctly escaping comments, currently only the compressed variant is supported.

___
### Types
Typings for the `RpgLogs` API are provided in [RpgLogs.d.ts](definitions/RpgLogs.d.ts).
This file is a concatenation of the original definition files `chart.d.ts`, `warcraft.d.ts` and `index.d.ts`, provided by the WCL team on [Discord](https://cdn.discordapp.com/attachments/1042093628778090527/1100066150299226132/reportComponents.zip).


You can import them directly in your TS code 
```ts
import type {RpgLogs} from "../definitions/RpgLogs";
```

___
### Markdown
You can write Markdown in external `.md` files and directly import them into your typescript source.
The content of those files will be included in the transpiled `.component.js` as a raw string

```ts
import markdown from "path/to/your/markdown.md"
import {RpgLogs} from "./RpgLogs";

export default getComponent => {
    return markdown
}
```

___
### Testing (Experimental!)
This template includes a AutoTestPlugin, which will use [puppeteer](https://pptr.dev/) to open a Log create a new empty component and paste your code in there.
It then runs the component and prints the response to your console.
This is fully compatible with the file Watcher.

Because components are currently in closed preview you will have to log in to WCL.
You can set up your credentials in a .env file ([see](.env.example)) to mostly automate that process.
But you don't have to do that. 
You need to set up your login method in the [template config](template.config.js) in any case.
```js
module.exports = {
    plugins: {
        autoTest: {
            //Login using Battlenet Europe
            loginMethod: "EUROPE",
            components: {
                // Run exampleComponent in the following url
                exampleComponent: "https://www.warcraftlogs.com/reports/mTpzVhP4RfvD2FM8#fight=1&view=components"
            }
        }
    }
}
```

___
### Github Actions Example (Not included in template!)
You can automate a webpack build on your github repo to ensure that `dist` ist always up to date.

The following action will run webpack and rebuild your components after each push and directly commit the result to your repo.
```yaml
# /.github/workflows/webpack.yml
name: NodeJS with Webpack

on:
  push:
    branches: [ "main" ]
    # Run on pushed to main, if a .ts or .js file was changed, but not in the dist folder!
    paths:
      - "*.ts"
      - "*.js"
      - "!dist/**/*"


jobs:
  build:
    runs-on: ubuntu-latest

    permissions:
      contents: write

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: 16

    - name: Build
      run: |
        npm install
        npx webpack --no-watch

    - name: Commit to repo
      uses: stefanzweifel/git-auto-commit-action@v4
      with:
        commit_message: Automated Webpack Build
```
With this you should consider adding `dist/**/*` to your .git exclude.

___
## Additional Resources
- More help regarding components can be found in the [help articles](https:/n/articles.warcraftlogs.com/help/what-are-report-components).
- Report components are currently in their closed alpha you can sign up here https://forms.gle/oFcWCMbgqDK2j2e69.
- You can get more help regarding components on the [Warcraft Logs Discord](https://discord.gg/5ebPJSsy5y).


### Note that this project is not affiliated with the WCL Team!

## Gulp Template
The first version of this template was moved to a [protected branch](https://github.com/JoschiGrey/WCL-TS-Components/tree/v1-gulp-based).
Gulp has the distinct advantage of generating human-readable code, because it just concatenated the needed files into one.
This had the big disadvantage of not allowing symbols with the same name being imported from different files.
It also necessitated the user to add triple slash references to each file they wanted to use.

To clone it directly you can use this command.
>git clone --single-branch --branch v1-gulp-based https://github.com/JoschiGrey/WCL-TS-Components