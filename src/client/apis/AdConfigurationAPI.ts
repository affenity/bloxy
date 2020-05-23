import BaseAPI from "./BaseAPI";
import Client from "../Client";


export declare type GetSponsoredGamesOptions = {
    groupId?: number;
    startRowIndex?: number;
    count?: number;
};

export declare type CreateAdOptions = {};
export declare type RunAdOptions = {};
export declare type StopAdOptions = {};

export declare type CreateAdMetaData = {
    universeId: number;
    universeCreatorType: string;
    universeCreatorTargetId: number;
    areNativeAdsForPhoneEnabled: boolean;
    areNativeAdsForTabletEnabled: boolean;
    areNativeAdsForDesktopEnabled: boolean;
    areNativeAdsForConsoleEnabled: boolean;
}
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
}
export declare type CreateAd = {};
export declare type RunAd = {};
export declare type StopAd = {};

export default class AdConfigurationAPI extends BaseAPI {
    public client: Client;

    constructor (client: Client) {
        super({
            baseUrl: "https://adconfiguration.roblox.com/",
            client
        });
        this.client = client;
    }

    getCreateAdMetaData (): Promise<CreateAdMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "/v1/sponsored-games/create-ad/metadata"
            }
        }).then(response => response.body as CreateAdMetaData);
    }

    getSponsoredGames (options: GetSponsoredGamesOptions): Promise<GetSponsoredGames> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/sponsored-games",
                qs: {
                    groupId: options.groupId || null,
                    startRowIndex: options.startRowIndex || 0,
                    count: options.count || 50
                }
            }
        }).then(response => response.body as GetSponsoredGames);
    }

    createAd (options: CreateAdOptions): Promise<CreateAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/create-ad",
                method: "POST",
                json: options
            }
        }).then(response => response.body as CreateAd);
    }

    runAd (options: RunAdOptions): Promise<RunAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/run",
                method: "POST",
                json: options
            }
        }).then(response => response.body as RunAd);
    }

    stopAd (options: StopAdOptions): Promise<StopAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "/v1/sponsored-games/stop",
                method: "POST",
                json: options
            }
        }).then(response => response.body as StopAd);
    }
}
