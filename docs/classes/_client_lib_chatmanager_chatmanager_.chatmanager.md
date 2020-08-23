
# Class: ChatManager

## Hierarchy

* **ChatManager**

## Index

### Constructors

* [constructor](_client_lib_chatmanager_chatmanager_.chatmanager.md#constructor)

### Properties

* [client](_client_lib_chatmanager_chatmanager_.chatmanager.md#client)

### Methods

* [addUsersToConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#adduserstoconversation)
* [getConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#getconversation)
* [getConversationMessages](_client_lib_chatmanager_chatmanager_.chatmanager.md#getconversationmessages)
* [getConversations](_client_lib_chatmanager_chatmanager_.chatmanager.md#getconversations)
* [getLatestMessagesInConversations](_client_lib_chatmanager_chatmanager_.chatmanager.md#getlatestmessagesinconversations)
* [getSettings](_client_lib_chatmanager_chatmanager_.chatmanager.md#getsettings)
* [getUnreadConversationsCount](_client_lib_chatmanager_chatmanager_.chatmanager.md#getunreadconversationscount)
* [getUnreadMessagesInConversations](_client_lib_chatmanager_chatmanager_.chatmanager.md#getunreadmessagesinconversations)
* [markConversationsRead](_client_lib_chatmanager_chatmanager_.chatmanager.md#markconversationsread)
* [markMessageRead](_client_lib_chatmanager_chatmanager_.chatmanager.md#markmessageread)
* [removeUserFromConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#removeuserfromconversation)
* [renameGroupConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#renamegroupconversation)
* [resetConversationUniverse](_client_lib_chatmanager_chatmanager_.chatmanager.md#resetconversationuniverse)
* [sendGameLinkMessage](_client_lib_chatmanager_chatmanager_.chatmanager.md#sendgamelinkmessage)
* [sendMessage](_client_lib_chatmanager_chatmanager_.chatmanager.md#sendmessage)
* [setConversationUniverse](_client_lib_chatmanager_chatmanager_.chatmanager.md#setconversationuniverse)
* [startCloudEditConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#startcloudeditconversation)
* [startGroupConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#startgroupconversation)
* [startOneToOneConversation](_client_lib_chatmanager_chatmanager_.chatmanager.md#startonetooneconversation)
* [updateTypingStatus](_client_lib_chatmanager_chatmanager_.chatmanager.md#updatetypingstatus)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ChatManager**(`client`: [Client](_client_client_.client.md)): *[ChatManager](_client_lib_chatmanager_chatmanager_.chatmanager.md)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[ChatManager](_client_lib_chatmanager_chatmanager_.chatmanager.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

## Methods

### <a id="adduserstoconversation" name="adduserstoconversation"></a>  addUsersToConversation

▸ **addUsersToConversation**(`conversation`: number, `users`: number[]): *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |
`users` | number[] |

**Returns:** *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

___

### <a id="getconversation" name="getconversation"></a>  getConversation

▸ **getConversation**(`conversationId`: number): *Promise‹[ChatConversation](_structures_chat_.chatconversation.md) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`conversationId` | number |

**Returns:** *Promise‹[ChatConversation](_structures_chat_.chatconversation.md) | null›*

___

### <a id="getconversationmessages" name="getconversationmessages"></a>  getConversationMessages

▸ **getConversationMessages**(`conversationId`: number, `amount`: number, `startMessageId?`: undefined | string): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`conversationId` | number | - |
`amount` | number | 100 |
`startMessageId?` | undefined &#124; string | - |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

___

### <a id="getconversations" name="getconversations"></a>  getConversations

▸ **getConversations**(`conversations`: number[]): *Promise‹[ChatConversation](_structures_chat_.chatconversation.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`conversations` | number[] |

**Returns:** *Promise‹[ChatConversation](_structures_chat_.chatconversation.md)[]›*

___

### <a id="getlatestmessagesinconversations" name="getlatestmessagesinconversations"></a>  getLatestMessagesInConversations

▸ **getLatestMessagesInConversations**(`conversations`: number[], `amount`: number): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`conversations` | number[] | - |
`amount` | number | 100 |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

___

### <a id="getsettings" name="getsettings"></a>  getSettings

▸ **getSettings**(): *Promise‹[GetChatSettings](../modules/_client_apis_chatapi_.md#getchatsettings)›*

**Returns:** *Promise‹[GetChatSettings](../modules/_client_apis_chatapi_.md#getchatsettings)›*

___

### <a id="getunreadconversationscount" name="getunreadconversationscount"></a>  getUnreadConversationsCount

▸ **getUnreadConversationsCount**(): *Promise‹number›*

**Returns:** *Promise‹number›*

___

### <a id="getunreadmessagesinconversations" name="getunreadmessagesinconversations"></a>  getUnreadMessagesInConversations

▸ **getUnreadMessagesInConversations**(`conversations`: number[], `amount`: number): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`conversations` | number[] | - |
`amount` | number | 100 |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)[]›*

___

### <a id="markconversationsread" name="markconversationsread"></a>  markConversationsRead

▸ **markConversationsRead**(`conversations`: number[]): *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversations` | number[] |

**Returns:** *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

___

### <a id="markmessageread" name="markmessageread"></a>  markMessageRead

▸ **markMessageRead**(`conversation`: number, `id`: string): *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |
`id` | string |

**Returns:** *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

___

### <a id="removeuserfromconversation" name="removeuserfromconversation"></a>  removeUserFromConversation

▸ **removeUserFromConversation**(`conversation`: number, `user`: number): *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |
`user` | number |

**Returns:** *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

___

### <a id="renamegroupconversation" name="renamegroupconversation"></a>  renameGroupConversation

▸ **renameGroupConversation**(`conversation`: number, `name`: string): *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |
`name` | string |

**Returns:** *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

___

### <a id="resetconversationuniverse" name="resetconversationuniverse"></a>  resetConversationUniverse

▸ **resetConversationUniverse**(`conversation`: number): *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |

**Returns:** *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

___

### <a id="sendgamelinkmessage" name="sendgamelinkmessage"></a>  sendGameLinkMessage

▸ **sendGameLinkMessage**(`options`: [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions)): *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions) |

**Returns:** *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)›*

___

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions)): *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions) |

**Returns:** *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)›*

___

### <a id="setconversationuniverse" name="setconversationuniverse"></a>  setConversationUniverse

▸ **setConversationUniverse**(`conversation`: number, `universe`: number): *Promise‹[SetConversationUniverse](../modules/_client_apis_chatapi_.md#setconversationuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversation` | number |
`universe` | number |

**Returns:** *Promise‹[SetConversationUniverse](../modules/_client_apis_chatapi_.md#setconversationuniverse)›*

___

### <a id="startcloudeditconversation" name="startcloudeditconversation"></a>  startCloudEditConversation

▸ **startCloudEditConversation**(`placeId`: number): *Promise‹[StartCloudEditConversation](../modules/_client_apis_chatapi_.md#startcloudeditconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`placeId` | number |

**Returns:** *Promise‹[StartCloudEditConversation](../modules/_client_apis_chatapi_.md#startcloudeditconversation)›*

___

### <a id="startgroupconversation" name="startgroupconversation"></a>  startGroupConversation

▸ **startGroupConversation**(`title`: string, `users`: number[]): *Promise‹[StartGroupConversation](../modules/_client_apis_chatapi_.md#startgroupconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |
`users` | number[] |

**Returns:** *Promise‹[StartGroupConversation](../modules/_client_apis_chatapi_.md#startgroupconversation)›*

___

### <a id="startonetooneconversation" name="startonetooneconversation"></a>  startOneToOneConversation

▸ **startOneToOneConversation**(`userId`: number): *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

___

### <a id="updatetypingstatus" name="updatetypingstatus"></a>  updateTypingStatus

▸ **updateTypingStatus**(`conversation`: number, `isTyping`: boolean): *Promise‹[UpdateUserTypingStatus](../modules/_client_apis_chatapi_.md#updateusertypingstatus)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`conversation` | number | - |
`isTyping` | boolean | true |

**Returns:** *Promise‹[UpdateUserTypingStatus](../modules/_client_apis_chatapi_.md#updateusertypingstatus)›*
