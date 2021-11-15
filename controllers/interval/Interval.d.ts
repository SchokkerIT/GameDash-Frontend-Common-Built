declare type TFunc = {
    (interval: Interval): Promise<void> | void;
};
export declare class Interval {
    private readonly func;
    private readonly ms;
    private id;
    private running;
    private iteration;
    constructor(func: TFunc, ms: number);
    getId(): number;
    start(): void;
    suspend(): void;
    isRunning(): boolean;
    reset(): void;
    setIsRunning(isRunning: boolean): void;
    getIteration(): number;
    private setIteration;
    private incrementIteration;
    static create(func: TFunc, ms: number): Interval;
    static start(func: TFunc, ms: number): Interval;
}
export {};
