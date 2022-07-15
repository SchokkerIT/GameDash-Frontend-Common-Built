export declare type TCallback<TReturn = any> = {
    (...args: any): Promise<TReturn> | TReturn;
};
export declare class Callback<TReturn = any> {
    private readonly callback;
    constructor(callback: TCallback<TReturn>);
    execute(args?: any[]): Promise<TReturn>;
}
