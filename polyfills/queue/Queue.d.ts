export declare class Queue<T> {
    private readonly elements;
    private head;
    private tail;
    constructor(elements?: T[]);
    enqueue(element: T): void;
    enqueueAll(elements: T[]): void;
    dequeue(): T;
    peek(): T;
    get length(): number;
    get isEmpty(): boolean;
    static create<T>(elements: T[]): Queue<T>;
}
