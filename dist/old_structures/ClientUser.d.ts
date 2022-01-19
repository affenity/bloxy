import { Client } from "../client";
import { PartialUser } from "./User";
export interface ClientUserOptions {
    id: number;
    name: string;
}
export declare class ClientUser extends PartialUser {
    client: Client;
    constructor(data: ClientUserOptions, client: Client);
}
