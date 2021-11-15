import { IProvider } from './IProvider';
import { TLock } from '../Mutex';
export declare class AsyncMutexProvider implements IProvider {
    private mutex;
    private releaser;
    acquire(): Promise<TLock>;
    release(): Promise<void>;
    runExclusive<T>(func: {
        (): Promise<T>;
    }): Promise<T>;
    isLocked(): Promise<boolean>;
}
