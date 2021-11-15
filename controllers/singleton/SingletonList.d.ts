export default abstract class SingletonList<T> {
    private list;
    getAll(): T[];
    find(callback: {
        (item: T): boolean;
    }): T;
    add(item: T): void;
    addAll(items: T[]): void;
    remove(item: T): void;
    notEmpty(): boolean;
    clear(): void;
    handle(match: {
        (item: T): boolean;
    }, createInstance: {
        (): T;
    }): T;
    handleAsync(match: {
        (item: T): boolean;
    }, createInstance: {
        (): Promise<T>;
    }): Promise<T>;
    abstract compare(a: any, b: any): boolean;
}
