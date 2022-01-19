"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientBase = void 0;
const tslib_1 = require("tslib");
const events_1 = require("events");
const debug_1 = (0, tslib_1.__importDefault)(require("debug"));
const utilFunctions_1 = require("../util/utilFunctions");
class ClientBase extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.options = this.updateOptions(options);
        this.debugger = {
            info: (0, debug_1.default)("bloxy:info"),
            warn: (0, debug_1.default)("bloxy:warn"),
            error: (0, debug_1.default)("bloxy:error")
        };
    }
    updateOptions(options) {
        this.options = (0, utilFunctions_1.utilMergeDeep)({
            credentials: {},
            rest: {},
            setup: {},
            callbacks: {}
        }, options || {});
        return this.options;
    }
    log(level, data) {
        const loggerToUse = level === "info"
            ? this.debugger.info
            : level === "error"
                ? this.debugger.error
                : this.debugger.warn;
        loggerToUse(`[${new Date().toISOString()}] ${data.name}: ${data.description}`);
    }
}
exports.ClientBase = ClientBase;
