
# Class: Client

## Hierarchy

  ↳ [ClientBase](_client_clientbase_.clientbase.md)

  ↳ **Client**

## Index

### Constructors

* [constructor](_client_client_.client.md#constructor)

### Properties

* [apis](_client_client_.client.md#apis)
* [chat](_client_client_.client.md#chat)
* [options](_client_client_.client.md#options)
* [rest](_client_client_.client.md#rest)
* [socket](_client_client_.client.md#socket)
* [user](_client_client_.client.md#user)

### Methods

* [addListener](_client_client_.client.md#addlistener)
* [emit](_client_client_.client.md#emit)
* [eventNames](_client_client_.client.md#eventnames)
* [getGroup](_client_client_.client.md#getgroup)
* [getMaxListeners](_client_client_.client.md#getmaxlisteners)
* [getUser](_client_client_.client.md#getuser)
* [getUserIdFromUsername](_client_client_.client.md#getuseridfromusername)
* [getUsernameFromUserId](_client_client_.client.md#getusernamefromuserid)
* [getUsersByUserIds](_client_client_.client.md#getusersbyuserids)
* [getUsersByUsernames](_client_client_.client.md#getusersbyusernames)
* [init](_client_client_.client.md#init)
* [listenerCount](_client_client_.client.md#listenercount)
* [listeners](_client_client_.client.md#listeners)
* [login](_client_client_.client.md#login)
* [off](_client_client_.client.md#off)
* [on](_client_client_.client.md#on)
* [once](_client_client_.client.md#once)
* [prependListener](_client_client_.client.md#prependlistener)
* [prependOnceListener](_client_client_.client.md#prependoncelistener)
* [rawListeners](_client_client_.client.md#rawlisteners)
* [removeAllListeners](_client_client_.client.md#removealllisteners)
* [removeListener](_client_client_.client.md#removelistener)
* [setMaxListeners](_client_client_.client.md#setmaxlisteners)
* [updateOptions](_client_client_.client.md#updateoptions)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Client**(`options?`: [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)): *[Client](_client_client_.client.md)*

*Overrides [ClientBase](_client_clientbase_.clientbase.md).[constructor](_client_clientbase_.clientbase.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md) |

**Returns:** *[Client](_client_client_.client.md)*

## Properties

### <a id="apis" name="apis"></a>  apis

• **apis**: *[APIs](../modules/_client_apis_index_.md#apis)*

___

### <a id="chat" name="chat"></a>  chat

• **chat**: *[ChatManager](_client_lib_chatmanager_chatmanager_.chatmanager.md)*

___

### <a id="options" name="options"></a>  options

• **options**: *[ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[options](_client_clientbase_.clientbase.md#options)*

___

### <a id="rest" name="rest"></a>  rest

• **rest**: *[RESTController](_controllers_rest_restcontroller_.restcontroller.md)*

___

### <a id="socket" name="socket"></a>  socket

• **socket**: *[Socket](_client_lib_clientsocket_clientsocket_.socket.md)*

___

### <a id="user" name="user"></a>  user

• **user**: *[ClientUser](_structures_clientuser_.clientuser.md) | null*

## Methods

### <a id="addlistener" name="addlistener"></a>  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[addListener](_client_clientbase_.clientbase.md#addlistener)*

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

### <a id="emit" name="emit"></a>  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[emit](_client_clientbase_.clientbase.md#emit)*

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

**Returns:** *Array‹string | symbol›*

___

### <a id="getgroup" name="getgroup"></a>  getGroup

▸ **getGroup**(`groupId`: number): *Promise‹[Group](_structures_group_.group.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹[Group](_structures_group_.group.md)›*

___

### <a id="getmaxlisteners" name="getmaxlisteners"></a>  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[getMaxListeners](_client_clientbase_.clientbase.md#getmaxlisteners)*

**Returns:** *number*

___

### <a id="getuser" name="getuser"></a>  getUser

▸ **getUser**(`userId`: number): *Promise‹[User](_structures_user_.user.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[User](_structures_user_.user.md)›*

___

### <a id="getuseridfromusername" name="getuseridfromusername"></a>  getUserIdFromUsername

▸ **getUserIdFromUsername**(`username`: string): *Promise‹[PartialUser](_structures_user_.partialuser.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *Promise‹[PartialUser](_structures_user_.partialuser.md)›*

___

### <a id="getusernamefromuserid" name="getusernamefromuserid"></a>  getUsernameFromUserId

▸ **getUsernameFromUserId**(`userId`: number): *Promise‹[PartialUser](_structures_user_.partialuser.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[PartialUser](_structures_user_.partialuser.md)›*

___

### <a id="getusersbyuserids" name="getusersbyuserids"></a>  getUsersByUserIds

▸ **getUsersByUserIds**(`userIds`: number[], `excludeBannedUsers`: boolean): *Promise‹[PartialUser](_structures_user_.partialuser.md)[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`userIds` | number[] | - |
`excludeBannedUsers` | boolean | false |

**Returns:** *Promise‹[PartialUser](_structures_user_.partialuser.md)[]›*

___

### <a id="getusersbyusernames" name="getusersbyusernames"></a>  getUsersByUsernames

▸ **getUsersByUsernames**(`usernames`: string[], `excludeBannedUsers`: boolean): *Promise‹[PartialUser](_structures_user_.partialuser.md)[]›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`usernames` | string[] | - |
`excludeBannedUsers` | boolean | false |

**Returns:** *Promise‹[PartialUser](_structures_user_.partialuser.md)[]›*

___

### <a id="init" name="init"></a>  init

▸ **init**(): *void*

**Returns:** *void*

___

### <a id="listenercount" name="listenercount"></a>  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[listenerCount](_client_clientbase_.clientbase.md#listenercount)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

### <a id="listeners" name="listeners"></a>  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[listeners](_client_clientbase_.clientbase.md#listeners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="login" name="login"></a>  login

▸ **login**(`cookie?`: undefined | string): *Promise‹[ClientUser](_structures_clientuser_.clientuser.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`cookie?` | undefined &#124; string |

**Returns:** *Promise‹[ClientUser](_structures_clientuser_.clientuser.md)›*

___

### <a id="off" name="off"></a>  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[off](_client_clientbase_.clientbase.md#off)*

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

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[on](_client_clientbase_.clientbase.md#on)*

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

### <a id="once" name="once"></a>  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[once](_client_clientbase_.clientbase.md#once)*

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

### <a id="prependlistener" name="prependlistener"></a>  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[prependListener](_client_clientbase_.clientbase.md#prependlistener)*

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

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="removealllisteners" name="removealllisteners"></a>  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[removeAllListeners](_client_clientbase_.clientbase.md#removealllisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

### <a id="removelistener" name="removelistener"></a>  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[removeListener](_client_clientbase_.clientbase.md#removelistener)*

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

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### <a id="updateoptions" name="updateoptions"></a>  updateOptions

▸ **updateOptions**(`options?`: [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)): *[ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[updateOptions](_client_clientbase_.clientbase.md#updateoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md) |

**Returns:** *[ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)*
