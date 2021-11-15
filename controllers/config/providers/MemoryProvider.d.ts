import { AbstractProvider } from './AbstractProvider';
export declare class MemoryProvider extends AbstractProvider {
    private readonly store;
    constructor();
    get(path: string): Promise<any>;
    exists(path: string): Promise<boolean>;
}
