"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialPlace_1 = tslib_1.__importDefault(require("./PartialPlace"));
class PartialGameUniverse {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.rootPlace = data.rootPlace ? new PartialPlace_1.default({
            id: data.rootPlace.id,
            name: data.rootPlace.name || null
        }, client) : null;
    }
}
exports.default = PartialGameUniverse;
