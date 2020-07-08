import PartialUser from "../user/PartialUser";
import PartialGroup from "../group/PartialGroup";
import { CreatorType } from "../../util/constants";
import Client from "../../client";
import { ProductDetails } from "../../client/apis/CatalogAPI";


export interface BundleOptions {
    id: number;
    name: string;
    description: string;
    bundleType: string;
    items: {
        owned: boolean;
        id: number;
        name: string;
        type: string;
    }[];
    creator: {
        id: number;
        name: string;
        type: string;
    };
    product: ProductDetails;
}

export default class Bundle {
    public client: Client;
    public id: number;
    public name: string;
    public description: string;
    public bundleType: string;
    public items: {
        owned: boolean;
        id: number;
        name: string;
        type: string;
    }[];
    public creatorType: CreatorType;
    public creator: PartialUser | PartialGroup;
    public product: {
        id: number;
        type: string;
        publicDomain: boolean;
        forSale: boolean;
        price: number;
        premiumPricing: {
            discount: number;
            price: number;
        };
    };

    constructor (data: BundleOptions, client: Client) {
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
        this.creatorType = data.creator.type.toLowerCase() === "group" ? CreatorType.GROUP : CreatorType.USER;
        this.creator = this.creatorType === CreatorType.USER ? new PartialUser({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new PartialGroup({
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
