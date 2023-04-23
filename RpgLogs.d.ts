// This definition for the RpgLogs API is auto generated from https://www.warcraftlogs.com/scripting-api-docs/warcraft/index.html
// it is not officially supported by WarcraftLogs
export interface Ability {
	/**
	* The icon of the ability.
	*/
	icon: null | string

	/**
	* The game id of the ability.
	*/
	id: number

	/**
	* If the ability is always excluded from damage done or healing done, this field will bet set to true.For example, in World of Warcraft, Brewmaster Stagger absorbs should not count as healing done.
	*/
	isExcludedFromDamageAndHealing: boolean

	/**
	* Whether or not the ability is a melee attack. In FF, this is typically called "Attack".
	*/
	isMelee: boolean

	/**
	* Whether or not the ability is off gcd.
	*/
	isOffGcd: boolean

	/**
	* Whether or not the ability is the stagger absorb that happens when a Brewmaster takes damage.
	*/
	isStaggerAbsorb: boolean

	/**
	* Whether or not the ability is the deferred stagger damage that happens after a Brewmaster took an earlier hit.
	*/
	isStaggerDmaage: boolean

	/**
	* The name of the ability in the user's desired language.
	*/
	name: string

	/**
	* The type of the ability. This represents the spell school (in WoW) or damage type in most other games.
	*/
	type: number
 
 
}
export interface AbsorbedEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The amount of absorbed damage done for this event.
	*/
	absorbedDamage: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* The amount of damage absorbed.
	*/
	amount: number

	/**
	* The attacking actor. Null if no attacker is set.
	*/
	attacker: null | Actor

	/**
	* The attacking ability used. Null if the ability is not known.
	*/
	attackerAbility: null | Ability

	/**
	* The raw disposition of the attacker. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	attackerDisposition: ActorDisposition

	/**
	* The instance id of the attacker.
	*/
	attackerInstanceId: number

	/**
	* The raid marker on the attacking unit. 0 if no raid marker is set.
	*/
	attackerRaidMarker: number

	/**
	* The amount of effective damage done for this event.
	*/
	effectiveDamage: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "absorbed"
 
 
}
export interface AbstractEncounterEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from EncounterEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from EncounterEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from EncounterEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from EncounterEvent.encounterSize
	*/
	encounterSize: number

	/**
	* 
	*/
	isKill: boolean

	/**
	* Inherited from EncounterEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface AbstractResourceChangeEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* 
	*/
	maxResourceAmount: number

	/**
	* 
	*/
	otherResourceChange: number

	/**
	* 
	*/
	resourceChange: number

	/**
	* 
	*/
	resourceChangeType: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* 
	*/
	waste: null | number
 
 
}
export interface Actor {
	/**
	* The game id of the actor.
	*/
	gameId: number

	/**
	* The id of the actor.
	*/
	id: number

	/**
	* The id of the actor within its containing report.
	*/
	idInReport: number

	/**
	* The name of the actor in the user's desired language.
	*/
	name: string

	/**
	* The subType of the actor. This will be the job (for FF) or class (for other games) of players. NPCs can be "Boss" or "NPC".
	*/
	subType: string

	/**
	* The type of the actor. This will be Player, Pet or NPC.
	*/
	type: ActorType
 
 
}
export interface ActorInstance {
	/**
	* The actor for this specific instance.
	*/
	actor: Actor

	/**
	* The instance id of the specific actor instance.
	*/
	instanceId: number
 
 
}
export interface ApplyBuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "applybuff"
 
 
}
export interface ApplyBuffOrDebuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface ApplyBuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "applybuffstack"
 
 
}
export interface ApplyDebuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "applydebuff"
 
 
}
export interface ApplyDebuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "applydebuffstack"
 
 
}
export interface ApplyOrRefreshEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface ArenaMatchEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterEndEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterEndEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterEndEvent.isKill
	*/
	isKill: boolean

	/**
	* Inherited from AbstractEncounterEndEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The first team's MMR.
	*/
	team1MMR: number

	/**
	* The second team's MMR.
	*/
	team2MMR: number

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "arenamatchend"

	/**
	* Which team was the victor.
	*/
	winner: number
 
 
}
export interface ArenaMatchStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterStartEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterStartEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Whether or not the match is rated.
	*/
	isRated: boolean

	/**
	* Inherited from AbstractEncounterStartEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The PvP season the match is occurring in.
	*/
	pvpSeason: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "arenamatchstart"
 
 
}
export interface AuraBrokenEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If the ability was a buff or debuff that was dispelled, purged or stolen, this booleanindicates if it was a buff vs a debuff.
	*/
	isBuff: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The ability that was interrupted, stolen, etc.
	*/
	stoppedAbility: Ability

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "aurabroken"
 
 
}
export interface BeginCastEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* For games that support including the duration in the begin cast event, it will appear here.Currently, the only game that supports this field is FFXIV. It will be 0 for all other games.
	*/
	duration: number

	/**
	* Whether or not the cast is fake, i.e., not the result of a user action, but just made up by the game.
	*/
	isFake: boolean

	/**
	* Whether or not the cast is a melee swing/auto-attack.
	*/
	isMelee: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "begincast"
 
 
}
export interface CastEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Whether or not the cast is fake, i.e., not the result of a user action, but just made up by the game.
	*/
	isFake: boolean

	/**
	* Whether or not the cast is a melee swing/auto-attack.
	*/
	isMelee: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "cast"
 
 
}
export interface ChartComponent {
	/**
	* 
	*/
	component: "Chart"

