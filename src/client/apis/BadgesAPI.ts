import BaseAPI from "./BaseAPI";
import Client from "../Client";
import GameBadge from "../../structures/game/GameBadge";


export type GetBadgeOptions = {
    badgeId: number;
}
export type GetBadge = GameBadge;
export type UpdateBadgeOptions = {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
};
export type UpdateBadge = {};
export type GetUniverseBadgesOptions = {
    universeId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
}
export type GetUniverseBadges = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: GetBadge[];
};
export type GetUserBadgesOptions = {
    userId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
}
export type GetUserBadges = GetUniverseBadges;
export type GetUserBadgesAwardedDatesOptions = {
    userId: number;
    badgeIds: number[];
}
export type GetUserBadgesAwardedDates = {
    data: {
        badgeId: number;
        awardedDate: string;
    }[];
}
export type DeleteBadgeFromUserOptions = {
    userId: number;
    badgeId: number;
}
export type DeleteBadgeFromUser = {};
export type DeleteBadgeFromSelfOptions = {
    badgeId: number;
}
export type DeleteBadgeFromSelf = DeleteBadgeFromUser;

export default class AvatarAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://badges.roblox.com/"
        });
    }

    getBadge (options: GetBadgeOptions): Promise<GetBadge> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.badgeId}`
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    updateBadge (options: UpdateBadgeOptions): Promise<UpdateBadge> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.id}`,
                method: "PATCH"
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUniverseBadges (options: GetUniverseBadgesOptions): Promise<GetUniverseBadges> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/badges`,
                qs: options
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUserBadges (options: GetUserBadgesOptions): Promise<GetUserBadges> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges`,
                qs: options
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUserBadgesAwardedDates (options: GetUserBadgesAwardedDatesOptions): Promise<GetUserBadgesAwardedDates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges/awarded-dates`,
                qs: {
                    badgeIds: options.badgeIds.join(",")
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    deleteBadgeFromUser (options: DeleteBadgeFromUserOptions): Promise<DeleteBadgeFromUser> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/${options.userId}/badges/${options.badgeId}`,
                method: "DELETE"
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    deleteBadgeFromSelf (options: DeleteBadgeFromSelfOptions): Promise<DeleteBadgeFromSelf> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/badges/${options.badgeId}`,
                method: "DELETE"
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }
}
