import { Client } from "..";
/**
 * Represents a Roblox group ID and gives direct access to various group-related APIs.
 */
export declare class BaseGroup {
    #private;
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} groupId The group ID
     */
    constructor(client: Client, groupId: number);
    get client(): Client;
    get groupId(): number;
    acceptUser(user: number): Promise<unknown>;
    declineUser(user: number): Promise<unknown>;
}
