import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type RegisterAppPresenceOptions = {
    location: string;
    placeId: number;
    disconnect: boolean;
}
export type RegisterAppPresence = unknown
export type GetUsersPresencesOptions = {
    userIds: number[];
}
export type GetUsersPresences = {
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
}

export default class PresenceAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://presence.roblox.com/"
        });
    }

    registerAppPresence (options: RegisterAppPresenceOptions): Promise<RegisterAppPresence> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/presence/register-app-presence`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getUsersPresences (options: GetUsersPresencesOptions): Promise<GetUsersPresences> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/presence/users`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
