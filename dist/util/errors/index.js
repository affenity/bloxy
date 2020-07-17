"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const messages_1 = tslib_1.__importDefault(require("./messages"));
const errors = tslib_1.__importStar(require("./errors"));
exports.default = {
    messages: messages_1.default,
    errors
};
