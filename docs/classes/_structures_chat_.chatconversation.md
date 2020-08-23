
# Class: ChatConversation

## Hierarchy

* **ChatConversation**

## Index

### Constructors

* [constructor](_structures_chat_.chatconversation.md#constructor)

### Properties

* [client](_structures_chat_.chatconversation.md#client)
* [conversationTitle](_structures_chat_.chatconversation.md#conversationtitle)
* [hasUnreadMessages](_structures_chat_.chatconversation.md#hasunreadmessages)
* [id](_structures_chat_.chatconversation.md#id)
* [initiator](_structures_chat_.chatconversation.md#initiator)
* [lastUpdated](_structures_chat_.chatconversation.md#lastupdated)
* [members](_structures_chat_.chatconversation.md#members)
* [title](_structures_chat_.chatconversation.md#title)
* [type](_structures_chat_.chatconversation.md#type)
* [universe](_structures_chat_.chatconversation.md#universe)

### Methods

* [addUsers](_structures_chat_.chatconversation.md#addusers)
* [getLatestMessages](_structures_chat_.chatconversation.md#getlatestmessages)
* [getMessages](_structures_chat_.chatconversation.md#getmessages)
* [getUnreadMessages](_structures_chat_.chatconversation.md#getunreadmessages)
* [markMessageRead](_structures_chat_.chatconversation.md#markmessageread)
* [markRead](_structures_chat_.chatconversation.md#markread)
* [removeUser](_structures_chat_.chatconversation.md#removeuser)
* [rename](_structures_chat_.chatconversation.md#rename)
* [resetUniverse](_structures_chat_.chatconversation.md#resetuniverse)
* [sendGameLinkMessage](_structures_chat_.chatconversation.md#sendgamelinkmessage)
* [sendMessage](_structures_chat_.chatconversation.md#sendmessage)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ChatConversation**(`data`: [ChatConversationOptions](../interfaces/_structures_chat_.chatconversationoptions.md), `client`: [Client](_client_client_.client.md)): *[ChatConversation](_structures_chat_.chatconversation.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ChatConversationOptions](../interfaces/_structures_chat_.chatconversationoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[ChatConversation](_structures_chat_.chatconversation.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="conversationtitle" name="conversationtitle"></a>  conversationTitle

• **conversationTitle**: *object*

#### Type declaration:

* **forViewer**: *string*

* **isDefaultTitle**: *boolean*

___

### <a id="hasunreadmessages" name="hasunreadmessages"></a>  hasUnreadMessages

• **hasUnreadMessages**: *boolean*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="initiator" name="initiator"></a>  initiator

• **initiator**: *[PartialUser](_structures_user_.partialuser.md)*

___

### <a id="lastupdated" name="lastupdated"></a>  lastUpdated

• **lastUpdated**: *Date*

___

### <a id="members" name="members"></a>  members

• **members**: *[PartialUser](_structures_user_.partialuser.md)[]*

___

### <a id="title" name="title"></a>  title

• **title**: *string*

___

### <a id="type" name="type"></a>  type

• **type**: *string*

___

### <a id="universe" name="universe"></a>  universe

• **universe**: *[PartialGameUniverse](_structures_game_.partialgameuniverse.md) | null*

## Methods

### <a id="addusers" name="addusers"></a>  addUsers

▸ **addUsers**(`users`: number[]): *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`users` | number[] |

**Returns:** *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

___

### <a id="getlatestmessages" name="getlatestmessages"></a>  getLatestMessages

▸ **getLatestMessages**(`amount`: number): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`amount` | number | 100 |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

___

### <a id="getmessages" name="getmessages"></a>  getMessages

▸ **getMessages**(`amount`: number, `startId?`: undefined | string): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`amount` | number | 100 |
`startId?` | undefined &#124; string | - |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

___

### <a id="getunreadmessages" name="getunreadmessages"></a>  getUnreadMessages

▸ **getUnreadMessages**(`amount`: number): *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`amount` | number | 100 |

**Returns:** *Promise‹[ChatMessage](_structures_chat_.chatmessage.md)‹›[]›*

___

### <a id="markmessageread" name="markmessageread"></a>  markMessageRead

▸ **markMessageRead**(`id`: string): *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *Promise‹[MarkMessageInConversationAsRead](../modules/_client_apis_chatapi_.md#markmessageinconversationasread)›*

___

### <a id="markread" name="markread"></a>  markRead

▸ **markRead**(): *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

**Returns:** *Promise‹[MarkConversationsAsSeen](../modules/_client_apis_chatapi_.md#markconversationsasseen)›*

___

### <a id="removeuser" name="removeuser"></a>  removeUser

▸ **removeUser**(`userId`: number): *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

___

### <a id="rename" name="rename"></a>  rename

▸ **rename**(`name`: string): *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹[RenameGroupConversation](../modules/_client_apis_chatapi_.md#renamegroupconversation)›*

___

### <a id="resetuniverse" name="resetuniverse"></a>  resetUniverse

▸ **resetUniverse**(): *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

**Returns:** *Promise‹[ResetConversationUniverse](../modules/_client_apis_chatapi_.md#resetconversationuniverse)›*

___

### <a id="sendgamelinkmessage" name="sendgamelinkmessage"></a>  sendGameLinkMessage

▸ **sendGameLinkMessage**(`options`: [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions)): *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)‹››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendGameLinkMessageOptions](../modules/_client_apis_chatapi_.md#sendgamelinkmessageoptions) |

**Returns:** *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)‹››*

___

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions)): *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)‹››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions) |

**Returns:** *Promise‹[ChatMessageSent](_structures_chat_.chatmessagesent.md)‹››*
