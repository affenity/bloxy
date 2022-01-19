import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type FollowingsGetUserFollowedUniversesOptions = {
    userId: number;
};
export declare type FollowingsGetUserFollowedUniverses = {
    universeId: number;
    userId: number;
}[];
export declare type FollowingsGetUserFollowingUniverseStatusOptions = {
    userId: number;
    universeId: number;
};
export declare type FollowingsGetUserFollowingUniverseStatus = {
    UniverseId: number;
    UserId: number;
    CanFollow: boolean;
    IsFollowing: boolean;
    FollowingCountByType: number;
    FollowingLimitByType: number;
};
export declare type FollowingsUnFollowUniverseOptions = {
    userId: number;
    universeId: number;
};
export declare type FollowingsUnFollowUniverse = {
    universeId: number;
    userId: number;
};
export declare type FollowingsFollowUniverseOptions = FollowingsUnFollowUniverseOptions;
export declare type FollowingsFollowUniverse = FollowingsUnFollowUniverse;
export declare class FollowingsAPI extends BaseAPI {
    constructor(client: Client);
    getUserFollowedUniverses(options: FollowingsGetUserFollowedUniversesOptions): Promise<FollowingsGetUserFollowedUniverses>;
    getUserFollowingUniverseStatus(options: FollowingsGetUserFollowingUniverseStatusOptions): Promise<FollowingsGetUserFollowingUniverseStatus>;
    unFollowUniverse(options: FollowingsUnFollowUniverseOptions): Promise<FollowingsUnFollowUniverse>;
    followUniverse(options: FollowingsFollowUniverseOptions): Promise<FollowingsFollowUniverse>;
}
