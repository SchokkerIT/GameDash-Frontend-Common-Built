import { Time } from "../../time/Time";
export interface ISetOptions {
    timeExpiry?: Time;
    expiresIn?: number;
}
export interface IProvider<TSupportedValues extends any = any> {
    getAll(): Promise<{
        [key: string]: any;
    }>;
    get(key: string): Promise<TSupportedValues>;
    set(key: string, value: TSupportedValues, options: ISetOptions): Promise<void>;
    delete(key: string, options: any): Promise<void>;
    exists(key: string): Promise<boolean>;
    clear(): Promise<void>;
    hasExpired(key: string): Promise<boolean>;
    getTimeLastModified(key: string): Promise<Time>;
}
