import { Connection } from '../Connection';
import { Channel } from './Channel';
export declare class Channels {
    private readonly connection;
    private channelsSingletonMap;
    constructor(connection: Connection);
    getAll(): Channel[];
    get(name: string): Channel;
}
