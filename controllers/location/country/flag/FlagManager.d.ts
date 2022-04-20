import { Url } from "../../../http/Url";
import { Country } from '../Country';
import { FlagProvider } from './FlagProvider';
export declare class FlagManager {
    private static flagProvider;
    private readonly country;
    constructor(country: Country);
    getUrl(): Promise<Url>;
    getImage(): Promise<HTMLImageElement>;
    static getFlagProvider(): FlagProvider;
    static setFlagProvider(provider: FlagProvider): void;
}
