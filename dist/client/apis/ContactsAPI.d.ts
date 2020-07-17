import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetContactsMetaData = {
    multiGetContactsMaxSize: number;
};
export declare type MatchContactsOptions = {
    country: string;
    contacts: {
        sourceId: string;
        fields: {
            name: string;
            value: string;
        }[];
    }[];
};
export declare type MatchContacts = {
    contacts: {
        sourceId: string;
        contactUserId: number;
        contactUsername: string;
        friendshipStatus: "NoFriendship" | string;
        sharedFriendsCount: number;
        phoneNumber: string;
    }[];
};
export declare type UpdateContactsOptions = MatchContacts;
export declare type UpdateContacts = {};
export declare type GetUsersTagsOptions = {
    targetUserIds: number[];
};
export declare type GetUsersTags = {
    targetUserId: number;
    targetUserTag: string;
}[];
export declare type SetPendingUserTagOptions = {
    targetUserId: number;
    userTag: string;
};
export declare type SetPendingUserTag = {
    status: "Success" | string;
};
export declare type SetUserTagOptions = {
    targetUserId: number;
    userTag: string;
};
export declare type SetUserTag = {
    status: "Success" | string;
};
export default class ContactsAPI extends BaseAPI {
    constructor(client: Client);
    getContactsMetaData(): Promise<GetContactsMetaData>;
    matchContacts(options: MatchContactsOptions): Promise<MatchContacts>;
    updateContacts(options: UpdateContactsOptions): Promise<UpdateContacts>;
    getUsersTags(options: GetUsersTagsOptions): Promise<GetUsersTags>;
    setPendingUserTag(options: SetPendingUserTagOptions): Promise<SetPendingUserTag>;
    setUserTag(options: SetUserTagOptions): Promise<SetUserTag>;
}
