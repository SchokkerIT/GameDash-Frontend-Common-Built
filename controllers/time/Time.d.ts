import Moment from 'moment';
import { TripleSplit as TripleSplitEnum } from "../../enums/time/TripleSplit";
export declare class Time {
    private readonly moment;
    constructor(moment: Moment.Moment);
    getUnixTimestamp(): number;
    getUnixMillisTimestamp(): number;
    getSecondsAgo(): number;
    toTimeAgoFormatted(format?: string): string;
    toFormatted(format: string): string;
    tripleSplit(): TripleSplitEnum;
    isSameDay(t2: Time): boolean;
    toMoment(): Moment.Moment;
    toDate(): Date;
    /**
     * Return UTC to local timezone offset in seconds
     */
    static getUtcOffset(): number;
    static fromDate(date: Date): Time;
    static fromUnixTimestamp(timestamp: number): Time;
    static fromUnixTimestampMillis(timestampMillis: number): Time;
    static fromUnixTimestampToUtc(timestamp: number): Time;
    static now(): Time;
    static nowUtc(): Time;
}
