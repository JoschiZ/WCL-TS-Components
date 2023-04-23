import type {ChartComponentProps} from "../RpgLogs";
import {iAmAImport} from "./someImport";
//REMOVE All comments starting with REMOVE won't be present in the resulting js
//REMOVE Imports need a triple slash reference for them to be included in the resulting js
/// <reference path="./someImport.ts" />
//REMOVE This const will be removed by Gulp and not be present in the resulting js
const getComponent = () => {
  let iHaveAType: ChartComponentProps = {}
  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  }
}