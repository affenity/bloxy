"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validBody_1 = tslib_1.__importDefault(require("./validBody"));
const validStatus_1 = tslib_1.__importDefault(require("./validStatus"));
const validStatusCode_1 = tslib_1.__importDefault(require("./validStatusCode"));
const responseHandlers = [
    validStatusCode_1.default,
    validStatus_1.default,
    validBody_1.default
];
exports.default = responseHandlers;
