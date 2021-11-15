import { Country } from './Country';
import { ICountryProvider } from './ICountryProvider';
export declare class Countries {
    private static provider;
    static getAll(): Promise<Country[]>;
    static get(code: string): Promise<Country>;
    static create(code: string, name: string): Country;
    static getProvider(): ICountryProvider;
    static setProvider(provider: ICountryProvider): void;
}
