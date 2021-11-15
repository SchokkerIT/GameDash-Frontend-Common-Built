import { IResult } from './IResult';
export declare class ResultRegistry {
    private static results;
    static getAll(): IResult[];
    static add(result: IResult): void;
}
