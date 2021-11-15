import { Channel } from '../Channel';
export declare class ChannelCollection {
    private subscriptionManager;
    private channels;
    constructor(channels?: Channel[]);
    getNames(): string[];
    getChannels(): Channel[];
    countChannels(): number;
    setChannels(channels: Channel[]): void;
    addChannels(channels: Channel[]): void;
    addChannel(channel: Channel): void;
    subscribe(): Promise<void>;
    private getSubscriptionManager;
    static create(channels?: Channel[]): ChannelCollection;
}
