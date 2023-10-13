# WCL TS Components Template
This is a template project that allows you to write Warcraft Logs Report Components
in Typescript and transpile it directly to JavaScript that can be copied and pasted directly into Warcraft Logs.
Having all of your components at one place enables easy sharing and reusing code between your different components.


### Features
- Full typescript support
- Easily share code between different components
- Include your typescript source directly as comments
- Creates export strings for you to quickly share components with others
- File watcher for a faster write - test cycle
- Automatically tests your component in WCL using Puppeteer
- Import Markdown files directly into your component
- [Github Action Example](#github-actions-example-not-included-in-template) to run a webpack build directly in your repo


## How to use
Clone this repository or create your own repository directly from the [template](https://github.com/JoschiGrey/WCL-TS-Components/generate).
>git clone https://github.com/JoschiGrey/WCL-TS-Components

Then run npm install to fetch all the dependencies.
>npm install

Each `.ts` file in the [components' folder](components) will be transpiled into its own standalone component.
This allows you to share code between your different projects.

To transpile your code run
>npx webpack

The resulting components can be found in the [dist folder](dist), which will be generated after running webpack.
By default, the [file watcher](#watcher) ist activated, that will automatically re-transpile your components on changes.

Beside the transpiled code a second `*.lzstring.txt` file is generated for each component. 
Which contains a Warcraft Logs [import](#import-string) string to directly share your work. 

___
### Template Config
You can configure the included plugins directly in the [template config](template.config.js). 
Omitting a property of `TemplateConfig.plugins` or assigning a falsy value will deactivate the plugin all together.

___
### Banner
This template includes an implementation for the webpack Banner Plugin.
It can be configured directly in the [template config](template.config.js)

```ts
module.exports = {
    plugins: {
        banner: {
            active: true,
            banner: "Created using the WCL-TS-Components Template https://github.com/JoschiGrey/WCL-TS-Components",
            include: /-*\.js/
        }
    }
}
```
___
### Watcher
Webpacks file watcher will react to all your changes and retranspile your code into components on the fly.
This will also update the `.lzstring` files and trigger the [AutoTest](#testing-experimental) for all affected components.

Currently, the watcher cannot react to new files being created in [/component](components) and you will have to rerun
webpack, whenever you want to create a new component.

The file watcher can be turned off by setting `watch` to `false` in the [template config](template.config.js).

___
### Import String
Warcraft Logs uses base64 encoded LZString of an object that represents the component as a whole as exports / imports.
This is directly generated for each of you components using the [CreateExportStringPlugin](plugins/CreateExportStringPlugin.js).

The format of your components can be defined on a individual basis by setting the width (`componentName.w`) and height (`componentName.h`) in the [template config](template.config.js).

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

If you don't define a format the height `h` and width `w` components are set to 1 and 2 respectively, which results in a quadratic component.
This is the same size as a newly created component on WCL.

Setting `componentName.i` will assign this as a static id instead of creating a new random one each time the export string is generated.

___
### Source Code
By default, your full LZString compressed, Base64 encoded typescript source code is appended as comments to your export.
This is done by the [ClearSourcePlugin](plugins/ClearSourcePlugin.js) and can be controlled like all plugins in the [template config](template.config.js)

Because of issues with correctly escaping comments, currently only the compressed variant is supported.

___
### Types
Typings for the `RpgLogs` API are provided in [RpgLogs.d.ts](definitions/RpgLogs.d.ts).
This file is a concatenation of the original definition files `chart.d.ts`, `warcraft.d.ts` and `index.d.ts`, provided by the WCL team on [Discord](https://cdn.discordapp.com/attachments/1042093628778090527/1100066150299226132/reportComponents.zip).
Minor typing and syntax errors that are present in the original files are corrected.

You can import them directly in your TS code 
```ts
import type {RpgLogs} from "../definitions/RpgLogs";
```

___
### Markdown
Markdown from external `.md` files can be directly imported into your components.
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
To streamline this you can set up your credentials in a .env file ([see](.env.example)) to mostly automate that process.

You need to set up your login method in the [template config](template.config.js) in any case.
```js
module.exports = {
    plugins: {
        autoTest: {
            active: true // this can be used as a flag to quickly enable or disable testing whithout deleting the other 
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

Note that currently working with multiple components at the same time only partially works, since webpack currently emits all ressources instead of only ones that changed.

Passing `--env=noTest` as a cli parameter will superseed the webpack config and not start the test plugin even if enabled.

___
### Github Actions Example (Not included in template!)
You can automate a webpack build on your github repo to ensure that `dist` is always up-to-date.

The following action will run webpack and rebuild your components after each push and directly commit the result to your repo.
```yaml
# /.github/workflows/webpack.yml
name: NodeJS with Webpack

on:
  push:
    branches: [ "main" ]
    # Run on pushed to main, if a .ts or .js file was changed, but not in the dist folder!
    paths:
      - "**.ts"
      - "**.js"
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
        npx webpack --no-watch --env=noTest

    - name: Commit to repo
      uses: stefanzweifel/git-auto-commit-action@v4
      with:
        commit_message: Automated Webpack Build
```

___
## Additional Resources
- More help regarding components can be found in the [help articles](https://articles.warcraftlogs.com/help/what-are-report-components).
- Report components are currently in their closed alpha you can sign up here https://forms.gle/oFcWCMbgqDK2j2e69.
- You can get more help regarding components on the [Warcraft Logs Discord](https://discord.gg/5ebPJSsy5y).
- The scripting logs API documentation is found [here](https://www.warcraftlogs.com/scripting-api-docs/warcraft/modules/RpgLogs.html).


## Gulp Template
The first version of this template was moved to a [protected branch](https://github.com/JoschiGrey/WCL-TS-Components/tree/v1-gulp-based).
Gulp has the distinct advantage of generating human-readable code, because it just concatenated the needed files into one.
This had the big disadvantage of not allowing symbols with the same name being imported from different files.
It also necessitated the user to add triple slash references to each file they wanted to use.

To clone it directly you can use this command.
>git clone --single-branch --branch v1-gulp-based https://github.com/JoschiGrey/WCL-TS-Components