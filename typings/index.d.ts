// -- Dependencies
import * as EventEmitter from "events";
import * as APIs from "./apis";
import {
    AccountInformationAPI,
    AccountSettingsAPI,
    API,
    AuthAPI,
    AvatarAPI,
    BadgesAPI,
    BillingAPI,
    CaptchaAPI,
    CatalogAPI,
    ChatAPI,
    ContactsAPI,
    DevelopAPI,
    EconomyAPI,
    FollowingsAPI,
    FriendsAPI,
    GameInternationalizationAPI,
    GamesAPI,
    GroupsAPI,
    InventoryAPI,
    ItemConfigurationAPI,
    LocaleAPI,
    MetricsAPI,
    NotificationsAPI,
    OtherAPI,
    PremiumFeaturesAPI,
    PresenceAPI,
    PublishAPI,
    ThumbnailsAPI,
    TranslationRolesAPI,
    UsersAPI
} from "./apis";

// -- Classes
export class Client extends ClientBase {
    constructor(options: ClientConstructorOptions);

    public loggedIn: boolean;
    public user: ClientUser;
    public debugEnabled: boolean;
    public ws: SocketConnection;

    public getGroup(group: GroupIdentifier): Promise<Group>;

    public getUserGroups(user: UserIdentifier): Promise<Array<UserGroup>>;

    public getUser(user: UserIdentifier, isName?: boolean): Promise<User>;

    public getMultiUsers(users: Array<UserIdentifier>, areUsernames?: boolean): Promise<Array<UserPartial>>;

    public getUsername(userId: AnyIdentifier, returnFull?: boolean): Promise<UserPartial>;

    public getUserId(username: string, returnFull?: boolean): Promise<UserPartial>;

    public login(options: ClientLoginCredentials): Promise<string>;

    public connect(): void; // Inits the websocket connection
    public searchGroups(query: string, options: { isKeyword: boolean } & GenericFilterOptions): Promise<>; // Defaults to regular text search
    public getRobloxVerificationStatus(userId: AnyIdentifier): Promise<>;

    public on(event: "ready", listener: () => void): this;
    public on(event: "loggedIn", listener: (user: ClientAuthUser) => void): this;
    public on(event: "chatTyping", listener: (data: ChatTypingData) => void): this;
    public on(event: "chatMessage", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMessageSent", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMemberAdded", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatMemberLeft", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatConversation", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "chatConversationRemoved", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
    public on(event: "friendLost", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "friendRequest", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "friendAdded", listener: (userId: number, get: () => Promise<User>) => void): this;
    public on(event: "message", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageRead", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageUnread", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: "messageArchived", listener: (messageId: number, get: () => Promise<Message>) => void): this;
    public on(event: string, listener: Function): this;
}

class ClientBase extends EventEmitter {
    constructor(options: ClientConstructorOptions);

    public options: ClientConstructorOptions;
    public rest: RestController;
    public util: UtilController;
    public debug: DebugController;
    public apis: {
        accountInformation: AccountInformationAPI,
        accountSettings: AccountSettingsAPI,
        api: API,
        auth: AuthAPI,
        avatar: AvatarAPI,
        badges: BadgesAPI,
        billing: BillingAPI,
        captcha: CaptchaAPI,
        catalog: CatalogAPI,
        chat: ChatAPI,
        contacts: ContactsAPI,
        develop: DevelopAPI,
        economy: EconomyAPI,
        followings: FollowingsAPI,
        friends: FriendsAPI,
        gameInternationalization: GameInternationalizationAPI,
        games: GamesAPI,
        groups: GroupsAPI,
        inventory: InventoryAPI,
        itemConfiguration: ItemConfigurationAPI,
        locale: LocaleAPI,
        metrics: MetricsAPI,
        notifications: NotificationsAPI,
        premiumFeatures: PremiumFeaturesAPI,
        presence: PresenceAPI,
        publish: PublishAPI,
        thumbnails: ThumbnailsAPI,
        translationRoles: TranslationRolesAPI,
        users: UsersAPI,
        other: OtherAPI
    };
}

class ClientUser {
    constructor(client: Client, data: any);

    public client: Client;
    public id: UserIdentifier;
    public profile: ClientUserProfile;
    public account: ClientUserAccount;

    public getFriendRequests(): Promise<>;

    public declineAllFriendRequests(): Promise<>;

    public acceptFriendRequest(user: UserIdentifier): Promise<>;

    public declineFriendRequest(user: UserIdentifier): Promise<>;

    public follow(user: UserIdentifier): Promise<>;

    public sendFriendRequest(user: UserIdentifier): Promise<>;

