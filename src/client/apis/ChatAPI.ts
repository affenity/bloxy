import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type ChatPartialConversationData = {
  id: number;
  title?: string;
};
export type ChatMessageSentData = {
  content: string;
  filteredForReceivers: boolean;
  messageId: string;
  sent: string;
  messageType: "PlainText" | string;
  resultType: "Success" | string;
  statusMessage: string;
};
export type ChatMessageData = {
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
export type ChatGetChatSettings = {
  chatEnabled: boolean;
};
export type ChatGetConversationMessages = ChatMessageData[];
export type ChatGetRolloutSettings = {
  rolloutFeatures: {
    featureName: string;
    isRolloutEnabled: boolean;
  }[];
};
export type ChatGetUnreadConversationCount = {
  count: number;
};
export type ChatGetUnreadMessagesInConversations = {
  conversationId: number;
  chatMessages: ChatMessageData[];
}[];
export type ChatConversationData = {
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
export type ChatGetMetaData = {
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
export type ChatGetMultiLatestConversationMessages =
  ChatGetUnreadMessagesInConversations;
export type ChatAddUsersToConversation = {
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
export type ChatMarkMessageInConversationAsReadOptions = {
  conversationId: number;
  endMessageId: string;
};
export type ChatMarkConversationMessagesRead = {
  resultType: "Success" | string;
};
export type ChatMarkConversationsAsSeenOptions = {
  conversationsToMarkSeen: number[];
};
export type ChatMarkConversationsSeen = {
  resultType: "Success" | string;
};
export type ChatRemoveUserFromConversation = {
  conversation: ChatPartialConversationData;
  resultType: "Success" | string;
  statusMessage: string;
};
export type ChatRenameGroupConversation = {
  conversationTitle: string;
  statusMessage: string;
  resultType: "Success" | string;
  title: {
    titleForViewer: string;
    isDefaultTitle: boolean;
  };
};
export type ChatResetConversationUniverse = {
  statusMessage: string;
};
export type ChatSendGameLinkMessage = ChatMessageSentData;
export type ChatSendMessage = ChatMessageSentData;
export type ChatSetConversationUniverse = {
  statusMessage: string;
};
export type ChatStartCloudEditConversation = {
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
export type ChatStartGroupConversation = ChatStartCloudEditConversation;
export type ChatStartOneToOneConversation = ChatStartCloudEditConversation;
export type ChatUpdateUserTypingStatus = {
  statusMessage: string;
};
export type ChatGetConversationsOptions = {
  conversationIds: number[];
};
export type ChatGetConversationMessagesOptions = {
  conversationId: number;
  pageSize: number;
  exclusiveStartMessageId?: string;
};
export type ChatGetRolloutSettingsOptions = {
  featureNames: string[];
};
export type ChatGetUnreadMessagesInConversationsOptions = {
  conversationIds: number[];
  pageSize?: number;
};
export type ChatGetUserConversationsOptions = {
  pageNumber: number;
  pageSize: number;
};
export type ChatGetMultiLatestConversationMessagesOptions = {
  conversationIds: number[];
  pageSize: number;
};
export type ChatAddUsersToConversationOptions = {
  participantUserIds: number[];
  conversationId: number;
};
export type ChatMarkConversationMessagesReadOptions = {
  conversationId: number;
  endMessageId: string;
};
export type ChatMarkConversationsSeenOptions = {
  conversationsToMarkSeen: number[];
};
export type ChatRemoveUserFromConversationOptions = {
  participantUserId: number;
  conversationId: number;
};
export type ChatRenameGroupConversationOptions = {
  conversationId: number;
  newTitle: string;
};
export type ChatResetConversationUniverseOptions = {
  conversationId: number;
};
export type ChatSendMessageOptions = {
  message: string;
  conversationId: number;
  decorators: string[];
};
export type ChatSetConversationUniverseOptions = {
  conversationId: number;
  universeId: number;
};
export type ChatStartCloudEditConversationOptions = {
  placeId: number;
};
export type ChatStartGroupConversationOptions = {
  participantUserIds: number[];
  title: string;
};
export type ChatStartOneToOneConversationOptions = {
  participantUserId: number;
};
export type ChatUpdateUserTypingStatusOptions = {
  conversationId: number;
  isTyping: boolean;
};
export type ChatSendGameLinkMessageOptions = {
  universeId: number;
  conversationId: number;
  decorators: string[];
};

export class ChatAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://chat.roblox.com/"
    });
  }

  getChatSettings(): Promise<ChatGetChatSettings> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/chat-settings`
      },
      json: true
    }).then((response) => response.body);
  }

  getConversations(
    options: ChatGetConversationsOptions
  ): Promise<ChatConversationData[]> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-conversations`,
        qs: {
          conversationIds: options.conversationIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getConversationMessages(
    options: ChatGetConversationMessagesOptions
  ): Promise<ChatGetConversationMessages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-messages`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getRolloutSettings(
    options: ChatGetRolloutSettingsOptions
  ): Promise<ChatGetRolloutSettings> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-rollout-settings`,
        qs: {
          featureNames: options.featureNames.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getUnreadConversationCount(): Promise<ChatGetUnreadConversationCount> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-conversation-count`
      },
      json: true
    }).then((response) => response.body);
  }

  getUnreadMessagesInConversations(
    options: ChatGetUnreadMessagesInConversationsOptions
  ): Promise<ChatGetUnreadMessagesInConversations> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-unread-messages`,
        qs: {
          conversationIds: options.conversationIds.join(","),
          pageSize: options.pageSize
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getUserConversations(
    options: ChatGetUserConversationsOptions
  ): Promise<ChatConversationData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-user-conversations`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getMetaData(): Promise<ChatGetMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiLatestConversationMessages(
    options: ChatGetMultiLatestConversationMessagesOptions
  ): Promise<ChatGetMultiLatestConversationMessages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/multi-get-latest-messages`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  addUsersToConversation(
    options: ChatAddUsersToConversationOptions
  ): Promise<ChatAddUsersToConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/add-to-conversation`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markConversationMessagesRead(
    options: ChatMarkConversationMessagesReadOptions
  ): Promise<ChatMarkConversationMessagesRead> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/mark-as-read`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markConversationsSeen(
    options: ChatMarkConversationsSeenOptions
  ): Promise<ChatMarkConversationsSeen> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/mark-as-seen`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  removeUserFromConversation(
    options: ChatRemoveUserFromConversationOptions
  ): Promise<ChatRemoveUserFromConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/remove-from-conversation`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  renameGroupConversation(
    options: ChatRenameGroupConversationOptions
  ): Promise<ChatRenameGroupConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/rename-group-conversation`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  resetConversationUniverse(
    options: ChatResetConversationUniverseOptions
  ): Promise<ChatResetConversationUniverse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/reset-conversation-universe`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  sendGameLinkMessage(
    options: ChatSendGameLinkMessageOptions
  ): Promise<ChatSendGameLinkMessage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/send-game-link-message`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  sendMessage(options: ChatSendMessageOptions): Promise<ChatSendMessage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/send-message`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setConversationUniverse(
    options: ChatSetConversationUniverseOptions
  ): Promise<ChatSetConversationUniverse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/set-conversation-universe`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  startCloudEditConversation(
    options: ChatStartCloudEditConversationOptions
  ): Promise<ChatStartCloudEditConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/start-cloud-edit-conversation`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  startGroupConversation(
    options: ChatStartGroupConversationOptions
  ): Promise<ChatStartGroupConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/get-user-conversations`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  startOneToOneConversation(
    options: ChatStartOneToOneConversationOptions
  ): Promise<ChatStartOneToOneConversation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/start-one-to-one-conversation`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserTypingStatus(
    options: ChatUpdateUserTypingStatusOptions
  ): Promise<ChatUpdateUserTypingStatus> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v2/update-user-typing-status`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