	/**
	* Options for a chart. Internally, this uses Highcharts. Only some common properties have full typing,other types may be incomplete or absent. Consult the highcharts documentation for complete detailson the possible options.
	*/
	props: ChartComponentProps
 
 
}
export interface ClassResource {
	/**
	* 
	*/
	next: ClassResource

	/**
	* 
	*/
	resourceAmount: number

	/**
	* 
	*/
	resourceCap: number

	/**
	* 
	*/
	resourceCost: number

	/**
	* 
	*/
	resourceType: number
 
 
}
export interface CombatantInfoEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* A set of auras that are present on the player when combat begins.
	*/
	auras: CombatantInfoAura[]

	/**
	* For Shadowlands only, the covenant of the player.
	*/
	covenantId: number

	/**
	* The expansion that the combatant info event is for.
	*/
	expansion: ExpansionType

	/**
	* Whether the player is horde or alliance. In older expansions, this will be unset.
	*/
	factionId: null | number

	/**
	* Gear worn by the player
	*/
	gear: (CombatantInfoGear & CombatantInfoShadowlandsLegendary)[]

	/**
	* The primary borrowed power for a given expansion.Artifacts in Legion, Azerite Powers in BfA, Soulbinds in Shadowlands.
	*/
	primaryCustomPowerSet: null | CombatantInfoCustomPower[]

	/**
	* For all retail expansions, the set of chosen PvP talents.
	*/
	pvpTalents: number[]

	/**
	* The secondary borrowed power for a given expansion.Heart Essences in BfA 8.2+, Conduits in Shadowlands.
	*/
	secondaryCustomPowerSet: null | CombatantInfoCustomPower[]

	/**
	* For Shadowlands only, the soulbind of the player.
	*/
	soulbindId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The Blizzard spec id for the player.
	*/
	specId: number

	/**
	* Stats for the player, including all primary and secondary stats.
	*/
	stats: CombatantInfoStats

	/**
	* For Classic expansions only, an array of 3 numbers representing the points spent in talents.
	*/
	talentPoints: number[]

	/**
	* For Legion, BFA and Shadowlands only, an array of 7 numbers representing the choices on each talent row.
	*/
	talentRows: number[]

	/**
	* For Dragonflight only, an array of talent tree node objects representing the chosen path in the talent tree.
	*/
	talentTree: TalentTreeNode[]

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The tertiary borrowed power for a given expansion.Anima Powers in Shadowlands.
	*/
	tertiaryCustomPowerSet: null | CombatantInfoCustomPower[]

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "combatantinfo"
 
 
}
export interface CreateEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "create"
 
 
}
export interface DamageEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of damage absorbed for this event.
	*/
	absorbedDamage: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* The amount of damage done excluding absorbs and overkill.
	*/
	amount: number

	/**
	* The amount of damage blocked.
	*/
	blocked: number

	/**
	* The amount of effective damage done by the event.
	*/
	effectiveDamage: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The hit type of the event.
	*/
	hitType: DamageHitType

	/**
	* Whether or not the event is a critical hit.
	*/
	isCriticalHit: number

	/**
	* Whether or not the event was a crushing blow.
	*/
	isCrushingBlow: boolean

	/**
	* Whether or not the event was a glancing blow.
	*/
	isGlancingBlow: boolean

	/**
	* Whether or not the event was a miss.
	*/
	isMiss: boolean

	/**
	* Whether or not the event was a multistrike
	*/
	isMultiStrike: boolean

	/**
	* Whether or not the event is a tick (DoT).
	*/
	isTick: boolean

	/**
	* The amount of mitigated damage. Excludes absorbs, but does include mitigation from blocking, armor and damage reductions.
	*/
	mitigated: number

	/**
	* The amount of overkill, null if no overkill exists.
	*/
	overkill: null | number

	/**
	* For partial resists, the amount of damage resisted.
	*/
	resisted: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* If the event was changed to be attributed to a supporting actor, the original supported actorwill be included here.
	*/
	supportedActor: null | Actor

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "damage"

	/**
	* The raw unmitigated damage. Not supported by every game.
	*/
	unmitigatedAmount: number
 
 
}
export interface DeathEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If there was an earlier death save ability that kept the target alive, the ability will be indicated here.
	*/
	deathSaveAbility: null | Ability

	/**
	* If there was an earlier death save, the time the save happened will be indicated here.
	*/
	deathSaveTime: null | number

	/**
	* Feign boolean. For World of Warcraft hunter feigns, will be set to true if this death was a feign.
	*/
	isFeign: boolean

	/**
	* If it can be determined for the death, this field will tell you which actor killed the target.
	*/
	killer: null | Actor

	/**
	* The instance id of the killing actor.
	*/
	killerInstanceId: null | number

	/**
	* If it can be determined for the death, this field will tell you which ability was used to kill the target.
	*/
	killingAbility: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "death"
 
 
}
export interface DestroyEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "destroy"
 
 
}
export interface DispelEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If the ability was a buff or debuff that was dispelled, purged or stolen, this booleanindicates if it was a buff vs a debuff.
	*/
	isBuff: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The number of stacks removed by the dispel.
	*/
	stacks: number

	/**
	* The ability that was interrupted, stolen, etc.
	*/
	stoppedAbility: Ability

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "dispel"
 
 
}
export interface DrainEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractResourceChangeEvent.maxResourceAmount
	*/
	maxResourceAmount: number

	/**
	* Inherited from AbstractResourceChangeEvent.otherResourceChange
	*/
	otherResourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChange
	*/
	resourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChangeType
	*/
	resourceChangeType: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "drain"

	/**
	* Inherited from AbstractResourceChangeEvent.waste
	*/
	waste: null | number
 
 
}
export interface DungeonEncounterEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterEndEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterEndEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterEndEvent.isKill
	*/
	isKill: boolean

	/**
	* Inherited from AbstractEncounterEndEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "dungeonencounterend"
 
 
}
export interface DungeonEncounterStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterStartEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterStartEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterStartEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "dungeonencounterstart"
 
 
}
export interface DungeonEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* 
	*/
	completionTime: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterEndEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterEndEvent.isKill
	*/
	isKill: boolean

	/**
	* 
	*/
	medal: number

	/**
	* Inherited from AbstractEncounterEndEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* 
	*/
	rating: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "dungeonend"
 
 
}
export interface DungeonPull {
	/**
	* All of the events in this pull.
	*/
	allEvents: AnyEvent[]

