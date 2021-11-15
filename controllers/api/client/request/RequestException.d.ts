import ExceptionBase from 'exceptions/Exception';
export default class RequestException extends ExceptionBase {
    private readonly httpStatusCode?;
    constructor(message: string, code?: string, httpStatusCode?: number);
    getHttpStatusCode(): number;
    hasHttpStatusCode(): boolean;
}
