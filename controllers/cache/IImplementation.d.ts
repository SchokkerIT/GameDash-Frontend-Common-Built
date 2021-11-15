export interface IImplementation {
    isCached(): Promise<boolean> | boolean;
    clear(): Promise<void> | void;
}
