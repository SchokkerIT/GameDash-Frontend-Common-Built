import { Request, IOptions, TDomainFetcher } from './request/Request';
import { Handle as IListenerCallbackHandle } from "../../../interfaces/listener/callback/Callback";
import { Request as IRequest } from "../../../interfaces/api/client/request/Request";
import { Response as IResponse } from "../../../interfaces/api/client/request/Response";
import { Methods as HttpMethodsEnum } from "../../../enums/http/Methods";
export declare class Client {
    private static listeners;
    static getDefaultDomainFetcher(): TDomainFetcher;
    static setDefaultDomainFetcher(fetcher: TDomainFetcher): void;
    static init(endpoint: string, options?: IOptions): Request;
    static onResponse(callback: {
        (request: IRequest, response: IResponse): any;
    }): IListenerCallbackHandle;
    static invokeOnResponse(request: Request, method: HttpMethodsEnum, response: IResponse): Promise<void>;
}
