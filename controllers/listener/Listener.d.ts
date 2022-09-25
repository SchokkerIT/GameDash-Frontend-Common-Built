import { Callback } from './Callback';
import { Handle as ICallbackHandle } from "../../interfaces/listener/callback/Callback";
export declare class Listener<TCallbackReturn = any> {
    name: string;
    callbacks: {
        [id: string]: Callback<TCallbackReturn>;
    };
    constructor(name: string);
    getName(): string;
    invoke(...args: any[]): Promise<TCallbackReturn[]>;
    getCallbacks(): Callback<TCallbackReturn>[];
    addCallback(callback: Callback<TCallbackReturn>, options?: {
        id?: string;
    }): ICallbackHandle;
    addUniqueCallback(id: string, callback: Callback<TCallbackReturn>): ICallbackHandle;
}
