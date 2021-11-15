import ChannelException from './ChannelException';
export default class AlreadySubscribedException extends ChannelException {
    constructor(message: string);
}
