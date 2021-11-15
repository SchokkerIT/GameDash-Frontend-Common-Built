import { ValueSource, TFetchFunction as TValueSourceValueFetchFunction } from './ValueSource';
export interface IDataLayer {
    getValueSources(): ValueSource[];
    registerValueSource(names: string[], fetchFunction: TValueSourceValueFetchFunction): ValueSource;
    getValue(name: string, options: {
        useStore?: boolean;
    }): Promise<any>;
    setValue(name: string, value: any): void;
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
