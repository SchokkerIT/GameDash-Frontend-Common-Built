import { IProvider } from './providers/IProvider';
export declare class GlobalStorage {
    private static readonly storage;
    static get(key: string): Promise<any>;
    static set(key: string, value: any, options?: any): Promise<void>;
    static delete(key: string, options?: any): Promise<void>;
    static exists(key: string): Promise<boolean>;
    static getProvider(): IProvider;
    static setProvider(provider: IProvider): void;
}
