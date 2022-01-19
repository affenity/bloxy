import { Client, UsersGetUserById } from "..";
import { BaseUser } from "./BaseUser";
declare type UserConstructorData = UsersGetUserById;
/**
 * Represents a roblox user
 */
export declare class User extends BaseUser {
    readonly name: string;
    readonly displayName: string;
    readonly externalAppDisplayName: string;
    readonly isBanned: boolean;
    readonly description: string;
    readonly created: Date;
    /**
     * @param {Client} client The Bloxy Client
     * @param {number} userId The user ID
     */
    constructor(client: Client, data: UserConstructorData);
}
export {};
