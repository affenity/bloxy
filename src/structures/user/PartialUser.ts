import UserBase from "./UserBase";
import Client from "../../client";


export interface PartialUserOptions {
    id: number;
    name?: string;
}


export default class PartialUser extends UserBase {
    constructor (data: PartialUserOptions, client: Client) {
        super(data, client);
    }
}
