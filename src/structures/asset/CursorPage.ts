import Client from "../../client";


export type CursorPageOptions = {
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
}
type CursorPageResponse = {
    data: unknown;
    previousPageCursor: string | null;
    nextPageCursor: string | null;
}

export default class CursorPage<T> {
    public client: Client;
    public cursors: {
        current: string | null;
        next: string | null;
        previous: string | null;
    }
    public data: T[];

    constructor (client: Client, options: CursorPageOptions, response: CursorPageResponse) {
        this.client = client;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data as T[];
    }
}
