import { IHost } from './IHost';
import { Host as ISerializedHost } from 'interfaces/relay/host/Host';
export declare class HostSerializer {
    static serialize(host: IHost): Promise<ISerializedHost>;
}
