import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { ISOString } from "../../types/GenericTypes";
import { GroupIdOption } from "../..";
export declare type AdConfigurationTargetGender = unknown;
export declare type AdConfigurationTargetAgeBracket = unknown;
export declare type AdConfigurationTargetDeviceType = unknown;
export declare type AdConfigurationSponsoredGame = {
    adId: number;
    adSetId: number;
    adName: string;
    adStatus: unknown;
    creativeType: unknown;
    creativeTargetId: number;
    creativeUrl: string;
    bidAmountInRobux: number;
    budgetInRobux: number;
    adSetStatus: unknown;
    startDate: ISOString;
    endDate: ISOString;
    targetGender: AdConfigurationTargetGender;
    targetAgeBracket: AdConfigurationTargetAgeBracket;
    targetDeviceType: AdConfigurationTargetDeviceType;
    campaignTargetType: unknown;
    campaignTargetId: number;
    totalSpendInRobux: number;
    totalImpressions: number;
    totalClicks: number;
    totalConversions: number;
    impressionConversions: number;
    clickConversions: number;
};
export declare type AdConfigurationSponsoredGames = {
    sponsoredGames: AdConfigurationSponsoredGame[];
    previousPageCursor: string;
    nextPageCursor: string;
};
export declare type AdConfigurationUniverse = {
    id: number;
    name: string;
};
export declare type AdConfigurationUniverses = {
    universes: AdConfigurationUniverse[];
};
export declare type AdConfigurationCreateSponsoredGameAdOptions = {
    universeId: number;
    targetGender: AdConfigurationTargetGender;
    targetAgeBracket: AdConfigurationTargetAgeBracket;
    targetDeviceType: AdConfigurationTargetDeviceType;
    budgetInRobux: number;
    startDate: ISOString;
    endDate: ISOString;
    adName: string;
    bidAmountInRobux: number;
};
export declare type AdConfigurationStopSponsoredGameAdOptions = {
    adSetId: number;
};
export declare type AdConfigurationGetSponsoredGamesOptions = {
    universeId: number;
    includeReportingStats?: boolean;
    isArchived?: boolean;
    pageCursor?: string;
};
export declare class AdConfigurationAPI extends BaseAPI {
    constructor(client: Client);
    getSponsoredGames(options: AdConfigurationGetSponsoredGamesOptions): Promise<AdConfigurationSponsoredGames>;
    getUniverses(options: Partial<GroupIdOption>): Promise<AdConfigurationUniverses>;
    createSponsor(options: AdConfigurationCreateSponsoredGameAdOptions): Promise<boolean>;
    stopSponsor(options: AdConfigurationStopSponsoredGameAdOptions): Promise<boolean>;
}
