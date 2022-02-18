import { IImplementation } from './IImplementation';
export declare class CachedValue<T> implements IImplementation {
    private readonly handleMutex;
    private value;
    constructor(value?: T);
    getValue(): T;
    setValue(value: T): void;
    isCached(): boolean;
    getExpiryThreshold(): number;
    setExpiryThreshold(seconds: number): void;
    clear(): void;
    /**
     * Handler function to prevent boilerplate code having to handle synchronisation, checking for cache status, fetching and caching
     * @param fetch
     */
    handle(fetch: {
        (): Promise<T> | T;
    }): Promise<T>;
    handleSync(fetch: {
        (): T;
    }): T;
    /**
     * Construct a given class object with parameters and store
     * @param classObject
     * @param args
     */
    handleObjectConstruction(classObject: new (...any: any[]) => any, args: any[]): any;
}
