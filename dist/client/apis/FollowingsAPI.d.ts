import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetUserFollowedUniversesOptions = {
    userId: number;
};
export declare type GetUserFollowedUniverses = {
    universeId: number;
    userId: number;
}[];
export declare type GetUserFollowingUniverseStatusOptions = {
    userId: number;
    universeId: number;
};
export declare type GetUserFollowingUniverseStatus = {
    UniverseId: number;
    UserId: number;
    CanFollow: boolean;
    IsFollowing: boolean;
    FollowingCountByType: number;
    FollowingLimitByType: number;
};
export declare type UnFollowUniverseOptions = {
    userId: number;
    universeId: number;
};
export declare type UnFollowUniverse = {
    universeId: number;
    userId: number;
};
export declare type FollowUniverseOptions = UnFollowUniverseOptions;
export declare type FollowUniverse = UnFollowUniverse;
export default class FollowingsAPI extends BaseAPI {
    constructor(client: Client);
    getUserFollowedUniverses(options: GetUserFollowedUniversesOptions): Promise<GetUserFollowedUniverses>;
    getUserFollowingUniverseStatus(options: GetUserFollowingUniverseStatusOptions): Promise<GetUserFollowingUniverseStatus>;
    unFollowUniverse(options: UnFollowUniverseOptions): Promise<UnFollowUniverse>;
    followUniverse(options: FollowUniverseOptions): Promise<FollowUniverse>;
}
