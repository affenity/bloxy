
# Class: ClientBase

## Hierarchy

* internal

  ↳ **ClientBase**

  ↳ [Client](_client_client_.client.md)

## Index

### Classes

* [EventEmitter](_client_clientbase_.clientbase.eventemitter.md)

### Constructors

* [constructor](_client_clientbase_.clientbase.md#constructor)

### Properties

* [options](_client_clientbase_.clientbase.md#options)

### Methods

* [addListener](_client_clientbase_.clientbase.md#addlistener)
* [emit](_client_clientbase_.clientbase.md#emit)
* [eventNames](_client_clientbase_.clientbase.md#eventnames)
* [getMaxListeners](_client_clientbase_.clientbase.md#getmaxlisteners)
* [listenerCount](_client_clientbase_.clientbase.md#listenercount)
* [listeners](_client_clientbase_.clientbase.md#listeners)
* [off](_client_clientbase_.clientbase.md#off)
* [on](_client_clientbase_.clientbase.md#on)
* [once](_client_clientbase_.clientbase.md#once)
* [prependListener](_client_clientbase_.clientbase.md#prependlistener)
* [prependOnceListener](_client_clientbase_.clientbase.md#prependoncelistener)
* [rawListeners](_client_clientbase_.clientbase.md#rawlisteners)
* [removeAllListeners](_client_clientbase_.clientbase.md#removealllisteners)
* [removeListener](_client_clientbase_.clientbase.md#removelistener)
* [setMaxListeners](_client_clientbase_.clientbase.md#setmaxlisteners)
* [updateOptions](_client_clientbase_.clientbase.md#updateoptions)
* [once](_client_clientbase_.clientbase.md#static-once)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ClientBase**(`options?`: [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)): *[ClientBase](_client_clientbase_.clientbase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md) |

**Returns:** *[ClientBase](_client_clientbase_.clientbase.md)*

## Properties

### <a id="options" name="options"></a>  options

• **options**: *[ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)*

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

### <a id="getmaxlisteners" name="getmaxlisteners"></a>  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [ClientBase](_client_clientbase_.clientbase.md).[getMaxListeners](_client_clientbase_.clientbase.md#getmaxlisteners)*

**Returns:** *number*

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

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [ClientOptions](../interfaces/_client_clientbase_.clientoptions.md) |

**Returns:** *[ClientOptions](../interfaces/_client_clientbase_.clientoptions.md)*

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
