import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { EnumUserPresence } from "../../interfaces/GeneralInterfaces";

export type PresenceRegisterAppPresenceOptions = {
  location: string;
  placeId: number;
  disconnect: boolean;
};
export type PresenceRegisterAppPresence = unknown;
export type PresenceGetUsersPresencesOptions = {
  userIds: number[];
};
export type PresenceGetUsersPresences = {
  userPresences: PresenceGetUsersPresence[];
};
export type PresenceGetUsersPresence = {
  userPresenceType: EnumUserPresence;
  lastLocation: string;
  placeId: number;
  rootPlaceId: number;
  gameId: string;
  universeId: number;
  userId: number;
  lastOnline: string;
};

export class PresenceAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://presence.roblox.com/"
    });
  }

  registerAppPresence(
    options: PresenceRegisterAppPresenceOptions
  ): Promise<PresenceRegisterAppPresence> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/presence/register-app-presence`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUsersPresences(
    options: PresenceGetUsersPresencesOptions
  ): Promise<PresenceGetUsersPresences> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/presence/users`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
