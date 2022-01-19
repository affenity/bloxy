import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { AssetVersionOptions, ProductOptions } from "../../old_structures/Asset";
export declare type GeneralGetAssetVersionOptions = number;
export declare type GeneralAwardBadgeOptions = {
    userId: number;
    badgeId: number;
    placeId: number;
};
export declare type GeneralGetUserFriendsOptions = {
    userId: number;
    page: number;
};
export declare type GeneralAcceptFriendRequestOptions = {
    userId: number;
};
export declare type GeneralDeclineFriendRequestOptions = {
    userId: number;
};
export declare type GeneralSendFriendRequestOptions = {
    userId: number;
};
export declare type GeneralGetUserFriendsCountOptions = {
    userId: number;
};
export declare type GeneralUnfriendUserOptions = {
    userId: number;
};
export declare type GeneralIsUserFollowingOptions = {
    userId: number;
    followUserId: number;
};
export declare type GeneralFollowUserOptions = {
    userId: number;
};
export declare type GeneralUnfollowUserOptions = {
    userId: number;
};
export declare type GeneralGetUserGroupsOptions = {
    userId: number;
};
export declare type GeneralGetGroupOptions = {
    groupId: number;
};
export declare type GeneralGetGroupAlliesOptions = {
    groupId: number;
    page: number;
};
export declare type GeneralGetGroupEnemiesOptions = {
    groupId: number;
    page: number;
};
export declare type GeneralGetProductInfoOptions = {
    assetId: number;
};
export declare type GeneralGetGamePassProductInfoOptions = {
    gamePassId: number;
};
export declare type GeneralUserOwnsAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type GeneralBlockUserOptions = {
    userId: number;
};
export declare type GeneralUnblockUserOptions = {
    userId: number;
};
export declare type GeneralGetUserByUsernameOptions = {
    username: string;
};
export declare type GeneralUserCanManageAssetOptions = {
    userId: number;
    assetId: number;
};
export declare type GeneralGetUserByIdOptions = {
    userId: number;
};
export declare type GeneralGetAssetVersions = AssetVersionOptions[];
export declare type GeneralAwardBadge = boolean;
export declare type GeneralGetBalance = {
    robux: number;
};
export declare type GeneralGetUserFriends = {
    Id: number;
    Username: string;
    AvatarUri: string;
    AvatarFinal: boolean;
    IsOnline: boolean;
}[];
export declare type GeneralAcceptFriendRequest = boolean;
export declare type GeneralDeclineFriendRequest = boolean;
export declare type GeneralSendFriendRequest = boolean;
export declare type GeneralGetUserFriendsCount = {
    count: number;
};
export declare type GeneralUnfriendUser = boolean;
export declare type GeneralIsUserFollowing = boolean;
export declare type GeneralFollowUser = boolean;
export declare type GeneralUnfollowUser = boolean;
export declare type GeneralGetUserGroups = {
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
export declare type GeneralGetGroup = {
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
export declare type GeneralGetGroupAllies = {
    Groups: GeneralGetGroup[];
    FinalPage: boolean;
};
export declare type GeneralGetGroupEnemies = GeneralGetGroupAllies;
export declare type GeneralGetIncomingItems = {
    unreadMessageCount: number;
    friendRequestsCount: number;
};
export declare type GeneralGetProductInfo = ProductOptions;
export declare type GeneralGetGamePassProductInfo = ProductOptions;
export declare type GeneralUserOwnsAsset = boolean;
export declare type GeneralGetDeviceInfo = {
    platformType: string;
    deviceType: string;
    operatingSystemType: string;
};
export declare type GeneralBlockUser = boolean;
export declare type GeneralUnblockUser = boolean;
export declare type GeneralGetUserById = {
    id: number;
    name: string;
};
export declare type GeneralGetUserByUsername = GeneralGetUserById;
export declare type GeneralUserCanManageAsset = boolean;
export declare class GeneralAPI extends BaseAPI {
    constructor(client: Client);
    getAssetVersions(options: GeneralGetAssetVersionOptions): Promise<GeneralGetAssetVersions>;
    awardBadge(options: GeneralAwardBadgeOptions): Promise<GeneralAwardBadge>;
    getBalance(): Promise<GeneralGetBalance>;
    getUserFriends(options: GeneralGetUserFriendsOptions): Promise<GeneralGetUserFriends>;
    acceptFriendRequest(options: GeneralAcceptFriendRequestOptions): Promise<GeneralAcceptFriendRequest>;
    declineFriendRequest(options: GeneralDeclineFriendRequestOptions): Promise<GeneralDeclineFriendRequest>;
    sendFriendRequest(options: GeneralSendFriendRequestOptions): Promise<GeneralSendFriendRequest>;
    getUserFriendsCount(options: GeneralGetUserFriendsCountOptions): Promise<GeneralGetUserFriendsCount>;
    unfriendUser(options: GeneralUnfriendUserOptions): Promise<GeneralUnfriendUser>;
    isUserFollowing(options: GeneralIsUserFollowingOptions): Promise<GeneralIsUserFollowing>;
    followUser(options: GeneralFollowUserOptions): Promise<GeneralFollowUser>;
    unfollowUser(options: GeneralUnfollowUserOptions): Promise<GeneralUnfollowUser>;
    getUserGroups(options: GeneralGetUserGroupsOptions): Promise<GeneralGetUserGroups>;
    getGroup(options: GeneralGetGroupOptions): Promise<GeneralGetGroup>;
    getGroupAllies(options: GeneralGetGroupAlliesOptions): Promise<GeneralGetGroupAllies>;
    getGroupEnemies(options: GeneralGetGroupEnemiesOptions): Promise<GeneralGetGroupEnemies>;
    getIncomingItems(): Promise<GeneralGetIncomingItems>;
    getProductInfo(options: GeneralGetProductInfoOptions): Promise<GeneralGetProductInfo>;
    getGamePassProductInfo(options: GeneralGetGamePassProductInfoOptions): Promise<GeneralGetGamePassProductInfo>;
    userOwnsAsset(options: GeneralUserOwnsAssetOptions): Promise<GeneralUserOwnsAsset>;
    getDeviceInfo(): Promise<GeneralGetDeviceInfo>;
    blockUser(options: GeneralBlockUserOptions): Promise<GeneralBlockUser>;
    unblockUser(options: GeneralUnblockUserOptions): Promise<GeneralUnblockUser>;
    getUserById(options: GeneralGetUserByIdOptions): Promise<GeneralGetUserById>;
    getUserByUsername(options: GeneralGetUserByUsernameOptions): Promise<GeneralGetUserByUsername>;
    userCanManageAsset(options: GeneralUserCanManageAssetOptions): Promise<GeneralUserCanManageAsset>;
}
