
# Class: ChatAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **ChatAPI**

## Index

### Constructors

* [constructor](_client_apis_chatapi_.chatapi.md#constructor)

### Properties

* [client](_client_apis_chatapi_.chatapi.md#client)
* [options](_client_apis_chatapi_.chatapi.md#options)

### Methods

* [addUsersToConversation](_client_apis_chatapi_.chatapi.md#adduserstoconversation)
* [getChatSettings](_client_apis_chatapi_.chatapi.md#getchatsettings)
* [getConversationMessages](_client_apis_chatapi_.chatapi.md#getconversationmessages)
* [getConversations](_client_apis_chatapi_.chatapi.md#getconversations)
* [getMetaData](_client_apis_chatapi_.chatapi.md#getmetadata)
* [getMultiLatestConversationMessages](_client_apis_chatapi_.chatapi.md#getmultilatestconversationmessages)
* [getRolloutSettings](_client_apis_chatapi_.chatapi.md#getrolloutsettings)
* [getUnreadConversationCount](_client_apis_chatapi_.chatapi.md#getunreadconversationcount)
* [getUnreadMessagesInConversations](_client_apis_chatapi_.chatapi.md#getunreadmessagesinconversations)
* [getUserConversations](_client_apis_chatapi_.chatapi.md#getuserconversations)
* [markConversationMessagesRead](_client_apis_chatapi_.chatapi.md#markconversationmessagesread)
* [markConversationsSeen](_client_apis_chatapi_.chatapi.md#markconversationsseen)
* [removeUserFromConversation](_client_apis_chatapi_.chatapi.md#removeuserfromconversation)
* [renameGroupConversation](_client_apis_chatapi_.chatapi.md#renamegroupconversation)
* [request](_client_apis_chatapi_.chatapi.md#request)
* [resetConversationUniverse](_client_apis_chatapi_.chatapi.md#resetconversationuniverse)
* [sendGameLinkMessage](_client_apis_chatapi_.chatapi.md#sendgamelinkmessage)
* [sendMessage](_client_apis_chatapi_.chatapi.md#sendmessage)
* [setConversationUniverse](_client_apis_chatapi_.chatapi.md#setconversationuniverse)
* [startCloudEditConversation](_client_apis_chatapi_.chatapi.md#startcloudeditconversation)
* [startGroupConversation](_client_apis_chatapi_.chatapi.md#startgroupconversation)
* [startOneToOneConversation](_client_apis_chatapi_.chatapi.md#startonetooneconversation)
* [updateUserTypingStatus](_client_apis_chatapi_.chatapi.md#updateusertypingstatus)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ChatAPI**(`client`: [Client](_client_client_.client.md)): *[ChatAPI](_client_apis_chatapi_.chatapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[ChatAPI](_client_apis_chatapi_.chatapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="adduserstoconversation" name="adduserstoconversation"></a>  addUsersToConversation

▸ **addUsersToConversation**(`options`: [AddUsersToConversationOptions](../modules/_client_apis_chatapi_.md#adduserstoconversationoptions)): *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AddUsersToConversationOptions](../modules/_client_apis_chatapi_.md#adduserstoconversationoptions) |

**Returns:** *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

___

### <a id="getchatsettings" name="getchatsettings"></a>  getChatSettings

▸ **getChatSettings**(): *Promise‹[GetChatSettings](../modules/_client_apis_chatapi_.md#getchatsettings)›*

**Returns:** *Promise‹[GetChatSettings](../modules/_client_apis_chatapi_.md#getchatsettings)›*

___

### <a id="getconversationmessages" name="getconversationmessages"></a>  getConversationMessages

▸ **getConversationMessages**(`options`: [GetConversationMessagesOptions](../modules/_client_apis_chatapi_.md#getconversationmessagesoptions)): *Promise‹[GetConversationMessages](../modules/_client_apis_chatapi_.md#getconversationmessages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetConversationMessagesOptions](../modules/_client_apis_chatapi_.md#getconversationmessagesoptions) |

**Returns:** *Promise‹[GetConversationMessages](../modules/_client_apis_chatapi_.md#getconversationmessages)›*

___

### <a id="getconversations" name="getconversations"></a>  getConversations

▸ **getConversations**(`options`: [GetConversationsOptions](../modules/_client_apis_chatapi_.md#getconversationsoptions)): *Promise‹[GetConversations](../modules/_client_apis_chatapi_.md#getconversations)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetConversationsOptions](../modules/_client_apis_chatapi_.md#getconversationsoptions) |

**Returns:** *Promise‹[GetConversations](../modules/_client_apis_chatapi_.md#getconversations)›*

___

### <a id="getmetadata" name="getmetadata"></a>  getMetaData

▸ **getMetaData**(): *Promise‹[GetMetaData](../modules/_client_apis_chatapi_.md#getmetadata)›*

**Returns:** *Promise‹[GetMetaData](../modules/_client_apis_chatapi_.md#getmetadata)›*

___

### <a id="getmultilatestconversationmessages" name="getmultilatestconversationmessages"></a>  getMultiLatestConversationMessages

▸ **getMultiLatestConversationMessages**(`options`: [GetMultiLatestConversationMessagesOptions](../modules/_client_apis_chatapi_.md#getmultilatestconversationmessagesoptions)): *Promise‹[GetMultiLatestConversationMessages](../modules/_client_apis_chatapi_.md#getmultilatestconversationmessages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMultiLatestConversationMessagesOptions](../modules/_client_apis_chatapi_.md#getmultilatestconversationmessagesoptions) |

**Returns:** *Promise‹[GetMultiLatestConversationMessages](../modules/_client_apis_chatapi_.md#getmultilatestconversationmessages)›*

___

### <a id="getrolloutsettings" name="getrolloutsettings"></a>  getRolloutSettings

▸ **getRolloutSettings**(`options`: [GetRolloutSettingsOptions](../modules/_client_apis_chatapi_.md#getrolloutsettingsoptions)): *Promise‹[GetRolloutSettings](../modules/_client_apis_chatapi_.md#getrolloutsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRolloutSettingsOptions](../modules/_client_apis_chatapi_.md#getrolloutsettingsoptions) |

**Returns:** *Promise‹[GetRolloutSettings](../modules/_client_apis_chatapi_.md#getrolloutsettings)›*

___

### <a id="getunreadconversationcount" name="getunreadconversationcount"></a>  getUnreadConversationCount

▸ **getUnreadConversationCount**(): *Promise‹[GetUnreadConversationCount](../modules/_client_apis_chatapi_.md#getunreadconversationcount)›*

**Returns:** *Promise‹[GetUnreadConversationCount](../modules/_client_apis_chatapi_.md#getunreadconversationcount)›*

___

### <a id="getunreadmessagesinconversations" name="getunreadmessagesinconversations"></a>  getUnreadMessagesInConversations

▸ **getUnreadMessagesInConversations**(`options`: [GetUnreadMessagesInConversationsOptions](../modules/_client_apis_chatapi_.md#getunreadmessagesinconversationsoptions)): *Promise‹[GetUnreadMessagesInConversations](../modules/_client_apis_chatapi_.md#getunreadmessagesinconversations)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUnreadMessagesInConversationsOptions](../modules/_client_apis_chatapi_.md#getunreadmessagesinconversationsoptions) |

**Returns:** *Promise‹[GetUnreadMessagesInConversations](../modules/_client_apis_chatapi_.md#getunreadmessagesinconversations)›*

___

### <a id="getuserconversations" name="getuserconversations"></a>  getUserConversations

▸ **getUserConversations**(`options`: [GetUserConversationsOptions](../modules/_client_apis_chatapi_.md#getuserconversationsoptions)): *Promise‹[GetUserConversations](../modules/_client_apis_chatapi_.md#getuserconversations)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserConversationsOptions](../modules/_client_apis_chatapi_.md#getuserconversationsoptions) |

**Returns:** *Promise‹[GetUserConversations](../modules/_client_apis_chatapi_.md#getuserconversations)›*

___

### <a id="markconversationmessagesread" name="markconversationmessagesread"></a>  markConversationMessagesRead

▸ **markConversationMessagesRead**(`options`: [MarkMessageInConversationAsReadOptions](../modules/_client_apis_chatapi_.md#markmessageinconversationasreadoptions)): *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkMessageInConversationAsReadOptions](../modules/_client_apis_chatapi_.md#markmessageinconversationasreadoptions) |

**Returns:** *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

___

### <a id="markconversationsseen" name="markconversationsseen"></a>  markConversationsSeen

▸ **markConversationsSeen**(`options`: [MarkConversationsAsSeenOptions](../modules/_client_apis_chatapi_.md#markconversationsasseenoptions)): *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkConversationsAsSeenOptions](../modules/_client_apis_chatapi_.md#markconversationsasseenoptions) |

**Returns:** *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

___

### <a id="removeuserfromconversation" name="removeuserfromconversation"></a>  removeUserFromConversation

▸ **removeUserFromConversation**(`options`: [RemoveUserFromConversationOptions](../modules/_client_apis_chatapi_.md#removeuserfromconversationoptions)): *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RemoveUserFromConversationOptions](../modules/_client_apis_chatapi_.md#removeuserfromconversationoptions) |

**Returns:** *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

___

### <a id="renamegroupconversation" name="renamegroupconversation"></a>  renameGroupConversation

▸ **renameGroupConversation**(`options`: [RenameGroupConversationOptions](../modules/_client_apis_chatapi_.md#renamegroupconversationoptions)): *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RenameGroupConversationOptions](../modules/_client_apis_chatapi_.md#renamegroupconversationoptions) |

**Returns:** *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

___

### <a id="resetconversationuniverse" name="resetconversationuniverse"></a>  resetConversationUniverse

▸ **resetConversationUniverse**(`options`: [ResetConversationUniverseOptions](../modules/_client_apis_chatapi_.md#resetconversationuniverseoptions)): *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ResetConversationUniverseOptions](../modules/_client_apis_chatapi_.md#resetconversationuniverseoptions) |

**Returns:** *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

___

### <a id="sendgamelinkmessage" name="sendgamelinkmessage"></a>  sendGameLinkMessage

▸ **sendGameLinkMessage**(`options`: [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions)): *Promise‹[SendGameLinkMessage](../modules/_client_apis_chatapi_.md#sendgamelinkmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions) |

**Returns:** *Promise‹[SendGameLinkMessage](../modules/_client_apis_chatapi_.md#sendgamelinkmessage)›*

___

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions)): *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions) |

**Returns:** *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

___

### <a id="setconversationuniverse" name="setconversationuniverse"></a>  setConversationUniverse

▸ **setConversationUniverse**(`options`: [SetConversationUniverseOptions](../modules/_client_apis_chatapi_.md#setconversationuniverseoptions)): *Promise‹[SetConversationUniverse](../modules/_client_apis_chatapi_.md#setconversationuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetConversationUniverseOptions](../modules/_client_apis_chatapi_.md#setconversationuniverseoptions) |

**Returns:** *Promise‹[SetConversationUniverse](../modules/_client_apis_chatapi_.md#setconversationuniverse)›*

___

### <a id="startcloudeditconversation" name="startcloudeditconversation"></a>  startCloudEditConversation

▸ **startCloudEditConversation**(`options`: [StartCloudEditConversationOptions](../modules/_client_apis_chatapi_.md#startcloudeditconversationoptions)): *Promise‹[StartCloudEditConversation](../modules/_client_apis_chatapi_.md#startcloudeditconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StartCloudEditConversationOptions](../modules/_client_apis_chatapi_.md#startcloudeditconversationoptions) |

**Returns:** *Promise‹[StartCloudEditConversation](../modules/_client_apis_chatapi_.md#startcloudeditconversation)›*

___

### <a id="startgroupconversation" name="startgroupconversation"></a>  startGroupConversation

▸ **startGroupConversation**(`options`: [StartGroupConversationOptions](../modules/_client_apis_chatapi_.md#startgroupconversationoptions)): *Promise‹[StartGroupConversation](../modules/_client_apis_chatapi_.md#startgroupconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StartGroupConversationOptions](../modules/_client_apis_chatapi_.md#startgroupconversationoptions) |

**Returns:** *Promise‹[StartGroupConversation](../modules/_client_apis_chatapi_.md#startgroupconversation)›*

___

### <a id="startonetooneconversation" name="startonetooneconversation"></a>  startOneToOneConversation

▸ **startOneToOneConversation**(`options`: [StartOneToOneConversationOptions](../modules/_client_apis_chatapi_.md#startonetooneconversationoptions)): *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StartOneToOneConversationOptions](../modules/_client_apis_chatapi_.md#startonetooneconversationoptions) |

**Returns:** *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

___

### <a id="updateusertypingstatus" name="updateusertypingstatus"></a>  updateUserTypingStatus

▸ **updateUserTypingStatus**(`options`: [UpdateUserTypingStatusOptions](../modules/_client_apis_chatapi_.md#updateusertypingstatusoptions)): *Promise‹[UpdateUserTypingStatus](../modules/_client_apis_chatapi_.md#updateusertypingstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateUserTypingStatusOptions](../modules/_client_apis_chatapi_.md#updateusertypingstatusoptions) |

**Returns:** *Promise‹[UpdateUserTypingStatus](../modules/_client_apis_chatapi_.md#updateusertypingstatus)›*
