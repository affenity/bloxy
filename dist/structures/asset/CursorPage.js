"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CursorPage {
    constructor(client, options, response, method) {
        this.client = client;
        this.options = options;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data;
        this.method = method;
    }
    getNext(newOptions) {
        if (!this.cursors.next) {
            throw new Error("Attempted to iterate to next page, but no cursor was presented for the next page");
        }
        const options = Object.assign(Object.assign(Object.assign({}, this.options), { cursor: this.cursors.next }), newOptions);
        return this.method(options);
    }
    getPrevious(newOptions) {
        if (!this.cursors.previous) {
            throw new Error("Attempted to iterate to previous page, but no cursor was presented for the previous page");
        }
        const options = Object.assign(Object.assign(Object.assign({}, this.options), { cursor: this.cursors.previous }), newOptions);
        return this.method(options);
    }
}
exports.default = CursorPage;
