import Client from "../../client";
export interface GroupBaseOptions {
    id: number;
    name?: string;
}
export default class GroupBase {
    client: Client;
    id: number;
    name: string | null;
    constructor(data: GroupBaseOptions, client: Client);
}
