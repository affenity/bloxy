"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const RESTInterfaces_1 = require("../../../interfaces/RESTInterfaces");
const prepare_1 = tslib_1.__importDefault(require("./prepare"));
const response_1 = tslib_1.__importDefault(require("../response"));
class RESTRequest {
    constructor(controller, options) {
        this.controller = controller;
        this.requestOptions = options;
    }
    setOptions(options) {
        // As lodash overwrites all entries that are provided with each other, it also mutates the default
        // This way, it creates a clone of the default each time, so there's "new" default data each time
        this.requestOptions = lodash_1.default.merge(JSON.parse(JSON.stringify(RESTInterfaces_1.DefaultRESTRequestOptions)), options || {});
        return this.requestOptions;
    }
    send(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield prepare_1.default(this, options || this.requestOptions);
            yield Promise.all(this.controller.requestHandlers.map(handler => handler(this)));
            // Console.log(this.requestOptions);
            const responseData = yield this.controller.requester(this.requestOptions);
            const response = new response_1.default(this.controller, this, responseData);
            return response.process();
        });
    }
}
exports.default = RESTRequest;
