declare module "bloxy" {
    import * as NodeCache from "node-cache";
    import * as EventEmitter from "events";
    import {Callback} from "node-cache";

    export const client: Client;

    export class Client extends ClientBase {
        constructor(options?: ClientOptions);

        public login(options?: ClientOptions): Promise<AuthUser>;

        public initWS(): void;

        public getGroup(groupId: GroupIdentifier): Promise<Group>;

        public getUser(userId: UserIdentifier, getSimple?: boolean): Promise<User>;

        public getMultiUsers(users: Array<UserIdentifier>, areNames?: boolean): Promise<Array<PartialUser>>;

        public getUserGroups(userId: UserIdentifier): Promise<Array<UserGroup>>;

        public getIdByUsername(username: string): Promise<PartialUser>;

        public on(event: "ready", listener: () => void): this;
        public on(event: "loggedIn", listener: (user: AuthUser) => void): this;
        public on(event: "chatTyping", listener: (data: { isTyping: boolean, userId: number, conversationId: number }, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatMessage", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatMessageSent", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatMemberAdded", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatMemberLeft", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatConversation", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "chatConversationRemoved", listener: (conversationId: number, get: () => Promise<ChatConversation>) => void): this;
        public on(event: "friendLost", listener: (userId: number, get: () => Promise<User>) => void): this;
        public on(event: "friendRequest", listener: (userId: number, get: () => Promise<User>) => void): this;
        public on(event: "friendAdded", listener: (userId: number, get: () => Promise<User>) => void): this;
        public on(event: "message", listener: (messageId: number) => void): this;
        public on(event: "messageRead", listener: (messageId: number) => void): this;
        public on(event: "messageUnread", listener: (messageId: number) => void): this;
        public on(event: "messageArchived", listener: (messageId: number) => void): this;
        public on(event: string, listener: Function): this;
    }

    class AuthUser {
        public id: number;

        private client: Client;

        private _setupMethods(): void;

        public getFriendRequests(options?: GenericOptions): Promise<UserFriendRequestCursorPage>;

        public declineAllFriendRequests(): Promise<true>;

        public acceptFriendRequest(userId: UserIdentifier): Promise<true>;

        public declineFriendRequest(userId: UserIdentifier): Promise<true>;

        public follow(userId: UserIdentifier): Promise<boolean>;

        public sendFriendRequest(userId: UserIdentifier): Promise<boolean>;

        public unfollow(userId: UserIdentifier): Promise<boolean>;

        public unfriendUser(userId: UserIdentifier): Promise<true>;

        public friendsWith(userIds: Array<UserIdentifier>): Promise<Array<UserFriendStatus>>;

        public block(userId: UserIdentifier, block?: boolean): Promise<boolean>;

        public updateDescription(description: string): Promise<true>;

        public updateGender(gender: string): Promise<true>;

        public updateStatus(status: string): Promise<true>;

        public getGroups(): Promise<Array<UserGroup>>;

        public tfaEnabled(): Promise<boolean>;

        public toggleTfa(enabled: boolean, password: string): Promise<true>;

        public getTradePrivacy(): Promise<string>;

        public updateTradePrivacy(tradePrivacy: string): Promise<any>;

        public getMessages(options?: GenericOptions): Promise<{
            page: number;
            totalPages: number;
            messages: Array<Message>
        }>;

        public markMessagesRead(messages: Array<MessageIdentifier>, markRead: boolean): Promise<true>;

        public moveMessages(messages: Array<MessageIdentifier>, to: "archive" | "unarchive"): Promise<true>;

        public setPrimaryGroup(groupId: GroupIdentifier): Promise<true>;

        public getPrimaryGroup(userId?: UserIdentifier): Promise<UserGroup>;

        public removePrimaryGroup(): Promise<true>;

        public sendMessage(user: UserIdentifier, title: string, message: string): Promise<true>;
    }

    class ClientBase extends EventEmitter {
        constructor(options?: ClientOptions);

        private util: Misc["util"];
        private _timeouts: Set<NodeJS.Timer>;
        private _intervals: Set<NodeJS.Timer>;
        private options: ClientOptions;
        private readonly errors: Misc["errors"];
        private readonly structures: Structures;
        private token: TokenManager;
        private cache: CacheManager;
        private request: RequestManager;
        private captcha: CaptchaManager;
        public user: AuthUser;
        public chat: ChatManager;

        public extend(extendedPath: string, under: string): void;
    }


    class CacheStore {
        constructor(name: string, defaultExpiration: number);

        public prefix: string;
        public cache: NodeCache;

        public set(key: string, value: any, expire?: number): void;

        public get(key: string): any;

        public clear(): void;

        public close(): void;
    }

    class CacheManager {
        constructor(client: Client);

        private client: Client;
        private defaultTTL: number;
        public cache: {
            users: CacheStore;
            groups: CacheStore;
        };

        public newCache(name: string): CacheStore;

        public delCache(name: string): void;

        public clearCache(): void;

    }

    class CaptchaManager {
        constructor(client: Client);

        private client: Client;
        private constants: object;

        public submit(solveInfo: object, fcToken: string, options: object): Promise<any>;
    }

    class RequestManager {
        constructor(client: Client);

        private client: Client;
        private module: any;

        public request(requestOptions: RequestOptions): Promise<{
            response: any;
            requestOptions: RequestOptions;
            amountRetried: number;
        }>

        public createCookie(cookieKey: string, cookieValue: string, cookieDomain: string, hostOnly: boolean, httpOnly: boolean): any;

        public setProxy(proxyURL: string): string;

        public setUserAgent(userAgent: string): string;
    }

    class TokenManager {
        constructor(client: Client);

        private client: Client;
        private requestInterval: NodeJS.Timer;
        public token: string | null;

        public refresh(): Promise<string>;

        public getToken(ignoreCurrent: boolean): Promise<string>;

        private startInterval(): void;

        private stopInterval(): void;
    }

    class Env {
        constructor(env: any);

        public client: Client;
    }

    class UserBase {
        constructor(env: Env, data: object);

        private client: Client;
        public _raw: any;
        public id: AnyIdentifier;
        public name: string;
        public membership: any;

        private _setupMethods(): void;

        public block(block?: boolean): Promise<boolean>;
        public block(block?: boolean): Promise<true>;

        public acceptFriendRequest(): Promise<true>;

        public declineFriendRequest(): Promise<true>;

        public follow(): Promise<true>;

        public unfollow(): Promise<true>;

        public sendFriendRequest(): Promise<true>;

        public unfriend(): Promise<true>;

        public friendsWith(users?: Array<UserIdentifier>): Promise<Array<UserFriendStatus>>;

        public getUser(simple?: boolean): Promise<User>;
    }

    class UserFriendStatus extends UserBase {
        constructor(env: Env, data: object);

        public friends: Array<any>;
    }

    class PartialUser extends UserBase {
        constructor(env: Env, data: object);
    }

    class User extends UserBase {
        constructor(env: Env, data: object);

        public status: string;
        public blurb: string;
        public joinDate: Date;
        public accountAge: number;
        public friendsCount: number;
        public followersCount: number;
        public followingsCount: number;
        public headshotImage: string;
        public canMessage: boolean;
        public canBeFollowed: boolean;
        public canTrade: boolean;
        public canSeeFavorites: boolean;
        public canSeeInventory: boolean;
        public areFriends: boolean;
        public canSendFriendRequest: boolean;

    }

    class UserFriendRequest extends UserBase {
        constructor(env: Env, data: object);

        private env: Env;

        public userDescription: string;
        public created: Date;

        public accept(): Promise<true>;

        public decline(): Promise<true>;
    }

    class CursorPage {
        constructor(options: CursorPageOptions);

        private env: Env;
        private providedOptions: object;
        private repeatFunction: Function;

        public previousCursor: string;
        public nextCursor: string;

        private newOptions(cursor: string, options: object): object;
    }

    class UserFriendRequestCursorPage extends CursorPage {
        constructor(options: CursorPageOptions);

        public data: Array<UserFriendRequest>;

        public next(options?: object): Promise<UserFriendRequestCursorPage>;

        public previous(options?: object): Promise<UserFriendRequestCursorPage>;
    }

    class AuditLogCursorPage extends CursorPage {
        constructor(env: Env, data: object);

        public data: Array<GroupAuditLog>;

        public next(): Promise<AuditLogCursorPage>;

        public previous(): Promise<AuditLogCursorPage>;
    }

    class JoinRequestsCursorPage extends CursorPage {
        constructor(env: Env, data: object);

        public data: Array<GroupJoinRequest>;

        public next(): Promise<JoinRequestsCursorPage>;

        public previous(): Promise<JoinRequestsCursorPage>;
    }

    class MembersWithRoleCursorPage extends CursorPage {
        constructor(env: Env, data: object);

        public data: Array<GroupMember>;

        public next(): Promise<MembersWithRoleCursorPage>;

        public previous(): Promise<MembersWithRoleCursorPage>;
    }

    class MembersCursorPage extends CursorPage {
        constructor(env: Env, data: object);

        public data: Array<GroupMember>;

        public next(): Promise<MembersCursorPage>;

        public previous(): Promise<MembersCursorPage>;
    }

    class WallCursorPage extends CursorPage {
        constructor(env: Env, data: object);

        public data: Array<GroupWallPost>;

        public next(): Promise<WallCursorPage>;

        public previous(): Promise<WallCursorPage>;
    }

    class GroupBase extends EventEmitter {
        constructor(env: Env, data: object);

        private client: Client;
        public _raw: any;
        public id: AnyIdentifier;
        public name: string;

        private _setupMethods(): void;

        public getSettings(): Promise<GroupSettings>;

        public updateSettings(settings: ConfigureGroupSettings): Promise<any>;

        public getAuditLogs(options?: AuditLogOptions): Promise<AuditLogCursorPage>

        public updateDescription(description: string): Promise<true>;

        public updateShout(shout: string): Promise<GroupShout>;

        public updateIcon(file: any): Promise<true>;

        public getJoinRequests(options?: GenericOptions): Promise<JoinRequestsCursorPage>

        public getJoinRequest(userId: UserIdentifier): Promise<any>;

        public acceptJoinRequest(userId: UserIdentifier): Promise<true>;

        public getRoles(): Promise<Array<GroupRole>>;

        public getMembersWithRole(roleId: GroupRoleIdentifier, options?: GenericOptions): Promise<MembersWithRoleCursorPage>;

        public getMembers(options?: GenericOptions): Promise<MembersCursorPage>;

        public getMember(user: UserIdentifier): Promise<GroupMember>;

        public joinGroup(): Promise<any>;

        public changeOwner(userId: UserIdentifier): Promise<true>;

        public claimOwnership(): Promise<true>;

        public kick(userId: UserIdentifier): Promise<true>;

        public updateMember(userId: UserIdentifier, role: GroupRoleIdentifier): Promise<true>;

        public currentPayouts(): Promise<Array<{ user: PartialUser, percentage: number }>>;

        public payoutUsers(payouts: PayoutOptions): Promise<true>;

        public updatePayouts(payouts: PayoutOptions): Promise<true>;

        public getRolePermissions(role: GroupRoleIdentifier): Promise<any>;

        public getWall(options?: GenericOptions): Promise<WallCursorPage>;

        public postOnWall(message: string): Promise<GroupWallPost>;

        public deleteWallPost(post: GroupWallPostIdentifier): Promise<true>;

        public deleteUserWallPosts(userId: UserIdentifier): Promise<true>;

        public createRole(options: GroupRoleOptions): Promise<true>;

        public deleteRole(role: GroupRoleIdentifier): Promise<true>;

        public updateRole(role: GroupRoleOptions): Promise<true>;

        public getGroup(): Promise<Group>;

        public initEvents (options: InitEventsOptions): void;
    }

    class GroupAuditLog {
        constructor(env: Env, data: object);

        public actor: GroupMember;
        public action: string;
        public description: any;
    }

    class Group extends GroupBase {
        constructor(env: Env, data: object);

        public id: AnyIdentifier;
        public name: string;
        public description: string;
        public owner: GroupMember;
        public shout: GroupShout;

        public on(event: "joinRequest", listener: (request: GroupJoinRequest, group: Group) => void): this;
        public on(event: "wallPost", listener: (post: GroupWallPost, group: Group) => void): this;
        public on(event: "shout", listener: (shout: GroupShout, group: Group) => void): this;
    }

    class GroupMember extends PartialUser {
        constructor(env: Env, data: object);

        public role: GroupRole;

        public kick(): Promise<true>;

        public update(role?: GroupRoleIdentifier): Promise<true>;

        public payoutOnce(amount: number): Promise<true>;

        public makeOwner(): Promise<true>;

        public deleteWallPosts(): Promise<true>;
    }

    class GroupRole {
        constructor(env: Env, roleData: object);

        public id: AnyIdentifier;
        public name: string;
        public rank: number;

        public getMembers(options?: GenericOptions): Promise<MembersWithRoleCursorPage>;

        public getPermissions(): Promise<any>;
    }

    class GroupShout {
        constructor(env: Env, data: object);

        private env: Env;
        public body: string | null;
        public poster: GroupMember | null;
        public created: Date;
    }

    class PartialGroup extends GroupBase {
        constructor(env: Env, data: object);

    }

    class GroupSettings {
        constructor(env: Env, settings: object);

        public isApprovalRequired: boolean;
        public isBuildersClubRequired: boolean;
        public areEnemiesAllowed: boolean;
        public areGroupFundsVisible: boolean;
        public areGroupGamesVisible: boolean;
    }

    class UserGroup extends GroupBase {
        constructor(env: Env, groupData: object, roleData: object);

        public role: GroupRole;
        public owner: GroupMember | null;
        public shout: GroupShout | null;
        public memberCount: number;
        public isBuildersClubOnly: boolean;
        public hasClan: boolean;
        public publicEntryAllowed: boolean;
    }

    class GroupWallPost {
        constructor(env: Env, data: object);

        private env: Env;
        public id: AnyIdentifier;
        public poster: GroupMember | null;
        public body: string;
        public created: Date;

        public delete(): Promise<true>;
        public deleteAll(): Promise<true>;
        public kick(): Promise<true>;
    }

    class GroupJoinRequest {
        constructor(env: Env, data: object);

        private env: Env;

        public user: GroupMember;
        public created: Date;

        public accept(): Promise<true>;

        public decline(): Promise<true>;
    }


    class Message {
        constructor(env: Env, data: object);

        public id: number;
        public sender: PartialUser;
        public recipient: PartialUser;
        public subject: string;
        public body: string;
        public created: Date;
        public read: boolean;
        public systemMessage: boolean;
    }

    class ChatManager {
        constructor(env: Env, data: object);

        private client: Client;

        private _setupMethods(): void;

        public getConversationMessages(options: ChatOptions): Promise<Array<ChatMessage>>;

        public getUnreadConversationMessages(conversations: Array<ChatConversationIdentifier>, pageSize?: number): Promise<Array<ChatMessage>>;

        public addToConversation(userIds: Array<UserIdentifier>, conversation: ChatConversationIdentifier): Promise<true>;

        public markMessageRead(conversation: ChatConversationIdentifier, messageId: ChatMessageIdentifier): Promise<true>;

        public markConversationsRead(conversations: Array<ChatConversationIdentifier>): Promise<true>;

        public removeFromConversation(userId: UserIdentifier, conversation: ChatConversationIdentifier): Promise<true>;

        public renameGroupConversation(conversation: ChatConversationIdentifier, title: string): Promise<true>;

        public sendMessage(message: string, conversation: ChatConversationIdentifier): Promise<SentChatMessage>;

        public updateTypingStatus(conversation: ChatConversationIdentifier, isTyping: boolean, duration: number): Promise<true>;

        public getSettings(): Promise<ChatSettings>;

        public getConversationsById(conversations: Array<AnyIdentifier>): Promise<Array<ChatConversation>>;

        public getConversation(identifier: AnyIdentifier): Promise<ChatConversation>;

        public getUnreadConversationsCount(): Promise<number>;

        public getConversations(page?: number, pageSize?: number): Promise<Array<ChatConversation>>;

        public getMetadata(): Promise<ChatMetadata>;

        public createGroupConversation(users: Array<UserIdentifier>, title: string): Promise<ChatConversation>;

        public getConversationsWithUser(user: UserIdentifier): Promise<Array<ChatConversation>>;
    }

    class ChatMessage {
        constructor(env: Env, data: object);

        public id: string;
        public senderType: string;
        public sent: Date;
        public read: boolean;
        public messageType: string;
        public senderTargetId: number;
        public content: string;

        public markRead(): Promise<true>;

        public reply(message: string): Promise<SentChatMessage>;
    }

    class ChatConversation {
        constructor(env: Env, data: object);

        public id: string;
        public title: string;
        public initiator: PartialUser;
        public hasUnreadMessages: boolean;
        public participants: Array<PartialUser>;
        public conversationType: string;
        public conversationTitle: string;
        public lastUpdated: Date;

        public getMessages(pageSize?: number): Promise<Array<ChatMessage>>;

        public getUnreadMessages(pageSize?: number): Promise<Array<ChatMessage>>;

        public addUsers(users: Array<UserIdentifier>): Promise<true>;

        public markMessageRead(messageId: ChatMessageIdentifier): Promise<true>;

        public markRead(): Promise<true>;

        public removeUser(user: UserIdentifier): Promise<true>;

        public rename(newTitle: string): Promise<true>;

        public sendMessage(message: string): Promise<SentChatMessage>;

        public setTyping(isTyping: boolean, duration?: number): Promise<true>;
    }

    class ChatSettings {
        constructor(env: Env, data: object);

        public chatEnabled: boolean;
        public isActiveChatUser: boolean;
    }

    class ChatMetadata {
        constructor(env: Env, data: object);
    }

    class SentChatMessage {
        constructor(env: Env, data: object);

        public content: string;
        public filtered: boolean;
        public id: string;
        public sent: Date;
        public messageType: string;
        public resultType: string;
        public statusMessage: string;
    }


    // -- Types

    type RequestOptions = {
        url: string;
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | string;
        headers: object;
        proxy: string;
        followAllRedirects: boolean;
        body: object;
        json: object;
        form: object;
        formData: object;
        qs: object;
        verification: string;
        xcsrf: string | boolean;
        jar: object | boolean;
        userAgent: string;
        ignoreErrors: boolean;
        ignoreTokenError: boolean;
        ignoreCaptchaError: boolean;
        otherData: object;
    };

    type ClientOptions = {
        cookie: string;
        username: string;
        password: string;
        callbacks: object;
        setup: {
            proxy: string;
            includeRaw: boolean;
            userAgent: string;
            cache: {
                users: number;
                groups: number;
            }
        };
    };

    type CursorPageOptions = {
        env: any;
        params: any;
        data: any;
        dataName: string;
        dataClass: any;
        repeatFunction: Function;
    };

    type GenericOptions = {
        sortOrder: string | "Desc";
        limit: number | 100;
        cursor: string;
    };

    type ConfigureGroupSettings = {
        isApprovalRequired: boolean;
        isBuildersClubRequired: boolean;
        areEnemiesAllowed: boolean;
        areGroupFundsVisible: boolean;
        areGroupGamesVisible: boolean;
    };

    type AuditLogOptions = {
        actionType: string;
        userId: AnyIdentifier;
        sortOrder: "Desc" | "Asc";
        limit: number;
        cursor: string;
    };

    type PayoutOptions = [{
        userId: UserIdentifier;
        amount: number;
    }]

    type GroupRoleOptions = {
        name: string;
        description: string;
        rank: number;
        usingGroupFunds: boolean;
    };

    type ChatOptions = {
        conversationId: string | number;
        pageSize: number;
    };

    type InitEventsOptions = {
        wall: {
            enabled: boolean;
            interval: number | 2000;
        };
        joinRequests: {
            enabled: boolean;
            interval: number | 2000;
        }
    };

    type ChatConversationIdentifier = AnyIdentifier | ChatConversation;
    type ChatMessageIdentifier = AnyIdentifier | ChatMessage;
    type GroupWallPostIdentifier = AnyIdentifier | GroupRole;
    type AnyIdentifier = string | number | any;
    type GroupIdentifier = AnyIdentifier | Group | PartialGroup;
    type UserIdentifier = AnyIdentifier | PartialUser | UserFriendRequest | User;
    type GroupRoleIdentifier = AnyIdentifier | GroupRole;
    type MessageIdentifier = AnyIdentifier | Message;

    // -- Interfaces

    interface Misc {
        errors: {};
        managers: {};
        util: {
            getValue: (typeIdentifier: string, data: any, excludeIdentifiers: Array<string>) => any;
            staticTypeDeclarations: {
                userId: object[];
                groupId: object[];
                joinRequest: object[];
                groupRole: object[];
                arrayType: (identifier: string) => object[];
            }
        };
    }

    interface Structures {
        CursorPage: CursorPage;
        Group: {
            AuditLog: GroupAuditLog;
            Base: GroupBase;
            Group: Group;
            Member: GroupMember;
            Role: GroupRole;
            Shout: GroupShout;
            Partial: PartialGroup;
            Settings: GroupSettings;
            UserGroup: UserGroup;
            WallPost: GroupWallPost;
        };
        User: {
            Base: UserBase;
            FriendRequest: UserFriendRequest;
            FriendStatus: UserFriendStatus;
            Partial: PartialUser;
            User: User;
        };
    }
}
