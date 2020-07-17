"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GroupBase_1 = tslib_1.__importDefault(require("./GroupBase"));
class PartialGroup extends GroupBase_1.default {
    constructor(data, client) {
        super(data, client);
    }
}
exports.default = PartialGroup;
