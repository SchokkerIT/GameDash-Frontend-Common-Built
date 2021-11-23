import { ICached } from "../../../../cache/ICached";
import { Channel } from '../Channel';
export declare class ChannelCollection implements ICached {
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
    clearCache(): void;
    private getSubscriptionManager;
    static create(channels?: Channel[]): ChannelCollection;
}
