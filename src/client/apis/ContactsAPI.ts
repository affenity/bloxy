import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetContactsMetaData = {
    multiGetContactsMaxSize: number;
}
export type GetUsersTagsOptions = {
    targetUserIds: number[];
}
export type GetUsersTags = {
    targetUserId: number;
    targetUserTag: string;
}[];
export type SetPendingUserTagOptions = {
    targetUserId: number;
    userTag: string;
}
export type SetPendingUserTag = {
    status: "Success" | string;
}
export type SetUserTagOptions = {
    targetUserId: number;
    userTag: string;
}
export type SetUserTag = {
    status: "Success" | string;
}

export default class ContactsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://contacts.roblox.com/"
        });
    }

    getContactsMetaData (): Promise<GetContactsMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/contacts/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUsersTags (options: GetUsersTagsOptions): Promise<GetUsersTags> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/get-tags`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    setPendingUserTag (options: SetPendingUserTagOptions): Promise<SetPendingUserTag> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/set-pending-tag`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    setUserTag (options: SetUserTagOptions): Promise<SetUserTag> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/tag`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
