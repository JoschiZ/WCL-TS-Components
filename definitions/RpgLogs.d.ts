// noinspection JSUnusedGlobalSymbols

declare global {
    /**
     * The current API version. Used to see if a report component is out of date.
     */
    const apiVersion: string;

    /**
     * The current report group.
     */
    const reportGroup: RpgLogs.ReportGroup;

    /**
     * The translated language. Null if no language is set. This is only set if the user is forcing all logs to be translated to a specific language.
     */
    const translatedLanguage: string | null;

    /**
     * Whether or not player names should be anonymized. You will not have access to the real names of the players if this is set.
     */
    const anonymizePlayerNames: boolean;

    /**
     * The filters in effect for the fight.
     */
    const fightFilters: RpgLogs.FightFilters;

    /**
     * The filters in effect for the fight.
     */
    const eventFilters: RpgLogs.EventFilters;

    /**
     * The styles object that can be used to obtain actor and ability colors for charts and tables.
     */
    const styles: RpgLogs.Styles;

    /**
     *
     * @param params - The parameters to pass to getComponent.
     * @returns The component that will be used.
     */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let getComponent: (params?: any) => RpgLogs.Component | object | string | Array<unknown> | number;

    /**
     * The pinMatchesFightEvent function returns true for script pins that match the passed in event.
     */
    let pinMatchesFightEvent: (
        event: RpgLogs.AnyEvent,
        fight: RpgLogs.Fight
    ) => boolean;

    /**
     * The initializePinForFight function lets you initialize fight-specific data before doing a new loop through a fight's events.
     * You should discard any previous fight data.
     */
    let initializePinForFight: (fight: RpgLogs.Fight) => void;
}

export namespace RpgLogs {
    export interface ReportGroup {
        /**
         * The version of the parser that was used to parse the log file for this report.
         */
        logVersion: number;

        /**
         * The game version of reports in the report group. For World of Warcraft, 1 = Retail, 2 = Vanilla, 3 = TBC, and 4 = Wrath.
         * For other games, this will just be 1.
         */
        gameVersion: number;

        /**
         * The language of the reports in the report group. Null if no language could be determined.
         */
        language: string | null;

        /**
         * The set of actors that were seen in this report group. This includes all players, pets and NPCs.
         */
        actors: Actor[];

        /**
         * The set of abilities that were seen in this report group.
         */
        abilities: Ability[];

        /**
         * All of the fights in the report group.
         */
        allFights: Fight[];

        /**
         * The set of fights that matches the report UI's filters for start time, end time, what encounters
         * to allow, and whether or not to show trash, kills or wipes only.
         */
        fights: Fight[];

        /**
         * All the reports loaded in this group.
         */
        reports: Report[];

        /**
         * Obtain the damage done totals for actors or abilities.
         */
        damageDoneEntries(
            callback?: (event: AnyEvent) => boolean,
            options?: number,
            viewType?: 'source' | 'target' | 'ability'
        ): DamageHealingOrCastAmounts;

        /**
         * Obtain the damage taken totals for actors or abilities.
         */
        damageTakenEntries(
            callback?: (event: AnyEvent) => boolean,
            options?: number,
            viewType?: 'source' | 'target' | 'ability'
        ): DamageHealingOrCastAmounts;

        /**
         * Obtain the damage done totals for actors or abilities.
         */
        healingDoneEntries(
            callback?: (event: AnyEvent) => boolean,
            options?: number,
            viewType?: 'source' | 'target' | 'ability'
        ): DamageHealingOrCastAmounts;

        /**
         * Obtain the damage done totals for actors or abilities.
         */
        castsEntries(
            callback?: (event: AnyEvent) => boolean,
            options?: number,
            viewType?: 'source' | 'target' | 'ability'
        ): DamageHealingOrCastAmounts;
    }

    export interface Report {
        /**
         * The version of the parser that was used to parse the log file for this report.
         */
        logVersion: number;

        /**
         * The game version of the report. For World of Warcraft, 1 = Retail, 2 = Vanilla, 3 = TBC, and 4 = Wrath.
         * For other games, this will just be 1.
         */
        gameVersion: number;

        /**
         * The language of the report. Null if no language could be determined.
         */
        language: string | null;

        /**
         * The number of segments used by the report. Will increase as more fights get uploaded.
         */
        segments: number;

        /**
         * The set of actors that were seen in this report. This includes all players, pets and NPCs.
         */
        actors: Actor[];

        /**
         * The set of abilities that were seen in this report.
         */
        abilities: Ability[];

        /**
         * All of the fights in the report.
         */
        fights: Fight[];

        /**
         * All complete raids in the report. These include entire runs of instances in situations where those
         * runs are supported (e.g., Serpentshrine Cavern, Sanctum of Domination, Naxxramas, etc.)
         */
        completeRaids: CompleteRaid[];
    }

    /**
     * Every report contains zero or more fights. Fights can be encounters or trash.
     * An entire dungeon is considered one Fight as well, but you can access individual dungeon pulls within the Fight if needed.
     * The Fight interface provides information such as the encounter id, the fight length, and the fight difficulty.
     * Events that occurred during the fight are accessible from the events property, as well as other accessors that enable the fetching
     * of specific categories of events.
     */
    export interface Fight {
        /**
         * The id of the fight within its containing report group.
         */
        id: number;

        /**
         * The id of the fight within its containing report.
         */
        idInReport: number;

        /**
         * The report that the fight belongs to.
         */
        report: Report;

        /**
         * The encounter id of the fight. Trash fights just have an encounter id of 0.
         */
        encounterId: number;

        /**
         * The encounter size (number of players).
         */
        size: number;

        /**
         * The encounter difficulty.
         */
        difficulty: number;

        /**
         * Whether or not a fight with an encounter id was a kill.
         */
        isKill: boolean;

        /**
         * A localized name for the fight. For encounters, it will be the encounter name, and for trash fights, it will
         * be the name of the NPC with the most hit points that was involved in the fight.
         */
        name: string;

        /**
         * The start time of the fight. This is an offset relative to the start of the report, not an absolute time.
         * This offset is in milliseconds.
         */
        startTime: number;

        /**
         * The end time of the fight. This is an offset relative to the start of the report, not an absolute time.
         * This offset is in milliseconds.
         */
        endTime: number;

        /**
         * Combatant info events respecting the user's filters. These are cached, so this is faster than trying to find them on your own.
         */
        combatantInfoEvents: CombatantInfoEvent[];

        /**
         * All combatant info events. These are cached, so this is faster than trying to find them on your own.
         */
        allCombatantInfoEvents: CombatantInfoEvent[];

        /**
         * Death events of friendly players respecting the user's filters. These are cached, so this is faster than trying to find them on your own.
         */
        friendlyPlayerDeathEvents: DeathEvent[];

        /**
         * Death events of all friendly players. These are cached, so this is faster than trying to find them on your own.
         */
        allFriendlyPlayerDeathEvents: DeathEvent[];

        /**
         * Death events of enemies respecting the user's filters. These are cached, so this is faster than trying to find them on your own.
         * For PvE content, the deaths are limited to NPCs. For supported PvP content, the deaths are of enemy players.
         */
        enemyDeathEvents: DeathEvent[];

        /**
         * Death events of enemies. These are cached, so this is faster than trying to find them on your own.
         * For PvE content, the deaths are limited to NPCs. For supported PvP content, the deaths are of enemy players.
         */
        allEnemyDeathEvents: DeathEvent[];

