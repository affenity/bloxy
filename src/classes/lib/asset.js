const bloxyClasses = require('../index')



class ProductInfo {

    constructor(data, id) {
        this._id = id;

        this.targetId = Number(data.TargetId);
        this.productType = String(data.ProductType).toString();
        this.assetId = Number(data.AssetId);
        this.productId = Number(data.ProductId);
        this.name = String(data.Name).toString();
        this.description = String(data.Description).toString();
        this.assetTypeId = Number(data.AssetTypeId);
        this.creator = new bloxyClasses.userClass.PartialUser(data.Creator, this._id);
        this.iconImageAssetId = Number(data.IconImageAssetId);
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
        this.priceInRobux = Number(data.PriceInRobux);
        this.sales = Number(data.Sales);
        this.isNew = Boolean(data.IsNew);
        this.isForSale = Boolean(data.IsForSale);
        this.isPublicDomain = Boolean(data.IsPublicDomain);
        this.isLimited = Boolean(data.IsLimited);
        this.isLimitedUnique = Boolean(data.IsLimitedUnique);
        this.remaining = Number(data.Remaining) || 0;
        this.minimumMembershipLevel = Number(data.MinimumMembershipLevel)
        this.contentRatingTypeId = Number(data.ContentRatingTypeId);

    }
}

exports.ProductInfo = ProductInfo;