import { ITransformer } from './transformer/ITransformer';
export declare class Parameter {
    private readonly name;
    private value;
    constructor(name: string);
    getName(): string;
    getValue(): any;
    setValue(value: any, transformer?: ITransformer): void;
}
