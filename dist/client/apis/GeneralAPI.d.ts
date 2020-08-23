import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { AssetVersionOptions, ProductOptions } from "../../structures/Asset";
export declare type GetAssetVersionOptions = number;
export declare type AwardBadgeOptions = {
    userId: number;
    badgeId: number;
    placeId: number;
};
export declare type GetUserFriendsOptions = {
    userId: number;
    page: number;
};
export declare type AcceptFriendRequestOptions = {
    userId: number;
};
export declare type DeclineFriendRequestOptions = {
    userId: number;
};
export declare type SendFriendRequestOptions = {
    userId: number;
};
export declare type GetUserFriendsCountOptions = {
    userId: number;
};
export declare type UnfriendUserOptions = {
    userId: number;
};
export declare type IsUserFollowingOptions = {
    userId: number;
    followUserId: number;
};
export declare type FollowUserOptions = {
    userId: number;
};
export declare type UnfollowUserOptions = {
    userId: number;
};
export declare type GetUserGroupsOptions = {
    userId: number;
};
export declare type GetGroupOptions = {
    groupId: number;
};
export declare type GetGroupAlliesOptions = {
    groupId: number;
    page: number;
};
export declare type GetGroupEnemiesOptions = {
    groupId: number;
    page: number;
};
export declare type GetProductInfoOptions = {
    assetId: number;
};
export declare type GetGamePassProductInfoOptions = {
    gamePassId: number;
};
export declare type UserOwnsAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type BlockUserOptions = {
    userId: number;
};
export declare type UnblockUserOptions = {
    userId: number;
};
export declare type GetUserByUsernameOptions = {
    username: string;
};
export declare type UserCanManageAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type GetUserByIdOptions = {
    userId: number;
};
export declare type GetAssetVersions = AssetVersionOptions[];
export declare type AwardBadge = boolean;
export declare type GetBalance = {
    robux: number;
};
export declare type GetUserFriends = {
    Id: number;
    Username: string;
    AvatarUri: string;
    AvatarFinal: boolean;
    IsOnline: boolean;
}[];
export declare type AcceptFriendRequest = boolean;
export declare type DeclineFriendRequest = boolean;
export declare type SendFriendRequest = boolean;
export declare type GetUserFriendsCount = {
    count: number;
};
export declare type UnfriendUser = boolean;
export declare type IsUserFollowing = boolean;
export declare type FollowUser = boolean;
export declare type UnfollowUser = boolean;
export declare type GetUserGroups = {
    id: number;
    name: string;
    emblemId: number | null;
    emblemUrl: string | null;
    role: {
        rank: number;
        name: string;
    };
    inClan: boolean;
    primary: boolean;
}[];
export declare type GetGroup = {
    Name: string;
    Id: number;
    Owner: {
        Name: string;
        Id: number;
    };
    EmblemUrl: string;
    Description: string;
    Roles: {
        Name: string;
        Rank: number;
    }[];
};
export declare type GetGroupAllies = {
    Groups: GetGroup[];
    FinalPage: boolean;
};
export declare type GetGroupEnemies = GetGroupAllies;
export declare type GetIncomingItems = {
    unreadMessageCount: number;
    friendRequestsCount: number;
};
export declare type GetProductInfo = ProductOptions;
export declare type GetGamePassProductInfo = ProductOptions;
export declare type UserOwnsAsset = boolean;
export declare type GetDeviceInfo = {
    platformType: string;
    deviceType: string;
    operatingSystemType: string;
};
export declare type BlockUser = boolean;
export declare type UnblockUser = boolean;
export declare type GetUserById = {
    id: number;
    name: string;
};
export declare type GetUserByUsername = GetUserById;
export declare type UserCanManageAsset = boolean;
export default class GeneralAPI extends BaseAPI {
    constructor(client: Client);
    getAssetVersions(options: GetAssetVersionOptions): Promise<GetAssetVersions>;
    awardBadge(options: AwardBadgeOptions): Promise<AwardBadge>;
    getBalance(): Promise<GetBalance>;
    getUserFriends(options: GetUserFriendsOptions): Promise<GetUserFriends>;
    acceptFriendRequest(options: AcceptFriendRequestOptions): Promise<AcceptFriendRequest>;
    declineFriendRequest(options: DeclineFriendRequestOptions): Promise<DeclineFriendRequest>;
    sendFriendRequest(options: SendFriendRequestOptions): Promise<SendFriendRequest>;
    getUserFriendsCount(options: GetUserFriendsCountOptions): Promise<GetUserFriendsCount>;
    unfriendUser(options: UnfriendUserOptions): Promise<UnfriendUser>;
    isUserFollowing(options: IsUserFollowingOptions): Promise<IsUserFollowing>;
    followUser(options: FollowUserOptions): Promise<FollowUser>;
    unfollowUser(options: UnfollowUserOptions): Promise<UnfollowUser>;
    getUserGroups(options: GetUserGroupsOptions): Promise<GetUserGroups>;
    getGroup(options: GetGroupOptions): Promise<GetGroup>;
    getGroupAllies(options: GetGroupAlliesOptions): Promise<GetGroupAllies>;
    getGroupEnemies(options: GetGroupEnemiesOptions): Promise<GetGroupEnemies>;
    getIncomingItems(): Promise<GetIncomingItems>;
    getProductInfo(options: GetProductInfoOptions): Promise<GetProductInfo>;
    getGamePassProductInfo(options: GetGamePassProductInfoOptions): Promise<GetGamePassProductInfo>;
    userOwnsAsset(options: UserOwnsAssetOptions): Promise<UserOwnsAsset>;
    getDeviceInfo(): Promise<GetDeviceInfo>;
    blockUser(options: BlockUserOptions): Promise<BlockUser>;
    unblockUser(options: UnblockUserOptions): Promise<UnblockUser>;
    getUserById(options: GetUserByIdOptions): Promise<GetUserById>;
    getUserByUsername(options: GetUserByUsernameOptions): Promise<GetUserByUsername>;
    userCanManageAsset(options: UserCanManageAssetOptions): Promise<UserCanManageAsset>;
}
