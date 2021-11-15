export declare class System {
    static sleep(ms: number): Promise<void>;
    static sleepInfinite(): Promise<void>;
    static startThread(func: () => void): Promise<void>;
}
