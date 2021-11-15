import ConnectionException from './ConnectionException';
export default class AlreadyConnectedException extends ConnectionException {
    constructor(message: string);
}
