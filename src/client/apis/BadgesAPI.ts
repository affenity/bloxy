import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GameBadgeOptions } from "../../structures/Game";


export type GetBadgeOptions = {
    badgeId: number;
}
export type GetBadge = GameBadgeOptions;
export type UpdateBadgeOptions = {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
};
export type UpdateBadge = unknown;
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
export type DeleteBadgeFromUser = unknown;
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
                path: `v1/badges/${options.badgeId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateBadge (options: UpdateBadgeOptions): Promise<UpdateBadge> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.id}`,
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUniverseBadges (options: GetUniverseBadgesOptions): Promise<GetUniverseBadges> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/universes/${options.universeId}/badges`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserBadges (options: GetUserBadgesOptions): Promise<GetUserBadges> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserBadgesAwardedDates (options: GetUserBadgesAwardedDatesOptions): Promise<GetUserBadgesAwardedDates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/badges/awarded-dates`,
                qs: {
                    badgeIds: options.badgeIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteBadgeFromUser (options: DeleteBadgeFromUserOptions): Promise<DeleteBadgeFromUser> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/${options.userId}/badges/${options.badgeId}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteBadgeFromSelf (options: DeleteBadgeFromSelfOptions): Promise<DeleteBadgeFromSelf> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/badges/${options.badgeId}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
