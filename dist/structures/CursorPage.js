"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextCall = exports.CursorPage = void 0;
const tslib_1 = require("tslib");
class CursorPage {
    constructor(options, methodOptions, response, method) {
        this.data = [];
        this.currentPage = 0;
        this.options = options;
        this.cursors = {
            previous: response.previousPageCursor,
            current: response.nextPageCursor,
            next: response.nextPageCursor
        };
        this.data[0] = response.data;
        this.methodOptions = methodOptions;
        this.method = method;
    }
    getNextPage() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.cursors.next) {
                throw new Error("Attempted to iterate to next page, but no cursor was presented for the next page");
            }
            this.currentPage++;
            if (this.data[this.currentPage])
                return this.data[this.currentPage];
            this.options.cursor = this.cursors.next;
            const result = yield this.method(Object.assign(Object.assign({}, this.options), this.methodOptions));
            this.cursors = {
                previous: result.previousPageCursor,
                current: this.cursors.next,
                next: result.nextPageCursor
            };
            this.data[this.currentPage] = result.data;
            return result.data;
        });
    }
    getPreviousPage() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.cursors.previous) {
                throw new Error("Attempted to iterate to previous page, but no cursor was presented for the next page");
            }
            this.currentPage--;
            if (this.data[this.currentPage])
                return this.data[this.currentPage];
            this.options.cursor = this.cursors.previous;
            const result = yield this.method(Object.assign(Object.assign({}, this.options), this.methodOptions));
            this.cursors = {
                previous: result.previousPageCursor,
                current: this.cursors.next,
                next: result.nextPageCursor
            };
            this.data[this.currentPage] = result.data;
            return result.data;
        });
    }
}
exports.CursorPage = CursorPage;
function contextCall(context, method) {
    return (options) => method.call(context, options);
}
exports.contextCall = contextCall;
