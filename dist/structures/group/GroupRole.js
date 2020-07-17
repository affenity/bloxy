"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialGroup_1 = tslib_1.__importDefault(require("./PartialGroup"));
class GroupRole {
    constructor(data, client) {
        this.client = client;
        this.id = data.id || null;
        this.name = data.name || null;
        this.rank = data.rank || null;
        this.group = new PartialGroup_1.default({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
exports.default = GroupRole;
