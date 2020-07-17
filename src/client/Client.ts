import ClientBase from "./ClientBase";
import { ClientCredentialsOptions, ClientOptions } from "../interfaces/ClientInterfaces";
import initAPIs, { APIs } from "./apis";
import ClientUser from "../structures/ClientUser";
import clientLogin from "./methods/login";
import RESTController from "../controllers/rest";
import initStructures, { Structures } from "../structures";
import Group from "../structures/group/Group";
import ClientSocket from "./lib/ClientSocket/ClientSocket";
import User from "../structures/user/User";
import PartialUser from "../structures/user/PartialUser";


export default class Client extends ClientBase {
    public user: ClientUser | null;
    public apis: APIs;
    public login: OmitThisParameter<(this: Client, credentials?: ClientCredentialsOptions) => Promise<ClientUser>>;
    public rest: RESTController;
    public structures: Structures;
    public socket: ClientSocket;

    constructor (options?: ClientOptions) {
        super(options);

        this.user = null;
        this.apis = initAPIs(this);
        this.login = (credentials?: ClientCredentialsOptions) => clientLogin.bind(this)(credentials || this.options.credentials || {});
        this.rest = new RESTController(this, this.options.rest);
        this.structures = initStructures();
        this.socket = new ClientSocket(this);

        this.init();
    }

    init (): void {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }

    getGroup (groupId: number): Promise<Group> {
        return this.apis.groupsAPI.getGroup({
            groupId
        }).then(data => {
            if (!data) {
                throw new Error(`Group not found: ${groupId}`);
            } else {
                return new Group(data, this);
            }
        });
    }

    getUser (userId: number): Promise<User> {
        return this.apis.otherAPI.getUserProfileHeader({
            userId
        }).then(data => new User({
            id: data.ProfileUserId,
            name: data.ProfileUserName,
            canFollow: data.CanBeFollowed,
            canSeeInventory: data.CanSeeInventory,
            canTrade: data.CanTrade,
            incomingFriendRequest: data.IncomingFriendRequestPending,
            sentFriendRequest: data.FriendRequestPending,
            canMessage: data.CanMessage,
            isViewerBlocked: data.IsViewerBlocked,
            isVieweeBlocked: data.IsVieweeBlocked,
            followingsCount: data.FollowingsCount,
            followersCount: data.FollowersCount,
            userPlaceId: data.UserPlaceId,
            userStatusDate: data.UserStatusDate,
            userStatus: data.UserStatus,
            presenceType: data.UserPresenceType,
            friendsCount: data.FriendsCount,
            canFriend: data.MaySendFriendInvitation,
            areFriends: data.AreFriends,
            lastLocation: data.LastLocation,
            canSeeFavorites: data.CanSeeFavorites,
            headShotImage: {
                final: data.HeadShotImage.Final,
                endpointType: data.HeadShotImage.EndpointType,
                retryUrl: data.HeadShotImage.RetryUrl,
                url: data.HeadShotImage.Url,
                userId: data.HeadShotImage.UserId
            },
            messagesDisabled: data.MessagesDisabled,
            previousUsernames: data.PreviousUserNames
        }, this));
    }

    getUserIdFromUsername (username: string): Promise<PartialUser> {
        return this.apis.generalApi.getUserByUsername({
            username
        }).then(data => new PartialUser(data, this));
    }

    getUsernameFromUserId (userId: number): Promise<PartialUser> {
        return this.apis.generalApi.getUserById({
            userId
        }).then(data => new PartialUser(data, this));
    }

    getUsersByUserIds (userIds: number[], excludeBannedUsers = false): Promise<PartialUser[]> {
        return this.apis.usersAPI.getUsersByIds({
            excludeBannedUsers,
            userIds
        }).then(response => response.data.map(userData => new PartialUser(userData, this)));
    }

    getUsersByUsernames (usernames: string[], excludeBannedUsers = false): Promise<PartialUser[]> {
        return this.apis.usersAPI.getUsersByUsernames({
            excludeBannedUsers,
            usernames
        }).then(response => response.data.map(userData => new PartialUser(userData, this)));
    }
}
