import type {ChartComponentProps, Component, ReportGroup} from "../RpgLogs";
declare const reportGroups: ReportGroup
declare let getComponent: (params:any) => Component

import {iAmAImport} from "./someImport";

//REMOVE All comments starting with REMOVE won't be present in the resulting js
//REMOVE Imports need a triple slash reference for them to be included in the resulting js
/// <reference path="./someImport.ts" />
//REMOVE This const will be removed by Gulp and not be present in the resulting js
getComponent = () => {
  let iHaveAType: ChartComponentProps = {}
  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  }
}