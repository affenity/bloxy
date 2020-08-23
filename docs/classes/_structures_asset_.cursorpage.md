
# Class: CursorPage ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **CursorPage**

## Index

### Constructors

* [constructor](_structures_asset_.cursorpage.md#constructor)

### Properties

* [client](_structures_asset_.cursorpage.md#client)
* [cursors](_structures_asset_.cursorpage.md#cursors)
* [data](_structures_asset_.cursorpage.md#data)
* [method](_structures_asset_.cursorpage.md#method)
* [options](_structures_asset_.cursorpage.md#options)

### Methods

* [getNext](_structures_asset_.cursorpage.md#getnext)
* [getPrevious](_structures_asset_.cursorpage.md#getprevious)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new CursorPage**(`client`: [Client](_client_client_.client.md), `options`: [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions), `response`: [CursorPageResponse](../modules/_structures_asset_.md#cursorpageresponse), `method`: Function): *[CursorPage](_structures_asset_.cursorpage.md)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |
`options` | [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions) |
`response` | [CursorPageResponse](../modules/_structures_asset_.md#cursorpageresponse) |
`method` | Function |

**Returns:** *[CursorPage](_structures_asset_.cursorpage.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="cursors" name="cursors"></a>  cursors

• **cursors**: *object*

#### Type declaration:

* **current**: *string | null*

* **next**: *string | null*

* **previous**: *string | null*

___

### <a id="data" name="data"></a>  data

• **data**: *T[]*

___

### <a id="method" name="method"></a>  method

• **method**: *Function*

___

### <a id="options" name="options"></a>  options

• **options**: *[CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions)*

## Methods

### <a id="getnext" name="getnext"></a>  getNext

▸ **getNext**(`newOptions?`: [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions)): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹T››*

**Parameters:**

Name | Type |
------ | ------ |
`newOptions?` | [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions) |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹T››*

___

### <a id="getprevious" name="getprevious"></a>  getPrevious

▸ **getPrevious**(`newOptions?`: [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions)): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹T››*

**Parameters:**

Name | Type |
------ | ------ |
`newOptions?` | [CursorPageOptions](../modules/_structures_asset_.md#cursorpageoptions) |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹T››*
