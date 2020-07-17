"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialGameUniverse_1 = tslib_1.__importDefault(require("./PartialGameUniverse"));
class GameBadge {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.displayedName = data.displayName;
        this.displayedDescription = data.displayDescription;
        this.enabled = data.enabled;
        this.iconId = data.iconImageId;
        this.displayedIconId = data.displayIconImageId;
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
        this.statistics = {
            pastDayAwardedCount: data.statistics.pastDayAwardedCount,
            awardedCount: data.statistics.awardedCount,
            winRatePercentage: data.statistics.winRatePercentage
        };
        this.awardingUniverse = new PartialGameUniverse_1.default({
            id: data.awardingUniverse.id,
            rootPlace: {
                id: data.awardingUniverse.rootPlaceId
            },
            name: data.awardingUniverse.name
        }, client);
    }
}
exports.default = GameBadge;
