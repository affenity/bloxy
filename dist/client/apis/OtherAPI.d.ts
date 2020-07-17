import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetUserProfileHeaderOptions = {
    userId: number;
};
export declare type GetUserProfileHeader = {
    UserId: number;
    ProfileUserId: number;
    ProfileUserName: string;
    ProfileDisplayName: string;
    FriendsCount: number;
    UserPresenceType: number;
    LastLocation: string | null;
    UserStatus: string | null;
    UserStatusDate: string | null;
    UserPlaceId: number | null;
    FollowersCount: number;
    FollowingsCount: number;
    IsVieweeBlocked: boolean;
    IsViewerBlocked: boolean;
    AreFriends: boolean;
    IncomingFriendRequestPending: boolean;
    MaySendFriendInvitation: boolean;
    FriendRequestPending: boolean;
    MayFollow: boolean;
    IsFollowing: boolean;
    CanMessage: boolean;
    MessagesDisabled: boolean;
    CanBeFollowed: boolean;
    CanTrade: boolean;
    CanSeeFavorites: boolean;
    MayImpersonate: boolean;
    MayEdit: boolean;
    HeadShotImage: {
        Final: boolean;
        Url: string;
        RetryUrl: string | null;
        UserId: number;
        EndpointType: "Avatar" | string;
    };
    PreviousUserNames: string;
    IsUserOnPhone: boolean;
    CanSeeInventory: boolean;
};
export default class OtherAPI extends BaseAPI {
    constructor(client: Client);
    getUserProfileHeader(options: GetUserProfileHeaderOptions): Promise<GetUserProfileHeader>;
}
