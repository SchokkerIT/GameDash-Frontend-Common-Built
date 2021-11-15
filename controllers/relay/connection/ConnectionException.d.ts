import RelayException from "../RelayException";
export default class ConnectionException extends RelayException {
    constructor(message: string);
}