    public unfollow(user: UserIdentifier): Promise<>;

    public unfriend(user: UserIdentifier): Promise<>;

    public isFriendsWith(users: Array<UserIdentifier>): Promise<>;

    public block(user: UserIdentifier): Promise<>;

    public getGroups(): Promise<>;

    public getMessages(options: GenericFilterOptions): Promise<ClientUserMessagesResponse>;

    public markMessagesRead(markRead: boolean, messages: Array<MessageIdentifier>): Promise<>;

    public moveMessages(options: { archive: boolean, messages: Array<MessageIdentifier> }): Promise<>;

    public getPrimaryGroup(): Promise<>;

    public removePrimaryGroup(): Promise<>;

    public setPrimaryGroup(group: GroupIdentifier): Promise<>;

    public sendMessage(options: ClientUserSendMessageOptions): Promise<>;

    public getRobux(): Promise<>;

    public getFriendsOnline(): Promise<>;

    public buyAsset(options: { productId: AnyIdentifier, price: number, sellerId: AnyIdentifier }): Promise<>;

    public canManageAsset(assetId: AnyIdentifier): Promise<>;

    public ownsAsset(assetId: AnyIdentifier): Promise<>;

    public ownsGamePass(passId: AnyIdentifier): Promise<>;

    public redeemPromoCode(code: string): Promise<>;

    public getGroupPermissionsFor(group: GroupIdentifier): Promise<>;
}

class ClientUserProfile {
    constructor(user: ClientUser, data: any);

    public user: ClientUser;

    public updateDescription(description: string): Promise<>;

    public updateGender(gender: string): Promise<>;

    public updateStatus(status: string): Promise<>;

    public getBirthDate(): Promise<>;

    public updateBirthDate(birthDate: Date): Promise<>;
}

class ClientUserAccount {
    constructor(user: ClientUser);

    public user: ClientUser;

    // https://accountsettings.roblox.com/docs#!/PrivacySettings/get_v1_app_chat_privacy
    public unlockPin(pin: AnyIdentifier): Promise<>;

    public lockPin(): Promise<>;

    public addPin(): Promise<>;

    public getChatPrivacy(): Promise<>;

    public updateChatPrivacy(options: UpdateChatPrivacyOptions): Promise<>;

    public getGameChatPrivacy(): Promise<>;

    public updateGameChatPrivacy(options: UpdateChatPrivacyOptions): Promise<>;

    public getInventoryPrivacy(): Promise<>;

    public updateInventoryPrivacy(options: UpdateInventoryPrivacyOptions): Promise<>;

    public getPrivacySettings(): Promise<>;

    public updatePrivacySettings(options: UpdatePrivacySettingsOptions): Promise<>;

    public getMessagingPrivacy(): Promise<>;

    public updateMessagingPrivacy(options: UpdateMessagingPrivacyOptions): Promise<>;

    public getEmailStatus(): Promise<>;

    public updateEmail(email: string, password: string): Promise<>;

    public sendEmailVerification(): Promise<>;

    public getCurrentTheme(): Promise<>;

    public updateTheme(theme: UpdateThemeOptions): Promise<>;

    public getThemesAvailable(): Promise<>;

    public isTFAEnabled(): Promise<>;

    public enableTFA(enabled: boolean, password: string): Promise<>;

    public getTradePrivacy(): Promise<>;

    public updateTradePrivacy(tradePrivacy: string): Promise<>;

    public getTradeQualityFilter(): Promise<>;

    public updateTradeQualityFilter(filter: UpdateTradeQualityFilterOptions): Promise<>;

    public getTFAEnabled(): Promise<>;

    public updateTFAEnabled(enabled: boolean, password: string): Promise<>;

    public getPhoneInformation(): Promise<>;

    public setPhone(options: UpdatePhoneNumberOptions): Promise<>;

    public deletePhone(): Promise<>;
}

class UserPartial extends UserBase {
    constructor(client: Client, data: any);

    public id: AnyIdentifier;
    public name: string;
}

class User extends UserPartial {
    constructor(client: Client, data: any);

    public status: string;
    public blurb: string;
    public joinDate: Date;
    public accountAge: number;
    public friendsCount: number;
    public followersCount: number;
    public followingCount: number;
    public headshotImage: string;
    public canMessage: boolean;
    public canFollow: boolean;
    public canTrade: boolean;
    public canSeeFavorites: boolean;
    public canSeeInventory: boolean;
    public areFriends: boolean;
    public canSendFriendRequest: boolean;
}

class UserBase {
    constructor(client: Client);

    public client: Client;

    public get(): Promise<>;

    public block(): Promise<>;

