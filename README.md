# WCL TS Components Template
This is a template project that allows you to write Warcraft Logs Report Components
in Typescript and transpile it directly to JavaScript that can be copied and pasted into your component.

This project is **not** affiliated with the Warcraft Logs Team!

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
This is directly generated for each of you components using the [CompressToLZPlugin](webpack.config.js).

The height `h` and width `w` components are set to 1 and 2 respectively, which results in a rectangular component.
This is the same size as a newly created component on WCL.

Currently, it is not possible to define the width and height of your different components individually.

___
### Source Code
By default, your full LZString compressed, Base64 encoded typescript source code is appended as comments to your export.
You can choose to not compress it by setting `new ClearSourcePlugin({compress: true})` of the [ClearSourcePlugin](webpack.config.js)
to false in the webpack config.
You can also choose to omit your source by deleting the `ClearSourcePlugin` from the list of plugins.
This may be advisable for projects with large imports, as the content of the full file and not just the imported symbols are imported.


___
### Types
Typings for the `RpgLogs` API are provided in [RpgLogs.d.ts](definitions/RpgLogs.d.ts).
This file is a concatenation of the original definition files `chart.d.ts`, `warcraft.d.ts` and `index.d.ts`, provided by the WCL team on [Discord](https://cdn.discordapp.com/attachments/1042093628778090527/1100066150299226132/reportComponents.zip).


You can import them directly in your TS code 
```ts
import type {RpgLogs} from "../definitions/RpgLogs";
```

___
### Limitations
You will note, that the example component looks like this 
```ts
(global as any).getComponent = () => {
...}
```
this `global` is currently needed or else the webpack export won't be compatible with Warcraft Logs.

___
## Additional Resources
- More help regarding components can be found in the [help articles](https://articles.warcraftlogs.com/help/what-are-report-components).
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