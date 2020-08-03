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
    public options: CursorPageOptions;
    public cursors: {
        current: string | null;
        next: string | null;
        previous: string | null;
    }
    public data: T[];
    public method: Function;

    constructor (client: Client, options: CursorPageOptions, response: CursorPageResponse, method: Function) {
        this.client = client;
        this.options = options;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data as T[];
        this.method = method;
    }

    getNext (newOptions?: CursorPageOptions): Promise<CursorPage<T>> {
        if (!this.cursors.next) {
            throw new Error("Attempted to iterate to next page, but no cursor was presented for the next page");
        }

        const options = {
            ...this.options,
            cursor: this.cursors.next,
            ...newOptions
        };

        return this.method(options);
    }

    getPrevious (newOptions?: CursorPageOptions): Promise<CursorPage<T>> {
        if (!this.cursors.previous) {
            throw new Error("Attempted to iterate to previous page, but no cursor was presented for the previous page");
        }

        const options = {
            ...this.options,
            cursor: this.cursors.previous,
            ...newOptions
        };

        return this.method(options);
    }
}
