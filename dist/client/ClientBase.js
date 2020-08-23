"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = tslib_1.__importDefault(require("events"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
class ClientBase extends events_1.default {
    constructor(options) {
        super();
        this.updateOptions = (options) => {
            this.options = lodash_1.default.merge({
                credentials: {},
                rest: {}
            }, options || {});
            return this.options;
        };
        this.options = this.updateOptions(options);
    }
}
exports.default = ClientBase;
