"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("./PartialUser"));
class FriendRequest {
    constructor(data, client) {
        this.client = client;
        this.user = new PartialUser_1.default({
            id: data.id,
            name: data.name
        }, client);
        this.created = new Date(data.created);
        this.description = data.description;
        this.isBanned = data.isBanned;
    }
}
exports.default = FriendRequest;
