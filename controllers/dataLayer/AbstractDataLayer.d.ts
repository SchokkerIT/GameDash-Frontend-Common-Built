import { Store } from './Store';
import { ValueSource, TFetchFunction as TValueSourceValueFetchFunction } from './ValueSource';
import { IDataLayer } from './IDataLayer';
export declare abstract class AbstractDataLayer implements IDataLayer {
    private readonly valueSources;
    private readonly mutex;
    private name;
    private tags;
    readonly store: Store;
    protected constructor();
    getName(): string;
    setName(name: string): void;
    getValueSources(): ValueSource[];
    registerValueSource(names: string[], fetchFunction: TValueSourceValueFetchFunction): ValueSource;
    getValue<T = any>(name: string, options?: {
        useStore?: boolean;
    }): Promise<T>;
    valueIsCached(name: string): boolean;
    setValue<T = any>(name: string, value: T): void;
    setValues(values: {
        [name: string]: any;
    }): void;
    clearValue(name: string): void;
    findValueSource(name: string): ValueSource;
    clear(): void;
    valueIsFetchable(name: string): boolean;
    getStore(): Store;
    getTags(): string[];
    setTags(tags: string[]): void;
    addTag(tag: string): void;
}
