"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGroup_1 = tslib_1.__importDefault(require("../group/PartialGroup"));
const constants_1 = require("../../util/constants");
class Bundle {
    constructor(data, client) {
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
        this.creator = this.creatorType === constants_1.CreatorType.USER ? new PartialUser_1.default({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new PartialGroup_1.default({
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
exports.default = Bundle;
