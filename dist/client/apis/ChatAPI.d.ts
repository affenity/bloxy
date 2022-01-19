import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type ChatPartialConversationData = {
    id: number;
    title?: string;
};
export declare type ChatMessageSentData = {
    content: string;
    filteredForReceivers: boolean;
    messageId: string;
    sent: string;
    messageType: "PlainText" | string;
    resultType: "Success" | string;
    statusMessage: string;
};
export declare type ChatMessageData = {
    id: string;
    senderType: string;
    sent: string;
    read: boolean;
    messageType: "PlainText" | string;
    decorators: string[];
    senderTargetId: number;
    content: string;
    link?: {
        type: "Game";
        game: {
            universeId: number;
        };
    };
    eventBased?: {
        type: "SetConversationUniverse";
        setConversationUniverse: {
            actorUserId: number;
            universeId: number;
        };
    };
};
export declare type ChatGetChatSettings = {
    chatEnabled: boolean;
};
export declare type ChatGetConversationMessages = ChatMessageData[];
export declare type ChatGetRolloutSettings = {
    rolloutFeatures: {
        featureName: string;
        isRolloutEnabled: boolean;
    }[];
};
export declare type ChatGetUnreadConversationCount = {
    count: number;
};
export declare type ChatGetUnreadMessagesInConversations = {
    conversationId: number;
    chatMessages: ChatMessageData[];
}[];
export declare type ChatConversationData = {
    id: number;
    title: string;
    initiator: {
        type: "User" | string;
        targetId: number;
        name: string | null;
        displayName: string | null;
    };
    hasUnreadMessages: boolean;
    participants: {
        type: "User" | string;
        targetId: number;
        name: string;
        displayName: string;
    }[];
    conversationType: "OneToOneConversation" | string;
    conversationTitle: {
        titleForViewer: string;
        isDefaultTitle: boolean;
    };
    lastUpdated: string;
    conversationUniverse: number | null;
};
export declare type ChatGetMetaData = {
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
};
export declare type ChatGetMultiLatestConversationMessages = ChatGetUnreadMessagesInConversations;
export declare type ChatAddUsersToConversation = {
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
};
export declare type ChatMarkMessageInConversationAsReadOptions = {
    conversationId: number;
    endMessageId: string;
};
export declare type ChatMarkConversationMessagesRead = {
    resultType: "Success" | string;
};
export declare type ChatMarkConversationsAsSeenOptions = {
    conversationsToMarkSeen: number[];
};
export declare type ChatMarkConversationsSeen = {
    resultType: "Success" | string;
};
export declare type ChatRemoveUserFromConversation = {
    conversation: ChatPartialConversationData;
    resultType: "Success" | string;
    statusMessage: string;
};
export declare type ChatRenameGroupConversation = {
    conversationTitle: string;
    statusMessage: string;
    resultType: "Success" | string;
    title: {
        titleForViewer: string;
        isDefaultTitle: boolean;
    };
};
export declare type ChatResetConversationUniverse = {
    statusMessage: string;
};
export declare type ChatSendGameLinkMessage = ChatMessageSentData;
export declare type ChatSendMessage = ChatMessageSentData;
export declare type ChatSetConversationUniverse = {
    statusMessage: string;
};
export declare type ChatStartCloudEditConversation = {
    conversation: ChatConversationData;
    rejectedParticipants: {
        rejectedReason: string;
        type: "User";
        targetId: number;
        name: string;
        displayName: string;
    }[];
    resultType: "Success" | string;
    statusMessage: string;
};
export declare type ChatStartGroupConversation = ChatStartCloudEditConversation;
export declare type ChatStartOneToOneConversation = ChatStartCloudEditConversation;
export declare type ChatUpdateUserTypingStatus = {
    statusMessage: string;
};
export declare type ChatGetConversationsOptions = {
    conversationIds: number[];
};
export declare type ChatGetConversationMessagesOptions = {
    conversationId: number;
    pageSize: number;
    exclusiveStartMessageId?: string;
};
export declare type ChatGetRolloutSettingsOptions = {
    featureNames: string[];
};
export declare type ChatGetUnreadMessagesInConversationsOptions = {
    conversationIds: number[];
    pageSize?: number;
};
export declare type ChatGetUserConversationsOptions = {
    pageNumber: number;
    pageSize: number;
};
export declare type ChatGetMultiLatestConversationMessagesOptions = {
    conversationIds: number[];
    pageSize: number;
};
export declare type ChatAddUsersToConversationOptions = {
    participantUserIds: number[];
    conversationId: number;
};
export declare type ChatMarkConversationMessagesReadOptions = {
    conversationId: number;
    endMessageId: string;
};
export declare type ChatMarkConversationsSeenOptions = {
    conversationsToMarkSeen: number[];
};
export declare type ChatRemoveUserFromConversationOptions = {
    participantUserId: number;
    conversationId: number;
};
export declare type ChatRenameGroupConversationOptions = {
    conversationId: number;
    newTitle: string;
};
export declare type ChatResetConversationUniverseOptions = {
    conversationId: number;
};
export declare type ChatSendMessageOptions = {
    message: string;
    conversationId: number;
    decorators: string[];
};
export declare type ChatSetConversationUniverseOptions = {
    conversationId: number;
    universeId: number;
};
export declare type ChatStartCloudEditConversationOptions = {
    placeId: number;
};
export declare type ChatStartGroupConversationOptions = {
    participantUserIds: number[];
    title: string;
};
export declare type ChatStartOneToOneConversationOptions = {
    participantUserId: number;
};
export declare type ChatUpdateUserTypingStatusOptions = {
    conversationId: number;
    isTyping: boolean;
};
export declare type ChatSendGameLinkMessageOptions = {
    universeId: number;
    conversationId: number;
    decorators: string[];
};
export declare class ChatAPI extends BaseAPI {
    constructor(client: Client);
    getChatSettings(): Promise<ChatGetChatSettings>;
    getConversations(options: ChatGetConversationsOptions): Promise<ChatConversationData[]>;
    getConversationMessages(options: ChatGetConversationMessagesOptions): Promise<ChatGetConversationMessages>;
    getRolloutSettings(options: ChatGetRolloutSettingsOptions): Promise<ChatGetRolloutSettings>;
    getUnreadConversationCount(): Promise<ChatGetUnreadConversationCount>;
    getUnreadMessagesInConversations(options: ChatGetUnreadMessagesInConversationsOptions): Promise<ChatGetUnreadMessagesInConversations>;
    getUserConversations(options: ChatGetUserConversationsOptions): Promise<ChatConversationData>;
    getMetaData(): Promise<ChatGetMetaData>;
    getMultiLatestConversationMessages(options: ChatGetMultiLatestConversationMessagesOptions): Promise<ChatGetMultiLatestConversationMessages>;
    addUsersToConversation(options: ChatAddUsersToConversationOptions): Promise<ChatAddUsersToConversation>;
    markConversationMessagesRead(options: ChatMarkConversationMessagesReadOptions): Promise<ChatMarkConversationMessagesRead>;
    markConversationsSeen(options: ChatMarkConversationsSeenOptions): Promise<ChatMarkConversationsSeen>;
    removeUserFromConversation(options: ChatRemoveUserFromConversationOptions): Promise<ChatRemoveUserFromConversation>;
    renameGroupConversation(options: ChatRenameGroupConversationOptions): Promise<ChatRenameGroupConversation>;
    resetConversationUniverse(options: ChatResetConversationUniverseOptions): Promise<ChatResetConversationUniverse>;
    sendGameLinkMessage(options: ChatSendGameLinkMessageOptions): Promise<ChatSendGameLinkMessage>;
    sendMessage(options: ChatSendMessageOptions): Promise<ChatSendMessage>;
    setConversationUniverse(options: ChatSetConversationUniverseOptions): Promise<ChatSetConversationUniverse>;
    startCloudEditConversation(options: ChatStartCloudEditConversationOptions): Promise<ChatStartCloudEditConversation>;
    startGroupConversation(options: ChatStartGroupConversationOptions): Promise<ChatStartGroupConversation>;
    startOneToOneConversation(options: ChatStartOneToOneConversationOptions): Promise<ChatStartOneToOneConversation>;
    updateUserTypingStatus(options: ChatUpdateUserTypingStatusOptions): Promise<ChatUpdateUserTypingStatus>;
}
