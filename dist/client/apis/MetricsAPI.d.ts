import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type MetricsGetThumbnailsMetaData = {
    logRatio: number;
};
export declare type MetricsRecordThumbnailLoadOptions = {
    duration: number;
    loadState: string;
    thumbnailType: string;
};
export declare type MetricsRecordThumbnailLoad = unknown;
export declare type MetricsReportBundleLoadOptions = {
    bundleUrl: string;
    bundleName: string;
    loadTimeInMilliseconds: number;
    cdnProviderName: string;
    loadState: string;
    bundleContentType: string;
};
export declare type MetricsReportBundleLoad = unknown;
export declare class MetricsAPI extends BaseAPI {
    constructor(client: Client);
    getThumbnailsMetaData(): Promise<MetricsGetThumbnailsMetaData>;
    recordThumbnailLoad(options: MetricsRecordThumbnailLoadOptions): Promise<MetricsRecordThumbnailLoad>;
    recordBundleLoad(options: MetricsReportBundleLoadOptions): Promise<MetricsReportBundleLoad>;
}
