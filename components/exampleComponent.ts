import type { RpgLogs } from "../definitions/RpgLogs";
import getClassColor from "../util/getClassColor";



export default getComponent = () => {
  const content = `Rogue class color: ${getClassColor('Rogue')}`;

  return {
    component: 'EnhancedMarkdown',
    props: {
      content: content,
    }
  } as RpgLogs.EnhancedMarkdownComponent
}