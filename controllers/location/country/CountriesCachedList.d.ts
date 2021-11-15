import CachedList from 'controllers/cache/CachedList';
import { Country } from './Country';
export declare class CountriesCachedList extends CachedList<Country> {
    compare(a: any, b: any): boolean;
}
