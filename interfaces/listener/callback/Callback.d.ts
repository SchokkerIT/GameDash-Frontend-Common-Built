export interface Handle {
    exists: {
        (): boolean;
    };
    remove: {
        (): void;
    };
}