    public handleFriendRequest(accept: boolean): Promise<>;

    public follow(follow: boolean): Promise<>;

    public sendFriendRequest(): Promise<>;

    public areFriendsWith(users: Array<UserIdentifier>): Promise<>;

    public getNumFriends(): Promise<>;

    public getVerificationStatus(): Promise<>;

    public sendMessage(options: ClientUserSendMessageOptions): Promise<>;

    public ownsGamePass(passId: AnyIdentifier): Promise<>;
}

class GroupBase {
    constructor(client: Client, data: any);

    public client: Client;

    public get(): Promise<>; // Fetches new information from the Roblox Web API
    public getSettings(): Promise<GroupSettings>;

    public updateSettings(): Promise<GroupConfigureSetting>;

    public getAuditLogs(options: GroupAuditLogOptions): Promise<>;

    public updateDescription(description: string): Promise<>;

    public updateShout(shout: string): Promise<>;

    public updateIcon(file: any): Promise<>;

    public getJoinRequests(options: GenericFilterOptions): Promise<>;

    public getJoinRequest(user: UserIdentifier): Promise<>;

    public handleJoinRequest(user: UserIdentifier, accept: boolean): Promise<>;

    public getRoles(): Promise<>;

    public getRole(identifier: GroupGetRoleIdentifer): Promise<>;

    public getMembersWithRole(role: GroupRoleIdentifier, options: GenericFilterOptions): Promise<>;

    public getMembers(options: GenericFilterOptions): Promise<>;

    public getMember(user: UserIdentifier): Promise<>;

    public joinGroup(): Promise<>;

    public changeOwner(user: UserIdentifier): Promise<>;

    public claimOwnership(): Promise<>;

    public kick(user: UserIdentifier): Promise<>;

    public updateMemberRole(user: UserIdentifier, role: GroupRoleIdentifier): Promise<>;

    public getCurrentPayouts(): Promise<>;

    public getPayouts(): Promise<>;

    public payoutUsers(payouts: GroupPayoutOptions): Promise<>; // One-time payout
    public updatePayouts(payouts: GroupPayoutOptions): Promise<>; // Default payouts
    public getRolePermissions(role: GroupRoleIdentifier): Promise<>;

    public getWall(options?: GenericFilterOptions): Promise<>;

    public postOnWall(message: string): Promise<>;

    public deleteWallPost(post: GroupWallPostIdentifier): Promise<>;

    public createRole(options: GroupRoleOptions): Promise<>;

    public updateRole(role: GroupRoleIdentifier, options: GroupRoleOptions): Promise<>;

    public deleteRole(role: GroupRoleIdentifier): Promise<>;

    public promote(user: UserIdentifier): Promise<>;

    public demote(user: UserIdentifier): Promise<>;

    public setPrimary(): Promise<>;

    public leave(): Promise<>;

    public join(): Promise<>;

    public getSocialLinks(): Promise<>;

    public createSocialLink(data: GroupSocialLink): Promise<>;

    public updateSocialLink(id: AnyIdentifier, data: GroupSocialLink): Promise<>;

    public deleteSocialLink(id: AnyIdentifier): Promise<>;

    public getRelationships(relationType: GroupRelationshipTypes, from: number, maxResults: number): Promise<>;

    public declineRelationshipRequests(relationType: GroupRelationshipTypes, groups: Array<GroupIdentifier> | GroupIdentifier): Promise<>;

    public getRelationshipRequests(relationType: GroupRelationshipTypes, from: number, maxResults: number): Promise<>;

    public acceptRelationshipRequests(relationType: GroupRelationshipTypes, groups: Array<GroupIdentifier> | GroupIdentifier): Promise<>;

    public removeRelationship(relationType: GroupRelationshipTypes, group: GroupIdentifier): Promise<>;

    public sendRelationshipRequest(relationType: GroupRelationshipTypes, group: GroupIdentifier): Promise<>;

    public changeMemberRank(user: UserIdentifier, changeAmount: number): Promise<>;

    public demote(user: UserIdentifier): Promise<>;

    public promote(user: UserIdentifier): Promise<>;

    public getFunds(): Promise<>;

    public getMyPermissions(): Promise<>;

    public on(event: "joinRequest", listener: (request: GroupJoinRequest, group: Group) => void): this;
    public on(event: "wallPost", listener: (post: GroupWallPost, group: Group) => void): this;
    public on(event: "shout", listener: (shout: GroupShout, group: Group) => void): this;
}

class Group extends GroupBase {
    constructor(client: Client, data: any);

