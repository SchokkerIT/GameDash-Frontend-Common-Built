import { ValueSource, TFetchFunction as TValueSourceValueFetchFunction } from './ValueSource';
export interface IDataLayer {
    getName(): string;
    getValueSources(): ValueSource[];
    registerValueSource(names: string[], fetchFunction: TValueSourceValueFetchFunction): ValueSource;
    getValue<T = any>(name: string, options: {
        useStore?: boolean;
    }): Promise<T>;
    setValue<T = any>(name: string, value: T): void;
    setValues(values: {
        [name: string]: any;
    }): void;
    clearValue(name: string): void;
    findValueSource(name: string): ValueSource;
    clear(): void;
    valueIsFetchable(name: string): boolean;
    getTags(): string[];
    setTags(tags: string[]): void;
}
