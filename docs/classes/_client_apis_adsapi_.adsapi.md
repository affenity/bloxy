
# Class: AdsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AdsAPI**

## Index

### Constructors

* [constructor](_client_apis_adsapi_.adsapi.md#constructor)

### Properties

* [client](_client_apis_adsapi_.adsapi.md#client)
* [options](_client_apis_adsapi_.adsapi.md#options)

### Methods

* [createAssetAd](_client_apis_adsapi_.adsapi.md#createassetad)
* [createGamePassAd](_client_apis_adsapi_.adsapi.md#creategamepassad)
* [createGroupAd](_client_apis_adsapi_.adsapi.md#creategroupad)
* [request](_client_apis_adsapi_.adsapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AdsAPI**(`client`: [Client](_client_client_.client.md)): *[AdsAPI](_client_apis_adsapi_.adsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AdsAPI](_client_apis_adsapi_.adsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="createassetad" name="createassetad"></a>  createAssetAd

▸ **createAssetAd**(`options`: [CreateAssetAdOptions](../modules/_client_apis_adsapi_.md#createassetadoptions)): *Promise‹[CreateAssetAd](../modules/_client_apis_adsapi_.md#createassetad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateAssetAdOptions](../modules/_client_apis_adsapi_.md#createassetadoptions) |

**Returns:** *Promise‹[CreateAssetAd](../modules/_client_apis_adsapi_.md#createassetad)›*

___

### <a id="creategamepassad" name="creategamepassad"></a>  createGamePassAd

▸ **createGamePassAd**(`options`: [CreateGamePassAdOptions](../modules/_client_apis_adsapi_.md#creategamepassadoptions)): *Promise‹[CreateGamePassAd](../modules/_client_apis_adsapi_.md#creategamepassad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateGamePassAdOptions](../modules/_client_apis_adsapi_.md#creategamepassadoptions) |

**Returns:** *Promise‹[CreateGamePassAd](../modules/_client_apis_adsapi_.md#creategamepassad)›*

___

### <a id="creategroupad" name="creategroupad"></a>  createGroupAd

▸ **createGroupAd**(`options`: [CreateGroupAdOptions](../modules/_client_apis_adsapi_.md#creategroupadoptions)): *Promise‹[CreateAssetAd](../modules/_client_apis_adsapi_.md#createassetad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateGroupAdOptions](../modules/_client_apis_adsapi_.md#creategroupadoptions) |

**Returns:** *Promise‹[CreateAssetAd](../modules/_client_apis_adsapi_.md#createassetad)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
