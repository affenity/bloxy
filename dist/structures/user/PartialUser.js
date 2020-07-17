"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserBase_1 = tslib_1.__importDefault(require("./UserBase"));
class PartialUser extends UserBase_1.default {
    constructor(data, client) {
        super(data, client);
    }
}
exports.default = PartialUser;
