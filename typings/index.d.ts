import { EventEmitter } from 'events';

declare module 'bloxy' {

export class BloxyClient {
    constructor(options?: BloxyClientOptions)

    public account: RobloxUser;
    public _setup: BloxySetup;

    // Methods
    public acceptFriendRequest (userId: number): Promise<boolean>;
    public addDeveloperProduct (options: DeveloperProductOptions): Promise<number>;
    public archiveMessages (messages: Array<number | RobloxMessage>): Promise<boolean>;
    public blockUser (userId: number): Promise<boolean>;
    public buyAsset (productId: number, expectedPrice: number, sellerId: number): Promise<boolean>;
    public canManageAsset (userId: number, assetId: number): Promise<boolean>;
    public changeBlurb (newBlurb: string): Promise<boolean>;
    public changeStatus (newStatus: string): Promise<boolean>;
    public configureItem (options: ItemOptions): Promise<boolean>
    public declineFriendRequest (userId: number): Promise<boolean>;
    public followUser (userId: number): Promise<boolean>;
    public friendUser (userId: number): Promise<boolean>;
    public getArchivedMessages (options: MessagesOptions): Promise<Array<RobloxMessage>>;
    public getCurrency (): Promise<number>;
    public getFollowers (options: FollowerOptions): Promise<GetFollowersResponse>;
    public getFollowing (options: FollowerOptions): Promise<GetFollowingResponse>;
    public getFriendRequests (page?: number): Promise<Array<JoinRequest>>;
    public getFriends (options: FollowerOptions): Promise<Array<PartialUser>>;
    public getFriendsOnline (): Promise<Array<PartialUser>>;
    public getGroup (groupId: number): Promise<Group>;
    public getGroupsIManage(): Promise<Array<PartialGroup>>;
    public getIdByUsername (username: string): Promise<number>;
    public getMessageById (messageId: number): Promise<RobloxMessage>;
    public getMessages (options: MessagesOptions): Promise<Array<RobloxMessage>>;
    public getNumFriends (userId: number): Promise<Array<PartialUser>>;
    public getProductInfo (productId: number): Promise<any>;
    public getUserGroups (userId: number): Promise<Array<UserGroup>>;
    public getUsernameById (userId: number): Promise<string>;
    public getUserPrimaryGroup (userId: number): Promise<UserGroup>;
    public getUser (identifier: number | string, type: 'userId' | 'username'): Promise<RobloxUser>;
    public getUserRobloxBadges (userId: number): Promise<Array<RobloxBadge>>;
    public getVerificationStatus (userId: string | number, platform: 'roblox'): Promise<RoVerResponseDiscord>;
    public getVerificationStatus (userId: string | number, platform: 'discord'): Promise<RoVerResponseRoblox>;
    public isFriends (userId1: number, userId2: number): Promise<boolean>;
    public isNameTaken (username: string): Promise<boolean>;
    public markMessagesRead (messages: Array<number | RobloxMessage>): Promise<boolean>;
    public markMessagesUnread (messages: Array<number | RobloxMessage>): Promise<boolean>
    public moveMessagesToInbox (messages: Array<number | RobloxMessage>): Promise<boolean>;
    public messageUser (message: RobloxMessageOptions): Promise<boolean>;
    public ownsAsset (userId: number, assetId: number): Promise<boolean>;
    public redeemPromoCode (code: string): Promise<boolean>;
    public searchUsers (query: string): Promise<ResultsUserSearch>;
    public searchGroups (query: string): Promise<ResultsGroupSearch>;
    public unblockUser (userId: number): Promise<boolean>;
    public unfollowUser (userId: number): Promise<boolean>;
    public unfriendUser (userId: number): Promise<boolean>;
    public uploadAsset (options: UploadAssetOptions): Promise<boolean>;
    public login (options: BloxyClientOptions): void;

