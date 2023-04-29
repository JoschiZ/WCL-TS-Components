import {iAmAImport} from "../util/someImport";
import type {RpgLogs} from "../definitions/RpgLogs";



(global as any).getComponent = () => {
  const firstName = reportGroup.actors[0].name

  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport() + firstName
    }
  } as RpgLogs.EnhancedMarkdownComponent
}