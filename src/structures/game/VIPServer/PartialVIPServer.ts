import Client from "../../../client";


export interface PartialVIPServerOptions {
    id: number;
}


export default class PartialVIPServer {
    public client: Client;
    public id: number;

    constructor (data: PartialVIPServerOptions, client: Client) {
        this.client = client;
        this.id = data.id;
    }
}
