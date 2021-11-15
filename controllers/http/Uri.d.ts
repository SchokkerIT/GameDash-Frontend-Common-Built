export declare class Uri {
    private uri;
    constructor(uri: string);
    isValid(): boolean;
    setUri(uri: string): void;
    addQueryParameter(name: string, value: string): void;
    toString(): string;
    static fromString(string: string): Uri;
}
