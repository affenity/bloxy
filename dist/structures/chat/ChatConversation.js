"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGameUniverse_1 = tslib_1.__importDefault(require("../game/PartialGameUniverse"));
class ChatConversation {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title;
        this.initiator = new PartialUser_1.default({
            id: data.initiator.targetId,
            name: data.initiator.name || undefined
        }, client);
        this.hasUnreadMessages = data.hasUnreadMessages;
        this.members = data.participants.map(participantData => new PartialUser_1.default({
            id: participantData.targetId,
            name: participantData.name
        }, client));
        this.type = data.conversationType;
        this.lastUpdated = new Date(data.lastUpdated);
        this.universe = data.conversationUniverse ? new PartialGameUniverse_1.default({
            id: data.conversationUniverse
        }, client) : null;
        this.conversationTitle = {
            forViewer: data.conversationTitle.titleForViewer,
            isDefaultTitle: data.conversationTitle.isDefaultTitle
        };
    }
}
exports.default = ChatConversation;
