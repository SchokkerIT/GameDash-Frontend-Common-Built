import { Time } from "../../time/Time";
export interface ISetOptions {
    timeExpiry?: Time;
    expiresIn?: number;
}
export interface IProvider {
    get(key: string): Promise<any>;
    set(key: string, value: any, options: ISetOptions): Promise<void>;
    delete(key: string, options: any): Promise<void>;
    exists(key: string): Promise<boolean>;
    hasExpired(key: string): Promise<boolean>;
    getTimeLastModified(key: string): Promise<Time>;
}
