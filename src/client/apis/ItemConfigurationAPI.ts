import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type ItemConfigurationGetCreatedAssetsOptions = {
  assetType: string;
  isArchived?: boolean;
  groupId?: number;
  sortOrder?: "Asc" | "Desc";
};
export type ItemConfigurationGetCreatedAssets = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    assetId: number;
    name: string;
  }[];
};
export type ItemConfigurationGetMultiCreatedAssetDetailsOptions = {
  assetIds: number[];
};
export type ItemConfigurationGetMultiCreatedAssetDetails = {
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
export type ItemConfigurationGetItemTagsByItemIdsOptions = {
  itemIds: number[];
};
export type ItemConfigurationGetItemTagsByItemIds = {
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
export type ItemConfigurationCreateItemTagOptions = {
  itemId: number;
  tagId: string;
};
export type ItemConfigurationCreateItemTag =
  ItemConfigurationGetItemTagsByItemIds["data"][0]["itemTags"][0];
export type ItemConfigurationGetItemTagsMetaData = {
  isItemTagsFeatureEnabled: boolean;
  enabledAssetTypes: string[];
  maximumItemTagsPerItem: number;
};
export type ItemConfigurationDeleteItemTagOptions = {
  itemTagId: number;
};
export type ItemConfigurationDeleteItemTag = unknown;
export type ItemConfigurationGetTagsByTagIdsOptions = {
  tagIds: number[];
};
export type ItemConfigurationGetTagsByTagIds = {
  data: Omit<
    ItemConfigurationGetItemTagsByItemIds["data"][0]["itemTags"][0],
    "id"
  >[];
};
export type ItemConfigurationSearchTagsOptions = {
  prefix: string;
  results: number;
};
export type ItemConfigurationSearchTags = ItemConfigurationGetTagsByTagIds;

export default class InventoryAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://itemconfiguration.roblox.com/"
    });
  }

  getCreatedAssets(
    options: ItemConfigurationGetCreatedAssetsOptions
  ): Promise<ItemConfigurationGetCreatedAssets> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/creations/get-assets`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiCreatedAssets(
    options: ItemConfigurationGetMultiCreatedAssetDetailsOptions
  ): Promise<ItemConfigurationGetMultiCreatedAssetDetails> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/creations/get-asset-details`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getItemTagsByItemIds(
    options: ItemConfigurationGetItemTagsByItemIdsOptions
  ): Promise<ItemConfigurationGetItemTagsByItemIds> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/item-tags`,
        qs: {
          itemIds: options.itemIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  createItemTag(
    options: ItemConfigurationCreateItemTagOptions
  ): Promise<ItemConfigurationCreateItemTag> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/item-tags`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getItemTagsMetaData(): Promise<ItemConfigurationGetItemTagsMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/item-tags/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  deleteItemTag(
    options: ItemConfigurationDeleteItemTagOptions
  ): Promise<ItemConfigurationDeleteItemTag> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/item-tags/${options.itemTagId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getTagsByTagIds(
    options: ItemConfigurationGetTagsByTagIdsOptions
  ): Promise<ItemConfigurationGetTagsByTagIds> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/tags`,
        qs: {
          tagIds: options.tagIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  searchTags(
    options: ItemConfigurationSearchTagsOptions
  ): Promise<ItemConfigurationSearchTags> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/tags/prefix-search`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }
}
