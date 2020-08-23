import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetCreatedAssetsOptions = {
    assetType: string;
    isArchived?: boolean;
    groupId?: number;
    sortOrder?: "Asc" | "Desc";
};
export declare type GetCreatedAssets = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
    }[];
};
export declare type GetMultiCreatedAssetDetailsOptions = {
    assetIds: number[];
};
export declare type GetMultiCreatedAssetDetails = {
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
export declare type GetItemTagsByItemIdsOptions = {
    itemIds: number[];
};
export declare type GetItemTagsByItemIds = {
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
export declare type CreateItemTagOptions = {
    itemId: number;
    tagId: string;
};
export declare type CreateItemTag = GetItemTagsByItemIds["data"][0]["itemTags"][0];
export declare type GetItemTagsMetaData = {
    isItemTagsFeatureEnabled: boolean;
    enabledAssetTypes: string[];
    maximumItemTagsPerItem: number;
};
export declare type DeleteItemTagOptions = {
    itemTagId: number;
};
export declare type DeleteItemTag = {};
export declare type GetTagsByTagIdsOptions = {
    tagIds: number[];
};
export declare type GetTagsByTagIds = {
    data: Omit<GetItemTagsByItemIds["data"][0]["itemTags"][0], "id">[];
};
export declare type SearchTagsOptions = {
    prefix: string;
    results: number;
};
export declare type SearchTags = GetTagsByTagIds;
export default class InventoryAPI extends BaseAPI {
    constructor(client: Client);
    getCreatedAssets(options: GetCreatedAssetsOptions): Promise<GetCreatedAssets>;
    getMultiCreatedAssets(options: GetMultiCreatedAssetDetailsOptions): Promise<GetMultiCreatedAssetDetails>;
    getItemTagsByItemIds(options: GetItemTagsByItemIdsOptions): Promise<GetItemTagsByItemIds>;
    createItemTag(options: CreateItemTagOptions): Promise<CreateItemTag>;
    getItemTagsMetaData(): Promise<GetItemTagsMetaData>;
    deleteItemTag(options: DeleteItemTagOptions): Promise<DeleteItemTag>;
    getTagsByTagIds(options: GetTagsByTagIdsOptions): Promise<GetTagsByTagIds>;
    searchTags(options: SearchTagsOptions): Promise<SearchTags>;
}
