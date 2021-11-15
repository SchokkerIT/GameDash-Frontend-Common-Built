import { Handle as ICallbackHandle } from 'interfaces/listener/callback/Callback';
import { Listener } from './Listener';
import { TCallback } from '../Callback';
export declare class Listeners {
    readonly listeners: Listener[];
    getAll(): Listener[];
    add(name: string, callback?: TCallback): ICallbackHandle;
    addAll(names: string[], callback: TCallback): ICallbackHandle[];
    get(name: string): Listener;
}
