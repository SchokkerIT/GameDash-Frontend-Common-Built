import ConnectionException from '../ConnectionException';
export default class ChannelException extends ConnectionException {
    constructor(message: string);
}
