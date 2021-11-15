declare type TConnectFunction = {
    (): Promise<void> | void;
};
export declare class ConnectWrapper {
    private readonly connectFunction;
    private maxAttempts;
    constructor(connectFunction: TConnectFunction);
    attempt(): Promise<void>;
    getMaxAttempts(): number;
    setMaxAttempts(attempts: number): void;
}
export {};
