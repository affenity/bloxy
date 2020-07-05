import Client from "../../client";
import PartialUser from "../user/PartialUser";


export interface ProductOptions {
    TargetId: number;
    ProductType: string;
    AssetId: number;
    ProductId: number;
    Name: string;
    Description: string;
    AssetTypeId: number;
    Creator: {
        Id: number;
        Name: string;
    };
    IconImageAssetId: number;
    Created: string;
    Updated: string;
    PriceInRobux: number;
    PriceInTickets: null;
    Sales: number;
    IsNew: boolean;
    IsForSale: boolean;
    IsPublicDomain: boolean;
    IsLimited: boolean;
    IsLimitedUnique: boolean;
    Remaining: number | null;
    MinimumMembershipLevel: number;
}

export default class Product {
    public client: Client;
    public id: number;
    public type: string;
    public assetId: number;
    public productId: number;
    public name: string;
    public description: string;
    public assetTypeId: number;
    public creator: PartialUser;
    public iconImageAssetId: number;
    public created: Date;
    public updated: Date;
    public price: number;
    public sales: number;
    public isNew: boolean;
    public forSale: boolean;
    public publicDomain: boolean;
    public limited: boolean;
    public limitedUnique: boolean;
    public remaining: number | null;
    public minimumMembershipLevel: number;

    constructor (data: ProductOptions, client: Client) {
        this.client = client;
        this.id = data.TargetId;
        this.type = data.ProductType;
        this.assetId = data.AssetId;
        this.productId = data.ProductId;
        this.name = data.Name;
        this.description = data.Description;
        this.assetTypeId = data.AssetTypeId;
        this.creator = new PartialUser({
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
