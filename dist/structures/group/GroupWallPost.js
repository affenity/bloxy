"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GroupMember_1 = tslib_1.__importDefault(require("./GroupMember"));
class GroupWallPost {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.content = data.body;
        this.creator = new GroupMember_1.default({
            group: {
                id: data.group.id,
                name: data.group.name
            },
            id: data.poster.userId,
            name: data.poster.username
        }, client);
        this.created = new Date(data.created);
    }
}
exports.default = GroupWallPost;
