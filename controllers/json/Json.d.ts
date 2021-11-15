export declare class Json {
    static encode(value: any, options?: {
        indentation?: string;
    }): string;
    static decode(value: string): any;
    static isValid(value: any): boolean;
}
