"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGroup_1 = tslib_1.__importDefault(require("./PartialGroup"));
class GroupJoinRequest {
    constructor(data, client) {
        this.client = client;
        this.id = data.id || null;
        this.user = new PartialUser_1.default(data.user, client);
        this.group = new PartialGroup_1.default(data.group, client);
        this.created = new Date(data.created);
    }
}
exports.default = GroupJoinRequest;
