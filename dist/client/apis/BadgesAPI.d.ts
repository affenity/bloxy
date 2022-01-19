import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { SortOption } from "../..";
export declare type BadgesMetaData = {
    badgeCreationPrice: number;
    maxBadgeNameLength: number;
    maxBadgeDescriptionLength: number;
};
export declare type BadgesGetBadge = {
    id: number;
    name: string;
    description: string;
    displayName: string;
    displayDescription: string;
    enabled: boolean;
    iconImageId: number;
    displayIconImageId: number;
    created: string;
    updated: string;
    statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: {
        id: number;
        name: string;
        rootPlaceId: number;
    };
};
export declare type BadgesUpdateBadge = unknown;
export declare type BadgesGetBadges = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: BadgesGetBadge[];
};
export declare type BadgesGetUserBadgesAwardedDates = {
    data: {
        badgeId: number;
        awardedDate: string;
    }[];
};
export declare type BadgesDeleteBadgeFromUser = unknown;
export declare type BadgesDeleteBadgeFromSelf = BadgesDeleteBadgeFromUser;
export declare type BadgesGetBadgeOptions = {
    badgeId: number;
};
export declare type BadgesUpdateBadgeOptions = {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
};
export declare type BadgesGetUniverseBadgesOptions = {
    universeId: number;
} & SortOption;
export declare type BadgesGetUserBadgesOptions = {
    userId: number;
} & SortOption;
export declare type BadgesGetUserBadgesAwardedDatesOptions = {
    userId: number;
    badgeIds: number[];
};
export declare type BadgesDeleteBadgeFromUserOptions = {
    userId: number;
    badgeId: number;
};
export declare type BadgesDeleteBadgeFromSelfOptions = {
    badgeId: number;
};
export declare class BadgesAPI extends BaseAPI {
    constructor(client: Client);
    getMetaData(): Promise<BadgesMetaData>;
    getBadge(options: BadgesGetBadgeOptions): Promise<BadgesGetBadge>;
    updateBadge(options: BadgesUpdateBadgeOptions): Promise<BadgesUpdateBadge>;
    getUniverseBadges(options: BadgesGetUniverseBadgesOptions): Promise<BadgesGetBadges>;
    getUserBadges(options: BadgesGetUserBadgesOptions): Promise<BadgesGetBadges>;
    getUserBadgesAwardedDates(options: BadgesGetUserBadgesAwardedDatesOptions): Promise<BadgesGetUserBadgesAwardedDates>;
    deleteBadgeFromUser(options: BadgesDeleteBadgeFromUserOptions): Promise<BadgesDeleteBadgeFromUser>;
    deleteBadgeFromSelf(options: BadgesDeleteBadgeFromSelfOptions): Promise<BadgesDeleteBadgeFromSelf>;
}
