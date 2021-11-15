import { Connection } from './Connection';
import { Connection as ISerializedConnection } from 'interfaces/relay/connection/Connection';
export declare class ConnectionSerializer {
    static serialize(connection: Connection): Promise<ISerializedConnection>;
}
