import { Connection } from 'controllers/relay/connection/Connection';
import { IHost } from './host/IHost';
export declare class Relay {
    private static primaryConnection;
    static getPrimaryConnection(): Promise<Connection>;
    static createConnection(host: IHost): Connection;
}
