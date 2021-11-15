export declare class Ip {
    private readonly _ip;
    constructor(ip: string);
    toString(): string;
    static fromString(ip: string): Ip;
}
