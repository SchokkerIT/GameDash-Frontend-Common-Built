import RuntimeException from './RuntimeException';
export default class IOException extends RuntimeException {
    constructor(message: string);
}
