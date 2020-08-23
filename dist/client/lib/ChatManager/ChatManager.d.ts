import Client from "../../Client";
import { AddUsersToConversation, GetChatSettings, MarkConversationsAsSeen, MarkMessageInConversationAsRead, RemoveUserFromConversation, RenameGroupConversation, ResetConversationUniverse, SendGameLinkMessageOptions, SendMessageOptions, SetConversationUniverse, StartCloudEditConversation, StartGroupConversation, StartOneToOneConversation, UpdateUserTypingStatus } from "../../apis/ChatAPI";
import { ChatConversation, ChatMessage, ChatMessageSent } from "../../../structures/Chat";
export default class ChatManager {
    client: Client;
    constructor(client: Client);
    getSettings(): Promise<GetChatSettings>;
    getConversation(conversationId: number): Promise<ChatConversation | null>;
    getConversationMessages(conversationId: number, amount?: number, startMessageId?: string): Promise<ChatMessage[]>;
    getUnreadConversationsCount(): Promise<number>;
    getConversations(conversations: number[]): Promise<ChatConversation[]>;
    addUsersToConversation(conversation: number, users: number[]): Promise<AddUsersToConversation>;
    markMessageRead(conversation: number, id: string): Promise<MarkMessageInConversationAsRead>;
    markConversationsRead(conversations: number[]): Promise<MarkConversationsAsSeen>;
    removeUserFromConversation(conversation: number, user: number): Promise<RemoveUserFromConversation>;
    renameGroupConversation(conversation: number, name: string): Promise<RenameGroupConversation>;
    getUnreadMessagesInConversations(conversations: number[], amount?: number): Promise<ChatMessage[]>;
    getLatestMessagesInConversations(conversations: number[], amount?: number): Promise<ChatMessage[]>;
    resetConversationUniverse(conversation: number): Promise<ResetConversationUniverse>;
    sendGameLinkMessage(options: SendGameLinkMessageOptions): Promise<ChatMessageSent>;
    sendMessage(options: SendMessageOptions): Promise<ChatMessageSent>;
    setConversationUniverse(conversation: number, universe: number): Promise<SetConversationUniverse>;
    startCloudEditConversation(placeId: number): Promise<StartCloudEditConversation>;
    startGroupConversation(title: string, users: number[]): Promise<StartGroupConversation>;
    startOneToOneConversation(userId: number): Promise<StartOneToOneConversation>;
    updateTypingStatus(conversation: number, isTyping?: boolean): Promise<UpdateUserTypingStatus>;
}
