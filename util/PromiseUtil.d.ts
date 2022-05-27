export interface IProgress {
    current: number;
    steps: number;
    percentage: number;
    error: Error;
}
export default class PromiseUtil {
    static allWithProgress(promises: Promise<any>[], callback: {
        (progress: IProgress): Promise<void> | void;
    }, options?: {
        mode?: 'all' | 'allSettled';
    }): Promise<IProgress[]>;
}
