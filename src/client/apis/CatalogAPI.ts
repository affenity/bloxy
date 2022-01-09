import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { AssetIdOption, SortOption, UserIdOption } from "../..";

export type CatalogProductDetails = {
  id: number;
  type: string;
  isPublicDomain: boolean;
  isForSale: boolean;
  priceInRobux: number;
  premiumPricing: {
    premiumDiscountPercentage: number;
    premiumPriceInRobux: number;
  };
};
export type CatalogGetAssetBundles = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
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
    creatorType: number;
    product: CatalogProductDetails;
  }[];
};
export type CatalogGetBundleDetails = CatalogGetAssetBundles["data"][0];
export type CatalogGetBundleRecommendationsByBundleId = {
  data: CatalogGetAssetBundles["data"];
};
export type CatalogGetMultiBundleDetails = CatalogGetAssetBundles["data"];
export type CatalogUnpackBundle = unknown;
export type CatalogGetAssetToCategory = Record<string, number>;
export type CatalogGetAppStoreExclusiveBundles = {
  data: CatalogProductDetails[];
};
export type CatalogGetAssetFavoriteCountOptions = {
  assetId: number;
};
export type CatalogGetFavoriteCount = number;
export type CatalogRemoveSelfAssetFavorite = unknown;
export type CatalogGetUserFavoriteAsset = {
  assetId: number;
  userId: number;
  created: string;
};
export type CatalogFavoriteAsset = unknown;
export type CatalogRemoveFavoriteBundle = unknown;
export type CatalogGetSelfFavoriteBundle = {
  bundleId: number;
  userId: number;
  created: string;
};
export type CatalogFavoriteBundle = unknown;
export type CatalogGetAssetBundlesOptions = SortOption & AssetIdOption;
export type CatalogGetBundleDetailsOptions = { bundleId: number };
export type CatalogGetBundleRecommendationsByBundleIdOptions = {
  bundleId: number;
  numItems?: number;
};
export type CatalogGetMultiBundleDetailsOptions = {
  bundleIds: number[];
};
export type CatalogGetUserBundlesOptions = SortOption & UserIdOption;
export type CatalogGetUserBundlesByTypeOptions =
  CatalogGetUserBundlesOptions & {
    bundleType: string;
  };
export type CatalogUnpackBundleOptions = {
  bundleId: number;
};
export type CatalogGetAppStoreExclusiveBundlesOptions = {
  appStoreType: "iOS" | "GooglePlay" | "Xbox" | "Amazon";
};
export type CatalogGetBundleFavoriteCount = CatalogUnpackBundleOptions;
export type CatalogRemoveAssetFavoriteOptions = AssetIdOption & UserIdOption;
export type CatalogGetUserFavoriteAssetOptions = AssetIdOption & UserIdOption;
export type CatalogFavoriteAssetOptions = AssetIdOption & UserIdOption;
export type CatalogRemoveBundleFavoriteOptions = UserIdOption & {
  bundleId: number;
};
export type CatalogGetUserFavoriteBundleOptions = UserIdOption & {
  bundleId: number;
};
export type CatalogFavoriteBundleOptions = UserIdOption & {
  bundleId: number;
};

export default class CatalogAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://catalog.roblox.com/"
    });
  }

  getAssetBundles(
    options: CatalogGetAssetBundlesOptions
  ): Promise<CatalogGetAssetBundles> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/${options.assetId}/bundles`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getBundleDetails(
    options: CatalogGetBundleDetailsOptions
  ): Promise<CatalogGetBundleDetails> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/bundles/${options.bundleId}/details`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getBundleRecommendationsByBundleId(
    options: CatalogGetBundleRecommendationsByBundleIdOptions
  ): Promise<CatalogGetBundleRecommendationsByBundleId> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/${options.bundleId}/recommendations`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiBundleDetails(
    options: CatalogGetMultiBundleDetailsOptions
  ): Promise<CatalogGetMultiBundleDetails> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/bundles/details`,
        qs: {
          bundleIds: options.bundleIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getUserBundles(
    options: CatalogGetUserBundlesOptions
  ): Promise<CatalogGetAssetBundles> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/bundles`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserBundlesByType(
    options: CatalogGetUserBundlesByTypeOptions
  ): Promise<CatalogGetAssetBundles> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/bundles/${options.bundleType}`
      },
      json: true
    }).then((response) => response.body);
  }

  unpackBundle(
    options: CatalogUnpackBundleOptions
  ): Promise<CatalogUnpackBundle> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/bundles/${options.bundleId}/unpack`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getAssetToCategory(): Promise<CatalogGetAssetToCategory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/asset-to-category`
      },
      json: true
    }).then((response) => response.body);
  }

  getAssetToSubCategory(): Promise<CatalogGetAssetToCategory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/asset-to-subcategory`
      },
      json: true
    }).then((response) => response.body);
  }

  getCategories(): Promise<CatalogGetAssetToCategory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/categories`
      },
      json: true
    }).then((response) => response.body);
  }

  getSubCategories(): Promise<CatalogGetAssetToCategory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/subcategories`
      },
      json: true
    }).then((response) => response.body);
  }

  getAppStoreExclusiveBundles(
    options: CatalogGetAppStoreExclusiveBundlesOptions
  ): Promise<CatalogGetAppStoreExclusiveBundles> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/exclusive-items/${options.appStoreType}/bundles`
      },
      json: true
    }).then((response) => response.body);
  }

  getAssetFavoriteCount(
    options: AssetIdOption
  ): Promise<CatalogGetFavoriteCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/assets/${options.assetId}/count`
      },
      json: true
    }).then((response) => response.body);
  }

  getBundleFavoriteCount(
    options: CatalogGetBundleFavoriteCount
  ): Promise<CatalogGetFavoriteCount> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/bundles/${options.bundleId}/count`
      },
      json: true
    }).then((response) => response.body);
  }

  removeAssetFavorite(
    options: CatalogRemoveAssetFavoriteOptions
  ): Promise<CatalogRemoveSelfAssetFavorite> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFavoriteAsset(
    options: CatalogGetUserFavoriteAssetOptions
  ): Promise<CatalogGetUserFavoriteAsset> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`
      },
      json: true
    }).then((response) => response.body);
  }

  favoriteAsset(
    options: CatalogFavoriteAssetOptions
  ): Promise<CatalogFavoriteAsset> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  removeBundleFavorite(
    options: CatalogRemoveBundleFavoriteOptions
  ): Promise<CatalogRemoveFavoriteBundle> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserFavoriteBundle(
    options: CatalogGetUserFavoriteBundleOptions
  ): Promise<CatalogGetSelfFavoriteBundle> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`
      },
      json: true
    }).then((response) => response.body);
  }

  favoriteBundle(
    options: CatalogFavoriteBundleOptions
  ): Promise<CatalogFavoriteBundle> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }
}
