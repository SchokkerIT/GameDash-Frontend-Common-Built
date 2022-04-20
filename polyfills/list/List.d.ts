export declare class List<T> {
    private values;
    constructor(values?: T[]);
    add(value: T): void;
    size(): number;
    get(index: number): T;
    remove(value: T): void;
    clear(): void;
    includes(value: T): boolean;
    toArray(): T[];
    [Symbol.iterator](): T[];
}
