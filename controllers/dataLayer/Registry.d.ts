import { IDataLayer } from './IDataLayer';
export declare class Registry {
    private static registered;
    static getRegistered(): IDataLayer[];
    static register(dataLayer: IDataLayer): void;
    static getWithTags(tags: string[]): IDataLayer[];
    static getWithTag(tag: string): IDataLayer[];
    static clearAll(): void;
    static clearWithTags(tags: string[]): void;
    static clearWithTag(tag: string): void;
}