        /**
         * All of the events in this fight.
         */
        allEvents: AnyEvent[];

        /**
         * The events of the fight respecting the user's filters.
         */
        events: AnyEvent[];

        /**
         * This method will obtain a cached subset of events matching the specified category and disposition.
         * The events will be filtered to the user's current event filters (e.g., phase, death cutoff, start/end time).
         * @param category - The category of events to fetch
         * @param disposition  - The disposition of the actors to check. A value of "neutral" will be treated like "enemy".
         * @returns The cached event set. Use this method to quickly retrieve a subset of events.
         */
        eventsByCategoryAndDisposition(
            category: EventCategory,
            disposition: ActorDisposition
        ): AnyEvent[];

        /**
         * This method will obtain a cached subset of events matching the specified category and disposition.
         * @param category - The category of events to fetch
         * @param disposition  - The disposition of the actors to check. A value of "neutral" will be treated like "enemy".
         * @returns The cached event set. Use this method to quickly retrieve a subset of events.
         */
        allEventsByCategoryAndDisposition(
            category: EventCategory,
            disposition: ActorDisposition
        ): AnyEvent[];

        /**
         * Helper function to obtain the phase an event occurs in.
         * @param event - The event whose timestamp will be checked against the phase transitions.
         * @returns The phase the event occurs in, or null if the fight has no phases.
         */
        phaseForEvent(event: AnyEvent): number | null;

        /**
         * The phase names for all possible phases.
         */
        phaseNames: Array<string> | null;

        /**
         * The phase transitions. Each entry in the array contains all of the start/end bands for that specific phase.
         */
        phaseTransitions: Array<Array<Band>> | null;

        /**
         * For fights where downtime is supported and used to shrink the total time over which damage dealt is considered,
         * this will contain an array of the start/end bands for every chunk of downtime.
         */
        downtimeTransitions: Array<Band> | null;

        /**
         * Whether or not an actor is a friendly participant.
         * @param actor - The actor to check.
         * @returns Whether or not the actor is a friendly participant
         */
        isFriendlyParticipant(actor: Actor): boolean;

        /**
         * Whether or not an actor is an enemy participant.
         * @param actor - The actor to check.
         * @returns Whether or not the actor is an enemy participant
         */
        isEnemyParticipant(actor: Actor): boolean;

        /**
         * All the friendly participants in the fight.
         */
        friendlyParticipants: Array<Actor>;

        /**
         * All the enemy participants in the fight.
         */
        enemyParticipants: Array<Actor>;

        /**
         * The maps used by the fight.
         */
        maps: Map;

        /**
         * The zone used by the fight.
         */
        zone: Zone | null;

        /**
         * The bounding box for the fight in coordinates.
         */
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;

        /**
         * For dungeons, individual pulls are stored and can be accessed.
         */
        dungeonPulls: Array<DungeonPull>;

        /**
         * The world markers used by this fight.
         */
        worldMarkers: Array<WorldMarker>;

        /**
         * Whether or not this event should be excluded from damage rankings.
         * @param event - The event to check.
         * @returns Whether or not the event counts as part of damage done ranks.
         */
        isEventExcludedFromDamageRankings(event: AnyEvent): boolean;

        /**
         * Get the set of damage events and amounts that represent the damage healed by this event.
         * The amount are distinct from the events themselves so that you can see when a heal only partially
         * healed some of the damage.
         * @param event - The event to check
         * @returns - An array of events and the amount of damage healed for each event.
         */
        damageEventsForHealingEvent(event: AnyEvent): Array<EventAndAmount> | null;

        /**
         * Get the set of healing events and amounts that represent the heals that were done for this damage.
         * The amount are distinct from the events themselves so that you can see when a heal only partially
         * healed some of the damage.
         * @param event - The event to check
         * @returns - An array of events and the amount of damage healed for each event.
         */
        healingEventsForDamageEvent(event: AnyEvent): Array<EventAndAmount> | null;

        /**
         * Get the set of events that occurred prior to a specified player death.
         * @param event - The death event to check
         * @returns - An array of events going back to the last overheal the player received.
         */
        eventsPriorToDeath(event: DeathEvent): Array<AnyEvent>;

        /**
         * The item level for a given actor.
         * @param actor - The player to fetch the item level for.
         * @returns - The item level of the actor
         */
        itemLevelForPlayer(actor: Actor): number;

        /**
         * The spec for a given actor.
         * @param actor - The player to fetch the spec for.
         * @returns - The spec of the actor
         */
        specForPlayer(actor: Actor): string;

        /**
         * The instance count for a given actor.
         * @param actor - The actor to fetch the group count for.
         * @returns - The instance count of the actor
         */
        instanceCountForNpc(actor: Actor): number;

        /**
         * The instance group count for a given actor.
         * @param actor - The actor to fetch the group count for.
         * @returns - The group count of the actor
         */
        instanceGroupCountForNpc(actor: Actor): number;
    }

    export type WorldMarker = {
        /**
         * The map game id that the marker was placed on.
         */
        mapId: number;

        /**
         * The x position of the marker.
         */
        x: number;

        /**
         * The y position of the marker.
         */
        y: number;

        /**
         * The icon id that represents which marker it is.
         */
        icon: number;

        /**
         * When the marker was placed.
         */
        startTime: number;

        /**
         * When the marker was removed.
         */
        endTime: number;
    };

    export type EventAndAmount = {
        event: AnyEvent;
        amount: number;
    };

    export interface DungeonPull {
        /**
         * The id of the pull.
         */
        id: number;

        /**
         * The fight that the pull belongs to.
         */
        fight: Fight;

        /**
         * The encounter id of the fight. Trash fights just have an encounter id of 0.
         */
        encounterId: number;

        /**
         * Whether or not a fight with an encounter id was a kill.
         */
        isKill: boolean;

        /**
         * The start time of the fight. This is an offset relative to the start of the report, not an absolute time.
         * This offset is in milliseconds.
         */
        startTime: number;

        /**
         * The end time of the fight. This is an offset relative to the start of the report, not an absolute time.
         * This offset is in milliseconds.
         */
        endTime: number;

        /**
         * All of the events in this pull.
         */
        allEvents: AnyEvent[];

        /**
         * The events of the pull respecting the user's filters.
         */
        events: AnyEvent[];

        /**
         * All the enemy participants in the pull, as well as their instance and instance group ranges.
         */
        enemies: Array<DungeonPullEnemy>;

        /**
         * The maps used by the pull.
         */
        maps: Map;

        /**
         * The bounding box for the pull in coordinates.
         */
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    }

    export type DungeonPullEnemy = {
        /**
         * The actor involved in the pull.
         */
        actor: Actor;

        /**
         * The minimum instance number of the actor that occurs in the pull.
         */
        minInstanceId: number;

        /**
         * The minimum instance number of the actor that occurs in the pull.
         */
        maxInstanceId: number;

        /**
         * The minimum instance group number of the actor that occurs in the pull.
         */
        minInstanceGroupId: number;

        /**
         * The minimum instance group number of the actor that occurs in the pull.
         */
        maxInstanceGroupId: number;
    };

    type ActorType = 'Player' | 'Pet' | 'NPC';

    export interface Actor {
        /**
         * The id of the actor.
         */
        id: number;

        /**
         * The id of the actor within its containing report.
         */
        idInReport: number;

        /**
         * The game id of the actor.
         */
        gameId: number;

        /**
         * The name of the actor in the user's desired language.
         */
        name: string;

        /**
         * The type of the actor. This will be Player, Pet or NPC.
         */
        type: ActorType;