	/**
	* The encounter id of the fight. Trash fights just have an encounter id of 0.
	*/
	encounterId: number

	/**
	* The end time of the fight. This is an offset relative to the start of the report, not an absolute time.This offset is in milliseconds.
	*/
	endTime: number

	/**
	* All the enemy participants in the pull, as well as their instance and instance group ranges.
	*/
	enemies: DungeonPullEnemy[]

	/**
	* The events of the pull respecting the user's filters.
	*/
	events: AnyEvent[]

	/**
	* The fight that the pull belongs to.
	*/
	fight: Fight

	/**
	* The id of the pull.
	*/
	id: number

	/**
	* Whether or not a fight with an encounter id was a kill.
	*/
	isKill: boolean

	/**
	* The maps used by the pull.
	*/
	maps: Map

	/**
	* 
	*/
	maxX: number

	/**
	* 
	*/
	maxY: number

	/**
	* The bounding box for the pull in coordinates.
	*/
	minX: number

	/**
	* 
	*/
	minY: number

	/**
	* The start time of the fight. This is an offset relative to the start of the report, not an absolute time.This offset is in milliseconds.
	*/
	startTime: number
 
 
}
export interface DungeonStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* 
	*/
	affixes: number[]

	/**
	* Inherited from AbstractEncounterStartEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterStartEvent.encounterSize
	*/
	encounterSize: number

	/**
	* 
	*/
	keystoneLevel: number

	/**
	* Inherited from AbstractEncounterStartEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "dungeonstart"
 
 
}
export interface EmpowerEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The empowerment level that the spell was successfully released at.
	*/
	empowermentLevel: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "empowerend"
 
 
}
export interface EmpowerStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "empowerstart"
 
 
}
export interface EncounterEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterEndEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterEndEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterEndEvent.isKill
	*/
	isKill: boolean

	/**
	* Inherited from AbstractEncounterEndEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "encounterend"
 
 
}
export interface EncounterEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* 
	*/
	encounterDifficulty: number

	/**
	* 
	*/
	encounterId: number

	/**
	* 
	*/
	encounterName: string

	/**
	* 
	*/
	encounterSize: number

	/**
	* 
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface EncounterStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterStartEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterStartEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterStartEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "encounterstart"
 
 
}
export interface Event {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface ExtraAttacksEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The nunber of extra attacks granted to the target by the ability (e.g., Windfury).
	*/
	extraAttacks: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "extraattacks"
 
 
}
export interface Fight {
	/**
	* All combatant info events. These are cached, so this is faster than trying to find them on your own.
	*/
	allCombatantInfoEvents: CombatantInfoEvent[]

	/**
	* Death events of enemies. These are cached, so this is faster than trying to find them on your own.For PvE content, the deaths are limited to NPCs. For supported PvP content, the deaths are of enemy players.
	*/
	allEnemyDeathEvents: DeathEvent[]

	/**
	* All of the events in this fight.
	*/
	allEvents: AnyEvent[]

	/**
	* Death events of all friendly players. These are cached, so this is faster than trying to find them on your own.
	*/
	allFriendlyPlayerDeathEvents: DeathEvent[]

