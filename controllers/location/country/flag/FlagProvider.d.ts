import { Url } from 'controllers/http/Url';
import { Country } from '../Country';
export declare abstract class FlagProvider {
    abstract getUrl(country: Country): Promise<Url>;
}
