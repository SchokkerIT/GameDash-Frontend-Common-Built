export interface ICached {
    clearCache(): Promise<void> | void;
}
