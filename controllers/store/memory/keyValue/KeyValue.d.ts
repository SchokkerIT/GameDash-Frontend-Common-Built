export declare type TValue = {
    [name: string]: any;
};
export declare class KeyValue {
    private values;
    getValues(): TValue;
    getValue(name: string): any;
    valueExists(name: string): boolean;
    setValues(values: {
        [name: string]: any;
    }): void;
    setValue(name: string, value: any): void;
    deleteValue(name: string): void;
    clear(): void;
}
