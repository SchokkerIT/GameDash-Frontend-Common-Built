import { Uri } from './Uri';
export declare class Url extends Uri {
    isValid(): boolean;
    static fromString(value: string): Url;
}
