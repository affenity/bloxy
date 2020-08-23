"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class ChatAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://chat.roblox.com/"
        });
    }
    getChatSettings() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/chat-settings`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getConversations(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-conversations`,
                qs: {
                    conversationIds: options.conversationIds.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getConversationMessages(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-messages`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getRolloutSettings(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-rollout-settings`,
                qs: {
                    featureNames: options.featureNames.join(",")
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUnreadConversationCount() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-conversations`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUnreadMessagesInConversations(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-unread-messages`,
                qs: {
                    conversationIds: options.conversationIds.join(","),
                    pageSize: options.pageSize
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getUserConversations(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-user-conversations`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getMetaData() {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    getMultiLatestConversationMessages(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/multi-get-latest-messages`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    addUsersToConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/add-to-conversation`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    markConversationMessagesRead(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/mark-as-read`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    markConversationsSeen(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/mark-as-seen`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    removeUserFromConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/remove-from-conversation`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    renameGroupConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/rename-group-conversation`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    resetConversationUniverse(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/reset-conversation-universe`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    sendGameLinkMessage(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/send-game-link-message`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    sendMessage(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/send-message`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    setConversationUniverse(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/set-conversation-universe`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    startCloudEditConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/start-cloud-edit-conversation`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    startGroupConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-user-conversations`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    startOneToOneConversation(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/start-one-to-one-conversation`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
    updateUserTypingStatus(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/update-user-typing-status`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = ChatAPI;
