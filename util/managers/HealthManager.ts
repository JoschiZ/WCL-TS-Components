import {EventTypeUnions, ManagerOptions} from "../../definitions/Template";
import checkFilter from "./checkFilter";
import CustomLogger from "../debugging/CustomLogger";
import {RpgLogs} from "../../definitions/RpgLogs";

type HealthManagerOptions = ManagerOptions
export default class HealthManager{
    targets: Map<number, Target> = new Map()
    options: HealthManagerOptions
    private readonly logger: CustomLogger

    constructor(events: Array<ReadonlyArray<EventTypeUnions<"healing">> | ReadonlyArray<RpgLogs.DamageEvent>>, logger: CustomLogger, options: HealthManagerOptions = {}) {
        this.options = options
        this.logger = logger
        this.logger.addMessage("Events in Health Manager", events)
        for (const eventList of events){
            for (const event of eventList){
                if (!event.targetResources || !event.target){
                    continue
                }
                if (options.targetFilters && checkFilter(event.target, options.targetFilters)) {
                    continue;
                }
                if (options.sourceFilters && checkFilter(event.source, options.sourceFilters)) {
                    continue;
                }
                if (options.abilityFilters && checkFilter(event.ability, options.abilityFilters)) {
                    continue;
                }

                const target = this.addTarget(new Target(event.target.name, event.target.idInReport, this.logger))
                target.addHealth(event)
            }
        }
        for (const target of this.targets){
            target[1].sortHealth()
        }
    }

    private addTarget(target: Target){
        const existingTarget = this.targets.get(target.id)
        if (existingTarget){
            return existingTarget
        }
        this.targets.set(target.id, target)
        return target
    }

    /**
     * @param idInReport
     * @param timeStamp
     * @param timingOverride By default the closest damage event to your timestamp is chosen. This will set the behaviour to always return the known health directly before or after a timestamp.
     * If the health at the exact timestamp is known that is still returned regardless
     */
    getHealth(idInReport: number, timeStamp: number, timingOverride?: "before" | "after"){
        const target = this.targets.get(idInReport)
        if (!target){
            return Infinity
        }

        const health = target.getHealth(timeStamp, timingOverride)
        if (!health){
            return Infinity
        }
        return health
    }
}

class Target {
    name: string
    id: number
    maxHealth = 0
    private readonly logger: CustomLogger
    private health: Map<number, number> = new Map()

    constructor(name: string, id: number, logger: CustomLogger) {
        this.name = name
        this.id = id
        this.logger = logger
    }

    sortHealth(){
        this.health = new Map([...this.health.entries()].sort());
    }

    addHealth(event: EventTypeUnions<"healing"> | RpgLogs.DamageEvent){
        if (!event.target || !event.targetResources){
            return
        }
        let health = event.targetResources.hitPoints
        // this is actually before / after specific this implementation just works with before
        if (event.type === "damage"){

            health -= event.amount
            if (health <= 0)
                return;
            this.health.set(event.timestamp + 1, health)
        }
        if (event.type === "heal"){

            health += event.amount
            this.health.set(event.timestamp + 1, health)
        }
        else {
            this.health.set(event.timestamp, health)
        }

        this.maxHealth = event.targetResources.maxHitPoints
    }


    getHealth(timestamp:number, timingOverride?: "before" | "after"){
        this.logger.addMessage("Checking health at", {timestamp, health: Object.fromEntries(this.health)})
        const possibleHealth = this.health.get(timestamp)
        if (possibleHealth){
            return possibleHealth
        }

        if (this.health.size === 0){
            return null
        }

        let currentHealth = null;
        let currentTime = null;
        if (timingOverride === "before"){
            // If no prior damage event happened we assume the actor is full health. This may be inaccurate sometimes
            currentHealth = this.maxHealth

            for (const [time, health] of this.health){
                //this.logger.addMessage("checked time", {time, against:timestamp})
                if (time > timestamp){
                    this.logger.addMessage("broke with", {breakTime: time, currentTime})
                    break
                }
                currentTime = time
                currentHealth = health
            }
            this.logger.addMessage(`returned health`, {currentTime, currentHealth, timestamp})
            return currentHealth
        }

        if (timingOverride === "after"){
            for (const [time, health] of this.health){
                currentHealth = health
                currentTime = time
                if (time > timestamp){
                    break
                }
            }
            this.logger.addMessage(`returned health`, {currentTime, currentHealth, timestamp})
            return currentHealth
        }
        return this.getClosestHealth(timestamp)
    }

    private getClosestHealth(timestamp: number){
        let currentHealth: number | null = null
        let smallestDiff = Infinity
        let currentTime : null | number = null
        for (const [time, health] of this.health){
            currentHealth ??= health
            const diff = Math.abs(time - timestamp)
            if (diff <= smallestDiff){
                currentHealth = health
                smallestDiff = diff
                currentTime = time
            }
            else{
                break
            }
        }
        this.logger.addMessage(`returned health`, {currentTime, currentHealth, timestamp})
        return currentHealth
    }
}