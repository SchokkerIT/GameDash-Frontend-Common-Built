export declare class Path {
    static getParent(path: string, options?: {
        separator?: string;
        depth?: number;
    }): string;
    static explode(path: string, options?: {
        separator?: string;
    }): string[];
}
