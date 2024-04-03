import {RpgLogs} from "./RpgLogs";

interface TemplateConfig {
    /**
     * Config options for the included custom plugins. Omitting a plugin or assigning a falsy value will deactivate it.
     */
    plugins: {
        clearSource?: false | ClearSourcePluginOptions
        exportString?: boolean
        autoTest?: false | AutoTestPluginOption
    },
    /**
     * This allows to assign individual sizes or static ids to your components.
     * It takes the component name (The file name without any endings).
     */
    components: {[componentName: string]: Omit<Component, "component">},

}

interface AutoTestPluginOption {
    active: boolean
    loginMethod: "WCL" | "USA" | "EUROPE" | "KOREA" | "TAIWAN"
    /**This url has to lead directly to the component view (ends with &view=components)*/
    components: {[componentName: string]: string}
}

interface ClearSourcePluginOptions {
    /**
     * If true the source code will be LZString compressed and Base64Encoded
     */
    compress: boolean
}

export interface Component {
    /**
     * The Components UUID
     */
    i: string

    /**
     * Width of the component, default 1
     */
    w: number

    /**
     * Height of the component, default 2
     */
    h: number


    component: {
        /**
         * Base64 encoded LZString compressed code of the component
         */
        script: string
    }
}

type actorFilter = Partial<RpgLogs.Actor>;
type abilityFilter = Omit<Partial<RpgLogs.Ability>, "id">;

export type ManagerOptions = {
    targetFilters?: actorFilter[];
    sourceFilters?: actorFilter[];
    abilityFilters?: abilityFilter[];
}


export type ApplyBuffOrDebuff = RpgLogs.ApplyBuffEvent | RpgLogs.ApplyDebuffEvent
export type RemoveBuffOrDebuff = RpgLogs.RemoveBuffEvent | RpgLogs.RemoveDebuffEvent
export type RemoveBuffOrDebuffStack = RpgLogs.RemoveBuffStackEvent | RpgLogs.RemoveDebuffStackEvent
export type ApplyBuffOrDebuffStack = RpgLogs.ApplyBuffStackEvent | RpgLogs.ApplyDebuffStackEvent
export type RefreshBuffOrDebuff = RpgLogs.RefreshBuffEvent | RpgLogs.RefreshDebuffEvent
export type BuffOrDebuffEvents = ApplyBuffOrDebuff | RemoveBuffOrDebuff | ApplyBuffOrDebuffStack | RemoveBuffOrDebuffStack | RefreshBuffOrDebuff


export type EventTypeUnions<T extends RpgLogs.EventCategory> =
    T extends "damage" ? RpgLogs.DamageEvent :
        T extends "healing"? RpgLogs.HealingEvent | RpgLogs.AbsorbedEvent | RpgLogs.RemoveBuffEvent:
            T extends "casts" ? RpgLogs.CastEvent | RpgLogs.BeginCastEvent:
                T extends "aurasGained" ? BuffOrDebuffEvents:
                    T extends "aurasCast" ? BuffOrDebuffEvents:
                        T extends "interrupts" ? RpgLogs.InterruptEvent:
                            T extends "resourceGain" ? RpgLogs.ResourceChangeEvent:
                                T extends "dispels" ? RpgLogs.DispelEvent:
                                    T extends "deathsAndResurrects" ? RpgLogs.DeathEvent | RpgLogs.DestroyEvent | RpgLogs.InstakillEvent:
                                        T extends "summons" ? RpgLogs.SummonEvent:
                                            T extends "combatResurrects" ? RpgLogs.ResurrectEvent:
                                                T extends "healingAbsorbed" ? RpgLogs.HealAbsorbedEvent:
                                                    T extends  "aggro" ? RpgLogs.ApplyDebuffEvent | RpgLogs.CastEvent | RpgLogs.DeathEvent:
                                                        T extends "calculatedDamage" ? RpgLogs.DamageEvent:
                                                            T extends "calculatedHealing" ?  RpgLogs.HealingEvent | RpgLogs.AbsorbedEvent | RpgLogs.RemoveBuffEvent:
                                                                RpgLogs.AnyEvent;

export type Class = "DeathKnight" | "DemonHunter" | "Druid" | "Evoker" | "Hunter" | "Mage" | "Monk" | "Paladin" | "Priest" | "Rogue" | "Shaman" | "Warlock" | "Warrior"