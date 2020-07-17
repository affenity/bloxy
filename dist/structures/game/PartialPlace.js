"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PartialPlace {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}
exports.default = PartialPlace;