        /**
         * The subType of the actor. This will be the job (for FF) or class (for other games) of players. NPCs can be "Boss" or "NPC".
         */
        subType: string;
    }

    export interface ActorInstance {
        /**
         * The actor for this specific instance.
         */
        actor: Actor;

        /**
         * The instance id of the specific actor instance.
         */
        instanceId: number;
    }

    export interface Ability {
        /**
         * The game id of the ability.
         */
        id: number;

        /**
         * The name of the ability in the user's desired language.
         */
        name: string;

        /**
         * The type of the ability. This represents the spell school (in WoW) or damage type in most other games.
         */
        type: number;

        /**
         * The icon of the ability.
         */
        icon: string | null;

        /**
         * If the ability is always excluded from damage done or healing done, this field will bet set to true.
         * For example, in World of Warcraft, Brewmaster Stagger absorbs should not count as healing done.
         */
        isExcludedFromDamageAndHealing: boolean;

        /**
         * Whether or not the ability is off gcd.
         */
        isOffGcd: boolean;

        /**
         * Whether or not the ability is a melee attack. In FF, this is typically called "Attack".
         */
        isMelee: boolean;
    }

    export interface ResourceData {
        /**
         * The unit's current hit points.
         */
        hitPoints: number;

        /**
         * The unit's maximum hit points.
         */
        maxHitPoints: number;

        /**
         * The unit's x position.
         */
        x: number;

        /**
         * The unit's y position.
         */
        y: number;

        /**
         * The unit's facing. Null for games that do not support facing.
         */
        facing: number | null;
    }

    export type CompleteRaid = {
        raidId: number;
        fights: Fight[];
    };

    export type Map = {
        id: number;
        name: string | null;
        file: string | null;
    };

    export type Zone = {
        /**
         * The game id of the zone.
         */
        id: number;

        /**
         * The name of the zone. Null if the zone name is not supported.
         */
        name: string | null;

        /**
         * The difficulty of the zone. Null if zone difficulty is not supported by the game.
         */
        difficulty: number | null;

        /**
         * The size of the zone. Null if zone size is not supported by the game.
         */
        size: number | null;
    };

    export interface Event {
        /**
         * The time offset of the event in milliseconds from the start of the report.
         */
        timestamp: number;

        /**
         * The source actor. Null if no source is set.
         */
        source: Actor | null;

        /**
         * The instance id of the source.
         */
        sourceInstanceId: number;

        /**
         * The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtain
         * the overall single disposition for this actor. This field should be used with caution as it could flip if the
         * logger or the unit get mind controlled.
         */
        sourceDisposition: ActorDisposition;

        /**
         * The raid marker on this source unit. 0 if no raid marker is set.
         */
        sourceRaidMarker: number;

        /**
         * Resource data for the source. Null if no resource information is available.
         */
        sourceResources: ResourceData | null;

        /**
         * The target actor. Null if no target is set.
         */
        target: Actor | null;

        /**
         * The instance id of the target.
         */
        targetInstanceId: number;

        /**
         * The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtain
         * the overall single disposition for this actor. This field should be used with caution as it could flip if the
         * logger or the unit get mind controlled.
         */
        targetDisposition: ActorDisposition;

        /**
         * The raid marker on this source unit. 0 if no raid marker is set.
         */
        targetRaidMarker: number;

        /**
         * Resource data for the target. Null if no resource information is available.
         */
        targetResources: ResourceData | null;

        /**
         * The ability used by the source on the target. Null if no ability is set.
         */
        ability: Ability | null;
    }

    export type Band = {
        startTime: number;
        endTime: number;
    };

    export interface AbsorbedEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'absorbed';

        /**
         * The attacking actor. Null if no attacker is set.
         */
        attacker: Actor | null;

        /**
         * The attacking ability used. Null if the ability is not known.
         */
        attackerAbility: Ability | null;

        /**
         * The instance id of the attacker.
         */
        attackerInstanceId: number;

        /**
         * The raw disposition of the attacker. Use the isFriendlyParticipant and isEnemyParticipant methods to obtain
         * the overall single disposition for this actor. This field should be used with caution as it could flip if the
         * logger or the unit get mind controlled.
         */
        attackerDisposition: ActorDisposition;

        /**
         * The raid marker on the attacking unit. 0 if no raid marker is set.
         */
        attackerRaidMarker: number;

        /**
         * The amount of damage absorbed.
         */
        amount: number;

        /**
         * The amount of effective damage done for this event.
         */
        effectiveDamage: number;

        /**
         * The amount of absorbed damage done for this event.
         */
        absorbedDamage: number;

        /**
         * The amount of effective healing done by the event.
         */
        effectiveHealing: number;