	/**
	* The season of Classic the fight belongs to. For example, Season of Mastery will have a season id of 1.
	*/
	classicSeasonId: null | number

	/**
	* Combatant info events respecting the user's filters. These are cached, so this is faster than trying to find them on your own.
	*/
	combatantInfoEvents: CombatantInfoEvent[]

	/**
	* The encounter difficulty.
	*/
	difficulty: number

	/**
	* For fights where downtime is supported and used to shrink the total time over which damage dealt is considered,this will contain an array of the start/end bands for every chunk of downtime.
	*/
	downtimeTransitions: null | Band[]

	/**
	* For dungeons, individual pulls are stored and can be accessed.
	*/
	dungeonPulls: DungeonPull[]

	/**
	* The encounter id of the fight. Trash fights just have an encounter id of 0.
	*/
	encounterId: number

	/**
	* The end time of the fight. This is an offset relative to the start of the report, not an absolute time.This offset is in milliseconds.
	*/
	endTime: number

	/**
	* Death events of enemies respecting the user's filters. These are cached, so this is faster than trying to find them on your own.For PvE content, the deaths are limited to NPCs. For supported PvP content, the deaths are of enemy players.
	*/
	enemyDeathEvents: DeathEvent[]

	/**
	* All the enemy participants in the fight.
	*/
	enemyParticipants: Actor[]

	/**
	* The events of the fight respecting the user's filters.
	*/
	events: AnyEvent[]

	/**
	* All the friendly participants in the fight.
	*/
	friendlyParticipants: Actor[]

	/**
	* Death events of friendly players respecting the user's filters. These are cached, so this is faster than trying to find them on your own.
	*/
	friendlyPlayerDeathEvents: DeathEvent[]

	/**
	* Whether or not the fight had classic world buffs on any player (Vanilla only)
	*/
	hasClassicWorldBuffs: boolean

	/**
	* The id of the fight within its containing report group.
	*/
	id: number

	/**
	* The id of the fight within its containing report.
	*/
	idInReport: number

	/**
	* Whether or not a fight with an encounter id was a kill.
	*/
	isKill: boolean

	/**
	* If the fight is a keystone dungeon, then this field contains the set of affixes in effect. Null otherwise.
	*/
	keystoneDungeonAffixes: null | number[]

	/**
	* If the fight is a keystone dungeon, then this field contains the keystone level. Null otherwise.
	*/
	keystoneDungeonLevel: null | number

	/**
	* If the fight is a keystone dungeon, then this field contains the official completion time. Null otherwise.
	*/
	keystoneDungeonTime: null | number

	/**
	* The maps used by the fight.
	*/
	maps: Map

	/**
	* 
	*/
	maxX: number

	/**
	* 
	*/
	maxY: number

	/**
	* The bounding box for the fight in coordinates.
	*/
	minX: number

	/**
	* 
	*/
	minY: number

	/**
	* A localized name for the fight. For encounters, it will be the encounter name, and for trash fights, it willbe the name of the NPC with the most hit points that was involved in the fight.
	*/
	name: string

	/**
	* The phase names for all possible phases.
	*/
	phaseNames: null | string[]

	/**
	* The phase transitions. Each entry in the array contains all of the start/end bands for that specific phase.
	*/
	phaseTransitions: null | Band[][]

	/**
	* The report that the fight belongs to.
	*/
	report: Report

	/**
	* The encounter size (number of players).
	*/
	size: number

	/**
	* The start time of the fight. This is an offset relative to the start of the report, not an absolute time.This offset is in milliseconds.
	*/
	startTime: number

	/**
	* If the fight is a tower run (e.g., Torghast), then this field contains the layer number. Null otherwise.
	*/
	towerLayer: null | number

	/**
	* The world markers used by this fight.
	*/
	worldMarkers: WorldMarker[]

