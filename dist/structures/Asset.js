"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trade = exports.Product = exports.CursorPage = exports.CollectibleAsset = exports.Bundle = exports.AssetVersion = void 0;
const constants_1 = require("../util/constants");
const retrieveStructures = () => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup
});
class AssetVersion {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.Id;
        this.assetId = data.AssetId;
        this.versionNumber = data.VersionNumber;
        this.parentAssetVersionId = data.ParentAssetVersionId;
        this.creatorType = data.CreatorType;
        this.creator = new structures.PartialUser({
            id: data.CreatorTargetId
        }, this.client);
        this.createdForUniverse = data.CreatingUniverseId ? new structures.PartialGameUniverse({
            id: data.CreatingUniverseId
        }, client) : null;
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
    }
}
exports.AssetVersion = AssetVersion;
class Bundle {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.bundleType = data.bundleType;
        this.items = data.items.map(itemData => ({
            owned: itemData.owned,
            id: itemData.id,
            name: itemData.name,
            type: itemData.type
        }));
        this.creatorType = data.creator.type.toLowerCase() === "group" ? constants_1.CreatorType.GROUP : constants_1.CreatorType.USER;
        this.creator = this.creatorType === constants_1.CreatorType.USER ? new structures.PartialUser({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new structures.PartialGroup({
            id: data.creator.id,
            name: data.creator.name
        }, client);
        this.product = {
            id: data.product.id,
            type: data.product.type,
            publicDomain: data.product.isPublicDomain,
            forSale: data.product.isForSale,
            price: data.product.priceInRobux,
            premiumPricing: {
                discount: data.product.premiumPricing.premiumDiscountPercentage,
                price: data.product.premiumPricing.premiumPriceInRobux
            }
        };
    }
}
exports.Bundle = Bundle;
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
exports.CollectibleAsset = CollectibleAsset;
class CursorPage {
    constructor(client, options, response, method) {
        this.client = client;
        this.options = options;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data;
        this.method = method;
    }
    getNext(newOptions) {
        if (!this.cursors.next) {
            throw new Error("Attempted to iterate to next page, but no cursor was presented for the next page");
        }
        const options = Object.assign(Object.assign(Object.assign({}, this.options), { cursor: this.cursors.next }), newOptions);
        return this.method(options);
    }
    getPrevious(newOptions) {
        if (!this.cursors.previous) {
            throw new Error("Attempted to iterate to previous page, but no cursor was presented for the previous page");
        }
        const options = Object.assign(Object.assign(Object.assign({}, this.options), { cursor: this.cursors.previous }), newOptions);
        return this.method(options);
    }
}
exports.CursorPage = CursorPage;
class Product {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.TargetId;
        this.type = data.ProductType;
        this.assetId = data.AssetId;
        this.productId = data.ProductId;
        this.name = data.Name;
        this.description = data.Description;
        this.assetTypeId = data.AssetTypeId;
        this.creator = new structures.PartialUser({
            id: data.Creator.Id,
            name: data.Creator.Name
        }, client);
        this.iconImageAssetId = data.IconImageAssetId;
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
        this.price = data.PriceInRobux;
        this.sales = data.Sales;
        this.isNew = data.IsNew;
        this.forSale = data.IsForSale;
        this.publicDomain = data.IsPublicDomain;
        this.limited = data.IsLimited;
        this.limitedUnique = data.IsLimitedUnique;
        this.remaining = data.Remaining || null;
        this.minimumMembershipLevel = data.MinimumMembershipLevel;
    }
}
exports.Product = Product;
class Trade {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id;
        this.sender = new structures.PartialUser({
            id: data.user.id,
            name: data.user.name
        }, client);
        this.created = new Date(data.created);
        this.active = data.isActive;
        this.status = data.status;
        this.offers = data.offers.map(offerData => ({
            robux: offerData.robux,
            user: new structures.PartialUser({
                id: offerData.user.id,
                name: offerData.user.name
            }, client),
            assets: offerData.userAssets.map(assetData => new CollectibleAsset(assetData, client))
        }));
    }
}
exports.Trade = Trade;
