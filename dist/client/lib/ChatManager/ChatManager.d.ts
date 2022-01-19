import { Client } from "../../Client";
import { ChatAddUsersToConversation, ChatGetChatSettings, ChatMarkConversationsSeen, ChatMarkConversationMessagesRead, ChatRemoveUserFromConversation, ChatRenameGroupConversation, ChatResetConversationUniverse, ChatSendGameLinkMessageOptions, ChatSendMessageOptions, ChatSetConversationUniverse, ChatStartCloudEditConversation, ChatStartGroupConversation, ChatStartOneToOneConversation, ChatUpdateUserTypingStatus } from "../../apis/ChatAPI";
import { ChatConversation, ChatMessage, ChatMessageSent } from "../../../old_structures/Chat";
export declare class ChatManager {
    client: Client;
    constructor(client: Client);
    getSettings(): Promise<ChatGetChatSettings>;
    getConversation(conversationId: number): Promise<ChatConversation | null>;
    getConversationMessages(conversationId: number, amount?: number, startMessageId?: string): Promise<ChatMessage[]>;
    getUnreadConversationsCount(): Promise<number>;
    getConversations(conversations: number[]): Promise<ChatConversation[]>;
    addUsersToConversation(conversation: number, users: number[]): Promise<ChatAddUsersToConversation>;
    markMessageRead(conversation: number, id: string): Promise<ChatMarkConversationMessagesRead>;
    markConversationsRead(conversations: number[]): Promise<ChatMarkConversationsSeen>;
    removeUserFromConversation(conversation: number, user: number): Promise<ChatRemoveUserFromConversation>;
    renameGroupConversation(conversation: number, name: string): Promise<ChatRenameGroupConversation>;
    getUnreadMessagesInConversations(conversations: number[], amount?: number): Promise<ChatMessage[]>;
    getLatestMessagesInConversations(conversations: number[], amount?: number): Promise<ChatMessage[]>;
    resetConversationUniverse(conversation: number): Promise<ChatResetConversationUniverse>;
    sendGameLinkMessage(options: ChatSendGameLinkMessageOptions): Promise<ChatMessageSent>;
    sendMessage(options: ChatSendMessageOptions): Promise<ChatMessageSent>;
    setConversationUniverse(conversation: number, universe: number): Promise<ChatSetConversationUniverse>;
    startCloudEditConversation(placeId: number): Promise<ChatStartCloudEditConversation>;
    startGroupConversation(title: string, users: number[]): Promise<ChatStartGroupConversation>;
    startOneToOneConversation(userId: number): Promise<ChatStartOneToOneConversation>;
    updateTypingStatus(conversation: number, isTyping?: boolean): Promise<ChatUpdateUserTypingStatus>;
}
