import { Connection } from './Connection';
import { IHost } from '../host/IHost';
export declare class Connections {
    private static connections;
    static getAllRegistered(): Connection[];
    static getRegistered(id: string): Connection;
    static getRegisteredByName(name: string): Connection;
    static createRegistered(host: IHost): Connection;
}
