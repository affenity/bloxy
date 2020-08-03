import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetThumbnailsMetaData = {
    logRatio: number;
}
export type RecordThumbnailLoadOptions = {
    duration: number;
    loadState: string;
    thumbnailType: string;
}
export type RecordThumbnailLoad = {}
export type RecordBundleLoadOptions = {
    bundleUrl: string;
    bundleName: string;
    loadTimeInMilliseconds: number;
    cdnProviderName: string;
    loadState: string;
    bundleContentType: string;
}
export type RecordBundleLoad = {}

export default class LocaleAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://metrics.roblox.com/"
        });
    }

    getThumbnailsMetaData (): Promise<GetThumbnailsMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/metadata`
            },
            json: true
        }).then(response => response.body);
    }

    recordThumbnailLoad (options: RecordThumbnailLoadOptions): Promise<RecordThumbnailLoad> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/load`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }

    recordBundleLoad (options: RecordBundleLoadOptions): Promise<RecordBundleLoad> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/thumbnails/metadata`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
}
