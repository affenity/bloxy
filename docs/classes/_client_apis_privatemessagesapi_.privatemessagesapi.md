
# Class: PrivateMessagesAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **PrivateMessagesAPI**

## Index

### Constructors

* [constructor](_client_apis_privatemessagesapi_.privatemessagesapi.md#constructor)

### Properties

* [client](_client_apis_privatemessagesapi_.privatemessagesapi.md#client)
* [options](_client_apis_privatemessagesapi_.privatemessagesapi.md#options)

### Methods

* [archiveMessages](_client_apis_privatemessagesapi_.privatemessagesapi.md#archivemessages)
* [getAnnouncements](_client_apis_privatemessagesapi_.privatemessagesapi.md#getannouncements)
* [getAnnouncementsMetaData](_client_apis_privatemessagesapi_.privatemessagesapi.md#getannouncementsmetadata)
* [getMessage](_client_apis_privatemessagesapi_.privatemessagesapi.md#getmessage)
* [getMessages](_client_apis_privatemessagesapi_.privatemessagesapi.md#getmessages)
* [getUnreadMessagesCount](_client_apis_privatemessagesapi_.privatemessagesapi.md#getunreadmessagescount)
* [markMessagesRead](_client_apis_privatemessagesapi_.privatemessagesapi.md#markmessagesread)
* [markMessagesUnread](_client_apis_privatemessagesapi_.privatemessagesapi.md#markmessagesunread)
* [request](_client_apis_privatemessagesapi_.privatemessagesapi.md#request)
* [sendMessage](_client_apis_privatemessagesapi_.privatemessagesapi.md#sendmessage)
* [unArchiveMessages](_client_apis_privatemessagesapi_.privatemessagesapi.md#unarchivemessages)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PrivateMessagesAPI**(`client`: [Client](_client_client_.client.md)): *[PrivateMessagesAPI](_client_apis_privatemessagesapi_.privatemessagesapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PrivateMessagesAPI](_client_apis_privatemessagesapi_.privatemessagesapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="archivemessages" name="archivemessages"></a>  archiveMessages

▸ **archiveMessages**(`options`: [ArchiveMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#archivemessagesoptions)): *Promise‹[ArchiveMessages](../modules/_client_apis_privatemessagesapi_.md#archivemessages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ArchiveMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#archivemessagesoptions) |

**Returns:** *Promise‹[ArchiveMessages](../modules/_client_apis_privatemessagesapi_.md#archivemessages)›*

___

### <a id="getannouncements" name="getannouncements"></a>  getAnnouncements

▸ **getAnnouncements**(): *Promise‹[GetAnnouncements](../modules/_client_apis_privatemessagesapi_.md#getannouncements)›*

**Returns:** *Promise‹[GetAnnouncements](../modules/_client_apis_privatemessagesapi_.md#getannouncements)›*

___

### <a id="getannouncementsmetadata" name="getannouncementsmetadata"></a>  getAnnouncementsMetaData

▸ **getAnnouncementsMetaData**(): *Promise‹[GetAnnouncementsMetaData](../modules/_client_apis_privatemessagesapi_.md#getannouncementsmetadata)›*

**Returns:** *Promise‹[GetAnnouncementsMetaData](../modules/_client_apis_privatemessagesapi_.md#getannouncementsmetadata)›*

___

### <a id="getmessage" name="getmessage"></a>  getMessage

▸ **getMessage**(`options`: [GetMessageOptions](../modules/_client_apis_privatemessagesapi_.md#getmessageoptions)): *Promise‹[GetMessage](../modules/_client_apis_privatemessagesapi_.md#getmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMessageOptions](../modules/_client_apis_privatemessagesapi_.md#getmessageoptions) |

**Returns:** *Promise‹[GetMessage](../modules/_client_apis_privatemessagesapi_.md#getmessage)›*

___

### <a id="getmessages" name="getmessages"></a>  getMessages

▸ **getMessages**(`options`: [GetMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#getmessagesoptions)): *Promise‹[GetMessages](../modules/_client_apis_privatemessagesapi_.md#getmessages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#getmessagesoptions) |

**Returns:** *Promise‹[GetMessages](../modules/_client_apis_privatemessagesapi_.md#getmessages)›*

___

### <a id="getunreadmessagescount" name="getunreadmessagescount"></a>  getUnreadMessagesCount

▸ **getUnreadMessagesCount**(): *Promise‹[GetUnreadMessagesCount](../modules/_client_apis_privatemessagesapi_.md#getunreadmessagescount)›*

**Returns:** *Promise‹[GetUnreadMessagesCount](../modules/_client_apis_privatemessagesapi_.md#getunreadmessagescount)›*

___

### <a id="markmessagesread" name="markmessagesread"></a>  markMessagesRead

▸ **markMessagesRead**(`options`: [MarkMessagesReadOptions](../modules/_client_apis_privatemessagesapi_.md#markmessagesreadoptions)): *Promise‹[MarkMessagesRead](../modules/_client_apis_privatemessagesapi_.md#markmessagesread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkMessagesReadOptions](../modules/_client_apis_privatemessagesapi_.md#markmessagesreadoptions) |

**Returns:** *Promise‹[MarkMessagesRead](../modules/_client_apis_privatemessagesapi_.md#markmessagesread)›*

___

### <a id="markmessagesunread" name="markmessagesunread"></a>  markMessagesUnread

▸ **markMessagesUnread**(`options`: [MarkMessagesUnreadOptions](../modules/_client_apis_privatemessagesapi_.md#markmessagesunreadoptions)): *Promise‹[MarkMessagesUnread](../modules/_client_apis_privatemessagesapi_.md#markmessagesunread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkMessagesUnreadOptions](../modules/_client_apis_privatemessagesapi_.md#markmessagesunreadoptions) |

**Returns:** *Promise‹[MarkMessagesUnread](../modules/_client_apis_privatemessagesapi_.md#markmessagesunread)›*

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

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: [SendMessageOptions](../modules/_client_apis_privatemessagesapi_.md#sendmessageoptions)): *Promise‹[SendMessage](../modules/_client_apis_privatemessagesapi_.md#sendmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendMessageOptions](../modules/_client_apis_privatemessagesapi_.md#sendmessageoptions) |

**Returns:** *Promise‹[SendMessage](../modules/_client_apis_privatemessagesapi_.md#sendmessage)›*

___

### <a id="unarchivemessages" name="unarchivemessages"></a>  unArchiveMessages

▸ **unArchiveMessages**(`options`: [UnArchiveMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#unarchivemessagesoptions)): *Promise‹[UnArchiveMessages](../modules/_client_apis_privatemessagesapi_.md#unarchivemessages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnArchiveMessagesOptions](../modules/_client_apis_privatemessagesapi_.md#unarchivemessagesoptions) |

**Returns:** *Promise‹[UnArchiveMessages](../modules/_client_apis_privatemessagesapi_.md#unarchivemessages)›*
