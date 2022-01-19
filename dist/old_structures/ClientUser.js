"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUser = void 0;
const User_1 = require("./User");
class ClientUser extends User_1.PartialUser {
    constructor(data, client) {
        super(data, client);
        this.client = client;
    }
}
exports.ClientUser = ClientUser;
