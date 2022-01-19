"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BaseUser_1 = require("./BaseUser");
/**
 * Represents a roblox user
 */
class User extends BaseUser_1.BaseUser {
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} userId The user ID
     */
    constructor(client, data) {
        super(client, data.id);
        this.name = data.name;
        this.displayName = data.displayName;
        this.externalAppDisplayName = data.externalAppDisplayName;
        this.isBanned = data.isBanned;
        this.description = data.description;
        this.created = new Date(data.created);
    }
}
exports.User = User;
