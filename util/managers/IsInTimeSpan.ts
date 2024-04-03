import {Aura} from "./BuffManager";

export class IsInTimeSpan {
    readonly timeSpans: number[][];
    private currentTimeSpan

    constructor(ability: Aura) {
        this.timeSpans = ability.sortedTimeSpans;
        this.currentTimeSpan = this.timeSpans.shift()
    }



    isInTimeSpan(time: number): boolean {

        if (!this.currentTimeSpan) {
            return false;
        }

        let start = this.currentTimeSpan[0];
        start ??= 0

        let end = this.currentTimeSpan[1];
        end ??= Infinity

        if (time > end) {
            this.currentTimeSpan = this.timeSpans.shift()
            return this.isInTimeSpan(time);
        }

        return time >= start && time <= end;
    }
}