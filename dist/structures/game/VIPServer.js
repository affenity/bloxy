"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialGameUniverse_1 = tslib_1.__importDefault(require("./PartialGameUniverse"));
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
class VIPServer {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.game = new PartialGameUniverse_1.default({
            id: data.game.id,
            name: data.game.name,
            rootPlace: {
                id: data.game.rootPlace.id,
                name: data.game.rootPlace.name
            }
        }, client);
        this.active = data.active;
        this.code = data.joinCode;
        this.subscription = {
            active: data.subscription.active,
            expired: data.subscription.expired,
            expirationDate: new Date(data.subscription.expirationDate),
            price: data.subscription.price
        };
        this.permissions = {
            clanAllowed: data.permissions.clanAllowed,
            enemyClanId: data.permissions.enemyClanId,
            friendsAllowed: data.permissions.friendsAllowed,
            users: data.permissions.users.map(userData => new PartialUser_1.default(userData, client))
        };
    }
}
exports.default = VIPServer;