        /**
         * The amount of healing done via absorbs for this event.
         */
        absorbedHealing: number;
    }

    export interface HealAbsorbedEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'healabsorbed';

        /**
         * The healing actor. Null if no healer is set.
         */
        healer: Actor | null;

        /**
         * The healing ability used. Null if the ability is not known.
         */
        healerAbility: Ability | null;

        /**
         * The instance id of the healer.
         */
        healerInstanceId: number;

        /**
         * The raw disposition of the healer. Use the isFriendlyParticipant and isEnemyParticipant methods to obtain
         * the overall single disposition for this actor. This field should be used with caution as it could flip if the
         * logger or the unit get mind controlled.
         */
        healerDisposition: ActorDisposition;

        /**
         * The raid marker on the healing unit. 0 if no raid marker is set.
         */
        healerRaidMarker: number;

        /**
         * The amount of damage absorbed.
         */
        amount: number;
    }

    export interface BeginCastEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'begincast';

        /**
         * For games that support including the duration in the begin cast event, it will appear here.
         * Currently, the only game that supports this field is FFXIV. It will be 0 for all other games.
         */
        duration: number;

        /**
         * Whether or not the cast is a melee swing/auto-attack.
         */
        isMelee: boolean;

        /**
         * Whether or not the cast is fake, i.e., not the result of a user action, but just made up by the game.
         */
        isFake: boolean;
    }

    export interface CastEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'cast';

        /**
         * Whether or not the cast is a melee swing/auto-attack.
         */
        isMelee: boolean;

        /**
         * Whether or not the cast is fake, i.e., not the result of a user action, but just made up by the game.
         */
        isFake: boolean;
    }

    export type CombatantInfoAura = {
        /**
         * The actor responsible for applying the aura to the player.
         */
        source: Actor;

        /**
         * The game id of the applied aura.
         */
        abilityGameId: number;

        /**
         * An icon for the aura if one exists.
         */
        icon: string | null;

        /**
         * The name of the ability if it can be determined.
         */
        name: string | null;

        /**
         * The number of initial stacks. Not all games support this.
         */
        stacks: number;
    };

    export interface CombatantInfoEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'combatantinfo';

        /**
         * A set of auras that are present on the player when combat begins.
         */
        auras: Array<CombatantInfoAura>;
    }

    export interface DeathEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'death';

        /**
         * If it can be determined for the death, this field will tell you which actor killed the target.
         */
        killer: Actor | null;

        /**
         * If it can be determined for the death, this field will tell you which ability was used to kill the target.
         */
        killingAbility: Ability | null;

        /**
         * The instance id of the killing actor.
         */
        killerInstanceId: number | null;

        /**
         * Feign boolean. For World of Warcraft hunter feigns, will be set to true if this death was a feign.
         */
        isFeign: boolean;

        /**
         * If there was an earlier death save ability that kept the target alive, the ability will be indicated here.
         */
        deathSaveAbility: Ability | null;

        /**
         * If there was an earlier death save, the time the save happened will be indicated here.
         */
        deathSaveTime: number | null;
    }

    export interface ApplyOrRefreshEvent extends Event {
        /**
         * For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
         */
        appliedByAbility: Ability | null;

        /**
         * Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
         */
        extraInfo: number;

        /**
         * For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
         */
        duration: number;

        /**
         * The absorb strength of an applied shield.
         */
        absorb: number;
    }

    export type ApplyBuffOrDebuffEvent = ApplyOrRefreshEvent;

    export interface ApplyBuffOrDebuffStackEvent extends Event {
        /**
         * The stack count.
         */
        stacks: number;
    }

    export interface RefreshBuffOrDebuffEvent extends ApplyOrRefreshEvent {
        /**
         * The amount absorbed by the shield.
         */
        absorbed: number;

        /**
         * The amount of effective healing done by the event.
         */
        effectiveHealing: number;

        /**
         * The amount of healing done via absorbs for this event.
         */
        absorbedHealing: number;
    }

    export interface RemoveBuffOrDebuffEvent extends Event {
        /**
         * For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
         */
        appliedByAbility: Ability | null;

        /**
         * The absorb strength remaining an the applied shield.
         */
        absorb: number;

        /**
         * The amount absorbed by the shield.
         */
        absorbed: number;

        /**
         * The amount of effective healing done by the event.
         */
        effectiveHealing: number;

        /**
         * The amount of healing done via absorbs for this event.
         */
        absorbedHealing: number;

        /**
         * The amount of overheal.
         */
        overheal: number;
    }

    export interface RemoveBuffOrDebuffStackEvent extends Event {
        /**
         * The stack count.
         */
        stacks: number;
    }

    export interface ApplyDebuffEvent extends ApplyBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'applydebuff';
    }

    export interface ApplyBuffEvent extends ApplyBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'applybuff';
    }

    export interface ApplyBuffStackEvent extends ApplyBuffOrDebuffStackEvent {
        /**
         * The type of the event.
         */
        type: 'applybuffstack';
    }

    export interface ApplyDebuffStackEvent extends ApplyBuffOrDebuffStackEvent {
        /**
         * The type of the event.
         */
        type: 'applydebuffstack';
    }

    export interface RefreshBuffEvent extends RefreshBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'refreshbuff';
    }

    export interface RefreshDebuffEvent extends RefreshBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'refreshdebuff';
    }

    export interface RemoveDebuffEvent extends RemoveBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'removedebuff';
    }

    export interface RemoveBuffEvent extends RemoveBuffOrDebuffEvent {
        /**
         * The type of the event.
         */
        type: 'removebuff';
    }

    export interface RemoveBuffStackEvent extends RemoveBuffOrDebuffStackEvent {
        /**
         * The type of the event.
         */
        type: 'removebuffstack';
    }

    export interface RemoveDebuffStackEvent extends RemoveBuffOrDebuffStackEvent {
        /**
         * The type of the event.
         */
        type: 'removedebuffstack';
    }

    export interface SpellStoppedEvent extends Event {
        /**
         * The ability that was interrupted, stolen, etc.
         */
        stoppedAbility: Ability;

        /**
         * If the ability was a buff or debuff that was dispelled, purged or stolen, this boolean
         * indicates if it was a buff vs a debuff.
         */
        isBuff: boolean;
    }

    export interface DamageEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'damage';

        /**
         * The amount of damage done excluding absorbs and overkill.
         */
        amount: number;

        /**
         * The amount absorbed by the shield.
         */
        absorbed: number;

        /**
         * The amount of mitigated damage. Excludes absorbs, but does include mitigation from blocking, armor and damage reductions.
         */
        mitigated: number;

        /**
         * The raw unmitigated damage. Not supported by every game.
         */
        unmitigatedAmount: number;

        /**
         * The amount of effective damage done by the event.
         */
        effectiveDamage: number;

        /**
         * The amount of damage absorbed for this event.
         */
        absorbedDamage: number;

        /**
         * The amount of effective healing done by the event.
         */
        effectiveHealing: number;

        /**
         * The amount of healing done via absorbs for this event.
         */
        absorbedHealing: number;

        /**
         * The amount of overkill, null if no overkill exists.
         */
        overkill: number | null;

        /**
         * Whether or not the event was a miss.
         */
        isMiss: boolean;

        /**
         * Whether or not the event is a tick (DoT).
         */
        isTick: boolean;

        /**
         * Whether or not the event is a critical hit.
         */
        isCriticalHit: number;

        /**
         * If the event was changed to be attributed to a supporting actor, the original supported actor
         * will be included here.
         */
        supportedActor: Actor | null;
    }

    export interface HealingEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'heal';

        /**
         * The amount of healing done excluding absorbs and overheal.
         */
        amount: number;

        /**
         * The amount absorbed by the shield.
         */
        absorbed: number;

        /**
         * The amount of effective healing done by the event.
         */
        effectiveHealing: number;

        /**
         * The amount of healing done via absorbs for this event.
         */
        absorbedHealing: number;

        /**
         * The amount of overheal.
         */
        overheal: number;

        /**
         * Whether or not the event was a miss.
         */
        isMiss: boolean;

        /**
         * Whether or not the event is a tick (DoT).
         */
        isTick: boolean;

        /**
         * Whether or not the event is a critical hit.
         */
        isCriticalHit: number;

        /**
         * The hit type of the event.
         */
        hitType: HealingHitType;

        /**
         * If the event was changed to be attributed to a supporting actor, the original supported actor
         * will be included here.
         */
        supportedActor: Actor | null;
    }

    export type HealingHitType = 'miss' | 'hit' | 'criticalHit';

    export interface InterruptEvent extends SpellStoppedEvent {
        /**
         * The type of the event.
         */
        type: 'interrupt';
    }

    export interface DispelEvent extends SpellStoppedEvent {
        /**
         * The type of the event.
         */
        type: 'dispel';

        /**
         * The number of stacks removed by the dispel.
         */
        stacks: number;
    }

    export interface EncounterEvent extends Event {
        encounterId: number;
        originalEncounterId: number;
        encounterName: string;
        encounterSize: number;
        encounterDifficulty: number;
    }

    export type AbstractEncounterStartEvent = EncounterEvent;

    export interface AbstractEncounterEndEvent extends EncounterEvent {
        isKill: boolean;
    }

    export interface EncounterStartEvent extends AbstractEncounterStartEvent {
        /**
         * The type of the event.
         */
        type: 'encounterstart';
    }

    export interface EncounterEndEvent extends AbstractEncounterEndEvent {
        /**
         * The type of the event.
         */
        type: 'encounterend';
    }

    export interface DungeonStartEvent extends AbstractEncounterStartEvent {
        /**
         * The type of the event.
         */
        type: 'dungeonstart';

        keystoneLevel: number;
        affixes: Array<number>;
    }

    export interface DungeonEndEvent extends AbstractEncounterEndEvent {
        /**
         * The type of the event.
         */
        type: 'dungeonend';

        medal: number;
        completionTime: number;
        rating: number;
    }

    export interface DungeonEncounterStartEvent
        extends AbstractEncounterStartEvent {
        /**
         * The type of the event.
         */
        type: 'dungeonencounterstart';
    }

    export interface DungeonEncounterEndEvent extends AbstractEncounterEndEvent {
        /**
         * The type of the event.
         */
        type: 'dungeonencounterend';
    }

    export interface AbstractResourceChangeEvent extends Event {
        resourceChange: number;
        resourceChangeType: number;
        otherResourceChange: number;
        maxResourceAmount: number;
        waste: number | null;
    }

    export interface ResourceChangeEvent extends AbstractResourceChangeEvent {
        /**
         * The type of the event.
         */
        type: 'resourcechange';
    }

    export interface PlayerEnterCombatEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'playerentercombat';

        /**
         * The logging player.
         */
        player: Actor | null;
    }

    export interface PlayerExitCombatEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'playerexitcombat';

        /**
         * The logging player.
         */
        player: Actor | null;
    }

    export interface MapChangeEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'mapchange';

        /**
         * The game id of the map
         */
        mapId: number;

        /**
         * The name of the map
         */
        mapName: string | null;

        /**
         * The file name of the map image.
         */
        mapFile: string | null;
    }

    export interface ZoneChangeEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'zonechange';

        /**
         * The game id of the zone
         */
        zoneId: number;

        /**
         * The name of the zone.
         */
        zoneName: string | null;

        /**
         * The difficulty level of the zone. Not set in all games.
         */
        zoneDifficulty: number;

        /**
         * The size of the zone. Not set in all games.
         */
        zoneSize: number;
    }

    export interface WorldMarkerPlacedEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'worldmarkerplaced';

        /**
         * The map game id that the marker was placed on.
         */
        mapId: number;

        /**
         * The x position of the marker.
         */
        x: number;

        /**
         * The y position of the marker.
         */
        y: number;

        /**
         * The icon id that represents which marker it is.
         */
        icon: number;
    }

    export interface WorldMarkerRemovedEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'worldmarkerremoved';

        /**
         * The icon id that represents which marker is being removed.
         */
        icon: number;
    }

    export interface InstakillEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'instakill';
    }

    export interface ResurrectEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'resurrect';
    }

    export interface UnknownEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'unknown';
    }

    export interface WipeCalledEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'wipecalled';
    }

    export type CoreEvent =
        | AbsorbedEvent
        | ApplyBuffEvent
        | ApplyBuffStackEvent
        | ApplyDebuffEvent
        | ApplyDebuffStackEvent
        | BeginCastEvent
        | CastEvent
        | CombatantInfoEvent
        | DamageEvent
        | DeathEvent
        | DispelEvent
        | DungeonStartEvent
        | DungeonEndEvent
        | DungeonEncounterStartEvent
        | DungeonEncounterEndEvent
        | EncounterStartEvent
        | EncounterEndEvent
        | HealingEvent
        | HealAbsorbedEvent
        | InstakillEvent
        | InterruptEvent
        | MapChangeEvent
        | PlayerEnterCombatEvent
        | PlayerExitCombatEvent
        | RefreshBuffEvent
        | RefreshDebuffEvent
        | RemoveBuffEvent
        | RemoveBuffStackEvent
        | RemoveDebuffEvent
        | RemoveDebuffStackEvent
        | ResourceChangeEvent
        | ResurrectEvent
        | UnknownEvent
        | WipeCalledEvent
        | WorldMarkerPlacedEvent
        | WorldMarkerRemovedEvent
        | ZoneChangeEvent;

    export type EventCategory =
        | 'damage'
        | 'healing'
        | 'casts'
        | 'aurasGained'
        | 'aurasCast'
        | 'interrupts'
        | 'resourceGain'
        | 'dispels'
        | 'deathsAndResurrects'
        | 'summons'
        | 'combatResurrects'
        | 'externalHealingRequired'
        | 'healingAbsorbed'
        | 'deathSave'
        | 'aggro'
        | 'threat'
        | 'calculatedDamage'
        | 'calculatedHealing';

    export type ActorDisposition = 'friendly' | 'enemy' | 'neutral';

    export type FightFilters = {
        /**
         * The start time of the filter. Fights that end before this start time will not be included.
         */
        startTime: number;

        /**
         * The end time of the filter. Fights that begin after this end time will not be included.
         */
        endTime: number;

        /**
         * The encounter to filter to. 0 if all fights should be included. If set to a specific boss, only pulls of that boss will be matched.
         */
        encounterId: number;

        /**
         * The kill type.
         */
        killType: 'all' | 'encounters' | 'trash' | 'kills' | 'wipes';

        /**
         * The difficulty to filter to. If set to a value other than 0, only fights matching the specified difficulty will be matched.
         */
        difficulty: number;

        /**
         * A set of specific fight ids to match on. Exists on top of the other filters, so only fights in this list can be matched.
         */
        fightIds: number[] | null;

        /**
         * Test if a fight matches these filters.
         * @param fight - The fight to check.
         * @returns Whether or not the fight matches the filters.
         */
        matches(fight: Fight): boolean;
    };

    export type EventFilters = {
        /**
         * The start time of the filter. Events that occur before this start time will not be included.
         */
        startTime: number;

        /**
         * The end time of the filter. Events that occur after this end time will not be included.
         */
        endTime: number;

        /**
         * The number of player deaths after which events should be ignored.
         */
        deathsCutoff: number;

        /**
         * The phase to filter to.
         */
        phase: number;

        /**
         * The report id of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
         */
        actorId: number;

        /**
         * The instance id of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
         */
        actorInstanceId: number;

        /**
         * The class of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
         */
        actorClass: string;

        /**
         * Test if an event matches these filters.
         * @param event - The event to check against the filters.
         * @param fight - The fight that the event belongs to.
         * @returns Whether or not the event matches the filters.
         */
        matches(event: AnyEvent, fight: Fight): boolean;
    };

    export type Styles = {
        /**
         * Get the CSS color for a given actor subtype.
         * @param type - The actor subtype whose color should be retrieved
         * @returns The color to use for the subtype in charts and tables.
         */
        getColorForActorType(type: string): string;

        /**
         * Get the CSS color for a given ability type.
         * @param type - The ability type whose color should be retrieved
         * @returns The color to use for the type in charts and tables.
         */
        getColorForAbilityType(type: number): string;
    };

    export type DamageHealingOrCastAmount = {
        entry: Actor | Ability | ActorInstance;
        total: number;
    };

    export type DamageHealingOrCastAmounts = {
        totalTime: number;
        damageDowntime: number;
        entries: Array<DamageHealingOrCastAmount>;
    };

    export type Component =
        | JsonTreeComponent
        | EnhancedMarkdownComponent
        | ChartComponent
        | TableComponent;

    export type JsonTreeComponent = {
        component: 'JsonTree';
        // eslint-disable-next-line @typescript-eslint/ban-types
        props: object;
    };

    export type EnhancedMarkdownComponent = {
        component: 'EnhancedMarkdown';
        props: {
            content: string;
        };
    };

    export interface ChartComponent {
        component: 'Chart';
        /**
         * Options for a chart. Internally, this uses Highcharts. Only some common properties have full typing,
         * other types may be incomplete or absent. Consult the highcharts documentation for complete details
         * on the possible options.
         *
         * Note that functions as part of a component return value are not supported due to serialization and
         * security requirements.
         *
         * @see <a>https://api.highcharts.com/highcharts/</a>
         */
        props: RpgLogs.ChartComponentProps;
    }

    export type TableComponent = {
        component: 'Table';
        props: {
            columns: Record<string, TableColumn>;
            data: readonly Record<string, unknown>[];
        };
    };

    type TableColumn = {
        header: string;
        width?: number;
        maxWidth?: number;
        minWidth?: number;
        noWrap?: boolean;
        textAlign?: 'left' | 'center' | 'right';
        columns?: Record<string, TableColumn>;
    };
}