    public _request (url: string, options: ClientRequestOptions): Promise<{res: any, jar: any, xcsrf: any}>
    public setCacheDuration (options: CacheDurationOptions): Promise<any>;
    
    public on(event: 'ready', listener: () => void): this;
    public on(event: 'lostFriend', listener: (userId: number) => void): this;
    public on(event: 'newFriend', listener: (userId: number) => void): this;
    public on(event: 'friendRequestSent', listener: (userId: number) => void): this;
    public on(event: 'friendRequestReceived', listener: (userId: number) => void): this;
    public on(event: 'notification', listener: (eventType: string, data: object) => void): this;
    public on(event: 'presenceChanged', listener: (userId: number) => void): this;
    public on(event: 'conversationRemoved', listener: (conversationId: number) => void): this;
    public on(event: 'message', listener: (messageId: number) => void): this;
    public on(event: 'messageArchived', listener: (messageId: number) => void): this;
    public on(event: 'messageUnarchived', listener: (messageId: number) => void): this;
    public on(event: 'messageRead', listener: (messageId: number) => void): this;
    public on(event: 'messageUnread', listener: (messageId: number) => void): this;
    public on(event: 'assetAdded', listener: (asset: {assetTypeId: number; assetId: number;}) => void): this;
    public on(event: 'assetRemoved', listener: (asset: {assetTypeId: number; assetId: number;}) => void): this;
}


class BloxySetup {
    constructor (identifier: number, client: BloxyClient);
    public jar: any;
    public xcsrf: string;
    public ready: boolean;
    public authTab: AuthTab;
    public _id: number;
    public _client: BloxyClient;
    public xcsrfInterval: NodeJS.Timer;
    public cache: BloxyCache;

    public _getXcsrf (jar?:any): Promise<string>;
    public getVerification (url: string): Promise<object>;
}


class RobloxMessage {
    constructor (message: any, self: BloxySetup);
    public _self: BloxySetup;
    public id: number;
    public sender: PartialUser;
    public recipient: PartialUser;
    public subject: string;
    public body: string;
    public created: Date;
    public updated: Date;
    public isRead: boolean;
    public isSystemMessage: boolean;
    
    public reply (subject: string, message: string): Promise<boolean>;
    public archive (): Promise<boolean>;
    public moveToInbox (): Promise<boolean>;
    public markRead (markAsRead?: boolean): Promise<boolean>;
}


class UserFunctions {
    public acceptFriendRequest (): Promise<boolean>;
    public blockUser (): Promise<boolean>;
    public canManageAsset (assetId: number): Promise<boolean>;
    public declineFriendRequest (): Promise<boolean>;
    public followUser (): Promise<boolean>;
    public friendUser (): Promise<boolean>;
    public getFollowers (page?: number): Promise<GetFollowersResponse>;
    public getFollowing (page?: number): Promise<GetFollowingResponse>;
    public getFriends (page?: number): Promise<Array<PartialUser>>;
    public getNumFriends (): Promise<number>;
    public getGroups (): Promise<Array<UserGroup>>;
    public getUser (): Promise<RobloxUser>;
    public getPrimaryGroup (): Promise<UserGroup | null>;
    public getRobloxBadges (): Promise<Array<RobloxBadge>>;
    public isFriendsWith (userId: number): Promise<boolean>;
    public messageUser (options: RobloxMessageOptions): Promise<boolean>;
    public ownsAsset (assetId: number): Promise<boolean>;
    public unfollowUser (): Promise<boolean>;
    public unfriendUser (): Promise<boolean>;
}

class RobloxUser extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public userId: number;
    public username: string;
    public status: string;
    public joinDate: Date;
    public accountAge: number;
    public membership: RobloxBuildersClub;
    public numFriends: number;
    public profilePicture: string;
    public avatarPicture: string;
}

class PartialUser extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public userId: number;
    public username: string;
    public buildersClub: RobloxBuildersClub;
}

