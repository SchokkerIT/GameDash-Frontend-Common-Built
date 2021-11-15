import { Mutex } from "../../../mutex/Mutex";
import { CachedValue } from "../../../cache/CachedValue";
import { ICached } from "../../../cache/ICached";
import { Listeners } from './listener/Listeners';
import { Connection } from '../Connection';
import { Comparable as IComparable } from "../../../../interfaces/Comparable";
export declare class Channel implements IComparable, ICached {
    readonly subscribeMutex: Mutex;
    readonly unSubscribeMutex: Mutex;
    readonly isSubscribedMutex: Mutex;
    readonly ensureSubscribedMutex: Mutex;
    readonly subscribed: CachedValue<boolean>;
    private readonly connection;
    private readonly listeners;
    private readonly name;
    private subscriptionIntent;
    constructor(connection: Connection, name: string);
    getName(): string;
    subscribe(): Promise<void>;
    unsubscribe(): Promise<void>;
    isSubscribed(): Promise<boolean>;
    ensureSubscribed(): Promise<void>;
    reconnect(): Promise<void>;
    getConnection(): Connection;
    getListeners(): Listeners;
    private clearListeners;
    getSubscriptionIntent(): boolean;
    setSubscriptionIntent(intent: boolean): void;
    compare(channel: Channel): boolean;
    clearCache(): void;
}
