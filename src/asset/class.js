const userClass = require('../user/class.js');

const assetFuncs = require('./main.js');

class Product {
    constructor(data, setup) {
    this.hidden = setup;

    this.assetId = Number(data.AssetId || data.assetId);
    this.productType = String(data.ProductType).toString();
    this.productId = Number(data.ProductId);
    this.name = String(data.Name).toString();
    this.Description = String(data.Description).toString();
    this.assetTypeId = Number(data.AssetTypeId);
    this.creator = new userClass.PartialUser(data.Creator, setup);
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
    this.remaining = Number(data.Remaining);
    this.minimumMemberShipLevel = Number(data.MinimumMembershipLevel);
    this.contentRatingTypeId = Number(data.ContentRatingTypeId);

    }

    /**
     * Buys the item
     */
    async buy() {
        if (this.priceInRobux==0?(this.sales>=0&&this.isLimited==false&&this.isLimitedUnique==false):(this.isForSale)) {
            return assetFuncs.buyAsset(this, this.hidden);
        } else throw new Error("Attempted to buy an asset which was not available for sale");
    }
    
    /**
     * Deletes the product from the inventory
     */
    async deleteFromInventory() {
        return assetFuncs.deleteFromInventory(this, this.hidden);
    }

    /**
     * Configures an item
     * @param {String} newTitle The title of the item
     * @param {String} newDescription The description of the item
     * @param {Boolean} enableComments Whether or not to enable comments
     * @param {Number} sellForRobux The amount of robux to sell it for
     * @param {Number} genreSelection The genre
     */
    async configureItem(newTitle, newDescription, enableComments, sellForRobux, genreSelection) {
        if (!newTitle || !newDescription) throw new Error("You must provide the title and the description");
        let bb = {
            assetId: this.assetId,
            title: newTitle,
            description: newDescription,
            enableComments: enableComments,
            sellForRobux:sellForRobux||0,
            genreSelection: genreSelection||1
        }
        return assetFuncs.configureItem(bb, this.hidden);
    }
}




module.exports.Product = Product;