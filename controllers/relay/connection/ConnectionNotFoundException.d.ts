import ConnectionException from './ConnectionException';
export default class ConnectionNotFoundException extends ConnectionException {
    constructor(message: string);
}
