import BaseAPI from "./BaseAPI";
import Client from "../Client";
import ChatConversation from "../../structures/chat/ChatConversation";
import ChatMessage from "../../structures/chat/ChatMessage";
import PartialChatConversation from "../../structures/chat/PartialChatConversation";
import PartialUser from "../../structures/user/PartialUser";
import ChatMessageSent from "../../structures/chat/ChatMessageSent";


export type GetChatSettings = {
    chatEnabled: boolean;
}
export type GetConversationsOptions = {
    conversationIds: number[];
}
export type GetConversations = ChatConversation[];
export type GetConversationMessagesOptions = {
    conversationId: number;
    pageSize: number;
    exclusiveStartMessageId?: string;
}
export type GetConversationMessages = ChatMessage[];
export type GetRolloutSettingsOptions = {
    featureNames: string[];
}
export type GetRolloutSettings = {
    rolloutFeatures: {
        featureName: string;
        isRolloutEnabled: boolean;
    }[];
}
export type GetUnreadConversationCount = {
    count: number;
}
export type GetUnreadMessagesInConversationsOptions = {
    conversationIds: number[];
    pageSize?: number;
}
export type GetUnreadMessagesInConversations = {
    conversation: PartialChatConversation;
    chatMessages: ChatMessage[];
}
export type GetUserConversationsOptions = {
    pageNumber: number;
    pageSize: number;
}
export type GetUserConversations = ChatConversation[];
export type GetMetaData = {
    isChatEnabledByPrivacySetting: string;
    languageForPrivacySettingUnavailable: string;
    maxConversationTitleLength: number;
    numberOfMembersForPartyChrome: number;
    partyChromeDisplayTimeStampInterval: number;
    signalRDisconnectionResponseInMilliseconds: number;
    typingInChatFromSenderThrottleMs: number;
    typingInChatForReceiverExpirationMs: number;
    relativeValueToRecordUiPerformance: number;
    isChatDataFromLocalStorageEnabled: boolean;
    chatDataFromLocalStorageExpirationSeconds: number;
    isUsingCacheToLoadFriendsInfoEnabled: boolean;
    cachedDataFromLocalStorageExpirationMS: number;
    senderTypesForUnknownMessageTypeError: string[];
    isInvalidMessageTypeFallbackEnabled: boolean;
    isRespectingMessageTypeEnabled: boolean;
    validMessageTypesWhiteList: string[];
    shouldRespectConversationHasUnreadMessageToMarkAsRead: boolean;
    isVoiceChatForClientSideEnabled: boolean;
    isAliasChatForClientSideEnabled: boolean;
    isPlayTogetherForGameCardsEnabled: boolean;
    isRoactChatEnabled: boolean;
}
export type GetMultiLatestConversationMessagesOptions = {
    conversationIds: number;
    pageSize: number;
}
export type GetMultiLatestConversationMessages = GetUnreadMessagesInConversations[];
export type AddUsersToConversationOptions = {
    participantUserIds: number[];
    conversationId: number;
}
export type AddUsersToConversation = {
    conversation: PartialChatConversation;
    rejectedMembers: {
        user: PartialUser;
        rejectedReason: string;
    };
    resultType: "Success" | string;
    statusMessage: string;
}
export type MarkMessageInConversationAsReadOptions = {
    conversationId: number;
    endMessageId: string;
}
export type MarkMessageInConversationAsRead = {
    resultType: "Success" | string;
}
export type MarkConversationsAsSeenOptions = {
    conversationsToMarkSeen: number[];
}
export type MarkConversationsAsSeen = {
    resultType: "Success" | string;
}
export type RemoveUserFromConversationOptions = {
    participantUserId: number;
    conversationId: number;
}
export type RemoveUserFromConversation = {
    conversation: PartialChatConversation;
    resultType: "Success" | string;
    statusMessage: string;
}
export type RenameGroupConversationOptions = {
    conversationId: number;
    newTitle: string;
}
export type RenameGroupConversation = {
    conversation: PartialChatConversation;
    statusMessage: string;
    resultType: "Success" | string;
}
export type ResetConversationUniverseOptions = {
    conversationId: number;
}
export type ResetConversationUniverse = {
    statusMessage: string;
    conversation: PartialChatConversation;
}
export type SendGameLinkMessageOptions = {
    universeId: number;
    conversationId: number;
    decorators: string[];
}
export type SendGameLinkMessage = ChatMessageSent;
export type SendMessageOptions = {
    message: string;
    conversationId: number;
    decorators: string[];
}
export type SendMessage = ChatMessageSent;
export type SetConversationUniverseOptions = {
    conversationId: number;
    universeId: number;
}
export type SetConversationUniverse = {
    conversation: PartialChatConversation;
    statusMessage: string;
}
export type StartCloudEditConversationOptions = {
    placeId: number;
}
export type StartCloudEditConversation = {
    conversation: ChatConversation;
    rejectedMembers: {
        rejectedReason: string;
        user: PartialUser;
    }[];
    resultType: "Success" | string;
    statusMessage: string;
}
export type StartGroupConversationOptions = {
    participantUserIds: number[];
    title: string;
}
export type StartGroupConversation = StartCloudEditConversation;
export type StartOneToOneConversationOptions = {
    participantUserId: number;
}
export type StartOneToOneConversation = StartCloudEditConversation;
export type UpdateUserTypingStatusOptions = {
    conversationId: number;
    isTyping: boolean;
}
export type UpdateUserTypingStatus = {
    statusMessage: string;
}

