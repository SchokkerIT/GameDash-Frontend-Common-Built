import { Header } from './Header';
export declare class Headers {
    private headers;
    getAll(): Header[];
    create(name: string, value?: any): Header;
    get(name: string): Header;
    exists(name: string): boolean;
    serialize(): {
        [key: string]: any;
    };
}
