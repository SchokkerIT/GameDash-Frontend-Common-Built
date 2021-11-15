import { TValue } from './TValue';
export declare abstract class AbstractParameter {
    private readonly name;
    private value;
    constructor(name: string, value: string | number | boolean);
    getName(): string;
    getValue(): any;
    setValue(value: TValue): void;
}
