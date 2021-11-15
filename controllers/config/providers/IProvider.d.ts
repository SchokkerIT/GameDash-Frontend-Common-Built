export default interface IProvider {
    init(): Promise<void>;
    get(path: string): Promise<any>;
    exists(path: string): Promise<boolean>;
}
