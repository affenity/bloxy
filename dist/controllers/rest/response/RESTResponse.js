"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTResponse = void 0;
const tslib_1 = require("tslib");
const errors_1 = require("../../../util/errors/errors");
class RESTResponse {
    // Public options: RESTResponseOptions;
    constructor(controller, request, responseData) {
        this.controller = controller;
        this.request = request;
        this.responseData = responseData;
    }
    // eslint-disable-next-line require-await
    process() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const allProcessed = this.controller.responseHandlers.map((handler) => handler(this));
            if (allProcessed.every((processed) => processed === true)) {
                return this.responseData;
            }
            else {
                const error = allProcessed.find((err) => err instanceof errors_1.BloxyHttpError &&
                    err.name === "BloxyHttpInvalidStatusMessageError" &&
                    err.statusMessage.includes("Token Validation Failed"));
                if (error) {
                    // 1 attempt = 0 retries
                    if (this.request.attempts - 1 ===
                        this.controller.getXCSRFTokenRefreshMaxRetries()) {
                        throw error;
                    }
                    else {
                        this.controller.options.xcsrf = undefined;
                        return this.request.send();
                    }
                }
                throw allProcessed.find((err) => err instanceof Error);
            }
        });
    }
}
exports.RESTResponse = RESTResponse;
