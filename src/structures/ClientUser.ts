import Client from "../client";


export default class ClientUser {
    public client: Client;
    public id: number;

    constructor (client: Client, data: { id: number }) {
        this.client = client;
        this.id = data.id;
    }
}