export namespace Highcharts {
    type NYI = unknown;
    // the T here is purely for documentation, not actually used
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Unsupported<T = unknown> {
        _: never;
    }

    /**
     * A field where Highcharts supports HTML, but we do not. Tokens will be escaped.
     * This will eventually be converted to Markdown, but that is NYI.
     *
     * Unfortunately, I can't get this docstring to show in Monaco, so it is duplicated on the text field.
     */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Html extends String {} // see https://www.highcharts.com/docs/chart-concepts/security
    type Css = NYI;
    type GradientColorObject = { stops: Array<[number, Color]> } & (
        | {
        linearGradient: { x1: number; x2: number; y1: number; y2: number };
    }
        | { radialGradient: { cx: number; cy: number; r: number } }
        );

    type Color = string | GradientColorObject;
    enum DashStyle {
        Dash = 'Dash',
        DashDot = 'DashDot',
        Dot = 'Dot',
        LongDash = 'LongDash',
        LongDashDot = 'LongDashDot',
        LongDashDotDot = 'LongDashDotDot',
        ShortDash = 'ShortDash',
        ShortDashDot = 'ShortDashDot',
        ShortDashDotDot = 'ShortDashDotDot',
        ShortDot = 'ShortDot',
        Solid = 'Solid',
    }

