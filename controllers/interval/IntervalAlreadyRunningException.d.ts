import IntervalException from './IntervalException';
export default class IntervalAlreadyRunningException extends IntervalException {
    constructor(message: string);
}
