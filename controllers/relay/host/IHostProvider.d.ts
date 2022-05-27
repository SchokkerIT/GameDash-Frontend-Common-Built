import { IHost } from './IHost';
export interface IHostProvider {
    getAll(): Promise<IHost[]>;
    get(id: string): IHost;
}