class FriendRequest extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public userId: number;
    public username: string;
    public thumbnail: string | null;
    public onlineStatus: any;
    public invitationId: number;
    public isOnline: boolean;
}

class RobloxBadge {
    constructor(data: any);
    public imageUrl: string;
    public name: string;
}

class UserSearchResult extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public userId: number;
    public username: string;
    public blurb: string;
    public isOnline: boolean;
    public primaryGroup: UserGroup;
}

class GroupSearchResult extends PartialGroupFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public bcOnly: boolean;
    public description: string;
    public groupId: number;
    public name: string;
    public publicEntryAllowed: boolean;
    public numMembers: number;
    public groupUrl: string;
    public thumbnail: {
        final: boolean;
        url: string;
    }
}

class PartialGroupFunctions {
    public getGroup (): Promise<Group>;
    public postShout (message: string): Promise<GroupShout>;
    public postOnWall (message: string): Promise<WallPost>;
    public setAsPrimary (): Promise<boolean>;
    public join (): Promise<boolean>;
}

class Group extends GroupFunctions {
    constructor (data: any, self: BloxySetup);
    public _setup: BloxySetup;
    public groupId: number;
    public name: string;
    public description: string;
    public owner: PartialUser;
    public shout: GroupShout;
    public memberCount: number;
}

class GroupShout {
    constructor (data: any, self: BloxySetup);
    public _setup: BloxySetup;
    public body: string;
    public poster: PartialUser;
}

class PartialGroup extends PartialGroupFunctions {
    constructor (data: any, self: BloxySetup);
    public _setup: BloxySetup;
    public name: string;
    public groupId: number;
    public emblemUrl: string;
}

class UserGroup extends PartialGroupFunctions {
    constructor (data: any, self: BloxySetup);
    public _setup: BloxySetup;
    public group: PartialGroup;
    public userRank: number;
    public userRole: any;
    public isPrimary: boolean;
    public isInClan: boolean;
}

class JoinRequest extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public username: string;
    public userId: number;
    public date: Date;
    public requestId: number;
    public groupId: number;

    public accept (): Promise<boolean>;
    public decline (): Promise<boolean>;
}

class WallPost extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public postId: number;
    public poster: PartialUser;
    public body: string;
    public created: Date;
    public updated: Date;

    public delete (): Promise<boolean>;
    public deletePostsFromUser (): Promise<boolean>;
}

class MyGroupPermissions {
    constructor (data: any, self: BloxySetup);
    public groupId: number;
    public isPrimary: boolean;
    public isPendingJoin: boolean;
    public userRole: {
        user: PartialUser,
        role: {
            id: number;
            name: string;
            rank: number;
        }
    }
    public maxGroups: number;
    public permissions: {
        groupPostsPermissions: {
            viewWall: boolean;
            postToWall: boolean;
            deleteFromWall: boolean;
            viewStatus: boolean;
            postToStatus: boolean;
        };
        groupMembershipPermissions: {
            changeRank: boolean;
            inviteMembers: boolean;
            removeMembers: boolean;
        };
        groupManagementPermissions: {
            manageRelationship: boolean;
            manageClan: boolean;
            viewAuditLogs: boolean;
        };
        groupEconomyPermissions: {
            spendGroupFunds: boolean;
            advertiseGroup: boolean;
            createItems: boolean;
            manageItems: boolean;
            addGroupPlaces: boolean;
            manageGroupGames: boolean;
        }
    }
}

