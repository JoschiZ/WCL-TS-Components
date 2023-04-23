# WCL TS Components Template
This is a template project that allows you to write Warcraft Logs Report Components
in Typescript and transpile it directly to JavaScript that can be copied and pasted into your component.

This project is **not** affiliated with the Warcraft Logs Team!

## How to use
Clone this repository and run npm install to fetch all the dependencies
>npm install

Write your Typescript code in [src/main.ts](src/main.ts).

To transpile your code run
>npm run gulp

The resulting code can be found under [dist/main.js](dist/main.js), which will be generated after running gulp.
You can copy and paste that code straight into your component.

___
### Imports
Gulp is used to concatenate all your different typescript files into a single 
JavaScript file. This allows you to use `import` and `export` statements with some [limitations](#limitations).
For example you cannot use `import as`. 

For this to work you need to include a triple slash reference to each imported file in your TS file.
```ts
// someImport.ts
export function iAmAImport(): string {
    return "I don't do anything though"
}
```
```ts
// main.ts
import {iAmAImport} from "./someImport"
/// <reference path="./someImport.ts" />

iAmAImport()
```
It does not matter, where in your code the /// reference is done and all
triple slash references will be removed by gulp and this not be present
in the resulting JS.

The `.ts` from above will transpile into the following.
```js
function iAmAImport() {
    return "I don't do anything though";
}

iAmAImport()
```

### Limitations
Because of how the transpiled code is bundled, you cannot use `import {xy as name}` statements.

You also need to consider all symbols as global.

___
### Comments
By default, TypeScript in this project is set up to keep comments.

However, you can make comments that are not present in the resulting JS by starting them with `//REMOVE`.
Gulp will then remove the complete line after it was transpiled to JS.

```ts
// TS Input
//REMOVE Actually this function does return a string... that's not nothing I guess.
export function iAmAImport(): string {
    return "I don't do anything though"
}
```
```js
// JS Output
function iAmAImport() {
    return "I don't do anything though"
}
```

You can turn off comments altogether by setting `removeComments` to `false` in the [tsconfig.json](/tsconfig.json)

___
### Additional Post Processing
Gulp sometimes produces a large chunk of empty lines between your imports and the main code.
Because of that it is set up to replace 5 consecutive `\n` with a single new line. 
You can deactivate this behaviour by deleting `.pipe(replace("\n\n\n\n\n", "\n"))` from [gulpfile.js](/gulpfile.js).
___
### Types
Typings for the `RpgLogs` API are provided in [RpgLogs.d.ts](RpgLogs.d.ts).
Note that this file is auto generated from the [official documentation](https://www.warcraftlogs.com/scripting-api-docs/warcraft/index.html),
but is not directly provided by WCL. This means that it is ***very*** likely that it contains errors or is out of date at some point.

You can import them directly in your TS code 
```ts
import type {ChartComponentProps} from "../RpgLogs";
```

For details how this file is generated or to report bugs head over to the [RpgLogsDocsGenerator repository](https://github.com/JoschiGrey/RpgLogsDocs-Generator)
___
## Additional Resources
- More help regarding components can be found in the [help articles](https://articles.warcraftlogs.com/help/what-are-report-components).
- Report components are currently in their closed alpha you can sign up here https://forms.gle/oFcWCMbgqDK2j2e69.
- You can get more help regarding components on the [Warcraft Logs Discord](https://discord.gg/5ebPJSsy5y).


### Note that this project is not affiliated with the WCL Team!