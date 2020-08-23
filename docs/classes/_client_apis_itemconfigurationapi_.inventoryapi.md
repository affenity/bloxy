
# Class: InventoryAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **InventoryAPI**

## Index

### Constructors

* [constructor](_client_apis_itemconfigurationapi_.inventoryapi.md#constructor)

### Properties

* [client](_client_apis_itemconfigurationapi_.inventoryapi.md#client)
* [options](_client_apis_itemconfigurationapi_.inventoryapi.md#options)

### Methods

* [createItemTag](_client_apis_itemconfigurationapi_.inventoryapi.md#createitemtag)
* [deleteItemTag](_client_apis_itemconfigurationapi_.inventoryapi.md#deleteitemtag)
* [getCreatedAssets](_client_apis_itemconfigurationapi_.inventoryapi.md#getcreatedassets)
* [getItemTagsByItemIds](_client_apis_itemconfigurationapi_.inventoryapi.md#getitemtagsbyitemids)
* [getItemTagsMetaData](_client_apis_itemconfigurationapi_.inventoryapi.md#getitemtagsmetadata)
* [getMultiCreatedAssets](_client_apis_itemconfigurationapi_.inventoryapi.md#getmulticreatedassets)
* [getTagsByTagIds](_client_apis_itemconfigurationapi_.inventoryapi.md#gettagsbytagids)
* [request](_client_apis_itemconfigurationapi_.inventoryapi.md#request)
* [searchTags](_client_apis_itemconfigurationapi_.inventoryapi.md#searchtags)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new InventoryAPI**(`client`: [Client](_client_client_.client.md)): *[InventoryAPI](_client_apis_itemconfigurationapi_.inventoryapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[InventoryAPI](_client_apis_itemconfigurationapi_.inventoryapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="createitemtag" name="createitemtag"></a>  createItemTag

▸ **createItemTag**(`options`: [CreateItemTagOptions](../modules/_client_apis_itemconfigurationapi_.md#createitemtagoptions)): *Promise‹[CreateItemTag](../modules/_client_apis_itemconfigurationapi_.md#createitemtag)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateItemTagOptions](../modules/_client_apis_itemconfigurationapi_.md#createitemtagoptions) |

**Returns:** *Promise‹[CreateItemTag](../modules/_client_apis_itemconfigurationapi_.md#createitemtag)›*

___

### <a id="deleteitemtag" name="deleteitemtag"></a>  deleteItemTag

▸ **deleteItemTag**(`options`: [DeleteItemTagOptions](../modules/_client_apis_itemconfigurationapi_.md#deleteitemtagoptions)): *Promise‹[DeleteItemTag](../modules/_client_apis_itemconfigurationapi_.md#deleteitemtag)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteItemTagOptions](../modules/_client_apis_itemconfigurationapi_.md#deleteitemtagoptions) |

**Returns:** *Promise‹[DeleteItemTag](../modules/_client_apis_itemconfigurationapi_.md#deleteitemtag)›*

___

### <a id="getcreatedassets" name="getcreatedassets"></a>  getCreatedAssets

▸ **getCreatedAssets**(`options`: [GetCreatedAssetsOptions](../modules/_client_apis_itemconfigurationapi_.md#getcreatedassetsoptions)): *Promise‹[GetCreatedAssets](../modules/_client_apis_itemconfigurationapi_.md#getcreatedassets)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetCreatedAssetsOptions](../modules/_client_apis_itemconfigurationapi_.md#getcreatedassetsoptions) |

**Returns:** *Promise‹[GetCreatedAssets](../modules/_client_apis_itemconfigurationapi_.md#getcreatedassets)›*

___

### <a id="getitemtagsbyitemids" name="getitemtagsbyitemids"></a>  getItemTagsByItemIds

▸ **getItemTagsByItemIds**(`options`: [GetItemTagsByItemIdsOptions](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsbyitemidsoptions)): *Promise‹[GetItemTagsByItemIds](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsbyitemids)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetItemTagsByItemIdsOptions](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsbyitemidsoptions) |

**Returns:** *Promise‹[GetItemTagsByItemIds](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsbyitemids)›*

___

### <a id="getitemtagsmetadata" name="getitemtagsmetadata"></a>  getItemTagsMetaData

▸ **getItemTagsMetaData**(): *Promise‹[GetItemTagsMetaData](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsmetadata)›*

**Returns:** *Promise‹[GetItemTagsMetaData](../modules/_client_apis_itemconfigurationapi_.md#getitemtagsmetadata)›*

___

### <a id="getmulticreatedassets" name="getmulticreatedassets"></a>  getMultiCreatedAssets

▸ **getMultiCreatedAssets**(`options`: [GetMultiCreatedAssetDetailsOptions](../modules/_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetailsoptions)): *Promise‹[GetMultiCreatedAssetDetails](../modules/_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetails)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMultiCreatedAssetDetailsOptions](../modules/_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetailsoptions) |

**Returns:** *Promise‹[GetMultiCreatedAssetDetails](../modules/_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetails)›*

___

### <a id="gettagsbytagids" name="gettagsbytagids"></a>  getTagsByTagIds

▸ **getTagsByTagIds**(`options`: [GetTagsByTagIdsOptions](../modules/_client_apis_itemconfigurationapi_.md#gettagsbytagidsoptions)): *Promise‹[GetTagsByTagIds](../modules/_client_apis_itemconfigurationapi_.md#gettagsbytagids)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetTagsByTagIdsOptions](../modules/_client_apis_itemconfigurationapi_.md#gettagsbytagidsoptions) |

**Returns:** *Promise‹[GetTagsByTagIds](../modules/_client_apis_itemconfigurationapi_.md#gettagsbytagids)›*

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

### <a id="searchtags" name="searchtags"></a>  searchTags

▸ **searchTags**(`options`: [SearchTagsOptions](../modules/_client_apis_itemconfigurationapi_.md#searchtagsoptions)): *Promise‹[SearchTags](../modules/_client_apis_itemconfigurationapi_.md#searchtags)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchTagsOptions](../modules/_client_apis_itemconfigurationapi_.md#searchtagsoptions) |

**Returns:** *Promise‹[SearchTags](../modules/_client_apis_itemconfigurationapi_.md#searchtags)›*