class GroupFunctions {
    public acceptJoinRequest (requestId: number): Promise<boolean>;
    public changeRank (userId: number, amount: number): Promise<boolean>;
    public declineJoinRequest (requestId: number): Promise<boolean>;
    public deleteWallPost (postId: number): Promise<boolean>;
    public deleteWallPostsByUser (userId: number): Promise<boolean>;
    public demote (userId: number): Promise<boolean>;
    public exileUser (userId: number): Promise<boolean>;
    public getAuditLogs (options?: AuditLogOptions): Promise<AuditLog>;
    public getGroupFunds (): Promise<number>;
    public getJoinRequests (options?: JoinRequestOptions): Promise<Array<JoinRequest>>;
    public getRankNameInGroup (userId: number): Promise<string>;
    public getRole (options?: GetRoleOptions): Promise<GroupRole>;
    public getRoles (): Promise<Array<GroupRole>>;
    public getUsers (options?: GetUsersOptions): Promise<Array<PartialUser>>;
    public getUsersWithRole (roleId: number): Promise<ResultGetUsersWithRole>;
    public getWall (options?: GetUsersOptions): Promise<Array<WallPost>>;
    public isInGroup (userId: number): Promise<boolean>;
    public joinGroup (): Promise<boolean>;
    public onGroupChange (options?: OnChangeOptions): GroupChangeEvent;
    public onJoinRequest (options?: OnChangeOptions): JoinRequestEvent;
    public onWallPost (options?: OnChangeOptions): WallPostEvent;
    public payout (options: PayoutOptions): Promise<boolean>;
    public postOnWall (message: string): Promise<WallPost>;
    public postShout (message: string): Promise<GroupShout>;
    public promote (userId: number): Promise<boolean>;
    public setAsPrimaryGroup (): Promise<boolean>;
    public setRank (userId: number, roleId: number): Promise<boolean>;
    public getMyPermissions (): Promise<MyGroupPermissions>;
}

class AuditLog {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public action: string;
    public user: PartialUser;
    public date: Date;
}

class GroupRole {
    constructor (data: any, groupId: number, self: BloxySetup);
    public _self: BloxySetup;
    public name: string;
    public rank: number;
    public id: number;
    public groupId: number;
}


class GroupChangeEvent extends EventEmitter {
    constructor (group: Group, settings: OnChangeOptions);
    public _group: Group;
    public _self: BloxySetup;
    public intervalWait: number;
    
    public stop ();

    public on(event: 'ready', listener: () => void): this;
    public on(event: 'shout', listener: (data: OnShoutData) => void): this;
}

class JoinRequestEvent extends EventEmitter {
    constructor (group: Group, settings: OnChangeOptions);
    public _group: Group;
    public _self: BloxySetup;
    public interval: NodeJS.Timer;
    public intervalWait: number;

    public stop ();

    public on(event: 'ready', listener: () => void): this;
    public on(event: 'requests', listener: (requests: Array<JoinRequest>) => void): this;
}

class WallPostEvent extends EventEmitter {
    constructor (group: Group, settings: OnChangeOptions);
    public _group: Group;
    public _self: BloxySetup;
    public interval: NodeJS.Timer;
    public intervalWait: number;

    public stop ();

    public on(event: 'ready', listener: () => void): this;
    public on(event: 'posts', listener: (newPosts: Array<WallPost>) => void): this;
}


class RoVerResponseDiscord {
    constructor (data:any);
    public userIds: Array<string>;
}

class RoVerResponseRoblox extends UserFunctions {
    constructor (data: any, self: BloxySetup);
    public _self: BloxySetup;
    public username: string;
    public userId: number;
}





// All the types

type BloxyClientOptions = {
    type: 'username';
    value: string;
    username: string;
    password: string;
    CaptchaKey: string;
    cookie: string;
}


type DeveloperProductOptions = {
    universeId: number | string;
    name: string;
    price: number;
    description: string;
}


type ItemOptions = {
    assetId: number;
    title: string;
    description: string;
    enableComments: boolean;
    sellForRobux: boolean;
    genreSelection: string;
}


type MessagesOptions = {
    page: number;
    limit: number;
}

type RobloxMessageOptions = {
    subject: string;
    body: string;
    recipientId: number | string;
}

type FollowerOptions = {
    page: number;
    userId: number;
}

