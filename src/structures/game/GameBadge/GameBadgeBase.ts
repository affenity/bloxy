import Client from "../../../client";


export interface GameBadgeBaseOptions {
    id: number;
    name?: string;
}

export default class GameBadgeBase {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: GameBadgeBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}
