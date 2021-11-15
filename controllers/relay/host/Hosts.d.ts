import { IHost } from './IHost';
import { IHostProvider } from './IHostProvider';
export declare class Hosts {
    private static provider;
    static getAll(): Promise<IHost[]>;
    static getPrimary(): Promise<IHost>;
    static getProvider(): IHostProvider;
    static setProvider(provider: IHostProvider): void;
}
