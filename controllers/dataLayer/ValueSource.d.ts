import { Time } from 'controllers/time/Time';
export declare type TFetchFunction = {
    (name: string): Promise<any>;
};
export declare class ValueSource {
    private readonly fetchableValues;
    private readonly fetchFunction;
    private timeout;
    private lastFetchTime;
    constructor(fetchableValues: string[], fetchFunction: TFetchFunction);
    getFetchableValues(): string[];
    valueIsFetchable(name: string): boolean;
    fetch(name: string): Promise<any>;
    getTimeout(): number;
    hasTimedOut(): boolean;
    setTimeout(timeout: number): void;
    getTimeLastFetched(): Time;
    updateTimeLastFetched(): void;
    setTimeLastFetched(time: Time): void;
}
