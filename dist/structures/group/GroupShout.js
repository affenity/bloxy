"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGroup_1 = tslib_1.__importDefault(require("./PartialGroup"));
class GroupShout {
    constructor(data, client) {
        this.client = client;
        this.content = data.content;
        this.creator = new PartialUser_1.default(data.creator, client);
        this.group = new PartialGroup_1.default({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
exports.default = GroupShout;
