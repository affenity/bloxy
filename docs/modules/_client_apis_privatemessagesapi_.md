
# Module: "client/apis/PrivateMessagesAPI"

## Index

### Classes

* [PrivateMessagesAPI](../classes/_client_apis_privatemessagesapi_.privatemessagesapi.md)

### Type aliases

* [ArchiveMessages](_client_apis_privatemessagesapi_.md#archivemessages)
* [ArchiveMessagesOptions](_client_apis_privatemessagesapi_.md#archivemessagesoptions)
* [GetAnnouncements](_client_apis_privatemessagesapi_.md#getannouncements)
* [GetAnnouncementsMetaData](_client_apis_privatemessagesapi_.md#getannouncementsmetadata)
* [GetMessage](_client_apis_privatemessagesapi_.md#getmessage)
* [GetMessageOptions](_client_apis_privatemessagesapi_.md#getmessageoptions)
* [GetMessages](_client_apis_privatemessagesapi_.md#getmessages)
* [GetMessagesOptions](_client_apis_privatemessagesapi_.md#getmessagesoptions)
* [GetUnreadMessagesCount](_client_apis_privatemessagesapi_.md#getunreadmessagescount)
* [MarkMessagesRead](_client_apis_privatemessagesapi_.md#markmessagesread)
* [MarkMessagesReadOptions](_client_apis_privatemessagesapi_.md#markmessagesreadoptions)
* [MarkMessagesUnread](_client_apis_privatemessagesapi_.md#markmessagesunread)
* [MarkMessagesUnreadOptions](_client_apis_privatemessagesapi_.md#markmessagesunreadoptions)
* [SendMessage](_client_apis_privatemessagesapi_.md#sendmessage)
* [SendMessageOptions](_client_apis_privatemessagesapi_.md#sendmessageoptions)
* [UnArchiveMessages](_client_apis_privatemessagesapi_.md#unarchivemessages)
* [UnArchiveMessagesOptions](_client_apis_privatemessagesapi_.md#unarchivemessagesoptions)

## Type aliases

### <a id="archivemessages" name="archivemessages"></a>  ArchiveMessages

Ƭ **ArchiveMessages**: *object*

#### Type declaration:

* **failedMessages**? : *object[]*

___

### <a id="archivemessagesoptions" name="archivemessagesoptions"></a>  ArchiveMessagesOptions

Ƭ **ArchiveMessagesOptions**: *object*

#### Type declaration:

* **messageIds**: *number[]*

___

### <a id="getannouncements" name="getannouncements"></a>  GetAnnouncements

Ƭ **GetAnnouncements**: *object*

#### Type declaration:

* **collection**(): *object*

  * **body**: *string*

  * **created**: *string*

  * **id**: *number*

  * **sender**(): *object*

    * **displayName**: *string*

    * **id**: *number*

    * **name**: *string*

  * **subject**: *string*

  * **updated**: *string*

* **totalCollectionSize**: *number*

___

### <a id="getannouncementsmetadata" name="getannouncementsmetadata"></a>  GetAnnouncementsMetaData

Ƭ **GetAnnouncementsMetaData**: *object*

#### Type declaration:

* **numOfAnnouncements**: *number*

___

### <a id="getmessage" name="getmessage"></a>  GetMessage

Ƭ **GetMessage**: *GetMessages["collection"][0]*

___

### <a id="getmessageoptions" name="getmessageoptions"></a>  GetMessageOptions

Ƭ **GetMessageOptions**: *object*

#### Type declaration:

* **messageId**: *number*

___

### <a id="getmessages" name="getmessages"></a>  GetMessages

Ƭ **GetMessages**: *object*

#### Type declaration:

* **collection**: *object[]*

* **pageNumber**: *number*

* **totalCollectionSize**: *number*

* **totalPages**: *number*

___

### <a id="getmessagesoptions" name="getmessagesoptions"></a>  GetMessagesOptions

Ƭ **GetMessagesOptions**: *object*

#### Type declaration:

* **messageTab**? : *"Inbox" | "Sent" | "Archive"*

* **pageNumber**? : *undefined | number*

* **pageSize**? : *undefined | number*

___

### <a id="getunreadmessagescount" name="getunreadmessagescount"></a>  GetUnreadMessagesCount

Ƭ **GetUnreadMessagesCount**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="markmessagesread" name="markmessagesread"></a>  MarkMessagesRead

Ƭ **MarkMessagesRead**: *[ArchiveMessages](_client_apis_privatemessagesapi_.md#archivemessages)*

___

### <a id="markmessagesreadoptions" name="markmessagesreadoptions"></a>  MarkMessagesReadOptions

Ƭ **MarkMessagesReadOptions**: *[ArchiveMessagesOptions](_client_apis_privatemessagesapi_.md#archivemessagesoptions)*

___

### <a id="markmessagesunread" name="markmessagesunread"></a>  MarkMessagesUnread

Ƭ **MarkMessagesUnread**: *[ArchiveMessages](_client_apis_privatemessagesapi_.md#archivemessages)*

___

### <a id="markmessagesunreadoptions" name="markmessagesunreadoptions"></a>  MarkMessagesUnreadOptions

Ƭ **MarkMessagesUnreadOptions**: *[ArchiveMessagesOptions](_client_apis_privatemessagesapi_.md#archivemessagesoptions)*

___

### <a id="sendmessage" name="sendmessage"></a>  SendMessage

Ƭ **SendMessage**: *object*

#### Type declaration:

* **message**: *string*

* **shortMessage**: *string*

* **success**: *boolean*

___

### <a id="sendmessageoptions" name="sendmessageoptions"></a>  SendMessageOptions

Ƭ **SendMessageOptions**: *object*

#### Type declaration:

* **body**: *string*

* **includePreviousMessage**? : *undefined | false | true*

* **recipientId**: *number*

* **replyMessageId**? : *undefined | number*

* **subject**: *string*

* **userId**: *number*

___

### <a id="unarchivemessages" name="unarchivemessages"></a>  UnArchiveMessages

Ƭ **UnArchiveMessages**: *[ArchiveMessages](_client_apis_privatemessagesapi_.md#archivemessages)*

___

### <a id="unarchivemessagesoptions" name="unarchivemessagesoptions"></a>  UnArchiveMessagesOptions

Ƭ **UnArchiveMessagesOptions**: *[ArchiveMessagesOptions](_client_apis_privatemessagesapi_.md#archivemessagesoptions)*
