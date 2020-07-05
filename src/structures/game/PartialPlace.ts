import Client from "../../client";

interface PartialPlaceOptions {
    id: number;
    name?: string | null;
}

export default class PartialPlace {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: PartialPlaceOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}
