"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chatNotifications_1 = tslib_1.__importDefault(require("./chatNotifications"));
const handlersMap = new Map();
handlersMap.set("chatnotifications", chatNotifications_1.default);
exports.default = handlersMap;
