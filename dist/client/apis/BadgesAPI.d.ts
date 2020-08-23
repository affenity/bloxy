import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameBadgeOptions } from "../../structures/Game";
export declare type GetBadgeOptions = {
    badgeId: number;
};
export declare type GetBadge = GameBadgeOptions;
export declare type UpdateBadgeOptions = {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
};
export declare type UpdateBadge = {};
export declare type GetUniverseBadgesOptions = {
    universeId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
export declare type GetUniverseBadges = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GetBadge[];
};
export declare type GetUserBadgesOptions = {
    userId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
export declare type GetUserBadges = GetUniverseBadges;
export declare type GetUserBadgesAwardedDatesOptions = {
    userId: number;
    badgeIds: number[];
};
export declare type GetUserBadgesAwardedDates = {
    data: {
        badgeId: number;
        awardedDate: string;
    }[];
};
export declare type DeleteBadgeFromUserOptions = {
    userId: number;
    badgeId: number;
};
export declare type DeleteBadgeFromUser = {};
export declare type DeleteBadgeFromSelfOptions = {
    badgeId: number;
};
export declare type DeleteBadgeFromSelf = DeleteBadgeFromUser;
export default class AvatarAPI extends BaseAPI {
    constructor(client: Client);
    getBadge(options: GetBadgeOptions): Promise<GetBadge>;
    updateBadge(options: UpdateBadgeOptions): Promise<UpdateBadge>;
    getUniverseBadges(options: GetUniverseBadgesOptions): Promise<GetUniverseBadges>;
    getUserBadges(options: GetUserBadgesOptions): Promise<GetUserBadges>;
    getUserBadgesAwardedDates(options: GetUserBadgesAwardedDatesOptions): Promise<GetUserBadgesAwardedDates>;
    deleteBadgeFromUser(options: DeleteBadgeFromUserOptions): Promise<DeleteBadgeFromUser>;
    deleteBadgeFromSelf(options: DeleteBadgeFromSelfOptions): Promise<DeleteBadgeFromSelf>;
}
