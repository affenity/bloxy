"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
class Product {
    constructor(data, client) {
        this.client = client;
        this.id = data.TargetId;
        this.type = data.ProductType;
        this.assetId = data.AssetId;
        this.productId = data.ProductId;
        this.name = data.Name;
        this.description = data.Description;
        this.assetTypeId = data.AssetTypeId;
        this.creator = new PartialUser_1.default({
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
exports.default = Product;
