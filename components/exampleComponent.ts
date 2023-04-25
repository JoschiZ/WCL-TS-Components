import {iAmAImport} from "../util/someImport";
import type {RpgLogs} from "../definitions/RpgLogs";


(global as any).getComponent = () => {
  let IHaveAType: RpgLogs.ActorType

  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport()
    }
  } as RpgLogs.EnhancedMarkdownComponent
}