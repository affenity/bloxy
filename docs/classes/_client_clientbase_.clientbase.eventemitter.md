
# Class: EventEmitter

## Hierarchy

* **EventEmitter**

## Index

### Properties

* [defaultMaxListeners](_client_clientbase_.clientbase.eventemitter.md#static-defaultmaxlisteners)

### Methods

* [addListener](_client_clientbase_.clientbase.eventemitter.md#addlistener)
* [emit](_client_clientbase_.clientbase.eventemitter.md#emit)
* [eventNames](_client_clientbase_.clientbase.eventemitter.md#eventnames)
* [getMaxListeners](_client_clientbase_.clientbase.eventemitter.md#getmaxlisteners)
* [listenerCount](_client_clientbase_.clientbase.eventemitter.md#listenercount)
* [listeners](_client_clientbase_.clientbase.eventemitter.md#listeners)
* [off](_client_clientbase_.clientbase.eventemitter.md#off)
* [on](_client_clientbase_.clientbase.eventemitter.md#on)
* [once](_client_clientbase_.clientbase.eventemitter.md#once)
* [prependListener](_client_clientbase_.clientbase.eventemitter.md#prependlistener)
* [prependOnceListener](_client_clientbase_.clientbase.eventemitter.md#prependoncelistener)
* [rawListeners](_client_clientbase_.clientbase.eventemitter.md#rawlisteners)
* [removeAllListeners](_client_clientbase_.clientbase.eventemitter.md#removealllisteners)
* [removeListener](_client_clientbase_.clientbase.eventemitter.md#removelistener)
* [setMaxListeners](_client_clientbase_.clientbase.eventemitter.md#setmaxlisteners)
* [listenerCount](_client_clientbase_.clientbase.eventemitter.md#static-listenercount)

## Properties

### <a id="static-defaultmaxlisteners" name="static-defaultmaxlisteners"></a> `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

## Methods

### <a id="addlistener" name="addlistener"></a>  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

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

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

### <a id="eventnames" name="eventnames"></a>  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

**Returns:** *Array‹string | symbol›*

___

### <a id="getmaxlisteners" name="getmaxlisteners"></a>  getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

___

### <a id="listenercount" name="listenercount"></a>  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

### <a id="listeners" name="listeners"></a>  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="off" name="off"></a>  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

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

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

### <a id="removealllisteners" name="removealllisteners"></a>  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

### <a id="removelistener" name="removelistener"></a>  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

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

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### <a id="static-listenercount" name="static-listenercount"></a> `Static` listenerCount

▸ **listenerCount**(`emitter`: [EventEmitter](_client_clientbase_.clientbase.eventemitter.md), `event`: string | symbol): *number*

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | [EventEmitter](_client_clientbase_.clientbase.eventemitter.md) |
`event` | string &#124; symbol |

**Returns:** *number*
