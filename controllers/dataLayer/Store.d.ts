import { TValue } from 'controllers/store/memory/keyValue/KeyValue';
import { ValueSource } from './ValueSource';
export declare class Store {
    private readonly memoryKeyValueStore;
    getValues(): TValue;
    getValue(name: string): any;
    valueExists(name: string): boolean;
    setValues(values: {
        [name: string]: any;
    }): void;
    setValue(name: string, value: any): void;
    deleteValue(name: string): void;
    clear(): void;
    clearValueSource(valueSource: ValueSource): void;
}
