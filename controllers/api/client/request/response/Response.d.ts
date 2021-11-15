export declare class Response {
    private readonly response;
    private readonly statusCode;
    constructor(response: any, statusCode: number);
    getRaw(): any;
    getErrorMessage(): string;
    getErrorCode(): string;
    getErrorData(): any;
    getAsJson(): any;
    getAsBlob(): Blob;
    getStatusCode(): number;
}
