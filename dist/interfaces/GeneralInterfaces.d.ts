import { ClientUser } from "../old_structures/ClientUser";
export declare type AnyIdentifier = string | number;
export declare type UserIdentifier = ClientUser | AnyIdentifier;
export declare enum EnumUserPresence {
    "Offline" = 0,
    "Online" = 1,
    "In Game" = 2,
    "In Studio" = 3
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
