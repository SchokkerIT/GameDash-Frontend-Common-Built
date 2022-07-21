import { IImplementation } from './IImplementation';
import { IImplementationHandle } from './IImplementationHandle';
export declare class Implementations {
    private static readonly implementations;
    static getAll(): IImplementation[];
    static add(implementation: IImplementation): IImplementationHandle;
    static remove(implementation: IImplementation): void;
    static removeByIndex(index: number): void;
    static exists(implementation: IImplementation): boolean;
    private static getIndex;
    static clear(): void;
}
