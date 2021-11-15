import { Time } from 'controllers/time/Time';
export declare class ExpiringValue<T> {
    private time;
    private threshold;
    private value;
    constructor();
    getValue(): T;
    setValue(value: T): void;
    hasExpired(): boolean;
    getTime(): Time;
    setTime(time: Time): void;
    resetTime(): void;
    getThreshold(): number;
    setThreshold(seconds: number): void;
}
