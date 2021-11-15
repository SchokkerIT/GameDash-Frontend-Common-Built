import SingletonList from 'controllers/singleton/SingletonList';
import { Channel } from './Channel';
export declare class ChannelsSingletonList extends SingletonList<Channel> {
    compare(a: any, b: any): boolean;
}
