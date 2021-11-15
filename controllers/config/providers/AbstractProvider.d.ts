import IProvider from './IProvider';
export declare abstract class AbstractProvider implements IProvider {
    init(): Promise<void>;
    exists(path: string): Promise<boolean>;
    get(path: string): Promise<any>;
}
