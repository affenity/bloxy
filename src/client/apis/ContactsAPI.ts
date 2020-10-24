import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetContactsMetaData = {
    multiGetContactsMaxSize: number;
}
export type MatchContactsOptions = {
    country: string;
    contacts: {
        sourceId: string;
        fields: {
            name: string;
            value: string;
        }[];
    }[];
}
export type MatchContacts = {
    contacts: {
        sourceId: string;
        contactUserId: number;
        contactUsername: string;
        friendshipStatus: "NoFriendship" | string;
        sharedFriendsCount: number;
        phoneNumber: string;
    }[];
}
export type UpdateContactsOptions = MatchContacts;
export type UpdateContacts = unknown;
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
                path: `v1/contacts/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    matchContacts (options: MatchContactsOptions): Promise<MatchContacts> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/contacts/match`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateContacts (options: UpdateContactsOptions): Promise<UpdateContacts> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `1/contacts/update`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
