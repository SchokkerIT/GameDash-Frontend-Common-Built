import RuntimeException from 'exceptions/RuntimeException';
export default class LoggerException extends RuntimeException {
    constructor(message: string);
}
