import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type AssetDeliveryBaseOptions = {
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
export declare type AssetDeliveryBaseAsset = {
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
export declare type AssetDeliveryBaseAssetRaw = {
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
export declare type AssetDeliveryGetAssetByAliasOptions = AssetDeliveryBaseOptions & {
    alias: string;
};
export declare type AssetDeliveryGetAssetByAlias = AssetDeliveryBaseAsset;
export declare type AssetDeliveryGetAssetByIdOptions = AssetDeliveryBaseOptions & {
    id: number;
};
export declare type AssetDeliveryGetAssetById = {
    location?: string;
    request?: unknown;
};
export declare type AssetDeliveryGetAssetByHashOptions = AssetDeliveryBaseOptions & {
    hash: string;
};
export declare type AssetDeliveryGetAssetByHash = unknown;
export declare type AssetDeliveryGetAssetByAssetIdOptions = AssetDeliveryBaseOptions & {
    assetId: number;
};
export declare type AssetDeliveryGetAssetByAssetId = unknown;
export declare type AssetDeliveryGetAssetVersionByAssetIdOptions = AssetDeliveryBaseOptions & {
    assetId: number;
    version: number;
};
export declare type AssetDeliveryGetAssetVersionByAssetId = unknown;
export declare type AssetDeliveryGetAssetByAssetVersionIdOptions = AssetDeliveryBaseOptions & {
    assetVersionId: number;
};
export declare type AssetDeliveryGetAssetByAssetVersionId = unknown;
export declare type AssetDeliveryGetAssetByMarAssetHashOptions = AssetDeliveryBaseOptions & {
    marAssetHash: string;
    marCheckSum: string;
};
export declare type AssetDeliveryGetAssetByMarAssetHash = unknown;
export declare type AssetDeliveryGetAssetByUserAssetIdOptions = AssetDeliveryBaseOptions & {
    userAssetId: number;
};
export declare type AssetDeliveryGetAssetByUserAssetId = unknown;
export declare type AssetDeliveryGetBatchAssetsOptions = {
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
export declare type AssetDeliveryGetBatchAssets = AssetDeliveryBaseAsset[];
export declare class AssetDeliveryAPI extends BaseAPI {
    constructor(client: Client);
    getAssetByAlias(options: AssetDeliveryGetAssetByAliasOptions): Promise<AssetDeliveryGetAssetByAlias>;
    getAssetById(options: AssetDeliveryGetAssetByIdOptions): Promise<AssetDeliveryGetAssetById>;
    getAssetByHash(options: AssetDeliveryGetAssetByHashOptions): Promise<AssetDeliveryGetAssetByHash>;
    getAssetByAssetId(options: AssetDeliveryGetAssetByAssetIdOptions): Promise<AssetDeliveryGetAssetByAssetId>;
    getAssetVersionByAssetId(options: AssetDeliveryGetAssetVersionByAssetIdOptions): Promise<AssetDeliveryGetAssetVersionByAssetId>;
    getAssetByAssetVersionId(options: AssetDeliveryGetAssetByAssetVersionIdOptions): Promise<AssetDeliveryGetAssetByAssetVersionId>;
    getAssetByMarAssetHash(options: AssetDeliveryGetAssetByMarAssetHashOptions): Promise<AssetDeliveryGetAssetByMarAssetHash>;
    getAssetByUserAssetId(options: AssetDeliveryGetAssetByUserAssetIdOptions): Promise<AssetDeliveryGetAssetByUserAssetId>;
    getBatchAssets(options: AssetDeliveryGetBatchAssetsOptions): Promise<AssetDeliveryGetBatchAssets>;
}
