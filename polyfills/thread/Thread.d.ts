export declare class Thread {
    private func;
    private promise;
    constructor(func: Function);
    start(func: Function): Promise<void>;
    stop(): void;
    static sleep(ms: number): Promise<void>;
}
