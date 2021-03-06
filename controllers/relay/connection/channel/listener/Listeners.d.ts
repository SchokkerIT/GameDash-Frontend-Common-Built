import { Listeners as ListenersBase } from "../../../../listener/nonStatic/Listeners";
import { Connection } from "../../Connection";
import { Channel } from "../Channel";
import { Handle as IListenerCallbackHandle } from "../../../../../interfaces/listener/callback/Callback";
export declare class Listeners extends ListenersBase {
    private readonly connection;
    private readonly channel;
    private listeningToSocket;
    private socketListenerMutex;
    constructor(connection: Connection, channel: Channel);
    listen(): Promise<void>;
    destroy(): void;
    reconnect(): Promise<void>;
    onMessage(callback: {
        (type: string, message: any): void;
    }): IListenerCallbackHandle;
    private listenToSocket;
    private destroySocketListener;
    private handleIncomingSocketMessage;
    private isListeningToSocket;
    private setIsListeningToSocket;
    private static logIncomingSocketMessage;
    private static makePayloadMessageLoggable;
}
