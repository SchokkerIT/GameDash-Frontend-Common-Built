import { IProvider } from './providers/IProvider';
export declare class Mutex {
    private static defaultProvider;
    private static registeredProviders;
    private provider;
    acquire(): Promise<TLock>;
    release(): Promise<void>;
    runExclusive<T>(func: {
        (): Promise<T> | T;
    }): Promise<T>;
    isLocked(): Promise<boolean>;
    getProvider(): IProvider;
    setProvider(provider: IProvider): void;
    static getDefaultProvider(): IProvider;
    static setDefaultProvider(name: string): void;
    static getRegisteredProvider(name: string): any;
    static registerProvider(name: string, provider: any): void;
}
export declare type TLock = {
    (): void;
};