    enum LinecapStyle {
        Butt = 'butt',
        Round = 'round',
        Square = 'square',
    }

    namespace Series {
        /**
         * requires modules/boost, which we may not have?
         */
        type BoostProps = {
            boostBlending?: string;
            boostThreshold?: number;
        };

        type AnimationProps = {
            animation?: boolean;
            animationLimit?: number;
        };

        type Data1D = number[];
        type Data2D = Array<[number, number]>;
        type DataNamed = Array<{
            x?: number;
            y?: number;
            name?: string;
            color?: Color;
            [otherKey: string]: unknown;
        }>;

        type DataLabelOptions = NYI;
        type DataSortingOptions = {
            enabled?: boolean;
            matchByName?: boolean;
            sortKey?: string;
        };

        type ScatterJitterOptions = {
            x: number;
            y: number;
        };

        type ScatterLabelOptions = NYI;
        type ScatterMarkerOptions = {
            enabled?: boolean;
            enabledThreshold?: number;
            fillColor?: Color;
            height?: number;
            lineColor?: Color;
            lineWidth?: number;
            radius?: number;
            symbol?: string;
            width?: number;
            states?: NYI;
        };

        type OmitDisallowed<T> = Omit<
            T,
            | 'animationLimit'
            | 'cursor'
            | 'dragDrop'
            | 'events'
            | 'pointDescriptionFormatter'
            | 'turboThreshold'
            | keyof BoostProps
            >;

        type CommonProps = AnimationProps &
            BoostProps & {
            accessibility?: NYI;
            allowPointSelect?: boolean;
            className?: string;
            clip?: boolean;
            color?: Color;
            colorAxis?: number | string | boolean;
            colorIndex?: number;
            colorKey?: string;
            crisp?: boolean;
            cropThreshold?: number;
            cursor?: string;
            custom?: Record<string, unknown>;
            dashStyle?: DashStyle;
            data: Data1D | Data2D | DataNamed;
            dataAsColumns?: boolean;
            dataLabels?: DataLabelOptions;
            dataSorting?: DataSortingOptions;
            description?: string;
            dragDrop?: NYI;
            enableMouseTracking?: boolean;
            events?: NYI;
            getExtremesFromAll?: boolean;
            id?: string;
            includeInDataExport?: boolean;
            index?: number;
            keys?: string[];
            label?: ScatterLabelOptions;
            legendIndex?: number;
            linecap?: LinecapStyle | string;
            lineWidth?: number;
            linkedTo?: string;
            marker?: ScatterMarkerOptions;
            name?: string;
            negativeColor?: Color;
            onPoint?: NYI;
            opacity?: number;
            point?: NYI;
            pointDescriptionFormatter?: NYI;
            pointInterval?: number;
            pointIntervalUnit?: string;
            pointPlacement?: 'on' | 'between' | number;
            pointStart?: number;
            relativeXValue?: boolean;
            selected?: boolean;
            shadow?: NYI;
            showCheckbox?: boolean;
            showInLegend?: boolean;
            skipKeyboardNavigation?: boolean;
            softThreshold?: boolean;
            stack?: number | string;
            stacking?: 'normal' | 'percent';
            states?: NYI;
            step?: 'left' | 'center' | 'right';
            stickyTracking?: boolean;
            threshold?: number | null;
            tooltip?: NYI;
            turboThreshold?: number;
            visible?: boolean;
            xAxis?: number | string;
            yAxis?: number | string;
            zIndex?: number;
            zoneAxis?: 'x' | 'y' | 'z';
            zones?: NYI;
        };

        type BaseSeries<T extends string> = OmitDisallowed<CommonProps> & {
            type: T;
        };

        /**
         * @see https://api.highcharts.com/highcharts/series.scatter
         */
        export type Scatter = BaseSeries<'scatter'> &
            Partial<{
                cluster: NYI;
                jitter: ScatterJitterOptions;
            }>;

        /**
         * @see https://api.highcharts.com/highcharts/series.line
         */
        export type Line = BaseSeries<'line'> &
            Partial<{
                connectEnds: boolean;
                connectNulls: boolean;
                findNearestPointBy: string;
            }>;

        /**
         * @see https://api.highcharts.com/highcharts/series.bar
         */
        export type Bar = BaseSeries<'bar'> & {
            borderColor: Color;
            borderRadius: number;
            borderWidth: number;
            centerInCategory: boolean;
            edgeColor: Color;
            edgeWidth: number;
            findNearestPointBy: string;
            grouping: boolean;
            groupPadding: number;
            groupZPadding: number;
            pointRange: number | null;
            depth: number;
        };

        // sometimes any is justified, man
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type ExtendedSeries<T extends BaseSeries<any>, Key> = Omit<T, 'type'> & {
            type: Key;
        };

        /**
         * @see https://api.highcharts.com/highcharts/series.histogram
         */
        export type Histogram = ExtendedSeries<Bar, 'histogram'> &
            Partial<{
                /**
                 * The number of bins to use.
                 *
                 * The Highchart docs indicate that you can use a function for this, but that is not supported
                 * within a report component.
                 */
                binsNumber: 'square-root' | 'sturges' | 'rice' | number;
                binWidth: number;
                connectEnds: boolean;
                connectNulls: boolean;
            }>;

        /**
         * @see https://api.highcharts.com/highcharts/series.boxplot
         */
        export type BoxPlot = BaseSeries<'boxplot'> &
            Partial<{
                boxDashStyle: DashStyle;
                centerInCategory: boolean;
                colorByPoint: boolean;
                colors: Color[];
                connectEnds: boolean;
                connectNulls: boolean;
                depth: number;
                edgeColor: Color;
                edgeWidth: number;
                fillColor: Color;
                grouping: boolean;
                groupPadding: number;
                medianColor: Color;
                medianDashStyle: DashStyle;
                medianWidth: number | null;
                minPointLength: number;
                pointRange: number | null;
                stemDashStyle: DashStyle;
                stemWidth: number;
                whiskerColor: Color;
                whiskerDashStyle: DashStyle;
                whiskerLength: number;
                whiskerWidth: number;
            }>;

