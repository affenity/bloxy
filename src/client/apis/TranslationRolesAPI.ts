import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetSelfGameRolesOptions = {
    gameId: number;
}
export type GetSelfGameRoles = {
    data: string[];
}
export type GetUsersAssignedToGameOptions = {
    gameId: number;
    role: "translator";
}
export type GetUsersAssignedToGame = {
    data: {
        id: null;
        name: string;
    };
}

export default class TradesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://translationroles.roblox.com/"
        });
    }
}
