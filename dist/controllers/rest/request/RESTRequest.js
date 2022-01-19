"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTRequest = void 0;
const tslib_1 = require("tslib");
const RESTInterfaces_1 = require("../../../interfaces/RESTInterfaces");
const prepare_1 = require("./prepare");
const response_1 = require("../response");
const utilFunctions_1 = require("../../../util/utilFunctions");
class RESTRequest {
    constructor(controller, options) {
        this.controller = controller;
        this.requestOptions = options;
        this.attempts = 0;
    }
    setOptions(options) {
        // As lodash overwrites all entries that are provided with each other, it also mutates the default
        // This way, it creates a clone of the default each time, so there's "new" default data each time
        this.requestOptions = (0, utilFunctions_1.utilMergeDeep)(JSON.parse(JSON.stringify(RESTInterfaces_1.DefaultRESTRequestOptions)), options || {});
        return this.requestOptions;
    }
    send(options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield (0, prepare_1.prepare)(this, options || this.requestOptions);
            yield Promise.all(this.controller.requestHandlers.map((handler) => handler(this)));
            const responseData = yield this.controller.requester(this.requestOptions);
            this.attempts++;
            const response = new response_1.RESTResponse(this.controller, this, responseData);
            return response.process();
        });
    }
}
exports.RESTRequest = RESTRequest;
