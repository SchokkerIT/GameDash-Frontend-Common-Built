import { Connection } from '../Connection';
import { Channel } from './Channel';
export declare class Channels {
    private readonly connection;
    private channelsSingletonList;
    constructor(connection: Connection);
    getAll(): Channel[];
    get(name: string): Channel;
}
