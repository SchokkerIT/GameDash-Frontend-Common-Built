import { AxiosResponse } from 'axios';
import { Time } from "../../../time/Time";
import { Url } from "../../../http/Url";
import { Headers } from './header/Headers';
import { Parameters } from './parameter/Parameters';
import { Response } from './response/Response';
import { ErrorHandlerManager as ResponseErrorHandlerManager } from './response/ErrorHandlerManager';
import { Methods as HttpMethodsEnum } from "../../../../enums/http/Methods";
import { ResponseType } from "../../../../types/http/ResponseType";
import { Response as IResponse } from "../../../../interfaces/api/client/request/Response";
import { Handle as ICallbackHandle } from "../../../../interfaces/listener/callback/Callback";
export declare class Request {
    protected readonly endpoint: string;
    private static defaultDomainFetcher;
    private readonly id;
    private readonly axios;
    private readonly headers;
    private readonly parameters;
    private readonly listeners;
    private readonly options;
    private readonly responseErrorHandlerManager;
    private domainFetcher;
    private responseType;
    private secure;
    private domain;
    private includeSession;
    private validateResponse;
    private retry;
    private startTime;
    private endTime;
    private version;
    constructor(endpoint: string, options?: IOptions);
    getId(): string;
    get(): Promise<Response>;
    post(): Promise<Response>;
    put(): Promise<Response>;
    delete(): Promise<Response>;
    getParameters(): Parameters;
    getHeaders(): Headers;
    shouldRetry(): boolean;
    setShouldRetry(shouldRetry: boolean): void;
    getResponseType(): ResponseType;
    setResponseType(responseType: ResponseType): void;
    shouldIncludeSession(): boolean;
    setShouldIncludeSession(shouldIncludeSession: boolean): void;
    shouldValidateResponse(): boolean;
    setShouldValidateResponse(shouldValidateResponse: boolean): void;
    getStartTime(): Time;
    private setStartTime;
    getEndTime(): Time;
    private setEndTime;
    getMillisecondsElapsed(): number;
    request(method: HttpMethodsEnum): Promise<Response>;
    getResponseErrorHandlerManager(): ResponseErrorHandlerManager;
    protected handleResponse<TResponseData = any>(method: HttpMethodsEnum, axiosResponse: AxiosResponse): Promise<Response>;
    onResponse(callback: {
        (method: HttpMethodsEnum, response: IResponse): any;
    }): ICallbackHandle;
    private invokeOnResponse;
    onUploadProgress(callback: {
        (uploadProgress: IUploadProgress): any;
    }): ICallbackHandle;
    isListeningForUploadProgress(): boolean;
    private invokeOnUploadProgress;
    private handleUploadProgress;
    onDownloadProgress(callback: {
        (downloadProgress: IDownloadProgress): any;
    }): ICallbackHandle;
    isListeningForDownloadProgress(): boolean;
    private invokeOnDownloadProgress;
    private handleDownloadProgress;
    isSecure(): Promise<boolean>;
    setIsSecure(secure: boolean): void;
    getUrl(): Promise<Url>;
    getEndpoint(): string;
    getDomain(): Promise<string>;
    setDomain(domain: string): void;
    getVersion(): string;
    setVersion(version: string): void;
    getDomainFetcher(): TDomainFetcher;
    setDomainFetcher(fetch: TDomainFetcher): Promise<void>;
    private getData;
    static getDefaultDomainFetcher(): TDomainFetcher;
    static setDefaultDomainFetcher(fetcher: TDomainFetcher): void;
}
export interface IUploadProgress {
    loaded: number;
    total: number;
}
export interface IDownloadProgress {
    loaded: number;
    total: number;
}
export interface IOptions {
    includeSession?: boolean;
}
export declare type TDomainFetcher = {
    (): Promise<string>;
};
