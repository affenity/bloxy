import Client from "../../Client";
import {
    AddUsersToConversation,
    GetChatSettings,
    MarkConversationsAsSeen,
    MarkMessageInConversationAsRead,
    RemoveUserFromConversation,
    RenameGroupConversation,
    ResetConversationUniverse,
    SendGameLinkMessageOptions,
    SendMessageOptions,
    SetConversationUniverse,
    StartCloudEditConversation,
    StartGroupConversation,
    StartOneToOneConversation,
    UpdateUserTypingStatus
} from "../../apis/ChatAPI";
import { ChatConversation, ChatMessage, ChatMessageSent } from "../../../structures/Chat";


export default class ChatManager {
    public client: Client;

    constructor (client: Client) {
        this.client = client;
    }

    getSettings (): Promise<GetChatSettings> {
        return this.client.apis.chatAPI.getChatSettings();
    }

    getConversation (conversationId: number): Promise<ChatConversation | null> {
        return this.getConversations([conversationId])
            .then(data => data[0] || null);
    }

    getConversationMessages (conversationId: number, amount = 100, startMessageId?: string): Promise<ChatMessage[]> {
        return this.client.apis.chatAPI.getConversationMessages({
            conversationId,
            pageSize: amount,
            exclusiveStartMessageId: startMessageId
        })
            .then(response => response.map(chatData => new ChatMessage(chatData, this.client)));
    }

    getUnreadConversationsCount (): Promise<number> {
        return this.client.apis.chatAPI.getUnreadConversationCount()
            .then(response => response.count);
    }

    getConversations (conversations: number[]): Promise<ChatConversation[]> {
        return this.client.apis.chatAPI.getConversations({
            conversationIds: conversations
        })
            .then(response => response.map(conversationData => new ChatConversation(conversationData, this.client)));
    }

    addUsersToConversation (conversation: number, users: number[]): Promise<AddUsersToConversation> {
        return this.client.apis.chatAPI.addUsersToConversation({
            conversationId: conversation,
            participantUserIds: users
        });
    }

    markMessageRead (conversation: number, id: string): Promise<MarkMessageInConversationAsRead> {
        return this.client.apis.chatAPI.markConversationMessagesRead({
            conversationId: conversation,
            endMessageId: id
        });
    }

    markConversationsRead (conversations: number[]): Promise<MarkConversationsAsSeen> {
        return this.client.apis.chatAPI.markConversationsSeen({
            conversationsToMarkSeen: conversations
        });
    }

    removeUserFromConversation (conversation: number, user: number): Promise<RemoveUserFromConversation> {
        return this.client.apis.chatAPI.removeUserFromConversation({
            conversationId: conversation,
            participantUserId: user
        });
    }

    renameGroupConversation (conversation: number, name: string): Promise<RenameGroupConversation> {
        return this.client.apis.chatAPI.renameGroupConversation({
            conversationId: conversation,
            newTitle: name
        });
    }

    getUnreadMessagesInConversations (conversations: number[], amount = 100): Promise<ChatMessage[]> {
        return this.client.apis.chatAPI.getUnreadMessagesInConversations({
            conversationIds: conversations,
            pageSize: amount
        })
            .then(response => Array.prototype.concat.apply(
                [],
                response.map(conversationData => conversationData.chatMessages
                    .map(chatData => new ChatMessage(chatData, this.client))
                )));
    }

    getLatestMessagesInConversations (conversations: number[], amount = 100): Promise<ChatMessage[]> {
        return this.client.apis.chatAPI.getMultiLatestConversationMessages({
            conversationIds: conversations,
            pageSize: amount
        })
            .then(response => Array.prototype.concat.apply(
                [],
                response.map(conversationData => conversationData.chatMessages
                    .map(chatData => new ChatMessage(chatData, this.client))
                )));
    }

    resetConversationUniverse (conversation: number): Promise<ResetConversationUniverse> {
        return this.client.apis.chatAPI.resetConversationUniverse({
            conversationId: conversation
        });
    }

    sendGameLinkMessage (options: SendGameLinkMessageOptions): Promise<ChatMessageSent> {
        return this.client.apis.chatAPI.sendGameLinkMessage(options)
            .then(response => new ChatMessageSent(response, this.client));
    }

    sendMessage (options: SendMessageOptions): Promise<ChatMessageSent> {
        return this.client.apis.chatAPI.sendMessage(options)
            .then(response => new ChatMessageSent(response, this.client));
    }

    setConversationUniverse (conversation: number, universe: number): Promise<SetConversationUniverse> {
        return this.client.apis.chatAPI.setConversationUniverse({
            conversationId: conversation,
            universeId: universe
        });
    }

    startCloudEditConversation (placeId: number): Promise<StartCloudEditConversation> {
        return this.client.apis.chatAPI.startCloudEditConversation({
            placeId
        });
    }

    startGroupConversation (title: string, users: number[]): Promise<StartGroupConversation> {
        return this.client.apis.chatAPI.startGroupConversation({
            participantUserIds: users,
            title
        });
    }

    startOneToOneConversation (userId: number): Promise<StartOneToOneConversation> {
        return this.client.apis.chatAPI.startOneToOneConversation({
            participantUserId: userId
        });
    }

    updateTypingStatus (conversation: number, isTyping = true): Promise<UpdateUserTypingStatus> {
        return this.client.apis.chatAPI.updateUserTypingStatus({
            conversationId: conversation,
            isTyping
        });
    }
}