export default class ChatAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://chat.roblox.com/"
        });
    }

    getChatSettings (): Promise<GetChatSettings> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/chat-settings`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getConversations (options: GetConversationsOptions): Promise<GetConversations> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => new ChatConversation(val, this.client)));
    }

    getConversationMessages (options: GetConversationMessagesOptions): Promise<GetConversationMessages> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => new ChatMessage(val, this.client)));
    }

    getRolloutSettings (options: GetRolloutSettingsOptions): Promise<GetRolloutSettings> {
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
        }).then((response: { body: any }) => response.body);
    }

    getUnreadConversationCount (): Promise<GetUnreadConversationCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/get-conversations`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getUnreadMessagesInConversations (options: GetUnreadMessagesInConversationsOptions): Promise<GetConversations> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => new ChatConversation(val, this.client)));
    }

    getUserConversations (options: GetUserConversationsOptions): Promise<GetUserConversations> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => new ChatConversation(val, this.client)));
    }

    getMetaData (): Promise<GetMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v2/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response: { body: any }) => response.body);
    }

    getMultiLatestConversationMessages (options: GetMultiLatestConversationMessagesOptions): Promise<GetMultiLatestConversationMessages> {
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
        }).then((response: { body: any }) => response.body.map((val: any) => ({
            conversation: new PartialChatConversation({
                id: val.conversationId
            }, this.client),
            chatMessages: response.body.chatMessages.map((mes: any) => new ChatMessage(mes, this.client))
        }) as GetUnreadMessagesInConversations));
    }

    addUsersToConversation (options: AddUsersToConversationOptions): Promise<AddUsersToConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new ChatConversation(response.body.conversation, this.client),
            rejectedMembers: response.body.rejectedParticipants.map((val: any) => new PartialUser({
                id: val.targetId,
                name: val.name
            }, this.client)),
            resultType: response.body.resultType,
            statusMessage: response.body.statusMessage
        }));
    }

    markConversationMessagesRead (options: MarkMessageInConversationAsReadOptions): Promise<MarkMessageInConversationAsRead> {
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
        }).then((response: { body: any }) => response.body);
    }

    markConversationsSeen (options: MarkConversationsAsSeenOptions): Promise<MarkConversationsAsSeen> {
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
        }).then((response: { body: any }) => response.body);
    }

    removeUserFromConversation (options: RemoveUserFromConversationOptions): Promise<RemoveUserFromConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new PartialChatConversation({
                id: options.conversationId
            }, this.client),
            resultType: response.body.resultType,
            statusMessage: response.body.statusMessage
        }));
    }

    renameGroupConversation (options: RenameGroupConversationOptions): Promise<RenameGroupConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new PartialChatConversation({
                id: options.conversationId
            }, this.client),
            resultType: response.body.responseType,
            statusMessage: response.body.statusMessage
        }));
    }

    resetConversationUniverse (options: ResetConversationUniverseOptions): Promise<ResetConversationUniverse> {
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
        }).then((response: { body: any }) => ({
            conversation: new PartialChatConversation({
                id: options.conversationId
            }, this.client),
            statusMessage: response.body.statusMessage
        }));
    }

    sendGameLinkMessage (options: SendGameLinkMessageOptions): Promise<SendGameLinkMessage> {
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
        }).then((response: { body: any }) => new ChatMessageSent(response.body, this.client));
    }

    sendMessage (options: SendMessageOptions): Promise<SendMessage> {
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
        }).then((response: { body: any }) => new ChatMessageSent(response.body, this.client));
    }

    setConversationUniverse (options: SetConversationUniverseOptions): Promise<SetConversationUniverse> {
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
        }).then((response: { body: any }) => ({
            conversation: new PartialChatConversation({
                id: options.conversationId
            }, this.client),
            statusMessage: response.body.statusMessage
        }));
    }

    startCloudEditConversation (options: StartCloudEditConversationOptions): Promise<StartCloudEditConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new ChatConversation(response.body.conversation, this.client),
            rejectedMembers: response.body.rejectedParticipants.map((val: any) => new PartialUser({
                id: val.targetId,
                name: val.name
            }, this.client)),
            resultType: response.body.resultType,
            statusMessage: response.body.statusMessage
        }));
    }

    startGroupConversation (options: StartGroupConversationOptions): Promise<StartGroupConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new ChatConversation(response.body.conversation, this.client),
            statusMessage: response.body.statusMessage,
            resultType: response.body.resultType,
            rejectedMembers: response.body.rejectedParticipants.map((val: any) => new PartialUser(val, this.client))
        }));
    }

    startOneToOneConversation (options: StartOneToOneConversationOptions): Promise<StartOneToOneConversation> {
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
        }).then((response: { body: any }) => ({
            conversation: new ChatConversation(response.body.conversation, this.client),
            statusMessage: response.body.statusMessage,
            resultType: response.body.resultType,
            rejectedMembers: response.body.rejectedParticipants.map((val: any) => new PartialUser(val, this.client))
        }));
    }

    updateUserTypingStatus (options: UpdateUserTypingStatusOptions): Promise<UpdateUserTypingStatus> {
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
        }).then((response: { body: any }) => response.body);
    }
}