	/**
	* The zone used by the fight.
	*/
	zone: null | Zone
 
 
}
export interface HealAbsorbedEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The amount of damage absorbed.
	*/
	amount: number

	/**
	* The healing actor. Null if no healer is set.
	*/
	healer: null | Actor

	/**
	* The healing ability used. Null if the ability is not known.
	*/
	healerAbility: null | Ability

	/**
	* The raw disposition of the healer. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	healerDisposition: ActorDisposition

	/**
	* The instance id of the healer.
	*/
	healerInstanceId: number

	/**
	* The raid marker on the healing unit. 0 if no raid marker is set.
	*/
	healerRaidMarker: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "healabsorbed"
 
 
}
export interface HealingEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* The amount of healing done excluding absorbs and overheal.
	*/
	amount: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The hit type of the event.
	*/
	hitType: HealingHitType

	/**
	* Whether or not the event is a critical hit.
	*/
	isCriticalHit: number

	/**
	* Whether or not the event was a miss.
	*/
	isMiss: boolean

	/**
	* Whether or not the event was a multistrike
	*/
	isMultiStrike: boolean

	/**
	* Whether or not the event is a tick (DoT).
	*/
	isTick: boolean

	/**
	* The amount of overheal.
	*/
	overheal: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* If the event was changed to be attributed to a supporting actor, the original supported actorwill be included here.
	*/
	supportedActor: null | Actor

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "heal"
 
 
}
export interface InstakillEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "instakill"
 
 
}
export interface InterruptEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If the ability was a buff or debuff that was dispelled, purged or stolen, this booleanindicates if it was a buff vs a debuff.
	*/
	isBuff: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The ability that was interrupted, stolen, etc.
	*/
	stoppedAbility: Ability

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "interrupt"
 
 
}
export interface LeechEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractResourceChangeEvent.maxResourceAmount
	*/
	maxResourceAmount: number

	/**
	* Inherited from AbstractResourceChangeEvent.otherResourceChange
	*/
	otherResourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChange
	*/
	resourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChangeType
	*/
	resourceChangeType: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "leech"

	/**
	* Inherited from AbstractResourceChangeEvent.waste
	*/
	waste: null | number
 
 
}
export interface MapChangeEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The file name of the map image.
	*/
	mapFile: null | string

	/**
	* The game id of the map
	*/
	mapId: number

	/**
	* The name of the map
	*/
	mapName: null | string

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "mapchange"
 
 
}
export interface PlayerEnterCombatEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The logging player.
	*/
	player: null | Actor

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "playerentercombat"
 
 
}
export interface PlayerExitCombatEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The logging player.
	*/
	player: null | Actor

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "playerexitcombat"
 
 
}
export interface RefreshBuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "refreshbuff"
 
 
}
export interface RefreshBuffOrDebuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface RefreshDebuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength of an applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* For games with duration support, the duration of the buff/debuff when applied. Currently only FF supports this.
	*/
	duration: number

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* Extra numeric info that FFXIV sends along with some buff events (e.g., with Medicated). 0 for all other games.
	*/
	extraInfo: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "refreshdebuff"
 
 
}
export interface RemoveBuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength remaining an the applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The amount of overheal.
	*/
	overheal: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "removebuff"
 
 
}
export interface RemoveBuffOrDebuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength remaining an the applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The amount of overheal.
	*/
	overheal: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface RemoveBuffOrDebuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface RemoveBuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "removebuffstack"
 
 
}
export interface RemoveDebuffEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The absorb strength remaining an the applied shield.
	*/
	absorb: number

	/**
	* The amount absorbed by the shield.
	*/
	absorbed: number

	/**
	* The amount of healing done via absorbs for this event.
	*/
	absorbedHealing: number

	/**
	* For FFXIV and SWTOR, the ability that applied the aura. Null in other games.
	*/
	appliedByAbility: null | Ability

	/**
	* The amount of effective healing done by the event.
	*/
	effectiveHealing: number

	/**
	* The amount of overheal.
	*/
	overheal: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "removedebuff"
 
 
}
export interface RemoveDebuffStackEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The stack count.
	*/
	stacks: number

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "removedebuffstack"
 
 
}
export interface Report {
	/**
	* The set of abilities that were seen in this report.
	*/
	abilities: Ability[]

	/**
	* The set of actors that were seen in this report. This includes all players, pets and NPCs.
	*/
	actors: Actor[]

	/**
	* All complete raids in the report. These include entire runs of instances in situations where thoseruns are supported (e.g., Serpentshrine Cavern, Sanctum of Domination, Naxxramas, etc.)
	*/
	completeRaids: CompleteRaid[]

	/**
	* All of the fights in the report.
	*/
	fights: Fight[]

	/**
	* The game version of the report. For World of Warcraft, 1 = Retail, 2 = Vanilla, 3 = TBC, and 4 = Wrath.For other games, this will just be 1.
	*/
	gameVersion: number

	/**
	* The language of the report. Null if no language could be determined.
	*/
	language: null | string

	/**
	* The version of the parser that was used to parse the log file for this report.
	*/
	logVersion: number

	/**
	* The number of segments used by the report. Will increase as more fights get uploaded.
	*/
	segments: number
 
 
}
export interface ReportGroup {
	/**
	* The set of abilities that were seen in this report group.
	*/
	abilities: Ability[]

	/**
	* The set of actors that were seen in this report group. This includes all players, pets and NPCs.
	*/
	actors: Actor[]

	/**
	* All of the fights in the report group.
	*/
	allFights: Fight[]

	/**
	* The set of fights that matches the report UI's filters for start time, end time, what encountersto allow, and whether or not to show trash, kills or wipes only.
	*/
	fights: Fight[]

	/**
	* The game version of reports in the report group. For World of Warcraft, 1 = Retail, 2 = Vanilla, 3 = TBC, and 4 = Wrath.For other games, this will just be 1.
	*/
	gameVersion: number

	/**
	* The language of the reports in the report group. Null if no language could be determined.
	*/
	language: null | string

	/**
	* The version of the parser that was used to parse the log file for this report.
	*/
	logVersion: number

