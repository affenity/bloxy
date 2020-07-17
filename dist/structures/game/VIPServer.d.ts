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
        friendsAllowed: boolean;
        users: Array<{
            id: number;
            name: string;
            displayName: string;
        }>;
    };
}
export default class VIPServer {
    client: Client;
    id: number;
    name: string;
    game: PartialGameUniverse;
    code: string;
    active: boolean;
    subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: Date;
        price: number;
    };
    permissions: {
        clanAllowed: boolean;
        enemyClanId: number;
        friendsAllowed: boolean;
        users: PartialUser[];
    };
    constructor(data: VIPServerOptions, client: Client);
}
