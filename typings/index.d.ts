declare module "bloxy" {
    // -- Dependencies
    import * as EventEmitter from "events";

    // -- Classes
    export class Client extends ClientBase {
        constructor(options: ClientConstructorOptions);

        public loggedIn: boolean;
        public user: UserPartial;
        public apis: {
            develop: ClientDevelopAPI;
        };

        public getGroup(group: GroupIdentifier): Promise<Group>;
        public getUserGroups(user: UserIdentifier): Promise<Array<GroupUser>>;
        public getUser (user: UserIdentifier, isName?: boolean): Promise<User>;
        public getMultiUsers(users: Array<UserIdentifier>, areUsernames?: boolean): Promise<Array<UserPartial>>;
        public getUsername(userId: AnyIdentifier): Promise<UserPartial>;
        public getUserId(username: string): Promise<UserPartial>;
        public login(options: ClientLoginCredentials): Promise<string>;
        public generateToken(): Promise<ClientLoginCredentials>;
        public clearSessions(): Promise<boolean>;
        public ws(): void; // Inits the websocket connection

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
        public moveMessages(action: "archive" | "unarchive", messages: Array<MessageIdentifier>): Promise<>;
        public getPrimaryGroup(): Promise<>;
        public removePrimaryGroup(): Promise<>;
        public setPrimaryGroup(group: GroupIdentifier): Promise<>;
        public sendMessage(options: ClientUserSendMessageOptions): Promise<>;
    }

    class ClientDevelopAPI {
        constructor(client: Client);

        public client: Client;

        public getGameTemplates(): Promise<>;
        public getGameUpdates(universeId: AnyIdentifier): Promise<>;
        public postGameUpdate(universeId: AnyIdentifier, update: string): Promise<>;
        public filterText(text: string): Promise<>;
        public getGroupUniverses(groupId: GroupIdentifier, options: GenericFilterOptions): Promise<>;
        public getPlaceCompatibilities(placeId: AnyIdentifier): Promise<>;
        public updatePlace(placeId: AnyIdentifier, configuration: UpdatePlaceOptions): Promise<>;
        public getPlugins(plugins: Array<AnyIdentifier>): Promise<>;
        public updatePlugin(pluginId: AnyIdentifier, UpdatePluginOptions): Promise<>;
        public searchUniverses(query: string, sort: SearchUniversesSort, options: GenericFilterOptions): Promise<>;
        public getUniverse(universeId: AnyIdentifier): Promise<>;
        public getUniversePermissions(universeId: AnyIdentifier): Promise<>;
        public getUniversePlaces(universeId: AnyIdentifier): Promise<>;
        public getUniverses(universeIds: Array<AnyIdentifier>): Promise<>;
        public getUniversesPermissions(universeIds: Array<AnyIdentifier>): Promise<>;
        public activateUniverse(universeId: AnyIdentifier, activate: boolean): Promise<>;
        public getUniverseSettings(universeId: AnyIdentifier): Promise<>;
        public updateUniverseSettings(universeId: AnyIdentifier, options: UniverseSettingsOptions): Promise<>;
        public getVIPServersConfiguration(universeId: AnyIdentifier): Promise<>;
        public getTeamCreate(universeId: AnyIdentifier): Promise<>;
        public enableTeamCreate(universeId: AnyIdentifier, enabled: boolean): Promise<>;
        public removeUserFromTeamCreate(universeId: AnyIdentifier, user: UserIdentifier): Promise<>;
        public getUsersInTeamCreate(universeId: AnyIdentifier, options: GenericFilterOptions): Promise<>;
        public addUserToTeamCreate(universeId: AnyIdentifier, user: UserIdentifier): Promise<>;
        public getTeamCreatesJoined(options: GenericFilterOptions): Promise<>;
        public getManageableGroups(): Promise<>;
        public getStudioData(key: string): Promise<>;
        public saveStudioData(key: string, data: object): Promise<>;
        public getAuthorizedUniverses(options: GenericFilterOptions): Promise<>;
        public updateDeveloperProduct(universeId: AnyIdentifier, productId: AnyIdentifier, data: UpdateDeveloperProductOptions): Promise<>;
    }

    class ClientUserProfile {
        constructor(user: ClientUser);

        public user: ClientUser;

        public updateDescription(description: string): Promise<>;
        public updateGender(gender: string): Promise<>;
        public updateStatus(status: string): Promise<>;
    }

    class ClientUserAccount {
        constructor(user: ClientUser);

        public user: ClientUser;

        public isTFAEnabled(): Promise<>;
        public enableTFA(enabled: boolean, password: string): Promise<>;
        public updateTradePrivacy(tradePrivacy: string): Promise<>;
    }

    class UserPartial extends UserBase {
        constructor(client: Client, data: any);

        public id: AnyIdentifier;
        public name: string;

        public get(): Promise<User>;
    }

    class User extends UserPartial {
        constructor (client: Client, data: any);

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

        public block(block: boolean): Promise<>;
        public handleFriendRequest(accept: boolean): Promise<>;
        public follow(follow: boolean): Promise<>;
        public sendFriendRequest(): Promise<>;
        public areFriendsWith(users: Array<UserIdentifier>): Promise<>;
    }

    class GroupBase {
        constructor(client: Client);

        public client: Client;
    }

    class Group extends GroupBase {
        constructor(client: Client, data: any);

        public id: AnyIdentifier;
        public name: string;
        public description: string;
        public owner: GroupMember;
        public shout: GroupShout;

        public update(): Promise<>; // Fetches new information from the Roblox Web API
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
        public getMembersWithRole(role: GroupRoleIdentifier, options: GenericFilterOptions): Promise<>;
        public getMembers(options: GenericFilterOptions): Promise<>;
        public getMember(user: UserIdentifier): Promise<>;
        public joinGroup(): Promise<>;
        public changeOwner(user: UserIdentifier): Promise<>;
        public claimOwnership(): Promise<>;
        public kick(user: UserIdentifier): Promise<>;
        public updateMemberRole(user: UserIdentifier, role: GroupRoleIdentifier): Promise<>;
        public getCurrentPayouts(): Promise<>;
        public payoutUsers(payouts: GroupPayoutOptions): Promise<>; // One-time payout
        public updatePayouts(payouts: GroupPayoutOptions): Promise<>; // Default payouts
        public getRolePermissions(role: GroupRoleIdentifier): Promise<>;
        public getWall(options?: GenericFilterOptions): Promise<>;
        public postOnWall(message: string): Promise<>;
        public deleteWallPost(post: GroupWallPostIdentifier): Promise<>;
        public createRole(options: GroupRoleOptions): Promise<>;
        public updateRole(role: GroupRoleIdentifier, options: GroupRoleOptions): Promise<>;
        public deleteRole(role: GroupRoleIdentifier): Promise<>;

        public on(event: "joinRequest", listener: (request: GroupJoinRequest, group: Group) => void): this;
        public on(event: "wallPost", listener: (post: GroupWallPost, group: Group) => void): this;
        public on(event: "shout", listener: (shout: GroupShout, group: Group) => void): this;
    }

    class GroupUser extends GroupBase {
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
        public setRole(role:GroupRoleIdentifier): Promise<>;
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
        constructor(client: Client, data:any);

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
    }

    class RestController {
        constructor(client: Client);

        public client: Client;
        public requester: any;

        public request(options: RestRequestOptions): Promise<RestRequestResponse>;
        public createCookie(options: RestCookieOptions): void;
        public proxy(url?: string): string;
        public userAgent(userAgent?: string): string;
    }

    class RestTokenController {
        constructor(rest: RestController);

        public rest: RestController;
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
            }
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

    // -- Types
    type AnyIdentifier = string | number | any;
    type UserIdentifier = AnyIdentifier | User | UserPartial;
    type GroupIdentifier = AnyIdentifier | Group | GroupUser;
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
}
