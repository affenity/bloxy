import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type BaseAssetDeliveryOptions = {
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
export type BaseAsset = {
    location?: string;
    errors?: { code: number; message: string }[];
    requestId?: string;
    isHashDynamic?: boolean;
    isCopyrightProtected?: boolean;
    isArchived?: boolean;
};
export type BaseAssetRaw = {
    Location?: string;
    Errors?: { Code: number; Message: string }[];
    RequestId?: string;
    IsHashDynamic?: boolean;
    IsCopyrightProtected?: boolean;
    IsArchived?: boolean;
};

const convertToBaseAsset = (options: BaseAssetRaw): BaseAsset => ({
    errors: typeof options.Errors !== "undefined" ? options.Errors.map(v => ({
        message: v.Message,
        code: v.Code
    })) : undefined,
    isArchived: typeof options.IsArchived !== "undefined" ? options.IsArchived : undefined,
    isCopyrightProtected: typeof options.IsCopyrightProtected !== "undefined" ? options.IsCopyrightProtected : undefined,
    isHashDynamic: typeof options.IsHashDynamic !== "undefined" ? options.IsHashDynamic : undefined,
    location: typeof options.Location !== "undefined" ? options.Location : undefined,
    requestId: typeof options.RequestId !== "undefined" ? options.RequestId : undefined
});
const generateBaseDeliveryAssetOptions = (options: BaseAssetDeliveryOptions) => ({
    headers: {
        "Accept-Encoding": options.acceptEncoding,
        "Roblox-Place-Id": options.robloxPlaceId,
        AssetType: options.assetType,
        Accept: options.accept
    },
    qs: {
        skipSigningScripts: options.skipSigningScripts ? "true" : "false",
        clientInsert: options.clientInsert,
        scriptinsert: options.scriptInsert,
        modulePlaceId: options.modulePlaceId,
        serverplaceid: options.serverPlaceId,
        expectedAssetType: options.expectedAssetType
    }
});

export type GetAssetByAliasOptions = BaseAssetDeliveryOptions & { alias: string };
export type GetAssetByAlias = BaseAsset;
export type GetAssetByIdOptions = BaseAssetDeliveryOptions & { id: number };
export type GetAssetById = {
    location?: string;
    request?: unknown;
};
export type GetAssetByHashOptions = BaseAssetDeliveryOptions & { hash: string };
export type GetAssetByHash = unknown;
export type GetAssetByAssetIdOptions = BaseAssetDeliveryOptions & { assetId: number };
export type GetAssetByAssetId = unknown;
export type GetAssetVersionByAssetIdOptions = BaseAssetDeliveryOptions & { assetId: number; version: number }
export type GetAssetVersionByAssetId = unknown;
export type GetAssetByAssetVersionIdOptions = BaseAssetDeliveryOptions & { assetVersionId: number }
export type GetAssetByAssetVersionId = unknown;
export type GetAssetByMarAssetHashOptions = BaseAssetDeliveryOptions & { marAssetHash: string; marCheckSum: string }
export type GetAssetByMarAssetHash = unknown;
export type GetAssetByUserAssetIdOptions = BaseAssetDeliveryOptions & { userAssetId: number }
export type GetAssetByUserAssetId = unknown
export type GetBatchAssetsOptions = {
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
export type GetBatchAssets = BaseAsset[];

export default class AssetDeliveryAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            baseUrl: "https://assetdelivery.roblox.com/",
            client
        });
    }

    getAssetByAlias (options: GetAssetByAliasOptions): Promise<GetAssetByAlias> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/alias/${options.alias}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByAlias);
    }

    getAssetById (options: GetAssetByIdOptions): Promise<GetAssetById> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/asset`,
                qs: {
                    ...generatedOptions.qs,
                    id: options.id
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => ({
                location: response.body.Location || undefined,
                request: response.body.Request
            }) as GetAssetById);
    }

    getAssetByHash (options: GetAssetByHashOptions): Promise<GetAssetByHash> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetHash/${options.hash}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByHash);
    }

    getAssetByAssetId (options: GetAssetByAssetIdOptions): Promise<GetAssetByAssetId> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetId/${options.assetId}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByAssetId);
    }

    getAssetVersionByAssetId (options: GetAssetVersionByAssetIdOptions): Promise<GetAssetVersionByAssetId> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetId/${options.assetId}/version/${options.version}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetVersionByAssetId);
    }

    getAssetByAssetVersionId (options: GetAssetByAssetVersionIdOptions): Promise<GetAssetByAssetVersionId> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetVersionId/${options.assetVersionId}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByAssetVersionId);
    }

    getAssetByMarAssetHash (options: GetAssetByMarAssetHashOptions): Promise<GetAssetByMarAssetHash> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/marAssetHash/${options.marAssetHash}/marCheckSum/${options.marCheckSum}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByMarAssetHash);
    }

    getAssetByUserAssetId (options: GetAssetByUserAssetIdOptions): Promise<GetAssetByUserAssetId> {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/userAssetId/${options.userAssetId}`,
                qs: {
                    ...generatedOptions.qs
                },
                headers: {
                    ...generatedOptions.headers
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => convertToBaseAsset(response.body) as GetAssetByUserAssetId);
    }

    getBatchAssets (options: GetBatchAssetsOptions): Promise<GetBatchAssets> {
        return this.request({
            requiresAuth: true,
            json: true,
            request: {
                path: "v1/assets/bath",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body.map((value: BaseAssetRaw) => convertToBaseAsset(value)) as GetBatchAssets);
    }
}
