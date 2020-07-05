import Client from "../../client";


export interface GroupBaseOptions {
    id: number;
    name?: string;
}

export default class GroupBase {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: GroupBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}
