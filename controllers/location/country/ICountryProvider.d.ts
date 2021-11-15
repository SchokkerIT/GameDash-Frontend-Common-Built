import { Country } from './Country';
export interface ICountryProvider {
    getAll(): Promise<Country[]>;
}
