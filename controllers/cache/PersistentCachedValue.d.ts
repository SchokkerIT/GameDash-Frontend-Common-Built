import { IImplementation } from './IImplementation';
import { AbstractTaggedImplementation } from "./AbstractTaggedImplementation";
export declare class PersistentCachedValue<T> extends AbstractTaggedImplementation implements IImplementation {
    private readonly handleMutex;
    private readonly storageKey;
    private readonly storage;
    private timeout;
    constructor(storageKey: string, options?: {
        timeout?: number;
    });
    getValue(): Promise<T>;
    setValue(value: T): Promise<void>;
    isCached(): Promise<boolean>;
    clear(): Promise<void>;
    handle(fetch: {
        (): Promise<T> | T;
    }): Promise<T>;
    getTimeout(): number;
    setTimeout(timeout: number): void;
    protected ensureImplementationIsRegistered(): boolean;
}
