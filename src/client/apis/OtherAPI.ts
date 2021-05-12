import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { EnumUserPresence } from "../../interfaces/GeneralInterfaces";


export type GetUserProfileHeaderOptions = {
    userId: number;
}
export type GetUserProfileHeader = {
    UserId: number;
    ProfileUserId: number;
    ProfileUserName: string;
    ProfileDisplayName: string;
    FriendsCount: number;
    UserPresenceType: EnumUserPresence;
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
}

export default class OtherAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://roblox.com/"
        });
    }

    getUserProfileHeader (options: GetUserProfileHeaderOptions): Promise<GetUserProfileHeader> {
        return this.request({
            requiresAuth: false,
            request: {
                url: `https://www.roblox.com/users/profile/profileheader-json?userId=${options.userId}`
            },
            json: true
        })
            .then(response => response.body);
    }
}
