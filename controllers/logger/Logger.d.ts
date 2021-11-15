import { IAdapter } from './adapter/IAdapter';
export declare class Logger {
    private static defaultAdapter;
    private adapter;
    constructor(adapter: IAdapter);
    message(message: any, category: any): void;
    error(message: any): void;
    warn(message: any): void;
    trace(message: any): void;
    info(message: any): void;
    success(message: any): void;
    debug(message: any): void;
    static getDefaultAdapter(): IAdapter;
    static setDefaultAdapter(adapter: IAdapter): void;
    static getInstance(adapter?: IAdapter): Logger;
}
