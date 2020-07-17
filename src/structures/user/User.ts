import PartialUser from "./PartialUser";
import Client from "../../client";


export interface UserOptions {
    id: number;
    name: string;
    friendsCount: number;
    presenceType: number;
    lastLocation: string | null;
    userStatus: string | null;
    userStatusDate: string | null;
    userPlaceId: number | null;
    followersCount: number;
    followingsCount: number;
    isVieweeBlocked: boolean;
    isViewerBlocked: boolean;
    areFriends: boolean;
    canFollow: boolean;
    canMessage: boolean;
    canFriend: boolean;
    canTrade: boolean;
    incomingFriendRequest: boolean;
    sentFriendRequest: boolean;
    canSeeFavorites: boolean;
    messagesDisabled: boolean;
    canSeeInventory: boolean;
    headShotImage: {
        final: boolean;
        url: string;
        retryUrl: string | null;
        userId: number;
        endpointType: "Avatar" | string;
    };
    previousUsernames: string;
}


export default class User extends PartialUser {
    public friendsCount: number;
    public presenceType: number;
    public lastLocation: string | null;
    public status: string | null;
    public statusDate: Date | null;
    public placeId: number | null;
    public followersCount: number;
    public followingCount: number;
    /**
     * If the authenticated user has blocked the user
     */
    public isBlocked: boolean;
    /**
     * If the user has blocked the authenticated user
     */
    public hasBlocked: boolean;
    /**
     * If the authenticated user and the target user are friends
     */
    public areFriends: boolean;
    public canFollow: boolean;
    public canMessage: boolean;
    public canFriend: boolean;
    /**
     * If the authenticated user has sent a friend request to this user
     */
    public sentFriendRequest: boolean;
    /**
     * If the target user has sent a friend request to the authenticated user
     */
    public incomingFriendRequest: boolean;
    public messagesDisabled: boolean;
    public canSeeFavorites: boolean;
    public canTrade: boolean;
    public canSeeInventory: boolean;
    public previousNames: string[];
    public headshotImage: {
        final: boolean;
        url: string | null;
        retryUrl: string | null;
        userId: number;
        endpointType: "Avatar" | string;
    };

    constructor (data: UserOptions, client: Client) {
        super(data, client);
        this.friendsCount = data.friendsCount;
        this.presenceType = data.presenceType;
        this.lastLocation = data.lastLocation || null;
        this.status = data.userStatus || null;
        const matchedStatusTimestamp = data.userStatusDate ? data.userStatusDate.match(/\((.*)\)/) : null;
        this.statusDate = matchedStatusTimestamp ? new Date(parseInt(matchedStatusTimestamp[1])) : null;
        this.placeId = data.userPlaceId;
        this.followersCount = data.followersCount;
        this.followingCount = data.followingsCount;
        this.isBlocked = data.isVieweeBlocked;
        this.hasBlocked = data.isViewerBlocked;
        this.areFriends = data.areFriends;
        this.canFollow = data.canFollow;
        this.canMessage = data.canMessage;
        this.canFriend = data.canFriend;
        this.sentFriendRequest = data.sentFriendRequest;
        this.incomingFriendRequest = data.incomingFriendRequest;
        this.messagesDisabled = data.messagesDisabled;
        this.canSeeFavorites = data.canSeeFavorites;
        this.canTrade = data.canTrade;
        this.canSeeInventory = data.canSeeInventory;
        this.previousNames = data.previousUsernames.split("\r\n");
        this.headshotImage = {
            final: data.headShotImage.final,
            url: data.headShotImage.url,
            retryUrl: data.headShotImage.retryUrl,
            userId: data.headShotImage.userId,
            endpointType: data.headShotImage.endpointType
        };
    }
}
