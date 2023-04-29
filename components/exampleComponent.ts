import {iAmAImport} from "../util/someImport";
import type {RpgLogs} from "../definitions/RpgLogs";



export default getComponent = () => {
  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  } as RpgLogs.EnhancedMarkdownComponent
}