import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type RegisterAppPresenceOptions = {
    location: string;
    placeId: number;
    disconnect: boolean;
};
export declare type RegisterAppPresence = {};
export declare type GetUsersPresencesOptions = {
    userIds: number[];
};
export declare type GetUsersPresences = {
    userPresences: {
        userPresenceType: "Offline" | string;
        lastLocation: string;
        placeId: number;
        rootPlaceId: number;
        gameId: string;
        universeId: number;
        userId: number;
        lastOnline: string;
    }[];
};
export default class PresenceAPI extends BaseAPI {
    constructor(client: Client);
    registerAppPresence(options: RegisterAppPresenceOptions): Promise<RegisterAppPresence>;
    getUsersPresences(options: GetUsersPresencesOptions): Promise<GetUsersPresences>;
}
