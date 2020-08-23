import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type ProductDetails = {
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
export declare type GetAssetBundlesOptions = {
    assetId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetAssetBundles = {
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
};
export declare type GetBundleDetailsOptions = {
    bundleId: number;
};
export declare type GetBundleDetails = GetAssetBundles["data"][0];
export declare type GetBundleRecommendationsByBundleIdOptions = {
    bundleId: number;
    numItems?: number;
};
export declare type GetBundleRecommendationsByBundleId = {
    data: GetAssetBundles["data"];
};
export declare type GetMultiBundleDetailsOptions = {
    bundleIds: number[];
};
export declare type GetMultiBundleDetails = GetAssetBundles["data"];
export declare type GetUserBundlesOptions = {
    userId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUserBundles = GetAssetBundles;
export declare type GetUserBundlesByTypeOptions = GetUserBundlesOptions & {
    bundleType: "BodyParts" | "AvatarAnimations" | string;
};
export declare type GetUserBundlesByType = GetUserBundles;
export declare type UnpackBundleOptions = {
    bundleId: number;
};
export declare type UnpackBundle = {};
export declare type GetAssetToCategory = Record<string, number>;
export declare type GetAssetToSubCategory = GetAssetToCategory;
export declare type GetCategories = GetAssetToCategory;
export declare type GetSubCategories = GetAssetToCategory;
export declare type GetAppStoreExclusiveBundlesOptions = {
    appStoreType: "iOS" | "GooglePlay" | "Xbox" | "Amazon";
};
export declare type GetAppStoreExclusiveBundles = {
    data: ProductDetails[];
};
export declare type GetAssetFavoriteCountOptions = {
    assetId: number;
};
export declare type GetAssetFavoriteCount = number;
export declare type GetBundleFavoriteCountOptions = {
    bundleId: number;
};
export declare type GetBundleFavoriteCount = number;
export declare type RemoveSelfAssetFavoriteOptions = {
    userId: number;
    assetId: number;
};
export declare type RemoveSelfAssetFavorite = {};
export declare type GetUserFavoriteAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type GetUserFavoriteAsset = {
    assetId: number;
    userId: number;
    created: string;
};
export declare type FavoriteAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type FavoriteAsset = {};
export declare type RemoveFavoriteBundleOptions = {
    userId: number;
    bundleId: number;
};
export declare type RemoveFavoriteBundle = {};
export declare type GetSelfFavoriteBundleOptions = {
    userId: number;
    bundleId: number;
};
export declare type GetSelfFavoriteBundle = {
    bundleId: number;
    userId: number;
    created: string;
};
export declare type FavoriteBundleOptions = {
    userId: number;
    bundleId: number;
};
export declare type FavoriteBundle = {};
export default class CatalogAPI extends BaseAPI {
    constructor(client: Client);
    getAssetBundles(options: GetAssetBundlesOptions): Promise<GetAssetBundles>;
    getBundleDetails(options: GetBundleDetailsOptions): Promise<GetBundleDetails>;
    getBundleRecommendationsByBundleId(options: GetBundleRecommendationsByBundleIdOptions): Promise<GetBundleRecommendationsByBundleId>;
    getMultiBundleDetails(options: GetMultiBundleDetailsOptions): Promise<GetMultiBundleDetails>;
    getUserBundles(options: GetUserBundlesOptions): Promise<GetUserBundles>;
    getUserBundlesByType(options: GetUserBundlesByTypeOptions): Promise<GetUserBundlesByType>;
    unpackBundle(options: UnpackBundleOptions): Promise<UnpackBundle>;
    getAssetToCategory(): Promise<GetAssetToCategory>;
    getAssetToSubCategory(): Promise<GetAssetToSubCategory>;
    getCategories(): Promise<GetCategories>;
    getSubCategories(): Promise<GetSubCategories>;
    getAppStoreExclusiveBundles(options: GetAppStoreExclusiveBundlesOptions): Promise<GetAppStoreExclusiveBundles>;
    getAssetFavoriteCount(options: GetAssetFavoriteCountOptions): Promise<GetAssetFavoriteCount>;
    getBundleFavoriteCount(options: GetBundleFavoriteCountOptions): Promise<GetBundleFavoriteCount>;
    removeAssetFavorite(options: RemoveSelfAssetFavoriteOptions): Promise<RemoveSelfAssetFavorite>;
    getUserFavoriteAsset(options: GetUserFavoriteAssetOptions): Promise<GetUserFavoriteAsset>;
    favoriteAsset(options: FavoriteAssetOptions): Promise<FavoriteAsset>;
    removeBundleFavorite(options: RemoveFavoriteBundleOptions): Promise<RemoveFavoriteBundle>;
    getUserFavoriteBundle(options: GetSelfFavoriteBundleOptions): Promise<GetSelfFavoriteBundle>;
    favoriteBundle(options: FavoriteBundleOptions): Promise<FavoriteBundle>;
}
