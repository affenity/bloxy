"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = require("../../../structures/Chat");
class ChatManager {
    constructor(client) {
        this.client = client;
    }
    getSettings() {
        return this.client.apis.chatAPI.getChatSettings();
    }
    getConversation(conversationId) {
        return this.getConversations([conversationId])
            .then(data => data[0] || null);
    }
    getConversationMessages(conversationId, amount = 100, startMessageId) {
        return this.client.apis.chatAPI.getConversationMessages({
            conversationId,
            pageSize: amount,
            exclusiveStartMessageId: startMessageId
        }).then(response => response.map(chatData => new Chat_1.ChatMessage(chatData, this.client)));
    }
    getUnreadConversationsCount() {
        return this.client.apis.chatAPI.getUnreadConversationCount()
            .then(response => response.count);
    }
    getConversations(conversations) {
        return this.client.apis.chatAPI.getConversations({
            conversationIds: conversations
        }).then(response => response.map(conversationData => new Chat_1.ChatConversation(conversationData, this.client)));
    }
    addUsersToConversation(conversation, users) {
        return this.client.apis.chatAPI.addUsersToConversation({
            conversationId: conversation,
            participantUserIds: users
        });
    }
    markMessageRead(conversation, id) {
        return this.client.apis.chatAPI.markConversationMessagesRead({
            conversationId: conversation,
            endMessageId: id
        });
    }
    markConversationsRead(conversations) {
        return this.client.apis.chatAPI.markConversationsSeen({
            conversationsToMarkSeen: conversations
        });
    }
    removeUserFromConversation(conversation, user) {
        return this.client.apis.chatAPI.removeUserFromConversation({
            conversationId: conversation,
            participantUserId: user
        });
    }
    renameGroupConversation(conversation, name) {
        return this.client.apis.chatAPI.renameGroupConversation({
            conversationId: conversation,
            newTitle: name
        });
    }
    getUnreadMessagesInConversations(conversations, amount = 100) {
        return this.client.apis.chatAPI.getUnreadMessagesInConversations({
            conversationIds: conversations,
            pageSize: amount
        }).then(response => Array.prototype.concat.apply([], response.map(conversationData => conversationData.chatMessages
            .map(chatData => new Chat_1.ChatMessage(chatData, this.client)))));
    }
    getLatestMessagesInConversations(conversations, amount = 100) {
        return this.client.apis.chatAPI.getMultiLatestConversationMessages({
            conversationIds: conversations,
            pageSize: amount
        }).then(response => Array.prototype.concat.apply([], response.map(conversationData => conversationData.chatMessages
            .map(chatData => new Chat_1.ChatMessage(chatData, this.client)))));
    }
    resetConversationUniverse(conversation) {
        return this.client.apis.chatAPI.resetConversationUniverse({
            conversationId: conversation
        });
    }
    sendGameLinkMessage(options) {
        return this.client.apis.chatAPI.sendGameLinkMessage(options)
            .then(response => new Chat_1.ChatMessageSent(response, this.client));
    }
    sendMessage(options) {
        return this.client.apis.chatAPI.sendMessage(options)
            .then(response => new Chat_1.ChatMessageSent(response, this.client));
    }
    setConversationUniverse(conversation, universe) {
        return this.client.apis.chatAPI.setConversationUniverse({
            conversationId: conversation,
            universeId: universe
        });
    }
    startCloudEditConversation(placeId) {
        return this.client.apis.chatAPI.startCloudEditConversation({
            placeId
        });
    }
    startGroupConversation(title, users) {
        return this.client.apis.chatAPI.startGroupConversation({
            participantUserIds: users,
            title
        });
    }
    startOneToOneConversation(userId) {
        return this.client.apis.chatAPI.startOneToOneConversation({
            participantUserId: userId
        });
    }
    updateTypingStatus(conversation, isTyping = true) {
        return this.client.apis.chatAPI.updateUserTypingStatus({
            conversationId: conversation,
            isTyping
        });
    }
}
exports.default = ChatManager;
