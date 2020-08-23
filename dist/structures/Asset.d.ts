import Client from "../client";
import { CreatorType } from "../util/constants";
import { PartialGameUniverse, PartialGameUniverseOptions } from "./Game";
import { PartialUser, PartialUserOptions } from "./User";
import { ProductDetails } from "../client/apis/CatalogAPI";
import { PartialGroup, PartialGroupOptions } from "./Group";
export interface Structures {
    PartialUser: new (data: PartialUserOptions, client: Client) => PartialUser;
    PartialGameUniverse: new (data: PartialGameUniverseOptions, client: Client) => PartialGameUniverse;
    PartialGroup: new (data: PartialGroupOptions, client: Client) => PartialGroup;
}
export interface AssetVersionOptions {
    Id: number;
    AssetId: number;
    VersionNumber: number;
    ParentAssetVersionId: number;
    CreatorType: unknown;
    CreatingUniverseId: number | null;
    Created: string;
    Updated: string;
}
export declare class AssetVersion {
    client: Client;
    id: number;
    assetId: number;
    versionNumber: number;
    parentAssetVersionId: number | null;
    creatorType: CreatorType;
    createdForUniverse: PartialGameUniverse | null;
    creator: PartialUser;
    created: Date;
    updated: Date;
    constructor(data: any, client: Client);
}
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
export declare class Bundle {
    client: Client;
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
    creatorType: CreatorType;
    creator: PartialUser | PartialGroup;
    product: {
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
    constructor(data: BundleOptions, client: Client);
}
export interface CollectibleAssetOptions {
    userAssetId: number;
    serialNumber: number | null;
    assetId: number;
    name: string;
    recentAveragePrice: number | null;
    originalPrice: number | null;
    assetStock: number | null;
    buildersClubMembershipType: number;
}
export declare class CollectibleAsset {
    client: Client;
    assetId: number;
    userAssetId: number;
    name: string;
    recentAveragePrice: number | null;
    originalPrice: number | null;
    assetStock: number | null;
    buildersClubMembershipType: number;
    constructor(data: CollectibleAssetOptions, client: Client);
}
export declare type CursorPageOptions = {
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
declare type CursorPageResponse = {
    data: unknown;
    previousPageCursor: string | null;
    nextPageCursor: string | null;
};
export declare class CursorPage<T> {
    client: Client;
    options: CursorPageOptions;
    cursors: {
        current: string | null;
        next: string | null;
        previous: string | null;
    };
    data: T[];
    method: Function;
    constructor(client: Client, options: CursorPageOptions, response: CursorPageResponse, method: Function);
    getNext(newOptions?: CursorPageOptions): Promise<CursorPage<T>>;
    getPrevious(newOptions?: CursorPageOptions): Promise<CursorPage<T>>;
}
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
export declare class Product {
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
export interface TradeOptions {
    id: number;
    offers: {
        user: {
            id: number;
            name: string;
            displayName: string;
        };
        userAssets: CollectibleAssetOptions[];
        robux: number;
    }[];
    user: {
        id: number;
        name: string;
        displayName: string;
    };
    created: string;
    isActive: boolean;
    status: "Completed" | string;
}
export declare class Trade {
    client: Client;
    id: number;
    offers: {
        user: PartialUser;
        assets: CollectibleAsset[];
        robux: number;
    }[];
    sender: PartialUser;
    created: Date;
    active: boolean;
    status: string;
    constructor(data: TradeOptions, client: Client);
}
export {};
