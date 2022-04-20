declare type TFunction = {
    (interval: AsyncInterval): Promise<any>;
};
export declare class AsyncInterval {
    private readonly func;
    private readonly interval;
    private active;
    constructor(func: TFunction, interval: number);
    start(): void;
    stop(): void;
    isActive(): boolean;
    private setIsActive;
    private tick;
    static create(func: TFunction, interval: number): AsyncInterval;
}
export {};
