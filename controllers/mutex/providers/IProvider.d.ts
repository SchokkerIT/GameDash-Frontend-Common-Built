import { TLock } from '../Mutex';
export interface IProvider {
    acquire(): Promise<TLock>;
    release(): Promise<void>;
    runExclusive<T>(func: {
        (): Promise<T> | T;
    }): Promise<T>;
    isLocked(): Promise<boolean>;
}
