import BaseAPI from "./BaseAPI";
import Client from "../Client";
import PartialGameUniverse from "../../structures/game/PartialGameUniverse";
import PartialUser from "../../structures/user/PartialUser";


export type GetUserFollowedUniversesOptions = {
    userId: number;
}
export type GetUserFollowedUniverses = {
    universe: PartialGameUniverse;
    userId: PartialUser;
}
export type GetUserFollowingUniverseStatusOptions = {
    userId: number;
    universeId: number;
}
export type GetUserFollowingUniverseStatus = {
    universe: PartialGameUniverse;
    user: PartialUser;
    canFollow: boolean;
    isFollowing: boolean;
    followingCountByType: number;
    followingLimitByType: number;
}
export type UnFollowUniverseOptions = {
    userId: number;
    universeId: number;
}
export type UnFollowUniverse = {
    universe: PartialGameUniverse;
    user: PartialUser;
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
                path: `v1/users/${options.userId}/universes`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUserFollowingUniverseStatus (options: GetUserFollowingUniverseStatusOptions): Promise<GetUserFollowingUniverseStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}/status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    unfollowUniverse (options: UnFollowUniverseOptions): Promise<UnFollowUniverse> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    followUniverse (options: FollowUniverseOptions): Promise<FollowUniverse> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/universes/${options.universeId}`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }
}
