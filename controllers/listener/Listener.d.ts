import { Callback } from './Callback';
import { Handle as ICallbackHandle } from "../../interfaces/listener/callback/Callback";
export declare class Listener {
    name: string;
    callbacks: Callback[];
    constructor(name: string);
    getName(): string;
    invoke(...args: any[]): Promise<void>;
    getCallbacks(): Callback[];
    addCallback(callback: Callback): ICallbackHandle;
}
