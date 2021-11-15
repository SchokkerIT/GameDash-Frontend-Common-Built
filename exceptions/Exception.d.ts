export default class Exception extends Error {
    readonly message: string;
    readonly code: string | null;
    constructor(message: string, code?: string | null);
    getMessage(): string;
    hasCode(): boolean;
    getCode(): string;
}
