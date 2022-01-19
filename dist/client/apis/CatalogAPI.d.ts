import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { AssetIdOption, SortOption, UserIdOption } from "../..";
export declare type CatalogProductDetails = {
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
export declare type CatalogGetAssetBundles = {
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
export declare type CatalogGetBundleDetails = CatalogGetAssetBundles["data"][0];
export declare type CatalogGetBundleRecommendationsByBundleId = {
    data: CatalogGetAssetBundles["data"];
};
export declare type CatalogGetMultiBundleDetails = CatalogGetAssetBundles["data"];
export declare type CatalogUnpackBundle = unknown;
export declare type CatalogGetAssetToCategory = Record<string, number>;
export declare type CatalogGetAppStoreExclusiveBundles = {
    data: CatalogProductDetails[];
};
export declare type CatalogGetAssetFavoriteCountOptions = {
    assetId: number;
};
export declare type CatalogGetFavoriteCount = number;
export declare type CatalogRemoveSelfAssetFavorite = unknown;
export declare type CatalogGetUserFavoriteAsset = {
    assetId: number;
    userId: number;
    created: string;
};
export declare type CatalogFavoriteAsset = unknown;
export declare type CatalogRemoveFavoriteBundle = unknown;
export declare type CatalogGetSelfFavoriteBundle = {
    bundleId: number;
    userId: number;
    created: string;
};
export declare type CatalogFavoriteBundle = unknown;
export declare type CatalogGetAssetBundlesOptions = SortOption & AssetIdOption;
export declare type CatalogGetBundleDetailsOptions = {
    bundleId: number;
};
export declare type CatalogGetBundleRecommendationsByBundleIdOptions = {
    bundleId: number;
    numItems?: number;
};
export declare type CatalogGetMultiBundleDetailsOptions = {
    bundleIds: number[];
};
export declare type CatalogGetUserBundlesOptions = SortOption & UserIdOption;
export declare type CatalogGetUserBundlesByTypeOptions = CatalogGetUserBundlesOptions & {
    bundleType: string;
};
export declare type CatalogUnpackBundleOptions = {
    bundleId: number;
};
export declare type CatalogGetAppStoreExclusiveBundlesOptions = {
    appStoreType: "iOS" | "GooglePlay" | "Xbox" | "Amazon";
};
export declare type CatalogGetBundleFavoriteCount = CatalogUnpackBundleOptions;
export declare type CatalogRemoveAssetFavoriteOptions = AssetIdOption & UserIdOption;
export declare type CatalogGetUserFavoriteAssetOptions = AssetIdOption & UserIdOption;
export declare type CatalogFavoriteAssetOptions = AssetIdOption & UserIdOption;
export declare type CatalogRemoveBundleFavoriteOptions = UserIdOption & {
    bundleId: number;
};
export declare type CatalogGetUserFavoriteBundleOptions = UserIdOption & {
    bundleId: number;
};
export declare type CatalogFavoriteBundleOptions = UserIdOption & {
    bundleId: number;
};
export declare class CatalogAPI extends BaseAPI {
    constructor(client: Client);
    getAssetBundles(options: CatalogGetAssetBundlesOptions): Promise<CatalogGetAssetBundles>;
    getBundleDetails(options: CatalogGetBundleDetailsOptions): Promise<CatalogGetBundleDetails>;
    getBundleRecommendationsByBundleId(options: CatalogGetBundleRecommendationsByBundleIdOptions): Promise<CatalogGetBundleRecommendationsByBundleId>;
    getMultiBundleDetails(options: CatalogGetMultiBundleDetailsOptions): Promise<CatalogGetMultiBundleDetails>;
    getUserBundles(options: CatalogGetUserBundlesOptions): Promise<CatalogGetAssetBundles>;
    getUserBundlesByType(options: CatalogGetUserBundlesByTypeOptions): Promise<CatalogGetAssetBundles>;
    unpackBundle(options: CatalogUnpackBundleOptions): Promise<CatalogUnpackBundle>;
    getAssetToCategory(): Promise<CatalogGetAssetToCategory>;
    getAssetToSubCategory(): Promise<CatalogGetAssetToCategory>;
    getCategories(): Promise<CatalogGetAssetToCategory>;
    getSubCategories(): Promise<CatalogGetAssetToCategory>;
    getAppStoreExclusiveBundles(options: CatalogGetAppStoreExclusiveBundlesOptions): Promise<CatalogGetAppStoreExclusiveBundles>;
    getAssetFavoriteCount(options: AssetIdOption): Promise<CatalogGetFavoriteCount>;
    getBundleFavoriteCount(options: CatalogGetBundleFavoriteCount): Promise<CatalogGetFavoriteCount>;
    removeAssetFavorite(options: CatalogRemoveAssetFavoriteOptions): Promise<CatalogRemoveSelfAssetFavorite>;
    getUserFavoriteAsset(options: CatalogGetUserFavoriteAssetOptions): Promise<CatalogGetUserFavoriteAsset>;
    favoriteAsset(options: CatalogFavoriteAssetOptions): Promise<CatalogFavoriteAsset>;
    removeBundleFavorite(options: CatalogRemoveBundleFavoriteOptions): Promise<CatalogRemoveFavoriteBundle>;
    getUserFavoriteBundle(options: CatalogGetUserFavoriteBundleOptions): Promise<CatalogGetSelfFavoriteBundle>;
    favoriteBundle(options: CatalogFavoriteBundleOptions): Promise<CatalogFavoriteBundle>;
}
