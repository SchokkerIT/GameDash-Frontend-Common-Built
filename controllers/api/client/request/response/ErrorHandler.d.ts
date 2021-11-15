import { Response } from './Response';
declare type TReturn = boolean | void;
declare type THandlerFunction = {
    (response: Response): Promise<TReturn> | TReturn;
};
export declare class ErrorHandler {
    private readonly handlerFunction;
    constructor(handlerFunction: THandlerFunction);
    execute(response: Response): Promise<TReturn>;
}
export {};
