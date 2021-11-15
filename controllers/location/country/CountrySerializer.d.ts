import { Country } from './Country';
import { Country as ICountry } from "../../../interfaces/location/country/Country";
export declare class CountrySerializer {
    static serialize(country: Country): Promise<ICountry>;
}
