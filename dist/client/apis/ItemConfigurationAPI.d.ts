import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type ItemConfigurationGetCreatedAssetsOptions = {
    assetType: string;
    isArchived?: boolean;
    groupId?: number;
    sortOrder?: "Asc" | "Desc";
};
export declare type ItemConfigurationGetCreatedAssets = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
    }[];
};
export declare type ItemConfigurationGetMultiCreatedAssetDetailsOptions = {
    assetIds: number[];
};
export declare type ItemConfigurationGetMultiCreatedAssetDetails = {
    assetId: number;
    name: string;
    status: string;
    description: string;
    creatorType: string;
    creatorTargetId: number;
    price: number;
    priceConfiguration: {
        priceInRobux: number;
        premiumDiscountPercentage: number;
        premiumPriceInRobux: number;
    };
    isArchived: boolean;
    assetType: string;
}[];
export declare type ItemConfigurationGetItemTagsByItemIdsOptions = {
    itemIds: number[];
};
export declare type ItemConfigurationGetItemTagsByItemIds = {
    data: {
        id: string;
        itemTags: {
            id: string;
            tag: {
                tagId: string;
                name: string;
                localizedDisplayName: string;
                status: "Success" | string;
            };
        }[];
    }[];
};
export declare type ItemConfigurationCreateItemTagOptions = {
    itemId: number;
    tagId: string;
};
export declare type ItemConfigurationCreateItemTag = ItemConfigurationGetItemTagsByItemIds["data"][0]["itemTags"][0];
export declare type ItemConfigurationGetItemTagsMetaData = {
    isItemTagsFeatureEnabled: boolean;
    enabledAssetTypes: string[];
    maximumItemTagsPerItem: number;
};
export declare type ItemConfigurationDeleteItemTagOptions = {
    itemTagId: number;
};
export declare type ItemConfigurationDeleteItemTag = unknown;
export declare type ItemConfigurationGetTagsByTagIdsOptions = {
    tagIds: number[];
};
export declare type ItemConfigurationGetTagsByTagIds = {
    data: Omit<ItemConfigurationGetItemTagsByItemIds["data"][0]["itemTags"][0], "id">[];
};
export declare type ItemConfigurationSearchTagsOptions = {
    prefix: string;
    results: number;
};
export declare type ItemConfigurationSearchTags = ItemConfigurationGetTagsByTagIds;
export declare class ItemConfigurationAPI extends BaseAPI {
    constructor(client: Client);
    getCreatedAssets(options: ItemConfigurationGetCreatedAssetsOptions): Promise<ItemConfigurationGetCreatedAssets>;
    getMultiCreatedAssets(options: ItemConfigurationGetMultiCreatedAssetDetailsOptions): Promise<ItemConfigurationGetMultiCreatedAssetDetails>;
    getItemTagsByItemIds(options: ItemConfigurationGetItemTagsByItemIdsOptions): Promise<ItemConfigurationGetItemTagsByItemIds>;
    createItemTag(options: ItemConfigurationCreateItemTagOptions): Promise<ItemConfigurationCreateItemTag>;
    getItemTagsMetaData(): Promise<ItemConfigurationGetItemTagsMetaData>;
    deleteItemTag(options: ItemConfigurationDeleteItemTagOptions): Promise<ItemConfigurationDeleteItemTag>;
    getTagsByTagIds(options: ItemConfigurationGetTagsByTagIdsOptions): Promise<ItemConfigurationGetTagsByTagIds>;
    searchTags(options: ItemConfigurationSearchTagsOptions): Promise<ItemConfigurationSearchTags>;
}
