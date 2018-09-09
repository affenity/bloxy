const UserClass = require('./User');
const ClientMethods = require('../client/methods');


class ProductInfo {

    constructor(data, self) {
        this._self = self;

        this.targetId = data.TargetId;
        this.productType = data.ProductType;
        this.assetId = data.AssetId;
        this.productId = data.ProductId;
        this.name = data.Name;
        this.description = data.Description;
        this.assetTypeId = data.AssetTypeId;
        this.creator = new UserClass.PartialUser(data.Creator, self);
        this.iconImageAssetId = data.IconImageAssetId;
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
        this.price = data.PriceInRobux;
        this.isNew = data.IsNew == true;
        this.isForSale = data.IsForSale == true;
        this.isPublicDomain = data.IsPublicDomain == true;
        this.isLimited = data.IsLimited;
        this.isLimitedUnique = data.IsLimitedUnique;
        this.remining = data.Remaining;
        this.minimumMembershipLevel = data.MinimumMembershipLevel;
        this.contentRatingTypeId = data.ContentRatingTypeId;

    }

    async buy () {
        return ClientMethods.buyAsset(this.productId || this.assetId, this.price, this.creator.userId, this._self);
    }

    async deleteFromInventory () {
        return ClientMethods.deleteFromInventory({ assetId: this.assetId }, this._self);
    }
    
}

exports.ProductInfo = ProductInfo;