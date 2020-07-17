"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialGroup_1 = tslib_1.__importDefault(require("./PartialGroup"));
const GroupRole_1 = tslib_1.__importDefault(require("./GroupRole"));
class GroupRolePermissions {
    constructor(data, client) {
        this.client = client;
        this.group = new PartialGroup_1.default({
            id: data.groupId
        }, client);
        this.role = new GroupRole_1.default({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                id: this.group.id
            }
        }, client);
        this.permissions = data.permissions;
    }
}
exports.default = GroupRolePermissions;
