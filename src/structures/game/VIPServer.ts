import Client from "../../client";
import PartialGameUniverse from "./PartialGameUniverse";
import PartialUser from "../user/PartialUser";


export interface VIPServerOptions {
    id: number;
    name: string;
    game: {
        id: number;
        name: string;
        rootPlace: {
            id: number;
            name: string;
        };
    };
    joinCode: string;
    active: boolean;
    subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: string;
        price: number;
    };
    permissions: {
        clanAllowed: boolean;
        enemyClanId: number | number;
        friendsAllowed: boolean; users: Array<{
            id: number;
            name: string;
            displayName: string;
        }>;
    };
}

export default class VIPServer {
    public client: Client;
    public id: number;
    public name: string;
    public game: PartialGameUniverse;
    public code: string;
    public active: boolean;
    public subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: Date;
        price: number;
    };
    public permissions: {
        clanAllowed: boolean;
        enemyClanId: number;
        friendsAllowed: boolean;
        users: PartialUser[];
    };

    constructor (data: VIPServerOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.game = new PartialGameUniverse({
            id: data.game.id,
            name: data.game.name,
            rootPlace: {
                id: data.game.rootPlace.id,
                name: data.game.rootPlace.name
            }
        }, client);
        this.active = data.active;
        this.code = data.joinCode;
        this.subscription = {
            active: data.subscription.active,
            expired: data.subscription.expired,
            expirationDate: new Date(data.subscription.expirationDate),
            price: data.subscription.price
        };
        this.permissions = {
            clanAllowed: data.permissions.clanAllowed,
            enemyClanId: data.permissions.enemyClanId,
            friendsAllowed: data.permissions.friendsAllowed,
            users: data.permissions.users.map(userData => new PartialUser(userData, client))
        };
    }
}
