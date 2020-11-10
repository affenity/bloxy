import BaseAPI from "./BaseAPI";
import Client from "../Client";
import {
    ChatConversationOptions,
    ChatMessageOptions,
    ChatMessageSentOptions,
    PartialChatConversationOptions
} from "../../structures/Chat";


export type GetChatSettings = {
    chatEnabled: boolean;
}
export type GetConversationsOptions = {
    conversationIds: number[];
}
export type GetConversations = ChatConversationOptions[];
export type GetConversationMessagesOptions = {
    conversationId: number;
    pageSize: number;
    exclusiveStartMessageId?: string;
}
export type GetConversationMessages = ChatMessageOptions[];
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
    conversationId: number;
    chatMessages: ChatMessageOptions[];
}[];
export type GetUserConversationsOptions = {
    pageNumber: number;
    pageSize: number;
}
export type GetUserConversations = ChatConversationOptions[];
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
    conversationIds: number[];
    pageSize: number;
}
export type GetMultiLatestConversationMessages = GetUnreadMessagesInConversations;
export type AddUsersToConversationOptions = {
    participantUserIds: number[];
    conversationId: number;
}
export type AddUsersToConversation = {
    conversationId: number;
    rejectedParticipants: {
        rejectedReason: string;
        type: "User" | string;
        targetId: number;
        name: string;
        displayName: string;
    }[];
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
    conversation: PartialChatConversationOptions;
    resultType: "Success" | string;
    statusMessage: string;
}
export type RenameGroupConversationOptions = {
    conversationId: number;
    newTitle: string;
}
export type RenameGroupConversation = {
    conversationTitle: string;
    statusMessage: string;
    resultType: "Success" | string;
    title: {
        titleForViewer: string;
        isDefaultTitle: boolean;
    };
}
export type ResetConversationUniverseOptions = {
    conversationId: number;
}
export type ResetConversationUniverse = {
    statusMessage: string;
}
export type SendGameLinkMessageOptions = {
    universeId: number;
    conversationId: number;
    decorators: string[];
}
export type SendGameLinkMessage = ChatMessageSentOptions;
export type SendMessageOptions = {
    message: string;
    conversationId: number;
    decorators: string[];
}
export type SendMessage = ChatMessageSentOptions;
export type SetConversationUniverseOptions = {
    conversationId: number;
    universeId: number;
}
export type SetConversationUniverse = {
    statusMessage: string;
}
export type StartCloudEditConversationOptions = {
    placeId: number;
}
export type StartCloudEditConversation = {
    conversation: ChatConversationOptions;
    rejectedParticipants: {
        rejectedReason: string;
        type: "User";
        targetId: number;
        name: string;
        displayName: string;
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
    }

    getUnreadMessagesInConversations (options: GetUnreadMessagesInConversationsOptions): Promise<GetUnreadMessagesInConversations> {
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
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
        })
            .then(response => response.body);
    }
}
