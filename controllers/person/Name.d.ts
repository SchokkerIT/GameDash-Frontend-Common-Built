export declare class Name {
    private first?;
    private last?;
    constructor(first?: string, last?: string);
    getFirst(): string;
    hasFirst(): boolean;
    setFirst(first: string): void;
    getLast(): string;
    hasLast(): boolean;
    setLast(last: string): void;
    getFull(): string;
    getInitials(): string[];
    static create(first: string, last: string): Name;
}
