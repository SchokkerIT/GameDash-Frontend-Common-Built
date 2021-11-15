export interface IAdapter {
    message(message: any, category: string): void;
    error(message: any): void;
    info(message: any): void;
    success(message: any): void;
    debug(message: any): void;
    warn(message: any): void;
    trace(message: any): void;
}
