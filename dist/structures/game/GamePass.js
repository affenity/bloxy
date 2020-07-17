"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamePass {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.displayName = data.displayName;
        this.productId = data.productId;
        this.price = data.price;
    }
}
exports.default = GamePass;
