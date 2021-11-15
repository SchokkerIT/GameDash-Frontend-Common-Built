import ConnectionException from './ConnectionException';
export default class ConnectionTimedOutException extends ConnectionException {
    constructor(message: string);
}
