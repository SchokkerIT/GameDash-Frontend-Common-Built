import { Parameter } from './Parameter';
import { ITransformer } from './transformer/ITransformer';
export declare class Parameters {
    private parameters;
    getAll(): Parameter[];
    create(name: string, value?: any, transformer?: ITransformer): Parameter;
    get(name: string): Parameter;
    exists(name: string): boolean;
    serialize(): {
        [key: string]: any;
    };
}
