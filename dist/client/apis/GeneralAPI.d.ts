import BaseAPI from "./BaseAPI";
import { AnyIdentifier } from "../../interfaces/GeneralInterfaces";
import Client from "../Client";
import { AssetVersion } from "../../structures/asset/AssetVersion";
import GroupMember from "../../structures/group/GroupMember";
import GroupRole from "../../structures/group/GroupRole";
import Product from "../../structures/asset/Product";
import PartialUser from "../../structures/user/PartialUser";
export declare type GetAssetVersionOptions = AnyIdentifier;
export declare type AwardBadgeOptions = {
    userId: AnyIdentifier;
    badgeId: AnyIdentifier;
    placeId: AnyIdentifier;
};
export declare type GetUserFriendsOptions = {
    userId: AnyIdentifier;
    page: AnyIdentifier;
};
export declare type AcceptFriendRequestOptions = {
    userId: AnyIdentifier;
};
export declare type DeclineFriendRequestOptions = {
    userId: AnyIdentifier;
};
export declare type SendFriendRequestOptions = {
    userId: AnyIdentifier;
};
export declare type GetUserFriendsCountOptions = {
    userId: AnyIdentifier;
};
export declare type UnfriendUserOptions = {
    userId: AnyIdentifier;
};
export declare type IsUserFollowingOptions = {
    userId: AnyIdentifier;
    followUserId: AnyIdentifier;
};
export declare type FollowUserOptions = {
    userId: AnyIdentifier;
};
export declare type UnfollowUserOptions = {
    userId: AnyIdentifier;
};
export declare type GetUserGroupsOptions = {
    userId: AnyIdentifier;
};
export declare type GetGroupOptions = {
    groupId: AnyIdentifier;
};
export declare type GetGroupAlliesOptions = {
    groupId: AnyIdentifier;
    page: AnyIdentifier;
};
export declare type GetGroupEnemiesOptions = {
    groupId: AnyIdentifier;
    page: AnyIdentifier;
};
export declare type GetProductInfoOptions = {
    assetId: AnyIdentifier;
};
export declare type GetGamePassProductInfoOptions = {
    gamePassId: AnyIdentifier;
};
export declare type UserOwnsAssetOptions = {
    userId: AnyIdentifier;
    assetId: AnyIdentifier;
};
export declare type BlockUserOptions = {
    userId: AnyIdentifier;
};
export declare type UnblockUserOptions = {
    userId: AnyIdentifier;
};
export declare type GetUserByUsernameOptions = {
    username: string;
};
export declare type UserCanManageAssetOptions = {
    userId: AnyIdentifier;
    assetId: AnyIdentifier;
};
export declare type GetUserByIdOptions = {
    userId: AnyIdentifier;
};
export declare type GetAssetVersions = AssetVersion[];
export declare type AwardBadge = boolean;
export declare type GetBalance = {
    robux: number;
};
export declare type GetUserFriends = {
    user: PartialUser;
    avatarUrl: string;
    avatarFinal: boolean;
    online: boolean;
}[];
export declare type AcceptFriendRequest = boolean;
export declare type DeclineFriendRequest = boolean;
export declare type SendFriendRequest = boolean;
export declare type GetUserFriendsCount = number;
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
    name: string;
    id: number;
    owner: GroupMember;
    emblemUrl: string;
    description: string;
    roles: GroupRole[];
};
export declare type GetGroupAllies = GetGroup[];
export declare type GetGroupEnemies = GetGroup[];
export declare type GetIncomingItems = {
    unreadMessageCount: number;
    friendRequestsCount: number;
};
export declare type GetProductInfo = Product;
export declare type GetGamePassProductInfo = Product;
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
