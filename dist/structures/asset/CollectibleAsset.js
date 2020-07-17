"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollectibleAsset {
    constructor(data, client) {
        this.client = client;
        this.assetId = data.assetId;
        this.userAssetId = data.userAssetId;
        this.name = data.name;
        this.recentAveragePrice = data.recentAveragePrice;
        this.originalPrice = data.originalPrice;
        this.assetStock = data.assetStock;
        this.buildersClubMembershipType = data.buildersClubMembershipType;
    }
}
exports.default = CollectibleAsset;
