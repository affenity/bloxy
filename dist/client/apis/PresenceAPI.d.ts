import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { EnumUserPresence } from "../../interfaces/GeneralInterfaces";
export declare type PresenceRegisterAppPresenceOptions = {
    location: string;
    placeId: number;
    disconnect: boolean;
};
export declare type PresenceRegisterAppPresence = unknown;
export declare type PresenceGetUsersPresencesOptions = {
    userIds: number[];
};
export declare type PresenceGetUsersPresences = {
    userPresences: PresenceGetUsersPresence[];
};
export declare type PresenceGetUsersPresence = {
    userPresenceType: EnumUserPresence;
    lastLocation: string;
    placeId: number;
    rootPlaceId: number;
    gameId: string;
    universeId: number;
    userId: number;
    lastOnline: string;
};
export declare class PresenceAPI extends BaseAPI {
    constructor(client: Client);
    registerAppPresence(options: PresenceRegisterAppPresenceOptions): Promise<PresenceRegisterAppPresence>;
    getUsersPresences(options: PresenceGetUsersPresencesOptions): Promise<PresenceGetUsersPresences>;
}
