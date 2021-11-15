import { IImplementation } from './IImplementation';
export declare class CachedValue<T> implements IImplementation {
    private readonly handleMutex;
    private value;
    constructor();
    getValue(): T;
    setValue(value: T): void;
    isCached(): boolean;
    getExpiryThreshold(): number;
    setExpiryThreshold(seconds: number): void;
    clear(): void;
    handle(fetch: {
        (): Promise<T> | T;
    }): Promise<T>;
    handleSync(fetch: {
        (): T;
    }): T;
    handleObjectConstruction(classObject: new (...any: any[]) => any, args: any[]): any;
}
