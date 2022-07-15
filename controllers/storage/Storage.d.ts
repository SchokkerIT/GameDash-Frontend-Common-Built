import { Time } from "../time/Time";
import { IProvider, ISetOptions as IProviderSetOptions } from './providers/IProvider';
export interface ISetOptions extends IProviderSetOptions {
}
export declare class Storage {
    private static defaultProvider;
    private provider;
    constructor(provider?: IProvider);
    getAll(): Promise<{
        [key: string]: any;
    }>;
    get(key: string): Promise<any>;
    set<T>(key: string, value: T, options?: ISetOptions): Promise<void>;
    delete(key: string, options?: any): Promise<void>;
    exists(key: string): Promise<boolean>;
    hasExpired(key: string): Promise<boolean>;
    getTimeLastModified(key: string): Promise<Time>;
    getProvider(): IProvider;
    setProvider(provider: IProvider): void;
    static getDefaultProvider(): IProvider;
    static setDefaultProvider(provider: IProvider): void;
}
