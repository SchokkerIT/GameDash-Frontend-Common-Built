export declare class Response<TResponse = any, TNativeResponse = any> {
    private readonly response;
    private readonly statusCode;
    private nativeResponse;
    constructor(response: TResponse, statusCode: number);
    getNativeResponse(): TNativeResponse;
    setNativeResponse(response: TNativeResponse): void;
    getRaw(): TResponse;
    getErrorMessage(): string;
    getErrorCode(): string;
    getErrorData(): any;
    getAsJson(): any;
    getAsBlob(): Blob;
    getStatusCode(): number;
}
