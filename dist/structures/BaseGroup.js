"use strict";
var _BaseGroup_client, _BaseGroup_groupId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGroup = void 0;
const tslib_1 = require("tslib");
/**
 * Represents a Roblox group ID and gives direct access to various group-related APIs.
 */
class BaseGroup {
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} groupId The group ID
     */
    constructor(client, groupId) {
        /** @private */
        _BaseGroup_client.set(this, void 0);
        /** @private */
        _BaseGroup_groupId.set(this, void 0);
        (0, tslib_1.__classPrivateFieldSet)(this, _BaseGroup_client, client, "f");
        (0, tslib_1.__classPrivateFieldSet)(this, _BaseGroup_groupId, groupId, "f");
    }
    get client() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _BaseGroup_client, "f");
    }
    get groupId() {
        return (0, tslib_1.__classPrivateFieldGet)(this, _BaseGroup_groupId, "f");
    }
    acceptUser(user) {
        return this.client.apis.groupsAPI.acceptJoinRequest({
            groupId: this.groupId,
            userId: user
        });
    }
    declineUser(user) {
        return this.client.apis.groupsAPI.declineJoinRequest({
            groupId: this.groupId,
            userId: user
        });
    }
}
exports.BaseGroup = BaseGroup;
_BaseGroup_client = new WeakMap(), _BaseGroup_groupId = new WeakMap();
