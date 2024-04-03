
const resources: {[key: number]: string} = {
    0: "Mana",
    1: "Rage",
    2: "Focus",
    3: "Energy",
    4: "Combo Points",
    5: "Runes",
    6: "Runic Power",
    7: "Soul Shards",
    8: "Astral Power",
    9: "Holy Power",
    10: "Alternate",
    11: "Maelstrom",
    12: "Chi",
    13: "Insanity",
    14: "Obsolete",
    15: "Obsolete2",
    16: "Arcane Charges",
    17: "Fury",
    18: "Pain",
    19: "Essence",
    20: "Rune Blood (Classic)",
    21: "Rune Frost (Classic)",
    22: "Rune Unholy (Classic)",
    23: "Alternate Quest",
    24: "Alternate Encounter",
    25: "Alternate Mount"
}

export default function GetResourceName(resourceType: number): string {
    return resources[resourceType] || `${resourceType}`;
}