        type KnownSeries = Scatter | Line | Histogram | Bar | BoxPlot;
        type UnknownSeries = BaseSeries<any>;

        /**
         * @see https://api.highcharts.com/highcharts/series
         */
        export type Any = KnownSeries | UnknownSeries;
    }

    type AsOptions<T> = Omit<T, 'data'>;

    type TextOptions = Partial<{
        align: 'left' | 'center' | 'right';
        floating: boolean;
        margin: number;
        /**
         * Text to display.
         *
         * Note that while Highcharts supports HTML, we do not. HTML-like tokens will be escaped.
         * This will eventually be converted to Markdown, but that is NYI.
         *
         * This note applies to all fields labeled with the `Html` type.
         */
        text: Html;
        verticalAlign: 'top' | 'middle' | 'bottom';
        x: number;
        y: number;
        useHTML: boolean;
        style: Css;
    }>;

    type TooltipOptions = Partial<{
        animation: boolean;
        backgroundColor: Color;
        borderColor: Color;
        borderRadius: number;
        borderWidth: number;
        className: Unsupported;
        dateTimeLabelFormats: NYI;
        distance: number;
        enabled: boolean;
        followPointer: boolean;
        followTouchMove: boolean;
        clusterFormat: Html;
        footerFormat: Html;
        formatter: Unsupported;
        headerFormat: Html;
        headerShape: NYI;
        hideDelay: number;
        nullFormat: Html;
        nullFormatter: Unsupported;
        outside: boolean;
        padding: number;
        pointFormat: Html;
        positioner: Unsupported;
        shadow: boolean | NYI;
        shape: 'callout' | 'circle' | 'square';
        shared: boolean;
        snap: number;
        split: boolean;
        stickOnContact: boolean;
        style: Css;
        useHTML: boolean;
        valueDecimals: number | undefined;
        valuePrefix: string;
        valueSuffix: string;
        xDateFormat: string;
    }>;

    type AxisOptions = Partial<{
        accessibility: NYI;
        alignTicks: boolean;
        allowDecimals: boolean;
        alternateGridColor: Color;
        angle: number;
        breaks: NYI;
        categories: string[];
        ceiling: number;
        className: Unsupported;
        crosshair: NYI;
        dateTimeLabelFormats: NYI;
        endOnTick: boolean;
        events: Unsupported;
        floor: number;
        gridLineColor: Color;
        gridLineDashStyle: DashStyle;
        gridLineInterpolation: 'circle' | 'polygon';
        gridLineWidth: number;
        gridZIndex: number;
        height: number | string;
        id: string;
        labels: NYI;
        left: number | string;
        lineColor: Color;
        lineWidth: number;
        linkedTo: number;
        margin: number;
        max: number | null;
        maxPadding: number;
        min: number | null;
        minorGridLineColor: Color;
        minorGridLineDashStyle: DashStyle;
        minorGridLineWidth: number;
        minorTickColor: Color;
        minorTickInterval: number | string | null;
        minorTickLength: number;
        minorTickPosition: string;
        minorTicks: boolean;
        minorTickWidth: number;
        minPadding: number;
        minRange: number;
        minTickInterval: number;
        offset: number;
        opposite: boolean;
        pane: number;
        panningEnabled: boolean;
        plotBands: NYI;
        plotLines: NYI;
        reversed: boolean;
        reversedStacks: boolean;
        showEmpty: boolean;
        showFirstLabel: boolean;
        showLastLabel: boolean;
        softMax: number;
        softMin: number;
        startOfWeek: number;
        startOnTick: boolean;
        tickAmount: number;
        tickColor: Color;
        tickInterval: number;
        tickLength: number;
        tickmarkPlacement: string;
        tickPixelInterval: number;
        tickPosition: string;
        tickPositioner: Unsupported;
        tickPositions: number[];
        tickWidth: number | undefined;
        title: NYI;
        top: number | string;
        type: 'linear' | 'logarithmic' | 'datetime' | 'category';
        uniqueNames: boolean;
        units: NYI;
        visible: boolean;
        width: number | string;
        zIndex: number;
        zoomEnabled: boolean;
    }>;

    type ChartOptions = NYI;

    export type Options = {
        plotOptions?: {
            [Key in Series.Any['type']]: AsOptions<
                Extract<Series.Any, { type: Key }>
                >;
        };
        colors?: Color[];
        series: Series.Any[];
        caption?: TextOptions;
        title?: TextOptions;
        subtitle?: TextOptions;
        tooltip?: TooltipOptions;
        xAxis?: AxisOptions;
        yAxis?: AxisOptions;
        zAxis?: AxisOptions;
        colorAxis?: NYI; // does not really share axis options with the x/y/z axes
        chart?: ChartOptions;
        annotations?: NYI[];
        legend?: NYI;
        labels?: NYI;
        pane?: NYI;
        time?: NYI;
    };
}

export namespace RpgLogs {
    // this lint is disabled because interfaces show the new name in the Monaco editor, but type aliases do not
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface ChartComponentProps extends Highcharts.Options {}
}

export namespace RpgLogs {
    export interface Fight {
        /**
         * The season of Classic the fight belongs to. For example, Season of Mastery will have a season id of 1.
         */
        classicSeasonId: number | null;

        /**
         * If the fight is a keystone dungeon, then this field contains the keystone level. Null otherwise.
         */
        keystoneDungeonLevel: number | null;

        /**
         * If the fight is a keystone dungeon, then this field contains the official completion time. Null otherwise.
         */
        keystoneDungeonTime: number | null;

        /**
         * If the fight is a keystone dungeon, then this field contains the set of affixes in effect. Null otherwise.
         */
        keystoneDungeonAffixes: Array<number> | null;

        /**
         * If the fight is a tower run (e.g., Torghast), then this field contains the layer number. Null otherwise.
         */
        towerLayer: number | null;

        /**
         * Whether or not the fight had classic world buffs on any player (Vanilla only)
         */
        hasClassicWorldBuffs: boolean;
    }

    export interface Ability {
        /**
         * Whether or not the ability is the stagger absorb that happens when a Brewmaster takes damage.
         */
        isStaggerAbsorb: boolean;

        /**
         * Whether or not the ability is the deferred stagger damage that happens after a Brewmaster took an earlier hit.
         */
        isStaggerDmaage: boolean;
    }

    export interface ResourceData {
        /**
         * The current attack power of the actor.
         */
        attackPower: number;

        /**
         * The current spell power of the actor.
         */
        spellPower: number;

        /**
         * The current item level of the actor.
         */
        itemLevel: number;

        /**
         * Only for Mists of Pandaria Logs, the resolve of a tank actor. Null for other expansions.
         */
        resolve: number | null;

        /**
         * The current armor of the actor. Does not exist in older logs.
         */
        armor: number | null;

        /**
         * The current absorb shield on the actor. Does not exist in older logs.
         */
        absorb: number | null;

        /**
         * The map id that the logging unit is on (not the unit represented by the resources). Not present in older logs.
         */
        mapId: number | null;

        resourceAmount: number;
        resourceCap: number;
        resourceCost: number;
        resourceType: number;
        additionalResources: ClassResource | null;
    }

    export interface ClassResource {
        resourceAmount: number;
        resourceCap: number;
        resourceCost: number;
        resourceType: number;
        next: ClassResource;
    }

