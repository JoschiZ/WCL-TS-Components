import type {RpgLogs} from "../../definitions/RpgLogs";

/**
 * The wrappers are purely for typing convenience instead of modifying the original definitions file.
 */

/**
 * Wrapper for RpgLogs.Fight.eventsByCategoryAndDisposition, that uses conditional types to narrow the return type
 * This method will obtain a cached subset of events matching the specified category and disposition.
 * The events will be filtered to the user's current event filters (e.g., phase, death cutoff, start/end time).
 * @param fight - The fight object to get the events from
 * @param category - The category of events to fetch
 * @param disposition  - The disposition of the actors to check. A value of "neutral" will be treated like "enemy".
 * @returns The cached event set. Use this method to quickly retrieve a subset of events.
 * @see {@link RpgLogs.Fight.eventsByCategoryAndDisposition}
 */
export function eventsByCategoryAndDisposition<T extends RpgLogs.EventCategory>(fight: RpgLogs.Fight, category: T, disposition: RpgLogs.ActorDisposition): ReadonlyArray<EventTypeUnions<T>>  {
    return fight.eventsByCategoryAndDisposition(category, disposition) as unknown as ReadonlyArray<EventTypeUnions<T>>
}

/**
 * Wrapper for RpgLogs.Fight.allEventsByCategoryAndDisposition, that uses conditional types to narrow the return type
 * This method will obtain a cached subset of events matching the specified category and disposition.
 * The events will be filtered to the user's current event filters (e.g., phase, death cutoff, start/end time).
 * @param fight - The fight object to get the events from
 * @param category - The category of events to fetch
 * @param disposition  - The disposition of the actors to check. A value of "neutral" will be treated like "enemy".
 * @returns The cached event set. Use this method to quickly retrieve a subset of events.
 * @see {@link RpgLogs.Fight.allEventsByCategoryAndDisposition}
 */
export function allEventsByCategoryAndDisposition<T extends RpgLogs.EventCategory>(fight: RpgLogs.Fight, category: T, disposition: RpgLogs.ActorDisposition): ReadonlyArray<EventTypeUnions<T>>  {
    return fight.allEventsByCategoryAndDisposition(category, disposition) as unknown as ReadonlyArray<EventTypeUnions<T>>
}

type ApplyBuffOrDebuff = RpgLogs.ApplyBuffEvent | RpgLogs.ApplyDebuffEvent
type RemoveBuffOrDebuff = RpgLogs.RemoveBuffEvent | RpgLogs.RemoveDebuffEvent
type RemoveBuffOrDebuffStack = RpgLogs.RemoveBuffStackEvent | RpgLogs.RemoveDebuffStackEvent
type ApplyBuffOrDebuffStack = RpgLogs.ApplyBuffStackEvent | RpgLogs.ApplyDebuffStackEvent
type RefreshBuffOrDebuff = RpgLogs.RefreshBuffEvent | RpgLogs.RefreshDebuffEvent
type BuffOrDebuffEvents = ApplyBuffOrDebuff | RemoveBuffOrDebuff | ApplyBuffOrDebuffStack | RemoveBuffOrDebuffStack | RefreshBuffOrDebuff


type EventTypeUnions<T extends RpgLogs.EventCategory> =
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