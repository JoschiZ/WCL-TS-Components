import {Class} from "../definitions/Template";

export default function (classSlug: Class) {
    switch (classSlug) {
        case "DeathKnight":
            return "#C41E3A"
        case "DemonHunter":
            return "#A330C9"
        case "Druid":
            return "#FF7C0A"
        case "Evoker":
            return "#33937F"
        case "Hunter":
            return "#AAD372"
        case "Mage":
            return "#3FC7EB"
        case "Monk":
            return "#00FF98"
        case "Paladin":
            return "#F48CBA"
        case "Priest":
            return "#FFFFFF"
        case "Rogue":
            return "#FFF468"
        case "Shaman":
            return "#0070DD"
        case "Warlock":
            return "#8788EE"
        case "Warrior":
            return "#C69B6D"
    }
    throw new Error("Argument not supported")
}