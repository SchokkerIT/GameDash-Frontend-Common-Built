import { Listeners as NonStaticListeners } from './nonStatic/Listeners';
import { Listener } from './Listener';
import { ListenerSingletonMap } from './ListenerSingletonMap';
import { Handle as ICallbackHandle } from "../../interfaces/listener/callback/Callback";
import { TCallback } from './Callback';
export declare class Listeners {
    static NonStatic: typeof NonStaticListeners;
    protected static listenerSingletonMap: ListenerSingletonMap;
    static getAll(): Listener[];
    static add(name: string, callback: TCallback): ICallbackHandle;
    static get(name: string): Listener;
}
