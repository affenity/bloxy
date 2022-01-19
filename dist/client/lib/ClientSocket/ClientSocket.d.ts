/// <reference types="node" />
import { Client } from "../../Client";
import { EventEmitter } from "events";
import { PartialChatConversation } from "../../../old_structures/Chat";
import { PartialUser } from "../../../old_structures/User";
export declare interface Socket extends EventEmitter {
    on(event: "chatMessageSent", listener: (data: {
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatUserTyping", listener: (data: {
        user: PartialUser;
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatUserTypingStopped", listener: (data: {
        user: PartialUser;
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatMessage", listener: (data: {
        user: PartialUser;
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatMessageSent", listener: (data: {
        user: PartialUser;
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatConversationAdded", listener: (data: {
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatConversationRemoved", listener: (data: {
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatMemberAdded", listener: (data: {
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "chatMemberLeft", listener: (data: {
        conversation: PartialChatConversation;
    }) => void): this;
    on(event: "friendLost", listener: (data: {
        user: PartialUser;
    }) => void): this;
    on(event: "friendRequest", listener: (data: {
        user: PartialUser;
    }) => void): this;
    on(event: "friendAdded", listener: (data: {
        user: PartialUser;
    }) => void): this;
    on(event: "userPresenceChanged", listener: (data: {
        user: PartialUser;
    }) => void): this;
}
export declare class Socket extends EventEmitter {
    client: Client;
    socket: any;
    connected: boolean;
    constructor(client: Client);
    connect(): Promise<void>;
    /**
     * This is called after the connection of the socket has successfully been established
     */
    init(): void;
}
