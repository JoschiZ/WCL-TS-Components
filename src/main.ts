import type {ChartComponentProps, Component, EnhancedMarkdownComponent, ReportGroup} from "../RpgLogs";
//REMOVE Declaring the exposed globals, don't delete this!
declare const reportGroups: ReportGroup
declare let getComponent: (params:any) => Component

//REMOVE All comments starting with REMOVE won't be present in the resulting js
//REMOVE Imports need a triple slash reference for them to be included in the resulting js
/// <reference path="./someImport.ts" />
import {iAmAImport} from "./someImport";

getComponent = () => {
  let iHaveAType: ChartComponentProps = {}
  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  } as EnhancedMarkdownComponent
}