    public id: AnyIdentifier;
    public name: string;
    public description: string;
    public owner: GroupMember;
    public shout: GroupShout;
}

class UserGroup extends GroupBase {
    constructor(client: Client, data: any);

    public role: GroupRole;
    public owner: GroupMember;
    public shout: GroupShout;
    public memberCount: number;
    public isPremiumOnly: boolean;
    public hasClan: boolean;
    public publicEntry: boolean;
}

class GroupRole {
    constructor(client: Client, data: any);

    public client: Client;
    public id: AnyIdentifier;
    public name: string;
    public rank: number;
    public group: Group | null;

    public getMembers(options: GenericFilterOptions): Promise<>;

    public getPermissions(): Promise<>;
}

class GroupMember extends UserPartial {
    constructor(client: Client, data: any);

    public role: GroupRole;

    public kick(): Promise<>;

    public setRole(role: GroupRoleIdentifier): Promise<>;

    public payoutOnce(amount: number): Promise<>;

    public makeOwner(): Promise<>;

    public deleteWallPosts(): Promise<>;
}

class GroupShout {
    constructor(client: Client, data: any);

    public client: Client;
    public poster: GroupMember;
    public content: string;
    public createdAt: Date;
}

class GroupJoinRequest {
    constructor(client: Client, data: any);

    public client: Client;
    public user: GroupMember;
    public createdAt: Date;

    public accept(): Promise<>;

    public decline(): Promise<>;
}

class GroupWallPost {
    constructor(client: Client, data: any);

    public client: Client;
    public id: AnyIdentifier;
    public poster: GroupMember;
    public content: string;
    public createdAt: Date;

    public delete(): Promise<>;

    public deleteAll(): Promise<>;

    public kick(): Promise<>;
}

class ChatConversation {
    constructor(client: Client, data: any);

    public client: Client;
    public id: string;
    public title: string;
    public initiator: UserPartial;
    public unreadMessages: boolean;
    public members: Array<UserPartial>;
    public type: string;
    public updatedAt: Date;

    public getMessages(pageSize: number, unreadOnly: boolean): Promise<>;

    public add(users: Array<UserIdentifier>): Promise<>; // Add user
    public remove(user: UserIdentifier): Promise<>; // Remove user
    public rename(title: string): Promise<>; // New title
    public sendMessage(message: string): Promise<>;

    public setTyping(typing: boolean): Promise<>;

    public markRead(message?: ChatMessageIdentifier): Promise<>; // With "messages" provided: Mark the messages read, otherwise the entire chat
}

class ChatMessage {
    constructor(conversationId: number, data: any);

    public id: string;
    public senderType: string;
    public sentAt: Date;
    public read: boolean;
    public type: string;
    public senderTargetId: number;
    public content: string;

    public markRead(): Promise<>;

    public reply(message: string): Promise<>;

    public getConversation(): Promise<>;
}

class ChatSettings {
    constructor(client: Client, data: any);

    public client: Client;
    public chatEnabled: boolean;
    public isActiveChatUser: boolean;
}

class ChatSentMessage {
    constructor(data: any);

    public content: string;
    public filtered: boolean;
    public id: string;
    public sentAt: Date;
    public type: string;
    public result: string;
    public status: string;
}

class Message {
    constructor(client: Client, data: any);

    public id: number;
    public sender: UserPartial;
    public recipient: UserPartial;
    public subject: string;
    public content: string;
    public createdAt: Date;
    public read: boolean;
    public systemMessage: boolean;

    public reply(message: string): Promise<>;

    public archive(): Promise<>;

    public unArchive(): Promise<>;
}

class UtilController {
    constructor();

    public token: RestTokenController;
    public cache: CacheController;
    public captcha: CaptchaController;
    public structures: Structures;
    public valueExtractor: UtilValueExtractor;
}

class RestController {
    constructor(client: Client);

    public client: Client;
    public requester: any; // TODO: Uses either the default "got" module, or it will send the requestOptions to the callback provided, so that users can customize it themselves
    public isCustomRequester: boolean;
    public responseHandlers: Array<Function>;
    public jar: any;

    public request(options: RestRequestOptions): Promise<RestResponse>;

    public createCookie(options: RestCreateCookieOptions): void;

    public proxy(url?: string): string;

    public userAgent(userAgent?: string): string;

    public addResponseHandler(handler: Function): void;
}

class RestRequest {
    constructor(restController: RestController, responseOptions: RestControllerResponseOptions);

    public client: Client;
    public controller: RestController;
    public responseOptions: RestControllerResponseOptions;
    public options: RestRequestOptions;

    public prepare(options): void;

    public send(): Promise<RestResponse>;
}

class RestResponse {
    constructor(client: Client, request: RestRequest, response: object);

