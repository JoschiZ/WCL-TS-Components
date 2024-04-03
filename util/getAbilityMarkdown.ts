import {RpgLogs} from "../definitions/RpgLogs";
import Ability = RpgLogs.Ability;

export default function getAbilityMarkdown(ability: Ability) {
    return `<AbilityIcon id="${ability.id}" icon="${ability.icon}" type="${ability.type}">${ability.name}</AbilityIcon>`;
}