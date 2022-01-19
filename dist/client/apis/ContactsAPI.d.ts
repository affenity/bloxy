import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type ContactsGetContactsMetaData = {
    multiGetContactsMaxSize: number;
    multiGetContactsCacheTTLinMS: number;
};
export declare type ContactsGetUsersTagsOptions = {
    targetUserIds: number[];
};
export declare type ContactsGetUsersTags = {
    targetUserId: number;
    targetUserTag: string;
}[];
export declare type ContactsSetPendingUserTagOptions = {
    targetUserId: number;
    userTag: string;
};
export declare type ContactsSetPendingUserTag = {
    status: "Success" | string;
};
export declare type ContactsSetUserTagOptions = {
    targetUserId: number;
    userTag: string;
};
export declare type ContactsSetUserTag = {
    status: "Success" | string;
};
export declare class ContactsAPI extends BaseAPI {
    constructor(client: Client);
    getContactsMetaData(): Promise<ContactsGetContactsMetaData>;
    getUsersTags(options: ContactsGetUsersTagsOptions): Promise<ContactsGetUsersTags>;
    setPendingUserTag(options: ContactsSetPendingUserTagOptions): Promise<ContactsSetPendingUserTag>;
    setUserTag(options: ContactsSetUserTagOptions): Promise<ContactsSetUserTag>;
}
