"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserBase_1 = tslib_1.__importDefault(require("../user/UserBase"));
const PartialGroup_1 = tslib_1.__importDefault(require("./PartialGroup"));
const GroupRole_1 = tslib_1.__importDefault(require("./GroupRole"));
class GroupMember extends UserBase_1.default {
    constructor(data, client) {
        super(data, client);
        this.group = new PartialGroup_1.default(data.group, client);
        this.role = data.role ? new GroupRole_1.default({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                name: this.name || undefined,
                id: this.id
            }
        }, client) : null;
    }
}
exports.default = GroupMember;
