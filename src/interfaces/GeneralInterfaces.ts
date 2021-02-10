import ClientUser from "../structures/ClientUser";


export declare type AnyIdentifier = string | number;
export declare type UserIdentifier = ClientUser | AnyIdentifier;
export enum EnumUserPresence {
    "Offline",
    "Online",
    "In Game",
    "In Studio"
}
export interface UserPresence {
    UserPresenceType: "InGame" | "InStudio" | "Online" | "Offline";
    UserLocationType: "Game";
    lastLocation?: string;
    placeId?: number;
    rootPlaceId?: number;
    gameInstanceId?: string;
    universeId?: number;
    lastOnline?: string;
}
