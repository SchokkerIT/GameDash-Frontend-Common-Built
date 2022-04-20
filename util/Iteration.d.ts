export declare class Iteration {
    static iterate<T>(times: number, callback: TIterateCallback<T>): T[];
}
declare type TIterateCallback<T> = {
    (iteration: number): T;
};
export {};
