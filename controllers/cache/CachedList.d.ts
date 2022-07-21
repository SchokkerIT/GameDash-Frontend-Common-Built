import { Time } from "../time/Time";
import { IImplementation } from './IImplementation';
import { AbstractTaggedImplementation } from './AbstractTaggedImplementation';
export default abstract class<T> extends AbstractTaggedImplementation implements IImplementation {
    private mutex;
    private list;
    private timeout;
    private lastModifiedTime;
    fetch(): T[];
    private write;
    getAll(): T[];
    add(item: T): void;
    addAll(items: T[]): void;
    remove(item: T): void;
    isCached(): boolean;
    clear(): void;
    handle(fetch: {
        (): Promise<any[]>;
    }): Promise<any[]>;
    handleSync(fetch: {
        (): any[];
    }): any[];
    /**
     * Get timeout in seconds
     */
    getTimeout(): number;
    /**
     * Set timeout in seconds
     * @param timeout
     */
    setTimeout(timeout: number): void;
    hasTimedOut(): boolean;
    getLastModifiedTime(): Time;
    protected ensureImplementationIsRegistered(): boolean;
    private updateLastModifiedTime;
    abstract compare(a: any, b: any): boolean;
}
