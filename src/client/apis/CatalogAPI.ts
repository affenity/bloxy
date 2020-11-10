import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type ProductDetails = {
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
export type GetAssetBundlesOptions = {
    assetId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetAssetBundles = {
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
        product: ProductDetails;
    }[];
}
export type GetBundleDetailsOptions = {
    bundleId: number;
}
export type GetBundleDetails = GetAssetBundles["data"][0];
export type GetBundleRecommendationsByBundleIdOptions = {
    bundleId: number;
    numItems?: number;
}
export type GetBundleRecommendationsByBundleId = {
    data: GetAssetBundles["data"];
}
export type GetMultiBundleDetailsOptions = {
    bundleIds: number[];
}
export type GetMultiBundleDetails = GetAssetBundles["data"];
export type GetUserBundlesOptions = {
    userId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUserBundles = GetAssetBundles;
export type GetUserBundlesByTypeOptions = GetUserBundlesOptions & {
    bundleType: "BodyParts" | "AvatarAnimations" | string;
}
export type GetUserBundlesByType = GetUserBundles;
export type UnpackBundleOptions = {
    bundleId: number;
}
export type UnpackBundle = unknown;
export type GetAssetToCategory = Record<string, number>;
export type GetAssetToSubCategory = GetAssetToCategory;
export type GetCategories = GetAssetToCategory
export type GetSubCategories = GetAssetToCategory;
export type GetAppStoreExclusiveBundlesOptions = {
    appStoreType: "iOS" | "GooglePlay" | "Xbox" | "Amazon";
}
export type GetAppStoreExclusiveBundles = {
    data: ProductDetails[];
}
export type GetAssetFavoriteCountOptions = {
    assetId: number;
}
export type GetAssetFavoriteCount = number;
export type GetBundleFavoriteCountOptions = {
    bundleId: number;
}
export type GetBundleFavoriteCount = number;
export type RemoveSelfAssetFavoriteOptions = {
    userId: number;
    assetId: number;
}
export type RemoveSelfAssetFavorite = unknown
export type GetUserFavoriteAssetOptions = {
    userId: number;
    assetId: number;
}
export type GetUserFavoriteAsset = {
    assetId: number;
    userId: number;
    created: string;
}
export type FavoriteAssetOptions = {
    userId: number;
    assetId: number;
}
export type FavoriteAsset = unknown
export type RemoveFavoriteBundleOptions = {
    userId: number;
    bundleId: number;
}
export type RemoveFavoriteBundle = unknown
export type GetSelfFavoriteBundleOptions = {
    userId: number;
    bundleId: number;
}
export type GetSelfFavoriteBundle = {
    bundleId: number;
    userId: number;
    created: string;
}
export type FavoriteBundleOptions = {
    userId: number;
    bundleId: number;
}
export type FavoriteBundle = unknown

export default class CatalogAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://catalog.roblox.com/"
        });
    }

    getAssetBundles (options: GetAssetBundlesOptions): Promise<GetAssetBundles> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/bundles`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getBundleDetails (options: GetBundleDetailsOptions): Promise<GetBundleDetails> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/details`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getBundleRecommendationsByBundleId (options: GetBundleRecommendationsByBundleIdOptions): Promise<GetBundleRecommendationsByBundleId> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.bundleId}/recommendations`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiBundleDetails (options: GetMultiBundleDetailsOptions): Promise<GetMultiBundleDetails> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/details`,
                qs: {
                    bundleIds: options.bundleIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserBundles (options: GetUserBundlesOptions): Promise<GetUserBundles> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/bundles`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserBundlesByType (options: GetUserBundlesByTypeOptions): Promise<GetUserBundlesByType> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/bundles/${options.bundleType}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    unpackBundle (options: UnpackBundleOptions): Promise<UnpackBundle> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/bundles/${options.bundleId}/unpack`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAssetToCategory (): Promise<GetAssetToCategory> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-category`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAssetToSubCategory (): Promise<GetAssetToSubCategory> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/asset-to-subcategory`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getCategories (): Promise<GetCategories> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/categories`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSubCategories (): Promise<GetSubCategories> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/subcategories`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAppStoreExclusiveBundles (options: GetAppStoreExclusiveBundlesOptions): Promise<GetAppStoreExclusiveBundles> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/exclusive-items/${options.appStoreType}/bundles`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAssetFavoriteCount (options: GetAssetFavoriteCountOptions): Promise<GetAssetFavoriteCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/assets/${options.assetId}/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getBundleFavoriteCount (options: GetBundleFavoriteCountOptions): Promise<GetBundleFavoriteCount> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/bundles/${options.bundleId}/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    removeAssetFavorite (options: RemoveSelfAssetFavoriteOptions): Promise<RemoveSelfAssetFavorite> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFavoriteAsset (options: GetUserFavoriteAssetOptions): Promise<GetUserFavoriteAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    favoriteAsset (options: FavoriteAssetOptions): Promise<FavoriteAsset> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/assets/${options.assetId}/favorite`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    removeBundleFavorite (options: RemoveFavoriteBundleOptions): Promise<RemoveFavoriteBundle> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFavoriteBundle (options: GetSelfFavoriteBundleOptions): Promise<GetSelfFavoriteBundle> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    favoriteBundle (options: FavoriteBundleOptions): Promise<FavoriteBundle> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/favorites/users/${options.userId}/bundles/${options.bundleId}/favorite`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
