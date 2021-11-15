export declare type TCallback = {
    (...args: any): Promise<void> | void;
};
export declare class Callback {
    private readonly callback;
    constructor(callback: TCallback);
    execute(args?: any[]): Promise<void>;
}
