"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandlers = void 0;
const validBody_1 = require("./validBody");
const validStatusMessage_1 = require("./validStatusMessage");
const validStatusCode_1 = require("./validStatusCode");
const updateHeaders_1 = require("./updateHeaders");
exports.responseHandlers = [
    updateHeaders_1.updateHeaders,
    validStatusCode_1.validStatusCode,
    validStatusMessage_1.validStatusMessage,
    validBody_1.validBody
];
