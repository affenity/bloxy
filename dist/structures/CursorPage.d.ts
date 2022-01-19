export declare type CursorPageOptions = {
    readonly limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    readonly sortOrder?: "Asc" | "Desc";
};
declare type CursorPageResponse<T> = {
    data: T[];
    previousPageCursor: string | null;
    nextPageCursor: string | null;
};
declare type CursorPageState = {
    previous: string | null;
    current: string | null;
    next: string | null;
};
declare type CursorPageMethod<T, C> = (options: CursorPageOptions & C) => Promise<CursorPageResponse<T>>;
export declare class CursorPage<T, C> {
    options: CursorPageOptions;
    cursors: CursorPageState;
    data: T[][];
    readonly method: CursorPageMethod<T, C>;
    readonly methodOptions: C;
    private currentPage;
    constructor(options: CursorPageOptions, methodOptions: C, response: CursorPageResponse<T>, method: CursorPageMethod<T, C>);
    getNextPage(): Promise<T[]>;
    getPreviousPage(): Promise<T[]>;
}
export declare function contextCall<T, C>(context: any, method: CursorPageMethod<T, C>): CursorPageMethod<T, C>;
export {};
