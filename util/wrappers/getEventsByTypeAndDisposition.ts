import {RpgLogs} from "../../definitions/RpgLogs";
import {EventTypeUnions} from "../../definitions/Template";

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

