"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GroupBase_1 = tslib_1.__importDefault(require("./GroupBase"));
const GroupMember_1 = tslib_1.__importDefault(require("./GroupMember"));
const GroupShout_1 = tslib_1.__importDefault(require("./GroupShout"));
class Group extends GroupBase_1.default {
    constructor(data, client) {
        super(data, client);
        this.description = data.description;
        this.name = data.name;
        this.owner = data.owner ? new GroupMember_1.default({
            id: data.owner.userId,
            name: data.owner.username,
            group: this
        }, client) : null;
        this.shout = data.shout ? new GroupShout_1.default({
            content: data.shout.body,
            creator: {
                id: data.shout.poster.userId,
                username: data.shout.poster.username
            },
            group: {
                id: this.id,
                name: this.name || undefined
            }
        }, client) : null;
    }
}
exports.default = Group;
