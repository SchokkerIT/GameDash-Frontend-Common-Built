export declare class MessageEncoder {
    static encode(message: any): string;
    static decode(message: string): string;
    private static jsonEncodeMessage;
}
