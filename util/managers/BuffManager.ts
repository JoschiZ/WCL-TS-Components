import { RpgLogs } from "../../definitions/RpgLogs";
import type {BuffOrDebuffEvents, ManagerOptions} from "../../definitions/Template";
import checkFilter from "./checkFilter";

type BuffManagerOptions  = ManagerOptions & {
  auraIds?: Set<number>;
  fight?: RpgLogs.Fight;

  captureEvent?: boolean;
};

export default class BuffManager {
  readonly actors: { [sourceId: number]: SourceActor } = {};

  /**
   * Object to "easily" manage buff uptimes. This works only on friendly targets and not pet sources. Because everything else is horrible
   * @param events
   * @param options
   * @see {@link RpgLogs.Fight.isEventExcludedFromDamageRankings}
   */

  constructor(events: ReadonlyArray<BuffOrDebuffEvents>, options: BuffManagerOptions = {}) {

    for (const event of events) {
      if (!event.ability || !event.target || !event.source) {
        continue;
      }
      if (event.type.includes("stack")) {
        continue;
      }
      // Not ignoring pets will lead to a world of pain!
      if (event.target.type === "Pet") {
        continue;
      }
      // Debuffs on multiple enemies are also really shit
      if (event.targetDisposition !== "friendly") {
        continue;
      }
      if (options.auraIds && !options.auraIds.has(event.ability.id)) {
        continue;
      }
      if (options.fight && options.fight.isEventExcludedFromDamageRankings(event)) {
        continue;
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

      const source = new SourceActor(event.source.id);
      const target = new TargetActor(event.target.id);
      const buff = new Aura(event.ability.id);

      if (event.type.includes("apply")) {
        this.addActor(source)
          .addTarget(target)
          .addBuff(buff)
          .buffApplied(event, options.captureEvent);
      } else if (event.type.includes("remove")) {
        this.addActor(source)
          .addTarget(target)
          .addBuff(buff)
          .buffRemoved(event, options.captureEvent);
      }
    }
  }

  addActor(source: SourceActor) {
    if (this.actors[source.id]) return this.actors[source.id];

    this.actors[source.id] = source;
    return source;
  }

  getAurasBySourceActor(id: number){
    if (this.actors[id]){
      return this.actors[id]
    }
  }

  getSelfBuff(idInReport: number, auraId: number){
    return this.actors[idInReport].targets[idInReport].buffs[auraId]
  }
}

class SourceActor {
  readonly id: number;
  readonly targets: { [targetId: number]: TargetActor } = {};

  constructor(id: number) {
    this.id = id;
  }

  addTarget(target: TargetActor) {
    if (this.targets[target.id]) return this.targets[target.id];

    this.targets[target.id] = target;
    return target;
  }
}

class TargetActor {
  readonly id: number;
  readonly buffs: { [buffId: number]: Aura } = {};

  constructor(id: number) {
    this.id = id;
  }

  addBuff(ability: Aura) {
    if (this.buffs[ability.id]) return this.buffs[ability.id];

    this.buffs[ability.id] = ability;
    return ability;
  }
}

export class Aura {
  readonly id: number;
  private applied: number[] = [];
  private removed: number[] = [];
  private _sortedTimes: number[][] | undefined;
  private events: { [timestamp: number]: BuffOrDebuffEvents } = {}

  constructor(id: number) {
    this.id = id;
  }

  buffApplied(event: BuffOrDebuffEvents, captureEvent = false) {
    this.applied.push(event.timestamp);
    if (captureEvent){
      this.events[event.timestamp] = event
    }
  }

  buffRemoved(event: BuffOrDebuffEvents, captureEvent = false) {
    this.removed.push(event.timestamp);
    if (captureEvent){
      this.events[event.timestamp] = event
    }
  }

  get appliedTimings(): ReadonlyArray<number>{
    return this.applied
  }

  get removedTimings(): ReadonlyArray<number>{
    return this.removed
  }

  /**
   * Returns a deep copy of [start, end] times of this buff.
   * The creation of the timings is cached
   */
  get sortedTimeSpans(): number[][] {
    if (this._sortedTimes) return JSON.parse(JSON.stringify(this._sortedTimes));

    this.applied = Array.from(new Set(this.applied));
    this.removed = Array.from(new Set(this.removed));

    while (this.applied.length < this.removed.length) {
      this.applied.unshift(0);
    }
    this.applied.sort((a, b) => a - b);

    while (this.removed.length < this.applied.length) {
      this.removed.push(Infinity);
    }
    this.removed.sort((a, b) => a - b);

    this._sortedTimes = Array.from(
      Array(Math.max(this.applied.length, this.removed.length)),
      (_, i) => {
        const start = this.applied[i] ? this.applied[i] : 0;
        const end = this.removed[i] ? this.removed[i] : Infinity;
        return [start, end];
      }
    );

    return JSON.parse(JSON.stringify(this._sortedTimes));
  }

  isTimeInTimeSpans(time: number) {
    let left = 0;
    let right = this.sortedTimeSpans.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const [startTime, endTime] = this.sortedTimeSpans[mid];

      if (time >= startTime && time <= endTime) {
        return true;
      } else if (time < startTime) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  }

  /**
   * Calculates the complete duration of a buff in a fight.
   * @param fight
   * @return number the sum of duration in milliseconds
   */
  getFullDuration(fight: RpgLogs.Fight): number{

    let duration = 0
    // Prevent some unneeded deep copying if this is called multiple times.
    const sortedTimeSpans = this._sortedTimes ? this._sortedTimes : this.sortedTimeSpans

    for (const timeSpan of sortedTimeSpans) {
      let [start, end] = timeSpan
      start ??= fight.startTime
      end ??= fight.endTime
      duration += end - start
    }

    return duration
  }
}
