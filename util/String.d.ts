export default class String {
    static matchAll(string: any, regexp: any): any[];
    static ucFirst(string: string): string;
    static generateRandom(length: number): string;
    static ellipsis(value: string, limit: number, direction?: 'right' | 'left'): string;
}
