import { TripleSplit as TripleSplitEnum } from "../../enums/time/TripleSplit";
export declare class Time {
    private readonly timestamp;
    constructor(timestamp: number);
    getTimestamp(): number;
    getUnixTimestamp(): number;
    getSecondsAgo(): number;
    toTimeAgoFormatted(format?: string): string;
    toFormatted(format: string): string;
    tripleSplit(): TripleSplitEnum;
    isSameDay(t2: Time): boolean;
    toDate(): Date;
    static fromDate(date: Date): Time;
    static create(timestamp: number): Time;
    static fromTimestamp(timestamp: number): Time;
    static fromUnixTimestamp(timestamp: number): Time;
    static now(): Time;
}