type UploadAssetOptions = {
    /**
     * The name of the asset
     */
    name: string;
    /**
     * The type id of the asset
     * Go to https://www.roblox.com/develop and check out each tab where you can upload
     * things. In the url you can find the type id
     */
    assetTypeId: number;
    /**
     * If you want to upload the asset to a group, provide a groupId.
     * Otherwise, ignore / leave blank
     */
    groupId?: number;
    /**
     * The path to the file that you want to upload
     */
    file: string;
    /**
     * The name of the file. (Not necessary)
     */
    fileName?: string;
    /**
     * The content type, defaults to 'image/png'
     * Only change if you know you're doing
     */
    contentType?: string;
}

type AuthTab = {
    value: string;
    password: string;
    signinWith: string;

    TwoStep: {
        ticket: string;
        user: string;
        code: string;
        actionType: 'Login';
        enabled: boolean;
        type: string;

        verify (code: string|number): Promise<boolean>;
    };
}

type RobloxBuildersClub = 'NBC' | 'BC' | 'TBC' | 'OBC' | null;

type AuditLogOptions = {
    /**
     * If you want to get audit logs from a certain page
     */
    page?: number;
    /**
     * If you want to get audit logs based on an action
     */
    action?: string;
    /**
     * If you want to get actions a user has made.
     */
    username?: string;
}

type JoinRequestOptions = {
    /**
     * If you want to get join requests from a specific page
     */
    page?: number;
    /**
     * If you want to get join requests from a user 
     */
    username?: string;
}

/**
 * Provide either rank, id or name. You can of course provide all, in case one doesn't match
 */
type GetRoleOptions = {
    rank: number;
    id: number;
    name: string;
}

type GetUsersOptions = {
    /**
     * If you want to get users from a specific page
     */
    page?: number;
}

type OnChangeOptions = {
    /**
     * The interval to run at. Must be in milliseconds
     */
    interval: number;
}

type OnShoutData = {
    /**
     * The new shout
     */
    new: GroupShout;
    /**
     * The previous shout (which was replaced with the new one)
     */
    old: GroupShout;
}

type PayoutOptions = {
    members: [
        {
            userId: number;
            /**
             * The amount to pay the user (must be a number)
             */
            amount: number;
        }
    ];
    /**
     * Whether or not you want the payout to be recurring (after each purchase on an item the group owns)
     */
    recurring: boolean;
    /**
     * Whether or not to pay in percentage.
     */
    usePercentage: boolean;
}

type GetFollowersResponse = {
    userId: number;
    totalFollowers: number;
    currentPage: number;
    totalPages: number;
    friendsType: string;
    followers: Array<PartialUser>
}

type GetFollowingResponse = {
    userId: number;
    totalFollowers: number;
    currentPage: number;
    totalPages: number;
    friendsType: string;
    followers: Array<PartialUser>
}

type ResultsUserSearch = {
    keyword: string;
    startIndex: number;
    maxRows: number;
    totalResults: number;
    results: Array<UserSearchResult>;
}

type ResultsGroupSearch = {
    keyword: string;
    startRow: number;
    maxRows: number;
    totalResults: number;
    searchKeywordMinLength: number;
    results: Array<GroupSearchResult>;
}

type BloxyCache = {
    cache (category: string, identifier: string, value: any): Promise<any>;
    getCache (category: string, identifier: string): Promise<any>;
    saveCache (): Promise<any>;
    deleteCache (): Promise<any>;
    refreshCache (): Promise<any>;
}

type ClientRequestOptions = {
    method: 'GET' | 'POST' | 'PUT' | string;
    form: any;
    body: any;
    formData: any;
    verification: any;
    captchaUrl: any;
    json: any;
}

type CacheDurationOptions = {
    user?: number;
    group?: number;
    getIdByUsername?: number;
}

type ResultGetUsersWithRole = {
    previousPageCursor: string;
    nextPageCursor: string;
    users: Array<PartialUser>;
}
export = BloxyClient;
}