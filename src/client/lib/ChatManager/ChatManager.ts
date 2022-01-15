import { Client } from "../../Client";
import {
  ChatAddUsersToConversation,
  ChatGetChatSettings,
  ChatMarkConversationsSeen,
  ChatMarkConversationMessagesRead,
  ChatRemoveUserFromConversation,
  ChatRenameGroupConversation,
  ChatResetConversationUniverse,
  ChatSendGameLinkMessageOptions,
  ChatSendMessageOptions,
  ChatSetConversationUniverse,
  ChatStartCloudEditConversation,
  ChatStartGroupConversation,
  ChatStartOneToOneConversation,
  ChatUpdateUserTypingStatus
} from "../../apis/ChatAPI";
import {
  ChatConversation,
  ChatMessage,
  ChatMessageSent
} from "../../../old_structures/Chat";

export class ChatManager {
  public client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  getSettings(): Promise<ChatGetChatSettings> {
    return this.client.apis.chatAPI.getChatSettings();
  }

  getConversation(conversationId: number): Promise<ChatConversation | null> {
    return this.getConversations([conversationId]).then(
      (data) => data[0] || null
    );
  }

  getConversationMessages(
    conversationId: number,
    amount = 100,
    startMessageId?: string
  ): Promise<ChatMessage[]> {
    return this.client.apis.chatAPI
      .getConversationMessages({
        conversationId,
        pageSize: amount,
        exclusiveStartMessageId: startMessageId
      })
      .then((response) =>
        response.map((chatData) => new ChatMessage(chatData, this.client))
      );
  }

  getUnreadConversationsCount(): Promise<number> {
    return this.client.apis.chatAPI
      .getUnreadConversationCount()
      .then((response) => response.count);
  }

  getConversations(conversations: number[]): Promise<ChatConversation[]> {
    return this.client.apis.chatAPI
      .getConversations({
        conversationIds: conversations
      })
      .then((response) =>
        response.map(
          (conversationData) =>
            new ChatConversation(conversationData, this.client)
        )
      );
  }

  addUsersToConversation(
    conversation: number,
    users: number[]
  ): Promise<ChatAddUsersToConversation> {
    return this.client.apis.chatAPI.addUsersToConversation({
      conversationId: conversation,
      participantUserIds: users
    });
  }

  markMessageRead(
    conversation: number,
    id: string
  ): Promise<ChatMarkConversationMessagesRead> {
    return this.client.apis.chatAPI.markConversationMessagesRead({
      conversationId: conversation,
      endMessageId: id
    });
  }

  markConversationsRead(
    conversations: number[]
  ): Promise<ChatMarkConversationsSeen> {
    return this.client.apis.chatAPI.markConversationsSeen({
      conversationsToMarkSeen: conversations
    });
  }

  removeUserFromConversation(
    conversation: number,
    user: number
  ): Promise<ChatRemoveUserFromConversation> {
    return this.client.apis.chatAPI.removeUserFromConversation({
      conversationId: conversation,
      participantUserId: user
    });
  }

  renameGroupConversation(
    conversation: number,
    name: string
  ): Promise<ChatRenameGroupConversation> {
    return this.client.apis.chatAPI.renameGroupConversation({
      conversationId: conversation,
      newTitle: name
    });
  }

  getUnreadMessagesInConversations(
    conversations: number[],
    amount = 100
  ): Promise<ChatMessage[]> {
    return this.client.apis.chatAPI
      .getUnreadMessagesInConversations({
        conversationIds: conversations,
        pageSize: amount
      })
      .then((response) =>
        Array.prototype.concat.apply(
          [],
          response.map((conversationData) =>
            conversationData.chatMessages.map(
              (chatData) => new ChatMessage(chatData, this.client)
            )
          )
        )
      );
  }

  getLatestMessagesInConversations(
    conversations: number[],
    amount = 100
  ): Promise<ChatMessage[]> {
    return this.client.apis.chatAPI
      .getMultiLatestConversationMessages({
        conversationIds: conversations,
        pageSize: amount
      })
      .then((response) =>
        Array.prototype.concat.apply(
          [],
          response.map((conversationData) =>
            conversationData.chatMessages.map(
              (chatData) => new ChatMessage(chatData, this.client)
            )
          )
        )
      );
  }

  resetConversationUniverse(
    conversation: number
  ): Promise<ChatResetConversationUniverse> {
    return this.client.apis.chatAPI.resetConversationUniverse({
      conversationId: conversation
    });
  }

  sendGameLinkMessage(
    options: ChatSendGameLinkMessageOptions
  ): Promise<ChatMessageSent> {
    return this.client.apis.chatAPI
      .sendGameLinkMessage(options)
      .then((response) => new ChatMessageSent(response, this.client));
  }

  sendMessage(options: ChatSendMessageOptions): Promise<ChatMessageSent> {
    return this.client.apis.chatAPI
      .sendMessage(options)
      .then((response) => new ChatMessageSent(response, this.client));
  }

  setConversationUniverse(
    conversation: number,
    universe: number
  ): Promise<ChatSetConversationUniverse> {
    return this.client.apis.chatAPI.setConversationUniverse({
      conversationId: conversation,
      universeId: universe
    });
  }

  startCloudEditConversation(
    placeId: number
  ): Promise<ChatStartCloudEditConversation> {
    return this.client.apis.chatAPI.startCloudEditConversation({
      placeId
    });
  }

  startGroupConversation(
    title: string,
    users: number[]
  ): Promise<ChatStartGroupConversation> {
    return this.client.apis.chatAPI.startGroupConversation({
      participantUserIds: users,
      title
    });
  }

  startOneToOneConversation(
    userId: number
  ): Promise<ChatStartOneToOneConversation> {
    return this.client.apis.chatAPI.startOneToOneConversation({
      participantUserId: userId
    });
  }

  updateTypingStatus(
    conversation: number,
    isTyping = true
  ): Promise<ChatUpdateUserTypingStatus> {
    return this.client.apis.chatAPI.updateUserTypingStatus({
      conversationId: conversation,
      isTyping
    });
  }
}
