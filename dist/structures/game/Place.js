"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialGameUniverse_1 = tslib_1.__importDefault(require("./PartialGameUniverse"));
class Place {
    constructor(data, client) {
        this.client = client;
        this.id = data.placeId;
        this.name = data.name;
        this.description = data.description;
        this.url = data.url;
        this.creatorName = data.builder;
        this.creatorId = data.builderId;
        this.playable = data.isPlayable;
        this.prohibitedReason = data.reasonProhibited;
        this.prohibited = this.prohibitedReason.toLowerCase() !== "none";
        this.universe = new PartialGameUniverse_1.default({
            id: data.universeId,
            rootPlace: {
                id: data.universeRootPlaceId
            }
        }, client);
        this.price = data.price;
        this.imageToken = data.imageToken;
    }
}
exports.default = Place;
