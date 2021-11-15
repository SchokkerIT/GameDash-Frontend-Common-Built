import { ErrorHandler } from './ErrorHandler';
import { Response } from './Response';
export declare class ErrorHandlerManager {
    private static defaultHandler;
    private readonly handlers;
    constructor();
    registerHandler(handler: ErrorHandler | {
        (response: Response): void;
    }): void;
    handleIncoming(response: Response): Promise<void>;
    registerDefaultHandler(): void;
    static getDefaultHandler(): ErrorHandler;
    static setDefaultHandler(handler: ErrorHandler): void;
}
