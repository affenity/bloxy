
# Module: "client/apis/ItemConfigurationAPI"

## Index

### Classes

* [InventoryAPI](../classes/_client_apis_itemconfigurationapi_.inventoryapi.md)

### Type aliases

* [CreateItemTag](_client_apis_itemconfigurationapi_.md#createitemtag)
* [CreateItemTagOptions](_client_apis_itemconfigurationapi_.md#createitemtagoptions)
* [DeleteItemTag](_client_apis_itemconfigurationapi_.md#deleteitemtag)
* [DeleteItemTagOptions](_client_apis_itemconfigurationapi_.md#deleteitemtagoptions)
* [GetCreatedAssets](_client_apis_itemconfigurationapi_.md#getcreatedassets)
* [GetCreatedAssetsOptions](_client_apis_itemconfigurationapi_.md#getcreatedassetsoptions)
* [GetItemTagsByItemIds](_client_apis_itemconfigurationapi_.md#getitemtagsbyitemids)
* [GetItemTagsByItemIdsOptions](_client_apis_itemconfigurationapi_.md#getitemtagsbyitemidsoptions)
* [GetItemTagsMetaData](_client_apis_itemconfigurationapi_.md#getitemtagsmetadata)
* [GetMultiCreatedAssetDetails](_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetails)
* [GetMultiCreatedAssetDetailsOptions](_client_apis_itemconfigurationapi_.md#getmulticreatedassetdetailsoptions)
* [GetTagsByTagIds](_client_apis_itemconfigurationapi_.md#gettagsbytagids)
* [GetTagsByTagIdsOptions](_client_apis_itemconfigurationapi_.md#gettagsbytagidsoptions)
* [SearchTags](_client_apis_itemconfigurationapi_.md#searchtags)
* [SearchTagsOptions](_client_apis_itemconfigurationapi_.md#searchtagsoptions)

## Type aliases

### <a id="createitemtag" name="createitemtag"></a>  CreateItemTag

Ƭ **CreateItemTag**: *GetItemTagsByItemIds["data"][0]["itemTags"][0]*

___

### <a id="createitemtagoptions" name="createitemtagoptions"></a>  CreateItemTagOptions

Ƭ **CreateItemTagOptions**: *object*

#### Type declaration:

* **itemId**: *number*

* **tagId**: *string*

___

### <a id="deleteitemtag" name="deleteitemtag"></a>  DeleteItemTag

Ƭ **DeleteItemTag**: *object*

#### Type declaration:

___

### <a id="deleteitemtagoptions" name="deleteitemtagoptions"></a>  DeleteItemTagOptions

Ƭ **DeleteItemTagOptions**: *object*

#### Type declaration:

* **itemTagId**: *number*

___

### <a id="getcreatedassets" name="getcreatedassets"></a>  GetCreatedAssets

Ƭ **GetCreatedAssets**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getcreatedassetsoptions" name="getcreatedassetsoptions"></a>  GetCreatedAssetsOptions

Ƭ **GetCreatedAssetsOptions**: *object*

#### Type declaration:

* **assetType**: *string*

* **groupId**? : *undefined | number*

* **isArchived**? : *undefined | false | true*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="getitemtagsbyitemids" name="getitemtagsbyitemids"></a>  GetItemTagsByItemIds

Ƭ **GetItemTagsByItemIds**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getitemtagsbyitemidsoptions" name="getitemtagsbyitemidsoptions"></a>  GetItemTagsByItemIdsOptions

Ƭ **GetItemTagsByItemIdsOptions**: *object*

#### Type declaration:

* **itemIds**: *number[]*

___

### <a id="getitemtagsmetadata" name="getitemtagsmetadata"></a>  GetItemTagsMetaData

Ƭ **GetItemTagsMetaData**: *object*

#### Type declaration:

* **enabledAssetTypes**: *string[]*

* **isItemTagsFeatureEnabled**: *boolean*

* **maximumItemTagsPerItem**: *number*

___

### <a id="getmulticreatedassetdetails" name="getmulticreatedassetdetails"></a>  GetMultiCreatedAssetDetails

Ƭ **GetMultiCreatedAssetDetails**: *object[]*

___

### <a id="getmulticreatedassetdetailsoptions" name="getmulticreatedassetdetailsoptions"></a>  GetMultiCreatedAssetDetailsOptions

Ƭ **GetMultiCreatedAssetDetailsOptions**: *object*

#### Type declaration:

* **assetIds**: *number[]*

___

### <a id="gettagsbytagids" name="gettagsbytagids"></a>  GetTagsByTagIds

Ƭ **GetTagsByTagIds**: *object*

#### Type declaration:

* **data**: *Omit‹GetItemTagsByItemIds["data"][0]["itemTags"][0], "id"›[]*

___

### <a id="gettagsbytagidsoptions" name="gettagsbytagidsoptions"></a>  GetTagsByTagIdsOptions

Ƭ **GetTagsByTagIdsOptions**: *object*

#### Type declaration:

* **tagIds**: *number[]*

___

### <a id="searchtags" name="searchtags"></a>  SearchTags

Ƭ **SearchTags**: *[GetTagsByTagIds](_client_apis_itemconfigurationapi_.md#gettagsbytagids)*

___

### <a id="searchtagsoptions" name="searchtagsoptions"></a>  SearchTagsOptions

Ƭ **SearchTagsOptions**: *object*

#### Type declaration:

* **prefix**: *string*

* **results**: *number*
