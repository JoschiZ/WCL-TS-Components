import {iAmAImport} from "../util/someImport";
import type {RpgLogs} from "../definitions/RpgLogs";
import {sum} from "../util/anotherImport";


(global as any).getComponent = () => {
  let IHaveAType: RpgLogs.ActorType

  return {
    component: 'EnhancedMarkdown',
    props: {
      content: iAmAImport() + "" + sum(1, 2)
    }
  } as RpgLogs.EnhancedMarkdownComponent
}