	/**
	* All the reports loaded in this group.
	*/
	reports: Report[]
 
 
}
export interface ResourceChangeEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractResourceChangeEvent.maxResourceAmount
	*/
	maxResourceAmount: number

	/**
	* Inherited from AbstractResourceChangeEvent.otherResourceChange
	*/
	otherResourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChange
	*/
	resourceChange: number

	/**
	* Inherited from AbstractResourceChangeEvent.resourceChangeType
	*/
	resourceChangeType: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "resourcechange"

	/**
	* Inherited from AbstractResourceChangeEvent.waste
	*/
	waste: null | number
 
 
}
export interface ResourceData {
	/**
	* The current absorb shield on the actor. Does not exist in older logs.
	*/
	absorb: null | number

	/**
	* 
	*/
	additionalResources: null | ClassResource

	/**
	* The current armor of the actor. Does not exist in older logs.
	*/
	armor: null | number

	/**
	* The current attack power of the actor.
	*/
	attackPower: number

	/**
	* The unit's facing. Null for games that do not support facing.
	*/
	facing: null | number

	/**
	* The unit's current hit points.
	*/
	hitPoints: number

	/**
	* The current item level of the actor.
	*/
	itemLevel: number

	/**
	* The map id that the logging unit is on (not the unit represented by the resources). Not present in older logs.
	*/
	mapId: null | number

	/**
	* The unit's maximum hit points.
	*/
	maxHitPoints: number

	/**
	* Only for Mists of Pandaria Logs, the resolve of a tank actor. Null for other expansions.
	*/
	resolve: null | number

	/**
	* 
	*/
	resourceAmount: number

	/**
	* 
	*/
	resourceCap: number

	/**
	* 
	*/
	resourceCost: number

	/**
	* 
	*/
	resourceType: number

	/**
	* The current spell power of the actor.
	*/
	spellPower: number

	/**
	* The unit's x position.
	*/
	x: number

	/**
	* The unit's y position.
	*/
	y: number
 
 
}
export interface ResurrectEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "resurrect"
 
 
}
export interface SpellStoppedEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If the ability was a buff or debuff that was dispelled, purged or stolen, this booleanindicates if it was a buff vs a debuff.
	*/
	isBuff: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The ability that was interrupted, stolen, etc.
	*/
	stoppedAbility: Ability

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number
 
 
}
export interface SpellstealEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* If the ability was a buff or debuff that was dispelled, purged or stolen, this booleanindicates if it was a buff vs a debuff.
	*/
	isBuff: boolean

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The ability that was interrupted, stolen, etc.
	*/
	stoppedAbility: Ability

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "spellsteal"
 
 
}
export interface SummonEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "summon"
 
 
}
export interface TowerEndEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterEndEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterEndEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterEndEvent.encounterSize
	*/
	encounterSize: number

	/**
	* Inherited from AbstractEncounterEndEvent.isKill
	*/
	isKill: boolean

	/**
	* 
	*/
	layer: number

	/**
	* Inherited from AbstractEncounterEndEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* 
	*/
	rating: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "towerend"
 
 
}
export interface TowerStartEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* Inherited from AbstractEncounterStartEvent.encounterDifficulty
	*/
	encounterDifficulty: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterId
	*/
	encounterId: number

	/**
	* Inherited from AbstractEncounterStartEvent.encounterName
	*/
	encounterName: string

	/**
	* Inherited from AbstractEncounterStartEvent.encounterSize
	*/
	encounterSize: number

	/**
	* 
	*/
	layer: number

	/**
	* Inherited from AbstractEncounterStartEvent.originalEncounterId
	*/
	originalEncounterId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "towerstart"
 
 
}
export interface UnknownEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "unknown"
 
 
}
export interface WipeCalledEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "wipecalled"
 
 
}
export interface WorldMarkerPlacedEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The icon id that represents which marker it is.
	*/
	icon: number

	/**
	* The map game id that the marker was placed on.
	*/
	mapId: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "worldmarkerplaced"

	/**
	* The x position of the marker.
	*/
	x: number

	/**
	* The y position of the marker.
	*/
	y: number
 
 
}
export interface WorldMarkerRemovedEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The icon id that represents which marker is being removed.
	*/
	icon: number

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "worldmarkerremoved"
 
 
}
export interface ZoneChangeEvent {
	/**
	* The ability used by the source on the target. Null if no ability is set.
	*/
	ability: null | Ability

	/**
	* The source actor. Null if no source is set.
	*/
	source: null | Actor

	/**
	* The raw disposition of the source. Use the isFriendlyParticipant and isEnemyParticipant methods to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	sourceDisposition: ActorDisposition

	/**
	* The instance id of the source.
	*/
	sourceInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	sourceRaidMarker: number

	/**
	* Resource data for the source. Null if no resource information is available.
	*/
	sourceResources: null | ResourceData

	/**
	* The target actor. Null if no target is set.
	*/
	target: null | Actor

	/**
	* The raw disposition of the target. Use the isFriendlyParticipant and isEnemyParticipant methods on Fight to obtainthe overall single disposition for this actor. This field should be used with caution as it could flip if thelogger or the unit get mind controlled.
	*/
	targetDisposition: ActorDisposition

