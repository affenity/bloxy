
# Module: "client/apis/ChatAPI"

## Index

### Classes

* [ChatAPI](../classes/_client_apis_chatapi_.chatapi.md)

### Type aliases

* [AddUsersToConversation](_client_apis_chatapi_.md#adduserstoconversation)
* [AddUsersToConversationOptions](_client_apis_chatapi_.md#adduserstoconversationoptions)
* [GetChatSettings](_client_apis_chatapi_.md#getchatsettings)
* [GetConversationMessages](_client_apis_chatapi_.md#getconversationmessages)
* [GetConversationMessagesOptions](_client_apis_chatapi_.md#getconversationmessagesoptions)
* [GetConversations](_client_apis_chatapi_.md#getconversations)
* [GetConversationsOptions](_client_apis_chatapi_.md#getconversationsoptions)
* [GetMetaData](_client_apis_chatapi_.md#getmetadata)
* [GetMultiLatestConversationMessages](_client_apis_chatapi_.md#getmultilatestconversationmessages)
* [GetMultiLatestConversationMessagesOptions](_client_apis_chatapi_.md#getmultilatestconversationmessagesoptions)
* [GetRolloutSettings](_client_apis_chatapi_.md#getrolloutsettings)
* [GetRolloutSettingsOptions](_client_apis_chatapi_.md#getrolloutsettingsoptions)
* [GetUnreadConversationCount](_client_apis_chatapi_.md#getunreadconversationcount)
* [GetUnreadMessagesInConversations](_client_apis_chatapi_.md#getunreadmessagesinconversations)
* [GetUnreadMessagesInConversationsOptions](_client_apis_chatapi_.md#getunreadmessagesinconversationsoptions)
* [GetUserConversations](_client_apis_chatapi_.md#getuserconversations)
* [GetUserConversationsOptions](_client_apis_chatapi_.md#getuserconversationsoptions)
* [MarkConversationsAsSeen](_client_apis_chatapi_.md#markconversationsasseen)
* [MarkConversationsAsSeenOptions](_client_apis_chatapi_.md#markconversationsasseenoptions)
* [MarkMessageInConversationAsRead](_client_apis_chatapi_.md#markmessageinconversationasread)
* [MarkMessageInConversationAsReadOptions](_client_apis_chatapi_.md#markmessageinconversationasreadoptions)
* [RemoveUserFromConversation](_client_apis_chatapi_.md#removeuserfromconversation)
* [RemoveUserFromConversationOptions](_client_apis_chatapi_.md#removeuserfromconversationoptions)
* [RenameGroupConversation](_client_apis_chatapi_.md#renamegroupconversation)
* [RenameGroupConversationOptions](_client_apis_chatapi_.md#renamegroupconversationoptions)
* [ResetConversationUniverse](_client_apis_chatapi_.md#resetconversationuniverse)
* [ResetConversationUniverseOptions](_client_apis_chatapi_.md#resetconversationuniverseoptions)
* [SendGameLinkMessage](_client_apis_chatapi_.md#sendgamelinkmessage)
* [SendGameLinkMessageOptions](_client_apis_chatapi_.md#sendgamelinkmessageoptions)
* [SendMessage](_client_apis_chatapi_.md#sendmessage)
* [SendMessageOptions](_client_apis_chatapi_.md#sendmessageoptions)
* [SetConversationUniverse](_client_apis_chatapi_.md#setconversationuniverse)
* [SetConversationUniverseOptions](_client_apis_chatapi_.md#setconversationuniverseoptions)
* [StartCloudEditConversation](_client_apis_chatapi_.md#startcloudeditconversation)
* [StartCloudEditConversationOptions](_client_apis_chatapi_.md#startcloudeditconversationoptions)
* [StartGroupConversation](_client_apis_chatapi_.md#startgroupconversation)
* [StartGroupConversationOptions](_client_apis_chatapi_.md#startgroupconversationoptions)
* [StartOneToOneConversation](_client_apis_chatapi_.md#startonetooneconversation)
* [StartOneToOneConversationOptions](_client_apis_chatapi_.md#startonetooneconversationoptions)
* [UpdateUserTypingStatus](_client_apis_chatapi_.md#updateusertypingstatus)
* [UpdateUserTypingStatusOptions](_client_apis_chatapi_.md#updateusertypingstatusoptions)

## Type aliases

### <a id="adduserstoconversation" name="adduserstoconversation"></a>  AddUsersToConversation

Ƭ **AddUsersToConversation**: *object*

#### Type declaration:

* **conversationId**: *number*

* **rejectedParticipants**: *object[]*

* **resultType**: *"Success" | string*

* **statusMessage**: *string*

___

### <a id="adduserstoconversationoptions" name="adduserstoconversationoptions"></a>  AddUsersToConversationOptions

Ƭ **AddUsersToConversationOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **participantUserIds**: *number[]*

___

### <a id="getchatsettings" name="getchatsettings"></a>  GetChatSettings

Ƭ **GetChatSettings**: *object*

#### Type declaration:

* **chatEnabled**: *boolean*

___

### <a id="getconversationmessages" name="getconversationmessages"></a>  GetConversationMessages

Ƭ **GetConversationMessages**: *[ChatMessageOptions](../interfaces/_structures_chat_.chatmessageoptions.md)[]*

___

### <a id="getconversationmessagesoptions" name="getconversationmessagesoptions"></a>  GetConversationMessagesOptions

Ƭ **GetConversationMessagesOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **exclusiveStartMessageId**? : *undefined | string*

* **pageSize**: *number*

___

### <a id="getconversations" name="getconversations"></a>  GetConversations

Ƭ **GetConversations**: *[ChatConversationOptions](../interfaces/_structures_chat_.chatconversationoptions.md)[]*

___

### <a id="getconversationsoptions" name="getconversationsoptions"></a>  GetConversationsOptions

Ƭ **GetConversationsOptions**: *object*

#### Type declaration:

* **conversationIds**: *number[]*

___

### <a id="getmetadata" name="getmetadata"></a>  GetMetaData

Ƭ **GetMetaData**: *object*

#### Type declaration:

* **cachedDataFromLocalStorageExpirationMS**: *number*

* **chatDataFromLocalStorageExpirationSeconds**: *number*

* **isAliasChatForClientSideEnabled**: *boolean*

* **isChatDataFromLocalStorageEnabled**: *boolean*

* **isChatEnabledByPrivacySetting**: *string*

* **isInvalidMessageTypeFallbackEnabled**: *boolean*

* **isPlayTogetherForGameCardsEnabled**: *boolean*

* **isRespectingMessageTypeEnabled**: *boolean*

* **isRoactChatEnabled**: *boolean*

* **isUsingCacheToLoadFriendsInfoEnabled**: *boolean*

* **isVoiceChatForClientSideEnabled**: *boolean*

* **languageForPrivacySettingUnavailable**: *string*

* **maxConversationTitleLength**: *number*

* **numberOfMembersForPartyChrome**: *number*

* **partyChromeDisplayTimeStampInterval**: *number*

* **relativeValueToRecordUiPerformance**: *number*

* **senderTypesForUnknownMessageTypeError**: *string[]*

* **shouldRespectConversationHasUnreadMessageToMarkAsRead**: *boolean*

* **signalRDisconnectionResponseInMilliseconds**: *number*

* **typingInChatForReceiverExpirationMs**: *number*

* **typingInChatFromSenderThrottleMs**: *number*

* **validMessageTypesWhiteList**: *string[]*

___

### <a id="getmultilatestconversationmessages" name="getmultilatestconversationmessages"></a>  GetMultiLatestConversationMessages

Ƭ **GetMultiLatestConversationMessages**: *[GetUnreadMessagesInConversations](_client_apis_chatapi_.md#getunreadmessagesinconversations)*

___

### <a id="getmultilatestconversationmessagesoptions" name="getmultilatestconversationmessagesoptions"></a>  GetMultiLatestConversationMessagesOptions

Ƭ **GetMultiLatestConversationMessagesOptions**: *object*

#### Type declaration:

* **conversationIds**: *number[]*

* **pageSize**: *number*

___

### <a id="getrolloutsettings" name="getrolloutsettings"></a>  GetRolloutSettings

Ƭ **GetRolloutSettings**: *object*

#### Type declaration:

* **rolloutFeatures**: *object[]*

___

### <a id="getrolloutsettingsoptions" name="getrolloutsettingsoptions"></a>  GetRolloutSettingsOptions

Ƭ **GetRolloutSettingsOptions**: *object*

#### Type declaration:

* **featureNames**: *string[]*

___

### <a id="getunreadconversationcount" name="getunreadconversationcount"></a>  GetUnreadConversationCount

Ƭ **GetUnreadConversationCount**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="getunreadmessagesinconversations" name="getunreadmessagesinconversations"></a>  GetUnreadMessagesInConversations

Ƭ **GetUnreadMessagesInConversations**: *object[]*

___

### <a id="getunreadmessagesinconversationsoptions" name="getunreadmessagesinconversationsoptions"></a>  GetUnreadMessagesInConversationsOptions

Ƭ **GetUnreadMessagesInConversationsOptions**: *object*

#### Type declaration:

* **conversationIds**: *number[]*

* **pageSize**? : *undefined | number*

___

### <a id="getuserconversations" name="getuserconversations"></a>  GetUserConversations

Ƭ **GetUserConversations**: *[ChatConversationOptions](../interfaces/_structures_chat_.chatconversationoptions.md)[]*

___

### <a id="getuserconversationsoptions" name="getuserconversationsoptions"></a>  GetUserConversationsOptions

Ƭ **GetUserConversationsOptions**: *object*

#### Type declaration:

* **pageNumber**: *number*

* **pageSize**: *number*

___

### <a id="markconversationsasseen" name="markconversationsasseen"></a>  MarkConversationsAsSeen

Ƭ **MarkConversationsAsSeen**: *object*

#### Type declaration:

* **resultType**: *"Success" | string*

___

### <a id="markconversationsasseenoptions" name="markconversationsasseenoptions"></a>  MarkConversationsAsSeenOptions

Ƭ **MarkConversationsAsSeenOptions**: *object*

#### Type declaration:

* **conversationsToMarkSeen**: *number[]*

___

### <a id="markmessageinconversationasread" name="markmessageinconversationasread"></a>  MarkMessageInConversationAsRead

Ƭ **MarkMessageInConversationAsRead**: *object*

#### Type declaration:

* **resultType**: *"Success" | string*

___

### <a id="markmessageinconversationasreadoptions" name="markmessageinconversationasreadoptions"></a>  MarkMessageInConversationAsReadOptions

Ƭ **MarkMessageInConversationAsReadOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **endMessageId**: *string*

___

### <a id="removeuserfromconversation" name="removeuserfromconversation"></a>  RemoveUserFromConversation

Ƭ **RemoveUserFromConversation**: *object*

#### Type declaration:

* **conversation**: *[PartialChatConversationOptions](../interfaces/_structures_chat_.partialchatconversationoptions.md)*

* **resultType**: *"Success" | string*

* **statusMessage**: *string*

___

### <a id="removeuserfromconversationoptions" name="removeuserfromconversationoptions"></a>  RemoveUserFromConversationOptions

Ƭ **RemoveUserFromConversationOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **participantUserId**: *number*

___

### <a id="renamegroupconversation" name="renamegroupconversation"></a>  RenameGroupConversation

Ƭ **RenameGroupConversation**: *object*

#### Type declaration:

* **conversationTitle**: *string*

* **resultType**: *"Success" | string*

* **statusMessage**: *string*

* **title**(): *object*

  * **isDefaultTitle**: *boolean*

  * **titleForViewer**: *string*

___

### <a id="renamegroupconversationoptions" name="renamegroupconversationoptions"></a>  RenameGroupConversationOptions

Ƭ **RenameGroupConversationOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **newTitle**: *string*

___

### <a id="resetconversationuniverse" name="resetconversationuniverse"></a>  ResetConversationUniverse

Ƭ **ResetConversationUniverse**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="resetconversationuniverseoptions" name="resetconversationuniverseoptions"></a>  ResetConversationUniverseOptions

Ƭ **ResetConversationUniverseOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

___

### <a id="sendgamelinkmessage" name="sendgamelinkmessage"></a>  SendGameLinkMessage

Ƭ **SendGameLinkMessage**: *[ChatMessageSentOptions](../interfaces/_structures_chat_.chatmessagesentoptions.md)*

___

### <a id="sendgamelinkmessageoptions" name="sendgamelinkmessageoptions"></a>  SendGameLinkMessageOptions

Ƭ **SendGameLinkMessageOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **decorators**: *string[]*

* **universeId**: *number*

___

### <a id="sendmessage" name="sendmessage"></a>  SendMessage

Ƭ **SendMessage**: *[ChatMessageSentOptions](../interfaces/_structures_chat_.chatmessagesentoptions.md)*

___

### <a id="sendmessageoptions" name="sendmessageoptions"></a>  SendMessageOptions

Ƭ **SendMessageOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **decorators**: *string[]*

* **message**: *string*

___

### <a id="setconversationuniverse" name="setconversationuniverse"></a>  SetConversationUniverse

Ƭ **SetConversationUniverse**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="setconversationuniverseoptions" name="setconversationuniverseoptions"></a>  SetConversationUniverseOptions

Ƭ **SetConversationUniverseOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **universeId**: *number*

___

### <a id="startcloudeditconversation" name="startcloudeditconversation"></a>  StartCloudEditConversation

Ƭ **StartCloudEditConversation**: *object*

#### Type declaration:

* **conversation**: *[ChatConversationOptions](../interfaces/_structures_chat_.chatconversationoptions.md)*

* **rejectedParticipants**: *object[]*

* **resultType**: *"Success" | string*

* **statusMessage**: *string*

___

### <a id="startcloudeditconversationoptions" name="startcloudeditconversationoptions"></a>  StartCloudEditConversationOptions

Ƭ **StartCloudEditConversationOptions**: *object*

#### Type declaration:

* **placeId**: *number*

___

### <a id="startgroupconversation" name="startgroupconversation"></a>  StartGroupConversation

Ƭ **StartGroupConversation**: *[StartCloudEditConversation](_client_apis_chatapi_.md#startcloudeditconversation)*

___

### <a id="startgroupconversationoptions" name="startgroupconversationoptions"></a>  StartGroupConversationOptions

Ƭ **StartGroupConversationOptions**: *object*

#### Type declaration:

* **participantUserIds**: *number[]*

* **title**: *string*

___

### <a id="startonetooneconversation" name="startonetooneconversation"></a>  StartOneToOneConversation

Ƭ **StartOneToOneConversation**: *[StartCloudEditConversation](_client_apis_chatapi_.md#startcloudeditconversation)*

___

### <a id="startonetooneconversationoptions" name="startonetooneconversationoptions"></a>  StartOneToOneConversationOptions

Ƭ **StartOneToOneConversationOptions**: *object*

#### Type declaration:

* **participantUserId**: *number*

___

### <a id="updateusertypingstatus" name="updateusertypingstatus"></a>  UpdateUserTypingStatus

Ƭ **UpdateUserTypingStatus**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="updateusertypingstatusoptions" name="updateusertypingstatusoptions"></a>  UpdateUserTypingStatusOptions

Ƭ **UpdateUserTypingStatusOptions**: *object*

#### Type declaration:

* **conversationId**: *number*

* **isTyping**: *boolean*
