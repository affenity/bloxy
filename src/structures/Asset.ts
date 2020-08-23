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


const retrieveStructures = (): Structures => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup
});


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


export class AssetVersion {
    public client: Client;
    public id: number;
    public assetId: number;
    public versionNumber: number;
    public parentAssetVersionId: number | null;
    public creatorType: CreatorType;
    public createdForUniverse: PartialGameUniverse | null;
    public creator: PartialUser;
    public created: Date;
    public updated: Date;

    constructor (data: any, client: Client) {
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


export class Bundle {
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
        this.creatorType = data.creator.type.toLowerCase() === "group" ? CreatorType.GROUP : CreatorType.USER;
        this.creator = this.creatorType === CreatorType.USER ? new structures.PartialUser({
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


export class CollectibleAsset {
    public client: Client;
    public assetId: number;
    public userAssetId: number;
    public name: string;
    public recentAveragePrice: number | null;
    public originalPrice: number | null;
    public assetStock: number | null;
    public buildersClubMembershipType: number;

    constructor (data: CollectibleAssetOptions, client: Client) {
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


export type CursorPageOptions = {
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
}
type CursorPageResponse = {
    data: unknown;
    previousPageCursor: string | null;
    nextPageCursor: string | null;
}


export class CursorPage<T> {
    public client: Client;
    public options: CursorPageOptions;
    public cursors: {
        current: string | null;
        next: string | null;
        previous: string | null;
    };
    public data: T[];
    public method: Function;

    constructor (client: Client, options: CursorPageOptions, response: CursorPageResponse, method: Function) {
        this.client = client;
        this.options = options;
        this.cursors = {
            current: options.cursor || null,
            next: response.nextPageCursor || null,
            previous: response.previousPageCursor || null
        };
        this.data = response.data as T[];
        this.method = method;
    }

    getNext (newOptions?: CursorPageOptions): Promise<CursorPage<T>> {
        if (!this.cursors.next) {
            throw new Error("Attempted to iterate to next page, but no cursor was presented for the next page");
        }

        const options = {
            ...this.options,
            cursor: this.cursors.next,
            ...newOptions
        };

        return this.method(options);
    }

    getPrevious (newOptions?: CursorPageOptions): Promise<CursorPage<T>> {
        if (!this.cursors.previous) {
            throw new Error("Attempted to iterate to previous page, but no cursor was presented for the previous page");
        }

        const options = {
            ...this.options,
            cursor: this.cursors.previous,
            ...newOptions
        };

        return this.method(options);
    }
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


export class Product {
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


export class Trade {
    public client: Client;
    public id: number;
    public offers: {
        user: PartialUser;
        assets: CollectibleAsset[];
        robux: number;
    }[];
    public sender: PartialUser;
    public created: Date;
    public active: boolean;
    public status: string;

    constructor (data: TradeOptions, client: Client) {
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
