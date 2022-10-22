export interface Handle {
    getId: {
        (): string;
    };
    exists: {
        (): boolean;
    };
    remove: {
        (): void;
    };
}
