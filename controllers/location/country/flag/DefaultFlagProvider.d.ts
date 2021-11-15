import { Url } from 'controllers/http/Url';
import { FlagProvider } from './FlagProvider';
import { Country } from '../Country';
export declare class DefaultFlagProvider extends FlagProvider {
    getUrl(country: Country): Promise<Url>;
}
