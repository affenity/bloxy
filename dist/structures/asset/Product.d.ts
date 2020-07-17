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
    client: Client;
    id: number;
    type: string;
    assetId: number;
    productId: number;
    name: string;
    description: string;
    assetTypeId: number;
    creator: PartialUser;
    iconImageAssetId: number;
    created: Date;
    updated: Date;
    price: number;
    sales: number;
    isNew: boolean;
    forSale: boolean;
    publicDomain: boolean;
    limited: boolean;
    limitedUnique: boolean;
    remaining: number | null;
    minimumMembershipLevel: number;
    constructor(data: ProductOptions, client: Client);
}