    public client: Client;
    public request: RestRequest;
    public options: RestRequest["responseOptions"];
    public data: object;

    public validateResponse(): boolean;

    public isValidStatusCode(): boolean;

    public isValidStatus(): boolean;

    public isValidBody(): boolean;
}

class DebugController {
    constructor(client: Client);

    public client: Client;
    public enabled: boolean;

    public log(log: string): DebugLog;
}

class DebugLog {
    constructor(controller: DebugController, log: string);

    public controller: DebugController;
    public log: string;
}

class RestTokenController {
    constructor(client: Client);

    public client: Client;
    public token: string;
    public fetchInterval: NodeJS.Timer;

    public refresh(): Promise<string>;

    public stop(): void;

    public start(): void;
}

class CaptchaController {
    constructor(client: Client);

    public client: Client;
    public constants: object;
}

// -- Interfaces
interface ClientLoginCredentials {
    cookie: string;
    username: string;
    password: string;
    fcToken?: string;
}

interface ClientConstructorOptions {
    credentials?: ClientLoginCredentials;
    callbacks: {
        onCaptcha: Function;
    };
    setup: {
        proxy: string;
        userAgent: string;
        cache: {
            users: number;
            groups: number;
        },
        requester: Function; // TOOD: For dealing with the requests
        debugging: boolean;
    }
}

interface RestRequestOptions {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | string;
    headers: object;
    proxy: string;
    followAllRedirects: boolean;
    body: object;
    json: object;
    qs: object;
    verification: string;
    token: string;
    jar: any;
    userAgent: string;
    ignoreErrors: boolean;
}

interface ClientUserMessagesResponse {
    page: number;
    totalPages: number;
    messages: Array<Message>;
}

interface ClientUserSendMessageOptions {
    user: UserIdentifier;
    title: string;
    message: string;
}

interface GroupRoleOptions {
    name: string;
    description: string;
    rank: number;
    usingGroupFunds: boolean;
}

interface UpdatePlaceOptions {
    name: string;
    description: string;
}

interface UpdatePluginOptions {
    name: string;
    description: string;
    commentsEnabled: boolean;
}

interface GroupGetRoleIdentifier {
    name: string;
    rank: number;
    id: number;
}

interface GroupSocialLink {
    type: "Facebook" | "Twitter" | "Discord" | string;
    url: string;
    title: string;
}

interface UniverseSettingsOptions {
    name: string;
    universeAvatarType: "MorphToR6" | "MorphToR15" | string;
    universeScaleType: "NoScales" | string;
    universeAnimationType: "Standard" | string;
    universeCollisionType: "InnerBox" | string;
    universeBodyType: "Standard" | string;
    universeJointPositioningType: "Standard" | string;
    isArchived: boolean;
    isFriendsOnly: boolean;
    genre: string;
    playableDevices: Array<string>;
    isForSale: boolean;
    price: number;
}

interface UpdateDeveloperProductOptions {
    name: string;
    description: string;
    iconAssetId: number;
    price: number;
}

interface RestCreateCookieOptions {
    key: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
}

interface RestControllerResponseOptions {
    allowedStatusCodes: Array<number>;
    disallowedStatusCodes: Array<number>;
    allowedStatuses: Array<string>;
    disallowedStatuses: Array<string>; // TODO: Fails when the status includes any of the words in the array
    onlyJSON: boolean; // TODO: Fail if the body returned is not a valid JSON, it only expects json
    disabledChecks: {
        captcha: boolean;
        token: boolean;
    };
}

interface Constants {
    captcha: {
        login: {
            publicKey: string;
            solveForURL: string;
            solvedURL: string;
        };
        signup: {
            publicKey: string;
            solveForURL: string;
            solvedURL: string;
        };
        userAction: {
            publicKey: string;
        };
        gameCardRedemption: {
            publicKey: string;
        };
        resetPassword: {
            publicKey: string;
        }
    }
}

// -- Types
type AnyIdentifier = string | number | any;
type UserIdentifier = AnyIdentifier | User | UserPartial;
type GroupIdentifier = AnyIdentifier | Group | UserGroup;
type MessageIdentifier = AnyIdentifier | Message;
type ChatMessageIdentifier = AnyIdentifier | ChatMessage;
type GroupRoleIdentifier = AnyIdentifier | GroupRole;
type GroupWallPostIdentifier = AnyIdentifier | GroupWallPost;

type GenericFilterOptions = {
    sortOrder: string | "Desc";
    limit: number | 100;
    cursor: string;
};

type GroupPayoutOptions = [{
    user: UserIdentifier;
    amount: number;
}];