	/**
	* The instance id of the target.
	*/
	targetInstanceId: number

	/**
	* The raid marker on this source unit. 0 if no raid marker is set.
	*/
	targetRaidMarker: number

	/**
	* Resource data for the target. Null if no resource information is available.
	*/
	targetResources: null | ResourceData

	/**
	* The time offset of the event in milliseconds from the start of the report.
	*/
	timestamp: number

	/**
	* The type of the event.
	*/
	type: "zonechange"

	/**
	* The difficulty level of the zone. Not set in all games.
	*/
	zoneDifficulty: number

	/**
	* The game id of the zone
	*/
	zoneId: number

	/**
	* The name of the zone.
	*/
	zoneName: null | string

	/**
	* The size of the zone. Not set in all games.
	*/
	zoneSize: number
 
 
}
export type AbstractEncounterStartEvent = EncounterEvent
export type ActorDisposition = "friendly" | "enemy" | "neutral"
export type ActorType = "Player" | "Pet" | "NPC"
export type AnyEvent = CoreEvent | AuraBrokenEvent | CreateEvent | DestroyEvent | DrainEvent | ExtraAttacksEvent | LeechEvent | SpellstealEvent | SummonEvent | TowerStartEvent | TowerEndEvent | ArenaMatchStartEvent | ArenaMatchEndEvent | EmpowerStartEvent | EmpowerEndEvent
export type ApplyBuffOrDebuffEvent = ApplyOrRefreshEvent
export type Band = { endTime: number; startTime: number; }
export type CombatantInfoAura = { 	
/**
	* The game id of the applied aura.
	*/
	abilityGameId: number
 	
/**
	* An icon for the aura if one exists.
	*/
	icon: string | null
 	
/**
	* The name of the ability if it can be determined.
	*/
	name: string | null
 	
/**
	* The actor responsible for applying the aura to the player.
	*/
	source: Actor
 	
/**
	* The number of initial stacks. Not all games support this.
	*/
	stacks: number
 }
export type CombatantInfoCustomPower = { icon: string | null; isMajor: boolean; rank: number | null; slot: number | null; spellId: number; traitId: number; }
export type CombatantInfoGear = { gems: CombatantInfoGem[] | null; icon: string | null; id: number; itemLevel: number; name: string; onUseEnchant: number; permanentEnchant: number; quality: number; temporaryEnchant: number; }
export type CombatantInfoGem = { id: number; itemLevel: number; }
export type CombatantInfoShadowlandsLegendary = { effectIcon: string | null; effectId: number; }
export type CombatantInfoStats = { agility: number; armor: number; avoidance: number; block: number; critMelee: number; critRanged: number; critSpell: number; dodge: number; expertise: number; hasteMelee: number; hasteRanged: number; hasteSpell: number; hitMelee: number; hitRanged: number; hitSpell: number; intellect: number; leech: number; mastery: number; parry: number; resilienceCritTaken: number; resilienceDamageTaken: number; speed: number; spirit: number; stamina: number; strength: number; versatilityDamageDone: number; versatilityDamageReduction: number; versatilityHealingDone: number; }
export type CompleteRaid = { fights: Fight[]; raidId: number; }
export type Component = JsonTreeComponent | EnhancedMarkdownComponent | ChartComponent | TableComponent
export type CoreEvent = AbsorbedEvent | ApplyBuffEvent | ApplyBuffStackEvent | ApplyDebuffEvent | ApplyDebuffStackEvent | BeginCastEvent | CastEvent | CombatantInfoEvent | DamageEvent | DeathEvent | DispelEvent | DungeonStartEvent | DungeonEndEvent | DungeonEncounterStartEvent | DungeonEncounterEndEvent | EncounterStartEvent | EncounterEndEvent | HealingEvent | HealAbsorbedEvent | InstakillEvent | InterruptEvent | MapChangeEvent | PlayerEnterCombatEvent | PlayerExitCombatEvent | RefreshBuffEvent | RefreshDebuffEvent | RemoveBuffEvent | RemoveBuffStackEvent | RemoveDebuffEvent | RemoveDebuffStackEvent | ResourceChangeEvent | ResurrectEvent | UnknownEvent | WipeCalledEvent | WorldMarkerPlacedEvent | WorldMarkerRemovedEvent | ZoneChangeEvent
export type DamageHealingOrCastAmount = { entry: Actor | Ability | ActorInstance; total: number; }
export type DamageHealingOrCastAmounts = { damageDowntime: number; entries: DamageHealingOrCastAmount[]; totalTime: number; }
export type DamageHitType = "miss" | "hit" | "criticalHit" | "absorbedHit" | "blockedHit" | "blockedCriticalHit" | "glancingBlow" | "dodge" | "parry" | "deflect" | "immune" | "misfire" | "reflect" | "evade" | "resist" | "crushingBlow" | "partialResistedHit" | "partialResistedCriticalHit" | "unknown"
export type DungeonPullEnemy = { 	
/**
	* The actor involved in the pull.
	*/
	actor: Actor
 	
/**
	* The minimum instance group number of the actor that occurs in the pull.
	*/
	maxInstanceGroupId: number
 	
/**
	* The minimum instance number of the actor that occurs in the pull.
	*/
	maxInstanceId: number
 	
/**
	* The minimum instance group number of the actor that occurs in the pull.
	*/
	minInstanceGroupId: number
 	
/**
	* The minimum instance number of the actor that occurs in the pull.
	*/
	minInstanceId: number
 }
