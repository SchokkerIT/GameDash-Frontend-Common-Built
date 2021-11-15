import { Host } from '../host/Host';
export interface Connection {
    id: string;
    name?: string;
    host: Host;
}
