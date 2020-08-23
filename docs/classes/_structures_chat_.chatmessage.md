
# Class: ChatMessage

## Hierarchy

* **ChatMessage**

## Index

### Constructors

* [constructor](_structures_chat_.chatmessage.md#constructor)

### Properties

* [client](_structures_chat_.chatmessage.md#client)
* [content](_structures_chat_.chatmessage.md#content)
* [decorators](_structures_chat_.chatmessage.md#decorators)
* [id](_structures_chat_.chatmessage.md#id)
* [sender](_structures_chat_.chatmessage.md#sender)
* [sentAt](_structures_chat_.chatmessage.md#sentat)
* [type](_structures_chat_.chatmessage.md#type)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ChatMessage**(`data`: [ChatMessageOptions](../interfaces/_structures_chat_.chatmessageoptions.md), `client`: [Client](_client_client_.client.md)): *[ChatMessage](_structures_chat_.chatmessage.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ChatMessageOptions](../interfaces/_structures_chat_.chatmessageoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[ChatMessage](_structures_chat_.chatmessage.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="content" name="content"></a>  content

• **content**: *string*

___

### <a id="decorators" name="decorators"></a>  decorators

• **decorators**: *string[]*

___

### <a id="id" name="id"></a>  id

• **id**: *string*

___

### <a id="sender" name="sender"></a>  sender

• **sender**: *[PartialUser](_structures_user_.partialuser.md)*

___

### <a id="sentat" name="sentat"></a>  sentAt

• **sentAt**: *Date*

___

### <a id="type" name="type"></a>  type

• **type**: *"PlainText" | string*
