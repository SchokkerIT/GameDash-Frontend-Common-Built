declare type TFunction = {
    (Manager: Manager): Promise<any>;
};
export declare class Manager {
    private readonly func;
    private readonly interval;
    private _isActive?;
    constructor(func: TFunction, interval: number);
    start(): void;
    stop(): void;
    isActive(): boolean;
    private setIsActive;
    private tick;
}
declare const initiator: (func: TFunction, interval: number) => Manager;
export default initiator;
