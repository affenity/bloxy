import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type BaseAssetDeliveryOptions = {
    acceptEncoding: string;
    robloxPlaceId: number;
    assetType: string;
    accept: string;
    skipSigningScripts: boolean;
    clientInsert: number;
    scriptInsert: number;
    modulePlaceId: number;
    serverPlaceId: number;
    expectedAssetType: string;
};
export declare type BaseAsset = {
    location?: string;
    errors?: {
        code: number;
        message: string;
    }[];
    requestId?: string;
    isHashDynamic?: boolean;
    isCopyrightProtected?: boolean;
    isArchived?: boolean;
};
export declare type BaseAssetRaw = {
    Location?: string;
    Errors?: {
        Code: number;
        Message: string;
    }[];
    RequestId?: string;
    IsHashDynamic?: boolean;
    IsCopyrightProtected?: boolean;
    IsArchived?: boolean;
};
export declare type GetAssetByAliasOptions = BaseAssetDeliveryOptions & {
    alias: string;
};
export declare type GetAssetByAlias = BaseAsset;
export declare type GetAssetByIdOptions = BaseAssetDeliveryOptions & {
    id: number;
};
export declare type GetAssetById = {
    location?: string;
    request?: unknown;
};
export declare type GetAssetByHashOptions = BaseAssetDeliveryOptions & {
    hash: string;
};
export declare type GetAssetByHash = {};
export declare type GetAssetByAssetIdOptions = BaseAssetDeliveryOptions & {
    assetId: number;
};
export declare type GetAssetByAssetId = {};
export declare type GetAssetVersionByAssetIdOptions = BaseAssetDeliveryOptions & {
    assetId: number;
    version: number;
};
export declare type GetAssetVersionByAssetId = {};
export declare type GetAssetByAssetVersionIdOptions = BaseAssetDeliveryOptions & {
    assetVersionId: number;
};
export declare type GetAssetByAssetVersionId = {};
export declare type GetAssetByMarAssetHashOptions = BaseAssetDeliveryOptions & {
    marAssetHash: string;
    marCheckSum: string;
};
export declare type GetAssetByMarAssetHash = {};
export declare type GetAssetByUserAssetIdOptions = BaseAssetDeliveryOptions & {
    userAssetId: number;
};
export declare type GetAssetByUserAssetId = {};
export declare type GetBatchAssetsOptions = {
    assetName: string;
    assetType: string;
    clientInsert: boolean;
    placeId: number;
    requestId: string;
    scriptInsert: boolean;
    serverPlaceId: number;
    universeId: number;
    accept: string;
    encoding: string;
    hash: string;
    userAssetId: number;
    assetId: number;
    version: number;
    assetVersionId: number;
    modulePlaceId: number;
};
export declare type GetBatchAssets = BaseAsset[];
export default class AssetDeliveryAPI extends BaseAPI {
    constructor(client: Client);
    getAssetByAlias(options: GetAssetByAliasOptions): Promise<GetAssetByAlias>;
    getAssetById(options: GetAssetByIdOptions): Promise<GetAssetById>;
    getAssetByHash(options: GetAssetByHashOptions): Promise<GetAssetByHash>;
    getAssetByAssetId(options: GetAssetByAssetIdOptions): Promise<GetAssetByAssetId>;
    getAssetVersionByAssetId(options: GetAssetVersionByAssetIdOptions): Promise<GetAssetVersionByAssetId>;
    getAssetByAssetVersionId(options: GetAssetByAssetVersionIdOptions): Promise<GetAssetByAssetVersionId>;
    getAssetByMarAssetHash(options: GetAssetByMarAssetHashOptions): Promise<GetAssetByMarAssetHash>;
    getAssetByUserAssetId(options: GetAssetByUserAssetIdOptions): Promise<GetAssetByUserAssetId>;
    getBatchAssets(options: GetBatchAssetsOptions): Promise<GetBatchAssets>;
}
