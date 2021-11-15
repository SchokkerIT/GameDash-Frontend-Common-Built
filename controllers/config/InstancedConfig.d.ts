import IProvider from './providers/IProvider';
export declare class InstancedConfig {
    private provider;
    init(): Promise<void>;
    get(path: string): Promise<any>;
    exists(path: string): Promise<boolean>;
    getProvider(): IProvider;
    setProvider(provider: IProvider): void;
}
