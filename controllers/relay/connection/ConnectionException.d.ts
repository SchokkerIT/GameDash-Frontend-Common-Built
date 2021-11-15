import RelayException from 'controllers/relay/RelayException';
export default class ConnectionException extends RelayException {
    constructor(message: string);
}
