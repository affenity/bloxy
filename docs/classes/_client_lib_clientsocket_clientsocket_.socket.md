
# Class: Socket

## Hierarchy

* internal

* internal

  ↳ **Socket**

## Index

### Classes

* [EventEmitter](_client_lib_clientsocket_clientsocket_.socket.eventemitter.md)

### Constructors

* [constructor](_client_lib_clientsocket_clientsocket_.socket.md#constructor)

### Properties

* [client](_client_lib_clientsocket_clientsocket_.socket.md#client)
* [connected](_client_lib_clientsocket_clientsocket_.socket.md#connected)
* [socket](_client_lib_clientsocket_clientsocket_.socket.md#socket)

### Methods

* [addListener](_client_lib_clientsocket_clientsocket_.socket.md#addlistener)
* [connect](_client_lib_clientsocket_clientsocket_.socket.md#connect)
* [emit](_client_lib_clientsocket_clientsocket_.socket.md#emit)
* [eventNames](_client_lib_clientsocket_clientsocket_.socket.md#eventnames)
* [getMaxListeners](_client_lib_clientsocket_clientsocket_.socket.md#getmaxlisteners)
* [init](_client_lib_clientsocket_clientsocket_.socket.md#init)
* [listenerCount](_client_lib_clientsocket_clientsocket_.socket.md#listenercount)
* [listeners](_client_lib_clientsocket_clientsocket_.socket.md#listeners)
* [off](_client_lib_clientsocket_clientsocket_.socket.md#off)
* [on](_client_lib_clientsocket_clientsocket_.socket.md#on)
* [once](_client_lib_clientsocket_clientsocket_.socket.md#once)
* [prependListener](_client_lib_clientsocket_clientsocket_.socket.md#prependlistener)
* [prependOnceListener](_client_lib_clientsocket_clientsocket_.socket.md#prependoncelistener)
* [rawListeners](_client_lib_clientsocket_clientsocket_.socket.md#rawlisteners)
* [removeAllListeners](_client_lib_clientsocket_clientsocket_.socket.md#removealllisteners)
* [removeListener](_client_lib_clientsocket_clientsocket_.socket.md#removelistener)
* [setMaxListeners](_client_lib_clientsocket_clientsocket_.socket.md#setmaxlisteners)
* [once](_client_lib_clientsocket_clientsocket_.socket.md#static-once)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Socket**(`client`: [Client](_client_client_.client.md)): *[Socket](_client_lib_clientsocket_clientsocket_.socket.md)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[Socket](_client_lib_clientsocket_clientsocket_.socket.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="connected" name="connected"></a>  connected

• **connected**: *boolean*

___

### <a id="socket" name="socket"></a>  socket

• **socket**: *any*

## Methods

### <a id="addlistener" name="addlistener"></a>  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[addListener](_client_clientbase_.clientbase.md#addlistener)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[addListener](_client_clientbase_.clientbase.md#addlistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### <a id="connect" name="connect"></a>  connect

▸ **connect**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

### <a id="emit" name="emit"></a>  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[emit](_client_clientbase_.clientbase.md#emit)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[emit](_client_clientbase_.clientbase.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

### <a id="eventnames" name="eventnames"></a>  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[eventNames](_client_clientbase_.clientbase.md#eventnames)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[eventNames](_client_clientbase_.clientbase.md#eventnames)*

**Returns:** *Array‹string | symbol›*

___

### <a id="getmaxlisteners" name="getmaxlisteners"></a>  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[getMaxListeners](_client_clientbase_.clientbase.md#getmaxlisteners)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[getMaxListeners](_client_clientbase_.clientbase.md#getmaxlisteners)*

**Returns:** *number*

___

### <a id="init" name="init"></a>  init

▸ **init**(): *void*

This is called after the connection of the socket has successfully been established

**Returns:** *void*

___

### <a id="listenercount" name="listenercount"></a>  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[listenerCount](_client_clientbase_.clientbase.md#listenercount)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[listenerCount](_client_clientbase_.clientbase.md#listenercount)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

### <a id="listeners" name="listeners"></a>  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[listeners](_client_clientbase_.clientbase.md#listeners)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[listeners](_client_clientbase_.clientbase.md#listeners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="off" name="off"></a>  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[off](_client_clientbase_.clientbase.md#off)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[off](_client_clientbase_.clientbase.md#off)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### <a id="on" name="on"></a>  on

▸ **on**(`event`: "chatMessageSent", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatMessageSent"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |

**Returns:** *this*

▸ **on**(`event`: "chatUserTyping", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatUserTyping"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "chatUserTypingStopped", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatUserTypingStopped"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "chatMessage", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatMessage"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "chatMessageSent", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatMessageSent"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "chatConversationAdded", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatConversationAdded"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |

**Returns:** *this*

▸ **on**(`event`: "chatConversationRemoved", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatConversationRemoved"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |

**Returns:** *this*

▸ **on**(`event`: "chatMemberAdded", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatMemberAdded"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |

**Returns:** *this*

▸ **on**(`event`: "chatMemberLeft", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"chatMemberLeft"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`conversation` | [PartialChatConversation](_structures_chat_.partialchatconversation.md) |

**Returns:** *this*

▸ **on**(`event`: "friendLost", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"friendLost"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "friendRequest", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"friendRequest"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "friendAdded", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"friendAdded"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

▸ **on**(`event`: "userPresenceChanged", `listener`: function): *this*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

**Parameters:**

▪ **event**: *"userPresenceChanged"*

▪ **listener**: *function*

▸ (`data`: object): *void*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`user` | [PartialUser](_structures_user_.partialuser.md) |

**Returns:** *this*

___

### <a id="once" name="once"></a>  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`emitter`: NodeEventTarget, `event`: string | symbol): *Promise‹any[]›*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*

___

### <a id="prependlistener" name="prependlistener"></a>  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[prependListener](_client_clientbase_.clientbase.md#prependlistener)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[prependListener](_client_clientbase_.clientbase.md#prependlistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### <a id="prependoncelistener" name="prependoncelistener"></a>  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[prependOnceListener](_client_clientbase_.clientbase.md#prependoncelistener)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[prependOnceListener](_client_clientbase_.clientbase.md#prependoncelistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### <a id="rawlisteners" name="rawlisteners"></a>  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[rawListeners](_client_clientbase_.clientbase.md#rawlisteners)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[rawListeners](_client_clientbase_.clientbase.md#rawlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="removealllisteners" name="removealllisteners"></a>  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[removeAllListeners](_client_clientbase_.clientbase.md#removealllisteners)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[removeAllListeners](_client_clientbase_.clientbase.md#removealllisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

### <a id="removelistener" name="removelistener"></a>  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[removeListener](_client_clientbase_.clientbase.md#removelistener)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[removeListener](_client_clientbase_.clientbase.md#removelistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

### <a id="setmaxlisteners" name="setmaxlisteners"></a>  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[setMaxListeners](_client_clientbase_.clientbase.md#setmaxlisteners)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[setMaxListeners](_client_clientbase_.clientbase.md#setmaxlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### <a id="static-once" name="static-once"></a> `Static` once

▸ **once**(`emitter`: NodeEventTarget, `event`: string | symbol): *Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | NodeEventTarget |
`event` | string &#124; symbol |

**Returns:** *Promise‹any[]›*

▸ **once**(`emitter`: DOMEventTarget, `event`: string): *Promise‹any[]›*

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | string |

**Returns:** *Promise‹any[]›*
