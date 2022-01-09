import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type AssetDeliveryBaseOptions = {
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
export type AssetDeliveryBaseAsset = {
  location?: string;
  errors?: { code: number; message: string }[];
  requestId?: string;
  isHashDynamic?: boolean;
  isCopyrightProtected?: boolean;
  isArchived?: boolean;
};
export type AssetDeliveryBaseAssetRaw = {
  Location?: string;
  Errors?: { Code: number; Message: string }[];
  RequestId?: string;
  IsHashDynamic?: boolean;
  IsCopyrightProtected?: boolean;
  IsArchived?: boolean;
};

const convertToBaseAsset = (
  options: AssetDeliveryBaseAssetRaw
): AssetDeliveryBaseAsset => ({
  errors:
    typeof options.Errors !== "undefined"
      ? options.Errors.map((v) => ({
          message: v.Message,
          code: v.Code
        }))
      : undefined,
  isArchived:
    typeof options.IsArchived !== "undefined" ? options.IsArchived : undefined,
  isCopyrightProtected:
    typeof options.IsCopyrightProtected !== "undefined"
      ? options.IsCopyrightProtected
      : undefined,
  isHashDynamic:
    typeof options.IsHashDynamic !== "undefined"
      ? options.IsHashDynamic
      : undefined,
  location:
    typeof options.Location !== "undefined" ? options.Location : undefined,
  requestId:
    typeof options.RequestId !== "undefined" ? options.RequestId : undefined
});
const generateBaseDeliveryAssetOptions = (
  options: AssetDeliveryBaseOptions
) => ({
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

export type AssetDeliveryGetAssetByAliasOptions = AssetDeliveryBaseOptions & {
  alias: string;
};
export type AssetDeliveryGetAssetByAlias = AssetDeliveryBaseAsset;
export type AssetDeliveryGetAssetByIdOptions = AssetDeliveryBaseOptions & {
  id: number;
};
export type AssetDeliveryGetAssetById = {
  location?: string;
  request?: unknown;
};
export type AssetDeliveryGetAssetByHashOptions = AssetDeliveryBaseOptions & {
  hash: string;
};
export type AssetDeliveryGetAssetByHash = unknown;
export type AssetDeliveryGetAssetByAssetIdOptions = AssetDeliveryBaseOptions & {
  assetId: number;
};
export type AssetDeliveryGetAssetByAssetId = unknown;
export type AssetDeliveryGetAssetVersionByAssetIdOptions =
  AssetDeliveryBaseOptions & {
    assetId: number;
    version: number;
  };
export type AssetDeliveryGetAssetVersionByAssetId = unknown;
export type AssetDeliveryGetAssetByAssetVersionIdOptions =
  AssetDeliveryBaseOptions & {
    assetVersionId: number;
  };
export type AssetDeliveryGetAssetByAssetVersionId = unknown;
export type AssetDeliveryGetAssetByMarAssetHashOptions =
  AssetDeliveryBaseOptions & {
    marAssetHash: string;
    marCheckSum: string;
  };
export type AssetDeliveryGetAssetByMarAssetHash = unknown;
export type AssetDeliveryGetAssetByUserAssetIdOptions =
  AssetDeliveryBaseOptions & {
    userAssetId: number;
  };
export type AssetDeliveryGetAssetByUserAssetId = unknown;
export type AssetDeliveryGetBatchAssetsOptions = {
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
export type AssetDeliveryGetBatchAssets = AssetDeliveryBaseAsset[];

export default class AssetDeliveryAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://assetdelivery.roblox.com/",
      client
    });
  }

  getAssetByAlias(
    options: AssetDeliveryGetAssetByAliasOptions
  ): Promise<AssetDeliveryGetAssetByAlias> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetById(
    options: AssetDeliveryGetAssetByIdOptions
  ): Promise<AssetDeliveryGetAssetById> {
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
        }
      }
    }).then((response) => ({
      location: response.body.Location || undefined,
      request: response.body.Request
    }));
  }

  getAssetByHash(
    options: AssetDeliveryGetAssetByHashOptions
  ): Promise<AssetDeliveryGetAssetByHash> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetByAssetId(
    options: AssetDeliveryGetAssetByAssetIdOptions
  ): Promise<AssetDeliveryGetAssetByAssetId> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetVersionByAssetId(
    options: AssetDeliveryGetAssetVersionByAssetIdOptions
  ): Promise<AssetDeliveryGetAssetVersionByAssetId> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetByAssetVersionId(
    options: AssetDeliveryGetAssetByAssetVersionIdOptions
  ): Promise<AssetDeliveryGetAssetByAssetVersionId> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetByMarAssetHash(
    options: AssetDeliveryGetAssetByMarAssetHashOptions
  ): Promise<AssetDeliveryGetAssetByMarAssetHash> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getAssetByUserAssetId(
    options: AssetDeliveryGetAssetByUserAssetIdOptions
  ): Promise<AssetDeliveryGetAssetByUserAssetId> {
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
        }
      }
    }).then((response) => convertToBaseAsset(response.body));
  }

  getBatchAssets(
    options: AssetDeliveryGetBatchAssetsOptions
  ): Promise<AssetDeliveryGetBatchAssets> {
    return this.request({
      requiresAuth: true,
      json: true,
      request: {
        path: "v1/assets/bath",
        method: "POST",
        json: options
      }
    }).then((response) =>
      response.body.map((value: AssetDeliveryBaseAssetRaw) =>
        convertToBaseAsset(value)
      )
    );
  }
}
