import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetUserFollowedUniversesOptions = {
    userId: number;
}
export type GetUserFollowedUniverses = {
    universeId: number;
    userId: number;
}[];
export type GetUserFollowingUniverseStatusOptions = {
    userId: number;
    universeId: number;
}
export type GetUserFollowingUniverseStatus = {
    UniverseId: number;
    UserId: number;
    CanFollow: boolean;
    IsFollowing: boolean;
    FollowingCountByType: number;
    FollowingLimitByType: number;
}
export type UnFollowUniverseOptions = {
    userId: number;
    universeId: number;
}
export type UnFollowUniverse = {
    universeId: number;
    userId: number;
}
export type FollowUniverseOptions = UnFollowUniverseOptions;
export type FollowUniverse = UnFollowUniverse;

export default class FollowingsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://followings.roblox.com/"
        });
    }

    getUserFollowedUniverses (options: GetUserFollowedUniversesOptions): Promise<GetUserFollowedUniverses> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserFollowingUniverseStatus (options: GetUserFollowingUniverseStatusOptions): Promise<GetUserFollowingUniverseStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}/status`
            },
            json: true
        })
            .then(response => response.body);
    }

    unFollowUniverse (options: UnFollowUniverseOptions): Promise<UnFollowUniverse> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    followUniverse (options: FollowUniverseOptions): Promise<FollowUniverse> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }
}
