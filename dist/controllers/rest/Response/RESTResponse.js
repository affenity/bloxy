"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RESTResponse {
    // Public options: RESTResponseOptions;
    constructor(controller, request, responseData) {
        this.controller = controller;
        this.request = request;
        this.responseData = responseData;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.responseData.status = responseData.statusMessage;
    }
    process() {
        const allProcessed = this.controller.responseHandlers.map(handler => handler(this));
        if (allProcessed.every(processed => processed === true)) {
            return this.responseData;
        }
        else {
            throw allProcessed.find(processed => processed instanceof Error);
        }
    }
}
exports.default = RESTResponse;
