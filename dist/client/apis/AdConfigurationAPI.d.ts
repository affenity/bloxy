import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetSponsoredGamesOptions = {
    groupId?: number;
    startRowIndex?: number;
    count?: number;
};
export declare type CreateAdOptions = unknown;
export declare type RunAdOptions = unknown;
export declare type StopAdOptions = unknown;
export declare type GetCreateAdMetaData = {
    universeId: number;
    universeCreatorType: string;
    universeCreatorTargetId: number;
    areNativeAdsForPhoneEnabled: boolean;
    areNativeAdsForTabletEnabled: boolean;
    areNativeAdsForDesktopEnabled: boolean;
    areNativeAdsForConsoleEnabled: boolean;
};
export declare type GetSponsoredGames = {
    sponsoredGames: {
        adId: number;
        universeName: string;
        universeRootPlaceId: number;
        targetDeviceType: string;
        totalBid: number;
        totalImpressions: number;
        totalClicks: number;
        campaign: {
            bid: number;
            clicks: number;
            impressions: 0;
            isRunning: boolean;
        };
        gameIconUrl: string;
        costPerImpressionEstimate: number;
    };
    nextPageStartRowIndex: number;
    creatorType: "User" | "Group";
    isErroneous: boolean;
    minimumBidAmount: number;
};
export declare type CreateAd = unknown;
export declare type RunAd = unknown;
export declare type StopAd = unknown;
export default class AdConfigurationAPI extends BaseAPI {
    constructor(client: Client);
    getCreateAdMetaData(): Promise<GetCreateAdMetaData>;
    getSponsoredGames(options: GetSponsoredGamesOptions): Promise<GetSponsoredGames>;
    createAd(options: CreateAdOptions): Promise<CreateAd>;
    runAd(options: RunAdOptions): Promise<RunAd>;
    stopAd(options: StopAdOptions): Promise<StopAd>;
}
