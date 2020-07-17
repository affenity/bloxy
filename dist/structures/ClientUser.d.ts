import Client from "../client";
export default class ClientUser {
    client: Client;
    id: number;
    constructor(client: Client, data: {
        id: number;
    });
}
