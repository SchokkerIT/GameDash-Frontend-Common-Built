import DataLayerException from './DataLayerException';
export default class ValueSourceNotFoundException extends DataLayerException {
    constructor(message: string);
}
