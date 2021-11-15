import { IHost } from '../IHost';
export interface IProxyableHost extends IHost {
    getProxy(): Promise<IHost>;
}
