import { ListenerSingletonMap } from './ListenerSingletonMap';
import { Listener } from './Listener';
import { TCallback } from '../Callback';
import { Handle as ICallbackHandle } from "../../../interfaces/listener/callback/Callback";
export declare class Listeners {
    readonly listenerSingletonMap: ListenerSingletonMap;
    getAll(): Listener[];
    add(name: string, callback?: TCallback): ICallbackHandle;
    addUnique(name: string, id: string, callback?: TCallback): ICallbackHandle;
    addAll(names: string[], callback: TCallback): ICallbackHandle[];
    get(name: string): Listener;
}
