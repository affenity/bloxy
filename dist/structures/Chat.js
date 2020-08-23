"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageSent = exports.ChatMessage = exports.PartialChatConversation = exports.ChatConversation = void 0;
const retrieveStructures = () => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup
});
class ChatConversation {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id;
        this.title = data.title;
        this.initiator = new structures.PartialUser({
            id: data.initiator.targetId,
            name: data.initiator.name || undefined
        }, client);
        this.hasUnreadMessages = data.hasUnreadMessages;
        this.members = data.participants.map(participantData => new structures.PartialUser({
            id: participantData.targetId,
            name: participantData.name
        }, client));
        this.type = data.conversationType;
        this.lastUpdated = new Date(data.lastUpdated);
        this.universe = data.conversationUniverse ? new structures.PartialGameUniverse({
            id: data.conversationUniverse
        }, client) : null;
        this.conversationTitle = {
            forViewer: data.conversationTitle.titleForViewer,
            isDefaultTitle: data.conversationTitle.isDefaultTitle
        };
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getMessages(amount = 100, startId) {
        return this.client.chat.getConversationMessages(this.id, amount, startId);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    addUsers(users) {
        return this.client.chat.addUsersToConversation(this.id, users);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    removeUser(userId) {
        return this.client.chat.removeUserFromConversation(this.id, userId);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    markMessageRead(id) {
        return this.client.chat.markMessageRead(this.id, id);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    markRead() {
        return this.client.chat.markConversationsRead([
            this.id
        ]);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    rename(name) {
        return this.client.chat.renameGroupConversation(this.id, name);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getUnreadMessages(amount = 100) {
        return this.client.chat.getUnreadMessagesInConversations([this.id], amount);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getLatestMessages(amount = 100) {
        return this.client.chat.getLatestMessagesInConversations([this.id], amount);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    resetUniverse() {
        return this.client.chat.resetConversationUniverse(this.id);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    sendGameLinkMessage(options) {
        return this.client.chat.sendGameLinkMessage(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    sendMessage(options) {
        return this.client.chat.sendMessage(options);
    }
}
exports.ChatConversation = ChatConversation;
class PartialChatConversation {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title || null;
    }
}
exports.PartialChatConversation = PartialChatConversation;
class ChatMessage {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id;
        this.sender = new structures.PartialUser({
            id: data.senderTargetId
        }, client);
        this.sentAt = new Date(data.sent);
        this.type = data.messageType;
        this.decorators = data.decorators;
        this.content = data.content;
    }
}
exports.ChatMessage = ChatMessage;
class ChatMessageSent {
    constructor(data, client) {
        this.client = client;
        this.id = data.messageId;
        this.content = data.content;
        this.filtered = data.filteredForReceivers;
        this.sentAt = new Date(data.sent);
        this.result = data.resultType;
        this.status = data.statusMessage;
        this.type = data.messageType;
    }
}
exports.ChatMessageSent = ChatMessageSent;
