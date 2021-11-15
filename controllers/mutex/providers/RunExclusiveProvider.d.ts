import { AsyncMutexProvider } from './AsyncMutexProvider';
export declare class RunExclusiveProvider extends AsyncMutexProvider {
    runExclusive<T>(func: {
        (): Promise<T>;
    }): Promise<T>;
}
