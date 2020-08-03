import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { ChatMessageOptions } from "../../structures/chat/ChatMessage/ChatMessage";
import { ChatConversationOptions } from "../../structures/chat/ChatConversation/ChatConversation";
import { ChatMessageSentOptions } from "../../structures/chat/ChatMessage/ChatMessageSent";
import { PartialChatConversationOptions } from "../../structures/chat/ChatConversation/PartialChatConversation";
export declare type GetChatSettings = {
    chatEnabled: boolean;
};
export declare type GetConversationsOptions = {
    conversationIds: number[];
};
export declare type GetConversations = ChatConversationOptions[];
export declare type GetConversationMessagesOptions = {
    conversationId: number;
    pageSize: number;
    exclusiveStartMessageId?: string;
};
export declare type GetConversationMessages = ChatMessageOptions[];
export declare type GetRolloutSettingsOptions = {
    featureNames: string[];
};
export declare type GetRolloutSettings = {
    rolloutFeatures: {
        featureName: string;
        isRolloutEnabled: boolean;
    }[];
};
export declare type GetUnreadConversationCount = {
    count: number;
};
export declare type GetUnreadMessagesInConversationsOptions = {
    conversationIds: number[];
    pageSize?: number;
};
export declare type GetUnreadMessagesInConversations = {
    conversationId: number;
    chatMessages: ChatMessageOptions[];
}[];
export declare type GetUserConversationsOptions = {
    pageNumber: number;
    pageSize: number;
};
export declare type GetUserConversations = ChatConversationOptions[];
export declare type GetMetaData = {
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
export declare type GetMultiLatestConversationMessagesOptions = {
    conversationIds: number;
    pageSize: number;
};
export declare type GetMultiLatestConversationMessages = GetUnreadMessagesInConversations[];
export declare type AddUsersToConversationOptions = {
    participantUserIds: number[];
    conversationId: number;
};
export declare type AddUsersToConversation = {
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
export declare type MarkMessageInConversationAsReadOptions = {
    conversationId: number;
    endMessageId: string;
};
export declare type MarkMessageInConversationAsRead = {
    resultType: "Success" | string;
};
export declare type MarkConversationsAsSeenOptions = {
    conversationsToMarkSeen: number[];
};
export declare type MarkConversationsAsSeen = {
    resultType: "Success" | string;
};
export declare type RemoveUserFromConversationOptions = {
    participantUserId: number;
    conversationId: number;
};
export declare type RemoveUserFromConversation = {
    conversation: PartialChatConversationOptions;
    resultType: "Success" | string;
    statusMessage: string;
};
export declare type RenameGroupConversationOptions = {
    conversationId: number;
    newTitle: string;
};
export declare type RenameGroupConversation = {
    conversationTitle: string;
    statusMessage: string;
    resultType: "Success" | string;
    title: {
        titleForViewer: string;
        isDefaultTitle: boolean;
    };
};
export declare type ResetConversationUniverseOptions = {
    conversationId: number;
};
export declare type ResetConversationUniverse = {
    statusMessage: string;
};
export declare type SendGameLinkMessageOptions = {
    universeId: number;
    conversationId: number;
    decorators: string[];
};
export declare type SendGameLinkMessage = ChatMessageSentOptions;
export declare type SendMessageOptions = {
    message: string;
    conversationId: number;
    decorators: string[];
};
export declare type SendMessage = ChatMessageSentOptions;
export declare type SetConversationUniverseOptions = {
    conversationId: number;
    universeId: number;
};
export declare type SetConversationUniverse = {
    statusMessage: string;
};
export declare type StartCloudEditConversationOptions = {
    placeId: number;
};
export declare type StartCloudEditConversation = {
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
};
export declare type StartGroupConversationOptions = {
    participantUserIds: number[];
    title: string;
};
export declare type StartGroupConversation = StartCloudEditConversation;
export declare type StartOneToOneConversationOptions = {
    participantUserId: number;
};
export declare type StartOneToOneConversation = StartCloudEditConversation;
export declare type UpdateUserTypingStatusOptions = {
    conversationId: number;
    isTyping: boolean;
};
export declare type UpdateUserTypingStatus = {
    statusMessage: string;
};
export default class ChatAPI extends BaseAPI {
    constructor(client: Client);
    getChatSettings(): Promise<GetChatSettings>;
    getConversations(options: GetConversationsOptions): Promise<GetConversations>;
    getConversationMessages(options: GetConversationMessagesOptions): Promise<GetConversationMessages>;
    getRolloutSettings(options: GetRolloutSettingsOptions): Promise<GetRolloutSettings>;
    getUnreadConversationCount(): Promise<GetUnreadConversationCount>;
    getUnreadMessagesInConversations(options: GetUnreadMessagesInConversationsOptions): Promise<GetUnreadMessagesInConversations>;
    getUserConversations(options: GetUserConversationsOptions): Promise<GetUserConversations>;
    getMetaData(): Promise<GetMetaData>;
    getMultiLatestConversationMessages(options: GetMultiLatestConversationMessagesOptions): Promise<GetMultiLatestConversationMessages>;
    addUsersToConversation(options: AddUsersToConversationOptions): Promise<AddUsersToConversation>;
    markConversationMessagesRead(options: MarkMessageInConversationAsReadOptions): Promise<MarkMessageInConversationAsRead>;
    markConversationsSeen(options: MarkConversationsAsSeenOptions): Promise<MarkConversationsAsSeen>;
    removeUserFromConversation(options: RemoveUserFromConversationOptions): Promise<RemoveUserFromConversation>;
    renameGroupConversation(options: RenameGroupConversationOptions): Promise<RenameGroupConversation>;
    resetConversationUniverse(options: ResetConversationUniverseOptions): Promise<ResetConversationUniverse>;
    sendGameLinkMessage(options: SendGameLinkMessageOptions): Promise<SendGameLinkMessage>;
    sendMessage(options: SendMessageOptions): Promise<SendMessage>;
    setConversationUniverse(options: SetConversationUniverseOptions): Promise<SetConversationUniverse>;
    startCloudEditConversation(options: StartCloudEditConversationOptions): Promise<StartCloudEditConversation>;
    startGroupConversation(options: StartGroupConversationOptions): Promise<StartGroupConversation>;
    startOneToOneConversation(options: StartOneToOneConversationOptions): Promise<StartOneToOneConversation>;
    updateUserTypingStatus(options: UpdateUserTypingStatusOptions): Promise<UpdateUserTypingStatus>;
}
