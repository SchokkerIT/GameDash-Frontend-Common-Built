import { IImplementation } from './IImplementation';
export declare class Implementations {
    private static readonly implementations;
    static getAll(): IImplementation[];
    static add(implementation: IImplementation): {
        remove: {
            (): void;
        };
    };
    static remove(index: number): void;
    static clear(): void;
}