    export type CombatantInfoStats = {
        strength: number;
        agility: number;
        stamina: number;
        intellect: number;
        spirit: number;

        dodge: number;
        parry: number;
        block: number;
        armor: number;
        critMelee: number;
        critRanged: number;
        critSpell: number;
        hasteMelee: number;
        hasteRanged: number;
        hasteSpell: number;

        // Retail
        speed: number;
        leech: number;
        avoidance: number;
        mastery: number;
        versatilityDamageDone: number;
        versatilityHealingDone: number;
        versatilityDamageReduction: number;

        // TBC
        hitMelee: number;
        hitRanged: number;
        hitSpell: number;
        expertise: number;
        resilienceCritTaken: number;
        resilienceDamageTaken: number;
    };

    export type CombatantInfoCustomPower = {
        spellId: number;
        traitId: number;
        rank: number | null;
        slot: number | null;
        icon: string | null;
        isMajor: boolean;
    };

    export type CombatantInfoGem = {
        id: number;
        itemLevel: number;
    };

    export type CombatantInfoGear = {
        id: number;
        itemLevel: number;
        icon: string | null;
        name: string;
        quality: number;
        permanentEnchant: number;
        temporaryEnchant: number;
        onUseEnchant: number;
        gems: Array<CombatantInfoGem> | null;
    };

    export type CombatantInfoShadowlandsLegendary = {
        effectId: number;
        effectIcon: string | null;
    };

    export type TalentTreeNode = {
        id: number;
        spellId: number;
        nodeId: number;
        rank: number;
        icon?: string;
    };

    export type ExpansionType =
        | 'unknown'
        | 'vanilla'
        | 'tbc'
        | 'wrath'
        | 'legion'
        | 'bfa'
        | 'shadowlands'
        | 'dragonflight';

    export interface CombatantInfoEvent extends Event {
        /**
         * The expansion that the combatant info event is for.
         */
        expansion: ExpansionType;

        /**
         * Whether the player is horde or alliance. In older expansions, this will be unset.
         */
        factionId: number | null;

        /**
         * The Blizzard spec id for the player.
         */
        specId: number;

        /**
         * For Shadowlands only, the covenant of the player.
         */
        covenantId: number;

        /**
         * For Shadowlands only, the soulbind of the player.
         */
        soulbindId: number;

        /**
         * For Classic expansions only, an array of 3 numbers representing the points spent in talents.
         */
        talentPoints: Array<number>;

        /**
         * For Legion, BFA and Shadowlands only, an array of 7 numbers representing the choices on each talent row.
         */
        talentRows: Array<number>;

        /**
         * For Dragonflight only, an array of talent tree node objects representing the chosen path in the talent tree.
         */
        talentTree: Array<TalentTreeNode>;

        /**
         * For all retail expansions, the set of chosen PvP talents.
         */
        pvpTalents: Array<number>;

        /**
         * Stats for the player, including all primary and secondary stats.
         */
        stats: CombatantInfoStats;

        /**
         * Gear worn by the player
         */
        gear: Array<CombatantInfoGear & CombatantInfoShadowlandsLegendary>;

        /**
         * The primary borrowed power for a given expansion.
         * Artifacts in Legion, Azerite Powers in BfA, Soulbinds in Shadowlands.
         */
        primaryCustomPowerSet: Array<CombatantInfoCustomPower> | null;

        /**
         * The secondary borrowed power for a given expansion.
         * Heart Essences in BfA 8.2+, Conduits in Shadowlands.
         */
        secondaryCustomPowerSet: Array<CombatantInfoCustomPower> | null;

        /**
         * The tertiary borrowed power for a given expansion.
         * Anima Powers in Shadowlands.
         */
        tertiaryCustomPowerSet: Array<CombatantInfoCustomPower> | null;
    }

    export type DamageHitType =
        | 'miss'
        | 'hit'
        | 'criticalHit'
        | 'absorbedHit'
        | 'blockedHit'
        | 'blockedCriticalHit'
        | 'glancingBlow'
        | 'dodge'
        | 'parry'
        | 'deflect'
        | 'immune'
        | 'misfire'
        | 'reflect'
        | 'evade'
        | 'resist'
        | 'crushingBlow'
        | 'partialResistedHit'
        | 'partialResistedCriticalHit'
        | 'unknown';

    export interface DamageEvent extends Event {
        /**
         * The hit type of the event.
         */
        hitType: DamageHitType;

        /**
         * The amount of damage blocked.
         */
        blocked: number;

        /**
         * For partial resists, the amount of damage resisted.
         */
        resisted: number;

        /**
         * Whether or not the event was a crushing blow.
         */
        isCrushingBlow: boolean;

        /**
         * Whether or not the event was a glancing blow.
         */
        isGlancingBlow: boolean;

        /**
         * Whether or not the event was a multistrike
         */
        isMultiStrike: boolean;
    }

    export interface HealingEvent extends Event {
        /**
         * Whether or not the event was a multistrike
         */
        isMultiStrike: boolean;
    }

    export interface CreateEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'create';
    }

    export interface DestroyEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'destroy';
    }

    export interface ExtraAttacksEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'extraattacks';

        /**
         * The nunber of extra attacks granted to the target by the ability (e.g., Windfury).
         */
        extraAttacks: number;
    }

    export interface DrainEvent extends AbstractResourceChangeEvent {
        /**
         * The type of the event.
         */
        type: 'drain';
    }

    export interface LeechEvent extends AbstractResourceChangeEvent {
        /**
         * The type of the event.
         */
        type: 'leech';
    }

    export interface AuraBrokenEvent extends SpellStoppedEvent {
        /**
         * The type of the event.
         */
        type: 'aurabroken';
    }

    export interface SpellstealEvent extends SpellStoppedEvent {
        /**
         * The type of the event.
         */
        type: 'spellsteal';
    }

    export interface SummonEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'summon';
    }

    export interface TowerStartEvent extends AbstractEncounterStartEvent {
        /**
         * The type of the event.
         */
        type: 'towerstart';

        layer: number;
    }

    export interface TowerEndEvent extends AbstractEncounterEndEvent {
        /**
         * The type of the event.
         */
        type: 'towerend';

        layer: number;
        rating: number;
    }

    export interface ArenaMatchStartEvent extends AbstractEncounterStartEvent {
        /**
         * The type of the event.
         */
        type: 'arenamatchstart';

        /**
         * The PvP season the match is occurring in.
         */
        pvpSeason: number;

        /**
         * Whether or not the match is rated.
         */
        isRated: boolean;
    }

    export interface ArenaMatchEndEvent extends AbstractEncounterEndEvent {
        /**
         * The type of the event.
         */
        type: 'arenamatchend';

        /**
         * Which team was the victor.
         */
        winner: number;

        /**
         * The first team's MMR.
         */
        team1MMR: number;

        /**
         * The second team's MMR.
         */
        team2MMR: number;
    }

    export interface EmpowerStartEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'empowerstart';
    }

    export interface EmpowerEndEvent extends Event {
        /**
         * The type of the event.
         */
        type: 'empowerend';

        /**
         * The empowerment level that the spell was successfully released at.
         */
        empowermentLevel: number;
    }

    export type AnyEvent =
        | CoreEvent
        | AuraBrokenEvent
        | CreateEvent
        | DestroyEvent
        | DrainEvent
        | ExtraAttacksEvent
        | LeechEvent
        | SpellstealEvent
        | SummonEvent
        | TowerStartEvent
        | TowerEndEvent
        | ArenaMatchStartEvent
        | ArenaMatchEndEvent
        | EmpowerStartEvent
        | EmpowerEndEvent;
}