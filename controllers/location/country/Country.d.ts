import { FlagManager } from './flag/FlagManager';
export declare class Country {
    private readonly code;
    private readonly name;
    private readonly flagManager;
    constructor(code: string, name: string);
    getCode(): string;
    getName(): string;
    getFlagManager(): FlagManager;
}
