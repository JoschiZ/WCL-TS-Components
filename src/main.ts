//REMOVE All comments starting with REMOVE won't be present in the resulting js
//REMOVE Imports need a triple slash reference for them to be included in the resulting js
/// <reference path="./someImport.ts" />
import {iAmAImport} from "./someImport";
import {RpgLogs} from "../definitions/RpgLogs";


getComponent = () => {
  let IHaveAType: RpgLogs.ActorType
  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  } as RpgLogs.EnhancedMarkdownComponent
}