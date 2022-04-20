export declare class Json {
    static encode<T = any>(value: T, options?: {
        indentation?: string;
    }): string;
    static decode<T = any>(value: string): T;
    static isValid(value: any): boolean;
}
