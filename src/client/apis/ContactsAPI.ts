import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type ContactsGetContactsMetaData = {
  multiGetContactsMaxSize: number;
  multiGetContactsCacheTTLinMS: number;
};
export type ContactsGetUsersTagsOptions = {
  targetUserIds: number[];
};
export type ContactsGetUsersTags = {
  targetUserId: number;
  targetUserTag: string;
}[];
export type ContactsSetPendingUserTagOptions = {
  targetUserId: number;
  userTag: string;
};
export type ContactsSetPendingUserTag = {
  status: "Success" | string;
};
export type ContactsSetUserTagOptions = {
  targetUserId: number;
  userTag: string;
};
export type ContactsSetUserTag = {
  status: "Success" | string;
};

export class ContactsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://contacts.roblox.com/"
    });
  }

  getContactsMetaData(): Promise<ContactsGetContactsMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/contacts/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getUsersTags(
    options: ContactsGetUsersTagsOptions
  ): Promise<ContactsGetUsersTags> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/get-tags`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setPendingUserTag(
    options: ContactsSetPendingUserTagOptions
  ): Promise<ContactsSetPendingUserTag> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/set-pending-tag`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setUserTag(options: ContactsSetUserTagOptions): Promise<ContactsSetUserTag> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/tag`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
