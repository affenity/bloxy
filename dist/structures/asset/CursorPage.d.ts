import Client from "../../client";
export declare type CursorPageOptions = {
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
declare type CursorPageResponse = {
    data: unknown;
    previousPageCursor: string | null;
    nextPageCursor: string | null;
};
export default class CursorPage<T> {
    client: Client;
    options: CursorPageOptions;
    cursors: {
        current: string | null;
        next: string | null;
        previous: string | null;
    };
    data: T[];
    method: Function;
    constructor(client: Client, options: CursorPageOptions, response: CursorPageResponse, method: Function);
    getNext(newOptions?: CursorPageOptions): Promise<CursorPage<T>>;
    getPrevious(newOptions?: CursorPageOptions): Promise<CursorPage<T>>;
}
export {};
