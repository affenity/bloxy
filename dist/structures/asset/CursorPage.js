"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CursorPage {
    constructor(client, options, response) {
        this.client = client;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data;
    }
}
exports.default = CursorPage;
