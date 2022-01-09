import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type MetricsGetThumbnailsMetaData = {
  logRatio: number;
};
export type MetricsRecordThumbnailLoadOptions = {
  duration: number;
  loadState: string;
  thumbnailType: string;
};
export type MetricsRecordThumbnailLoad = unknown;
export type MetricsReportBundleLoadOptions = {
  bundleUrl: string;
  bundleName: string;
  loadTimeInMilliseconds: number;
  cdnProviderName: string;
  loadState: string;
  bundleContentType: string;
};
export type MetricsReportBundleLoad = unknown;

export default class LocaleAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://metrics.roblox.com/"
    });
  }

  getThumbnailsMetaData(): Promise<MetricsGetThumbnailsMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/thumbnails/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  recordThumbnailLoad(
    options: MetricsRecordThumbnailLoadOptions
  ): Promise<MetricsRecordThumbnailLoad> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/thumbnails/load`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  recordBundleLoad(
    options: MetricsReportBundleLoadOptions
  ): Promise<MetricsReportBundleLoad> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/bundle-metrics/report`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
