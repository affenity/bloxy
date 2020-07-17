import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetThumbnailsMetaData = {
    logRatio: number;
};
export declare type RecordThumbnailLoadOptions = {
    duration: number;
    loadState: string;
    thumbnailType: string;
};
export declare type RecordThumbnailLoad = {};
export declare type RecordBundleLoadOptions = {
    bundleUrl: string;
    bundleName: string;
    loadTimeInMilliseconds: number;
    cdnProviderName: string;
    loadState: string;
    bundleContentType: string;
};
export declare type RecordBundleLoad = {};
export default class LocaleAPI extends BaseAPI {
    constructor(client: Client);
    getThumbnailsMetaData(): Promise<GetThumbnailsMetaData>;
    recordThumbnailLoad(options: RecordThumbnailLoadOptions): Promise<RecordThumbnailLoad>;
    recordBundleLoad(options: RecordBundleLoadOptions): Promise<RecordBundleLoad>;
}