export type EnhancedMarkdownComponent = { component: "EnhancedMarkdown"; props: { content: string; }; }
export type EventAndAmount = { amount: number; event: AnyEvent; }
export type EventCategory = "damage" | "healing" | "casts" | "aurasGained" | "aurasCast" | "interrupts" | "resourceGain" | "dispels" | "deathsAndResurrects" | "summons" | "combatResurrects" | "externalHealingRequired" | "healingAbsorbed" | "deathSave" | "aggro" | "threat" | "calculatedDamage" | "calculatedHealing"
export type EventFilters = { 	
/**
	* The class of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
	*/
	actorClass: string
 	
/**
	* The report id of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
	*/
	actorId: number
 	
/**
	* The instance id of an actor to filter to. Equivalent in behavior to the Summary pane events view in reports.
	*/
	actorInstanceId: number
 	
/**
	* The number of player deaths after which events should be ignored.
	*/
	deathsCutoff: number
 	
/**
	* The end time of the filter. Events that occur after this end time will not be included.
	*/
	endTime: number
 	
/**
	* The phase to filter to.
	*/
	phase: number
 	
/**
	* The start time of the filter. Events that occur before this start time will not be included.
	*/
	startTime: number
 	/** 
	* Test if an event matches these filters.
	* @param event The event to check against the filters.
	* @param fight The fight that the event belongs to.
	* @return Whether or not the event matches the filters.
	*/
	matches(event: AnyEvent, fight: Fight): boolean
 }
export type ExpansionType = "unknown" | "vanilla" | "tbc" | "wrath" | "legion" | "bfa" | "shadowlands" | "dragonflight"
export type FightFilters = { 	
/**
	* The difficulty to filter to. If set to a value other than 0, only fights matching the specified difficulty will be matched.
	*/
	difficulty: number
 	
/**
	* The encounter to filter to. 0 if all fights should be included. If set to a specific boss, only pulls of that boss will be matched.
	*/
	encounterId: number
 	
/**
	* The end time of the filter. Fights that begin after this end time will not be included.
	*/
	endTime: number
 	
/**
	* A set of specific fight ids to match on. Exists on top of the other filters, so only fights in this list can be matched.
	*/
	fightIds: number[] | null
 	
/**
	* The kill type.
	*/
	killType: "all" | "encounters" | "trash" | "kills" | "wipes"
 	
/**
	* The start time of the filter. Fights that end before this start time will not be included.
	*/
	startTime: number
 	/** 
	* Test if a fight matches these filters.
	* @param fight The fight to check.
	* @return Whether or not the fight matches the filters.
	*/
	matches(fight: Fight): boolean
 }
export type HealingHitType = "miss" | "hit" | "criticalHit"
export type JsonTreeComponent = { component: "JsonTree"; props: object; }
export type Map = { file: string | null; id: number; name: string | null; }
export type Styles = { 	/** 
	* Get the CSS color for a given ability type.
	* @param type The ability type whose color should be retrieved
	* @return The color to use for the type in charts and tables.
	*/
	getColorForAbilityType(type: number): string
 }
export type TableColumn = { columns?: Record<string, TableColumn>; header: string; maxWidth?: number; minWidth?: number; noWrap?: boolean; textAlign?: "left" | "center" | "right"; width?: number; }
export type TableComponent = { component: "Table"; props: { columns: Record<string, TableColumn>; data: readonly Record<string, unknown>[]; }; }
export type TalentTreeNode = { icon?: string; id: number; nodeId: number; rank: number; spellId: number; }
export type WorldMarker = { 	
/**
	* When the marker was removed.
	*/
	endTime: number
 	
/**
	* The icon id that represents which marker it is.
	*/
	icon: number
 	
/**
	* The map game id that the marker was placed on.
	*/
	mapId: number
 	
/**
	* When the marker was placed.
	*/
	startTime: number
 	
/**
	* The x position of the marker.
	*/
	x: number
 	
/**
	* The y position of the marker.
	*/
	y: number
 }
export type Zone = { 	
/**
	* The difficulty of the zone. Null if zone difficulty is not supported by the game.
	*/
	difficulty: number | null
 	
/**
	* The game id of the zone.
	*/
	id: number
 	
/**
	* The name of the zone. Null if the zone name is not supported.
	*/
	name: string | null
 	
/**
	* The size of the zone. Null if zone size is not supported by the game.
	*/
	size: number | null
 }

/**
/* MANUAL ADDITION: This type is undocumented, but see This type is undocumented see {@link ChartComponent.props} for further information
*/
export type ChartComponentProps = object