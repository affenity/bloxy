
# Module: "client/apis/AssetDeliveryAPI"

## Index

### Classes

* [AssetDeliveryAPI](../classes/_client_apis_assetdeliveryapi_.assetdeliveryapi.md)

### Type aliases

* [BaseAsset](_client_apis_assetdeliveryapi_.md#baseasset)
* [BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions)
* [BaseAssetRaw](_client_apis_assetdeliveryapi_.md#baseassetraw)
* [GetAssetByAlias](_client_apis_assetdeliveryapi_.md#getassetbyalias)
* [GetAssetByAliasOptions](_client_apis_assetdeliveryapi_.md#getassetbyaliasoptions)
* [GetAssetByAssetId](_client_apis_assetdeliveryapi_.md#getassetbyassetid)
* [GetAssetByAssetIdOptions](_client_apis_assetdeliveryapi_.md#getassetbyassetidoptions)
* [GetAssetByAssetVersionId](_client_apis_assetdeliveryapi_.md#getassetbyassetversionid)
* [GetAssetByAssetVersionIdOptions](_client_apis_assetdeliveryapi_.md#getassetbyassetversionidoptions)
* [GetAssetByHash](_client_apis_assetdeliveryapi_.md#getassetbyhash)
* [GetAssetByHashOptions](_client_apis_assetdeliveryapi_.md#getassetbyhashoptions)
* [GetAssetById](_client_apis_assetdeliveryapi_.md#getassetbyid)
* [GetAssetByIdOptions](_client_apis_assetdeliveryapi_.md#getassetbyidoptions)
* [GetAssetByMarAssetHash](_client_apis_assetdeliveryapi_.md#getassetbymarassethash)
* [GetAssetByMarAssetHashOptions](_client_apis_assetdeliveryapi_.md#getassetbymarassethashoptions)
* [GetAssetByUserAssetId](_client_apis_assetdeliveryapi_.md#getassetbyuserassetid)
* [GetAssetByUserAssetIdOptions](_client_apis_assetdeliveryapi_.md#getassetbyuserassetidoptions)
* [GetAssetVersionByAssetId](_client_apis_assetdeliveryapi_.md#getassetversionbyassetid)
* [GetAssetVersionByAssetIdOptions](_client_apis_assetdeliveryapi_.md#getassetversionbyassetidoptions)
* [GetBatchAssets](_client_apis_assetdeliveryapi_.md#getbatchassets)
* [GetBatchAssetsOptions](_client_apis_assetdeliveryapi_.md#getbatchassetsoptions)

### Functions

* [convertToBaseAsset](_client_apis_assetdeliveryapi_.md#const-converttobaseasset)
* [generateBaseDeliveryAssetOptions](_client_apis_assetdeliveryapi_.md#const-generatebasedeliveryassetoptions)

## Type aliases

### <a id="baseasset" name="baseasset"></a>  BaseAsset

Ƭ **BaseAsset**: *object*

#### Type declaration:

* **errors**? : *object[]*

* **isArchived**? : *undefined | false | true*

* **isCopyrightProtected**? : *undefined | false | true*

* **isHashDynamic**? : *undefined | false | true*

* **location**? : *undefined | string*

* **requestId**? : *undefined | string*

___

### <a id="baseassetdeliveryoptions" name="baseassetdeliveryoptions"></a>  BaseAssetDeliveryOptions

Ƭ **BaseAssetDeliveryOptions**: *object*

#### Type declaration:

* **accept**: *string*

* **acceptEncoding**: *string*

* **assetType**: *string*

* **clientInsert**: *number*

* **expectedAssetType**: *string*

* **modulePlaceId**: *number*

* **robloxPlaceId**: *number*

* **scriptInsert**: *number*

* **serverPlaceId**: *number*

* **skipSigningScripts**: *boolean*

___

### <a id="baseassetraw" name="baseassetraw"></a>  BaseAssetRaw

Ƭ **BaseAssetRaw**: *object*

#### Type declaration:

* **Errors**? : *object[]*

* **IsArchived**? : *undefined | false | true*

* **IsCopyrightProtected**? : *undefined | false | true*

* **IsHashDynamic**? : *undefined | false | true*

* **Location**? : *undefined | string*

* **RequestId**? : *undefined | string*

___

### <a id="getassetbyalias" name="getassetbyalias"></a>  GetAssetByAlias

Ƭ **GetAssetByAlias**: *[BaseAsset](_client_apis_assetdeliveryapi_.md#baseasset)*

___

### <a id="getassetbyaliasoptions" name="getassetbyaliasoptions"></a>  GetAssetByAliasOptions

Ƭ **GetAssetByAliasOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbyassetid" name="getassetbyassetid"></a>  GetAssetByAssetId

Ƭ **GetAssetByAssetId**: *object*

#### Type declaration:

___

### <a id="getassetbyassetidoptions" name="getassetbyassetidoptions"></a>  GetAssetByAssetIdOptions

Ƭ **GetAssetByAssetIdOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbyassetversionid" name="getassetbyassetversionid"></a>  GetAssetByAssetVersionId

Ƭ **GetAssetByAssetVersionId**: *object*

#### Type declaration:

___

### <a id="getassetbyassetversionidoptions" name="getassetbyassetversionidoptions"></a>  GetAssetByAssetVersionIdOptions

Ƭ **GetAssetByAssetVersionIdOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbyhash" name="getassetbyhash"></a>  GetAssetByHash

Ƭ **GetAssetByHash**: *object*

#### Type declaration:

___

### <a id="getassetbyhashoptions" name="getassetbyhashoptions"></a>  GetAssetByHashOptions

Ƭ **GetAssetByHashOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbyid" name="getassetbyid"></a>  GetAssetById

Ƭ **GetAssetById**: *object*

#### Type declaration:

* **location**? : *undefined | string*

* **request**? : *unknown*

___

### <a id="getassetbyidoptions" name="getassetbyidoptions"></a>  GetAssetByIdOptions

Ƭ **GetAssetByIdOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbymarassethash" name="getassetbymarassethash"></a>  GetAssetByMarAssetHash

Ƭ **GetAssetByMarAssetHash**: *object*

#### Type declaration:

___

### <a id="getassetbymarassethashoptions" name="getassetbymarassethashoptions"></a>  GetAssetByMarAssetHashOptions

Ƭ **GetAssetByMarAssetHashOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetbyuserassetid" name="getassetbyuserassetid"></a>  GetAssetByUserAssetId

Ƭ **GetAssetByUserAssetId**: *object*

#### Type declaration:

___

### <a id="getassetbyuserassetidoptions" name="getassetbyuserassetidoptions"></a>  GetAssetByUserAssetIdOptions

Ƭ **GetAssetByUserAssetIdOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getassetversionbyassetid" name="getassetversionbyassetid"></a>  GetAssetVersionByAssetId

Ƭ **GetAssetVersionByAssetId**: *object*

#### Type declaration:

___

### <a id="getassetversionbyassetidoptions" name="getassetversionbyassetidoptions"></a>  GetAssetVersionByAssetIdOptions

Ƭ **GetAssetVersionByAssetIdOptions**: *[BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) & object*

___

### <a id="getbatchassets" name="getbatchassets"></a>  GetBatchAssets

Ƭ **GetBatchAssets**: *[BaseAsset](_client_apis_assetdeliveryapi_.md#baseasset)[]*

___

### <a id="getbatchassetsoptions" name="getbatchassetsoptions"></a>  GetBatchAssetsOptions

Ƭ **GetBatchAssetsOptions**: *object*

#### Type declaration:

* **accept**: *string*

* **assetId**: *number*

* **assetName**: *string*

* **assetType**: *string*

* **assetVersionId**: *number*

* **clientInsert**: *boolean*

* **encoding**: *string*

* **hash**: *string*

* **modulePlaceId**: *number*

* **placeId**: *number*

* **requestId**: *string*

* **scriptInsert**: *boolean*

* **serverPlaceId**: *number*

* **universeId**: *number*

* **userAssetId**: *number*

* **version**: *number*

## Functions

### <a id="const-converttobaseasset" name="const-converttobaseasset"></a> `Const` convertToBaseAsset

▸ **convertToBaseAsset**(`options`: [BaseAssetRaw](_client_apis_assetdeliveryapi_.md#baseassetraw)): *[BaseAsset](_client_apis_assetdeliveryapi_.md#baseasset)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAssetRaw](_client_apis_assetdeliveryapi_.md#baseassetraw) |

**Returns:** *[BaseAsset](_client_apis_assetdeliveryapi_.md#baseasset)*

___

### <a id="const-generatebasedeliveryassetoptions" name="const-generatebasedeliveryassetoptions"></a> `Const` generateBaseDeliveryAssetOptions

▸ **generateBaseDeliveryAssetOptions**(`options`: [BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions)): *object*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAssetDeliveryOptions](_client_apis_assetdeliveryapi_.md#baseassetdeliveryoptions) |

**Returns:** *object*

* ### **headers**: *object*

  * **Accept**: *string* = options.accept

  * **Accept-Encoding**: *string* = options.acceptEncoding

  * **AssetType**: *string* = options.assetType

  * **Roblox-Place-Id**: *number* = options.robloxPlaceId

* ### **qs**: *object*

  * **clientInsert**: *number* = options.clientInsert

  * **expectedAssetType**: *string* = options.expectedAssetType

  * **modulePlaceId**: *number* = options.modulePlaceId

  * **scriptinsert**: *number* = options.scriptInsert

  * **serverplaceid**: *number* = options.serverPlaceId

  * **skipSigningScripts**: *string* = options.skipSigningScripts ? "true" : "false"
