import { Uri } from 'controllers/http/Uri';
export interface IHost {
    getHostname(): Promise<string>;
    getSocketPort(): Promise<number>;
    socketIsSecure(): Promise<boolean>;
    getSocketUri(): Promise<Uri>;
    isPrimary(): Promise<boolean>;
}
