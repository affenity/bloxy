import Client from "../../client";
import PartialPlace from "./PartialPlace";


interface PartialGameUniverseOptions {
    id: number;
    name?: string;
    rootPlace?: {
        id: number;
        name?: string | null;
    };
}

export default class PartialGameUniverse {
    public client: Client;
    public id: number;
    public name: string | null;
    public rootPlace: PartialPlace | null;

    constructor (data: PartialGameUniverseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.rootPlace = data.rootPlace ? new PartialPlace({
            id: data.rootPlace.id,
            name: data.rootPlace.name || null
        }, client) : null;
    }
}
