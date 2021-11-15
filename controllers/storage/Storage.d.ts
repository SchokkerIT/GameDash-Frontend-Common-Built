import { Time } from 'controllers/time/Time';
import { IProvider, ISetOptions as IProviderSetOptions } from './providers/IProvider';
export interface ISetOptions extends IProviderSetOptions {
}
export declare class Storage {
    private static defaultProvider;
    private provider;
    constructor(provider?: IProvider);
    get(key: string): Promise<any>;
    set(key: string, value: any, options?: ISetOptions): Promise<void>;
    delete(key: string, options?: any): Promise<void>;
    exists(key: string): Promise<boolean>;
    hasExpired(key: string): Promise<boolean>;
    getTimeLastModified(key: string): Promise<Time>;
    getProvider(): IProvider;
    setProvider(provider: IProvider): void;
    static getDefaultProvider(): IProvider;
    static setDefaultProvider(provider: IProvider): void;
}
