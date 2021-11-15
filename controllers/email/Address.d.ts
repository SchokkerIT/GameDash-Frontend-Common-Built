export declare class Address {
    private readonly address;
    constructor(address: string);
    isValid(): boolean;
    toString(): string;
    static fromString(address: string): Address;
}
