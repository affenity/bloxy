import Client from "../../client";

export interface UserBaseOptions {
    id: number;
    name?: string | null;
    membership?: boolean;
}

export default class UserBase {
    public client: Client;
    public id: number;
    public name: string | null;
    public membership: unknown;

    constructor (data: UserBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.membership = data.membership;
    }
}
