
# Class: AssetDeliveryAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AssetDeliveryAPI**

## Index

### Constructors

* [constructor](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#constructor)

### Properties

* [client](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#client)
* [options](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#options)

### Methods

* [getAssetByAlias](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyalias)
* [getAssetByAssetId](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyassetid)
* [getAssetByAssetVersionId](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyassetversionid)
* [getAssetByHash](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyhash)
* [getAssetById](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyid)
* [getAssetByMarAssetHash](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbymarassethash)
* [getAssetByUserAssetId](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetbyuserassetid)
* [getAssetVersionByAssetId](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getassetversionbyassetid)
* [getBatchAssets](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#getbatchassets)
* [request](_client_apis_assetdeliveryapi_.assetdeliveryapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AssetDeliveryAPI**(`client`: [Client](_client_client_.client.md)): *[AssetDeliveryAPI](_client_apis_assetdeliveryapi_.assetdeliveryapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AssetDeliveryAPI](_client_apis_assetdeliveryapi_.assetdeliveryapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getassetbyalias" name="getassetbyalias"></a>  getAssetByAlias

▸ **getAssetByAlias**(`options`: [GetAssetByAliasOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyaliasoptions)): *Promise‹[GetAssetByAlias](../modules/_client_apis_assetdeliveryapi_.md#getassetbyalias)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByAliasOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyaliasoptions) |

**Returns:** *Promise‹[GetAssetByAlias](../modules/_client_apis_assetdeliveryapi_.md#getassetbyalias)›*

___

### <a id="getassetbyassetid" name="getassetbyassetid"></a>  getAssetByAssetId

▸ **getAssetByAssetId**(`options`: [GetAssetByAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetidoptions)): *Promise‹[GetAssetByAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetidoptions) |

**Returns:** *Promise‹[GetAssetByAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetid)›*

___

### <a id="getassetbyassetversionid" name="getassetbyassetversionid"></a>  getAssetByAssetVersionId

▸ **getAssetByAssetVersionId**(`options`: [GetAssetByAssetVersionIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetversionidoptions)): *Promise‹[GetAssetByAssetVersionId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetversionid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByAssetVersionIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetversionidoptions) |

**Returns:** *Promise‹[GetAssetByAssetVersionId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyassetversionid)›*

___

### <a id="getassetbyhash" name="getassetbyhash"></a>  getAssetByHash

▸ **getAssetByHash**(`options`: [GetAssetByHashOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyhashoptions)): *Promise‹[GetAssetByHash](../modules/_client_apis_assetdeliveryapi_.md#getassetbyhash)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByHashOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyhashoptions) |

**Returns:** *Promise‹[GetAssetByHash](../modules/_client_apis_assetdeliveryapi_.md#getassetbyhash)›*

___

### <a id="getassetbyid" name="getassetbyid"></a>  getAssetById

▸ **getAssetById**(`options`: [GetAssetByIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyidoptions)): *Promise‹[GetAssetById](../modules/_client_apis_assetdeliveryapi_.md#getassetbyid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyidoptions) |

**Returns:** *Promise‹[GetAssetById](../modules/_client_apis_assetdeliveryapi_.md#getassetbyid)›*

___

### <a id="getassetbymarassethash" name="getassetbymarassethash"></a>  getAssetByMarAssetHash

▸ **getAssetByMarAssetHash**(`options`: [GetAssetByMarAssetHashOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbymarassethashoptions)): *Promise‹[GetAssetByMarAssetHash](../modules/_client_apis_assetdeliveryapi_.md#getassetbymarassethash)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByMarAssetHashOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbymarassethashoptions) |

**Returns:** *Promise‹[GetAssetByMarAssetHash](../modules/_client_apis_assetdeliveryapi_.md#getassetbymarassethash)›*

___

### <a id="getassetbyuserassetid" name="getassetbyuserassetid"></a>  getAssetByUserAssetId

▸ **getAssetByUserAssetId**(`options`: [GetAssetByUserAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyuserassetidoptions)): *Promise‹[GetAssetByUserAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyuserassetid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetByUserAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetbyuserassetidoptions) |

**Returns:** *Promise‹[GetAssetByUserAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetbyuserassetid)›*

___

### <a id="getassetversionbyassetid" name="getassetversionbyassetid"></a>  getAssetVersionByAssetId

▸ **getAssetVersionByAssetId**(`options`: [GetAssetVersionByAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetversionbyassetidoptions)): *Promise‹[GetAssetVersionByAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetversionbyassetid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetVersionByAssetIdOptions](../modules/_client_apis_assetdeliveryapi_.md#getassetversionbyassetidoptions) |

**Returns:** *Promise‹[GetAssetVersionByAssetId](../modules/_client_apis_assetdeliveryapi_.md#getassetversionbyassetid)›*

___

### <a id="getbatchassets" name="getbatchassets"></a>  getBatchAssets

▸ **getBatchAssets**(`options`: [GetBatchAssetsOptions](../modules/_client_apis_assetdeliveryapi_.md#getbatchassetsoptions)): *Promise‹[GetBatchAssets](../modules/_client_apis_assetdeliveryapi_.md#getbatchassets)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetBatchAssetsOptions](../modules/_client_apis_assetdeliveryapi_.md#getbatchassetsoptions) |

**Returns:** *Promise‹[GetBatchAssets](../modules/_client_apis_assetdeliveryapi_.md#getbatchassets)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
