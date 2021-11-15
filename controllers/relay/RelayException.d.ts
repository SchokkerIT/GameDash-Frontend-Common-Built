import RuntimeException from 'exceptions/RuntimeException';
export default class RelayException extends RuntimeException {
    constructor(message: string);
}
