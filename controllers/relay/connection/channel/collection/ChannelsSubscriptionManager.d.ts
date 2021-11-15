import { Channel } from '../Channel';
import { ChannelCollection } from './ChannelCollection';
export declare class ChannelsSubscriptionManager {
    private readonly collection;
    private readonly subscribeMutex;
    constructor(collection: ChannelCollection);
    shouldAttemptChannelSubscribe(channel: Channel): Promise<boolean>;
    getUnsubscribedChannels(): Promise<Channel[]>;
    subscribe(): Promise<void>;
    private getConnections;
    static create(collection: ChannelCollection): ChannelsSubscriptionManager;
}
