"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetDeliveryAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
const convertToBaseAsset = (options) => ({
    errors: typeof options.Errors !== "undefined"
        ? options.Errors.map((v) => ({
            message: v.Message,
            code: v.Code
        }))
        : undefined,
    isArchived: typeof options.IsArchived !== "undefined" ? options.IsArchived : undefined,
    isCopyrightProtected: typeof options.IsCopyrightProtected !== "undefined"
        ? options.IsCopyrightProtected
        : undefined,
    isHashDynamic: typeof options.IsHashDynamic !== "undefined"
        ? options.IsHashDynamic
        : undefined,
    location: typeof options.Location !== "undefined" ? options.Location : undefined,
    requestId: typeof options.RequestId !== "undefined" ? options.RequestId : undefined
});
const generateBaseDeliveryAssetOptions = (options) => ({
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
class AssetDeliveryAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            baseUrl: "https://assetdelivery.roblox.com/",
            client
        });
    }
    getAssetByAlias(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/alias/${options.alias}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetById(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/asset`,
                qs: Object.assign(Object.assign({}, generatedOptions.qs), { id: options.id }),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => ({
            location: response.body.Location || undefined,
            request: response.body.Request
        }));
    }
    getAssetByHash(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetHash/${options.hash}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetByAssetId(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetId/${options.assetId}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetVersionByAssetId(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetId/${options.assetId}/version/${options.version}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetByAssetVersionId(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/assetVersionId/${options.assetVersionId}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetByMarAssetHash(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/marAssetHash/${options.marAssetHash}/marCheckSum/${options.marCheckSum}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getAssetByUserAssetId(options) {
        const generatedOptions = generateBaseDeliveryAssetOptions(options);
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: `v1/userAssetId/${options.userAssetId}`,
                qs: Object.assign({}, generatedOptions.qs),
                headers: Object.assign({}, generatedOptions.headers)
            }
        }).then((response) => convertToBaseAsset(response.body));
    }
    getBatchAssets(options) {
        return this.request({
            requiresAuth: true,
            json: true,
            request: {
                path: "v1/assets/bath",
                method: "POST",
                json: options
            }
        }).then((response) => response.body.map((value) => convertToBaseAsset(value)));
    }
}
exports.AssetDeliveryAPI = AssetDeliveryAPI;
