export interface Comparable {
    compare(value: any): boolean;
}
export interface AsyncComparable {
    compare(value: any): Promise<boolean>;
}
