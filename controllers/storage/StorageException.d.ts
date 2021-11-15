import RuntimeException from 'exceptions/RuntimeException';
export default class StorageException extends RuntimeException {
    constructor(message: string);
}
