import { Connection } from '../Connection';
import { Listeners } from '../listener/Listeners';
import { IHost } from '../../host/IHost';
import { Handle as IListenerCallbackHandle } from "../../../../interfaces/listener/callback/Callback";
export declare class ConnectionManager {
    private readonly host;
    private readonly connection;
    private socket;
    private connecting;
    private listeners;
    private connected;
    private disconnecting;
    constructor(host: IHost, connection: Connection);
    connect(options?: {
        maxAttempts?: number;
        connectToSubscribedChannels?: boolean;
    }): Promise<void>;
    reconnect(): Promise<void>;
    private connectToSubscribedChannels;
    private reconnectToSubscribedChannels;
    isConnected(): boolean;
    private setIsConnected;
    isDisconnecting(): boolean;
    private setIsDisconnecting;
    disconnect(options?: {
        clearState?: boolean;
    }): Promise<void>;
    disconnectUnexpected(): Promise<void>;
    getSocket(): any;
    hasSocket(): boolean;
    setSocket(socket: any): void;
    private clearSocket;
    getListeners(): Listeners;
    isConnecting(): boolean;
    private setIsConnecting;
    private createQueryStruct;
    private getSocketUri;
    private handleUnexpectedDisconnect;
    onConnect(callback: {
        (result: IGenericListenerCallbackResult): Promise<void> | void;
    }): IListenerCallbackHandle;
    private invokeOnConnect;
    onFailedConnection(callback: {
        (result: IGenericListenerCallbackResult): Promise<void> | void;
    }): IListenerCallbackHandle;
    private invokeOnFailedConnection;
    onDisconnect(callback: {
        (result: IGenericListenerCallbackResult): Promise<void> | void;
    }): IListenerCallbackHandle;
    private invokeOnDisconnect;
    onUnexpectedDisconnect(callback: {
        (): any;
    }): IListenerCallbackHandle;
    private invokeOnUnexpectedDisconnect;
}
export interface IGenericListenerCallbackResult {
    persisted: boolean;
}
