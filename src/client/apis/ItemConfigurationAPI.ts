import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetCreatedAssetsOptions = {
    assetType: string;
    isArchived?: boolean;
    groupId?: number;
    sortOrder?: "Asc" | "Desc";
}
export type GetCreatedAssets = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
    }[];
}
export type GetMultiCreatedAssetDetailsOptions = {
    assetIds: number[];
}
export type GetMultiCreatedAssetDetails = {
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
}[]
export type GetItemTagsByItemIdsOptions = {
    itemIds: number[];
}
export type GetItemTagsByItemIds = {
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
}
export type CreateItemTagOptions = {
    itemId: number;
    tagId: string;
}
export type CreateItemTag = GetItemTagsByItemIds["data"][0]["itemTags"][0];
export type GetItemTagsMetaData = {
    isItemTagsFeatureEnabled: boolean;
    enabledAssetTypes: string[];
    maximumItemTagsPerItem: number;
}
export type DeleteItemTagOptions = {
    itemTagId: number;
}
export type DeleteItemTag = unknown
export type GetTagsByTagIdsOptions = {
    tagIds: number[];
}
export type GetTagsByTagIds = {
    data: Omit<GetItemTagsByItemIds["data"][0]["itemTags"][0], "id">[];
}
export type SearchTagsOptions = {
    prefix: string;
    results: number;
}
export type SearchTags = GetTagsByTagIds;

export default class InventoryAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://itemconfiguration.roblox.com/"
        });
    }

    getCreatedAssets (options: GetCreatedAssetsOptions): Promise<GetCreatedAssets> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/creations/get-assets`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiCreatedAssets (options: GetMultiCreatedAssetDetailsOptions): Promise<GetMultiCreatedAssetDetails> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/creations/get-asset-details`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getItemTagsByItemIds (options: GetItemTagsByItemIdsOptions): Promise<GetItemTagsByItemIds> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags`,
                qs: {
                    itemIds: options.itemIds.join(",")
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    createItemTag (options: CreateItemTagOptions): Promise<CreateItemTag> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getItemTagsMetaData (): Promise<GetItemTagsMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteItemTag (options: DeleteItemTagOptions): Promise<DeleteItemTag> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/item-tags/${options.itemTagId}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    getTagsByTagIds (options: GetTagsByTagIdsOptions): Promise<GetTagsByTagIds> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/tags`,
                qs: {
                    tagIds: options.tagIds.join(",")
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    searchTags (options: SearchTagsOptions): Promise<SearchTags> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/tags/prefix-search`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
