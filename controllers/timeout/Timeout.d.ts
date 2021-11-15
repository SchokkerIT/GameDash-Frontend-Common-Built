declare type TFunc = {
    (...any: any[]): any;
};
export declare class Timeout {
    private id;
    private _isRunning;
    private readonly func;
    private readonly ms;
    constructor(func: TFunc, ms: number);
    start(): void;
    stop(): void;
    isRunning(): boolean;
    reset(): void;
    setIsRunning(isRunning: boolean): void;
    static start(func: {
        (...any: any[]): any;
    }, ms: number): Timeout;
}
export {};
