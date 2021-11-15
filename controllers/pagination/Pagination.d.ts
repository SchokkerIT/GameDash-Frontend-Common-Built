export declare class Pagination {
    private readonly page;
    private readonly perPage;
    constructor(page: number, perPage?: number);
    getPage(): number;
    getPerPage(): number;
    static create(page: number, perPage: number): Pagination;
}
