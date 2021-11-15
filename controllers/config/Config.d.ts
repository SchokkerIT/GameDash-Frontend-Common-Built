import IProvider from './providers/IProvider';
export declare class Config {
    private static instance;
    static init(): Promise<void>;
    static get(path: string): Promise<any>;
    static exists(path: string): Promise<boolean>;
    static getProvider(): IProvider;
    static setProvider(provider: IProvider): void;
}
