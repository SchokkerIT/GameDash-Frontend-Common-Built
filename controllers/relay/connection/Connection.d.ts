import { Channels } from './channel/Channels';
import { HeaderParameter } from './header/HeaderParameter';
import { QueryParameter } from './query/QueryParameter';
import { ConnectionManager, IGenericListenerCallbackResult } from './manager/ConnectionManager';
import { Handle as IListenerCallbackHandle } from "../../../interfaces/listener/callback/Callback";
import { IHost } from '../host/IHost';
import { Comparable } from "../../../interfaces/Comparable";
export declare class Connection implements Comparable {
    private readonly id;
    private readonly host;
    private readonly channels;
    private readonly manager;
    private readonly connectMutex;
    private readonly disconnectMutex;
    private name;
    private headers;
    private queryParameters;
    constructor(host: IHost);
    getId(): string;
    getName(): string;
    setName(name: string): void;
    getHost(): IHost;
    connect(options?: {
        maxAttempts?: number;
    }): Promise<void>;
    reconnect(): Promise<void>;
    isConnected(): boolean;
    isConnecting(): boolean;
    isDisconnecting(): boolean;
    getSocket(): any;
    disconnect(): Promise<void>;
    ensureConnected(): Promise<void>;
    awaitConnected(): Promise<void>;
    awaitDisconnected(): Promise<void>;
    getChannels(): Channels;
    destroyChannels(): void;
    sendMessage(channelName: string, message: any, ackCallback?: (...parameters: any[]) => any): Promise<void>;
    onConnect(callback: {
        (result: IGenericListenerCallbackResult): Promise<void> | void;
    }): IListenerCallbackHandle;
    onDisconnect(callback: {
        (result: IGenericListenerCallbackResult): Promise<void> | void;
    }): IListenerCallbackHandle;
    onFailedConnection(callback: {
        (): Promise<void> | void;
    }): IListenerCallbackHandle;
    getManager(): ConnectionManager;
    getHeaders(): HeaderParameter[];
    getHeader(name: string): HeaderParameter;
    addHeader(header: HeaderParameter): void;
    isProxied(): boolean;
    getQueryParameters(): Promise<QueryParameter[]>;
    getQueryParameter(name: string): Promise<QueryParameter>;
    addQueryParameter(parameter: QueryParameter): void;
    compare(connection: any): boolean;
    static create(host: IHost): Connection;
}
