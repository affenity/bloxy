import { Client, UsersGetUserById } from "..";
import { BaseUser } from "./BaseUser";

type UserConstructorData = UsersGetUserById;

/**
 * Represents a roblox user
 */
export class User extends BaseUser {
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
  constructor(client: Client, data: UserConstructorData) {
    super(client, data.id);
    this.name = data.name;
    this.displayName = data.displayName;
    this.externalAppDisplayName = data.externalAppDisplayName;
    this.isBanned = data.isBanned;
    this.description = data.description;
    this.created = new Date(data.created);
  }
}
