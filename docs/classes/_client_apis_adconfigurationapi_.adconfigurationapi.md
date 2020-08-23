
# Class: AdConfigurationAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AdConfigurationAPI**

## Index

### Constructors

* [constructor](_client_apis_adconfigurationapi_.adconfigurationapi.md#constructor)

### Properties

* [client](_client_apis_adconfigurationapi_.adconfigurationapi.md#client)
* [options](_client_apis_adconfigurationapi_.adconfigurationapi.md#options)

### Methods

* [createAd](_client_apis_adconfigurationapi_.adconfigurationapi.md#createad)
* [getCreateAdMetaData](_client_apis_adconfigurationapi_.adconfigurationapi.md#getcreateadmetadata)
* [getSponsoredGames](_client_apis_adconfigurationapi_.adconfigurationapi.md#getsponsoredgames)
* [request](_client_apis_adconfigurationapi_.adconfigurationapi.md#request)
* [runAd](_client_apis_adconfigurationapi_.adconfigurationapi.md#runad)
* [stopAd](_client_apis_adconfigurationapi_.adconfigurationapi.md#stopad)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AdConfigurationAPI**(`client`: [Client](_client_client_.client.md)): *[AdConfigurationAPI](_client_apis_adconfigurationapi_.adconfigurationapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AdConfigurationAPI](_client_apis_adconfigurationapi_.adconfigurationapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="createad" name="createad"></a>  createAd

▸ **createAd**(`options`: [CreateAdOptions](../modules/_client_apis_adconfigurationapi_.md#createadoptions)): *Promise‹[CreateAd](../modules/_client_apis_adconfigurationapi_.md#createad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateAdOptions](../modules/_client_apis_adconfigurationapi_.md#createadoptions) |

**Returns:** *Promise‹[CreateAd](../modules/_client_apis_adconfigurationapi_.md#createad)›*

___

### <a id="getcreateadmetadata" name="getcreateadmetadata"></a>  getCreateAdMetaData

▸ **getCreateAdMetaData**(): *Promise‹[GetCreateAdMetaData](../modules/_client_apis_adconfigurationapi_.md#getcreateadmetadata)›*

**Returns:** *Promise‹[GetCreateAdMetaData](../modules/_client_apis_adconfigurationapi_.md#getcreateadmetadata)›*

___

### <a id="getsponsoredgames" name="getsponsoredgames"></a>  getSponsoredGames

▸ **getSponsoredGames**(`options`: [GetSponsoredGamesOptions](../modules/_client_apis_adconfigurationapi_.md#getsponsoredgamesoptions)): *Promise‹[GetSponsoredGames](../modules/_client_apis_adconfigurationapi_.md#getsponsoredgames)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSponsoredGamesOptions](../modules/_client_apis_adconfigurationapi_.md#getsponsoredgamesoptions) |

**Returns:** *Promise‹[GetSponsoredGames](../modules/_client_apis_adconfigurationapi_.md#getsponsoredgames)›*

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

### <a id="runad" name="runad"></a>  runAd

▸ **runAd**(`options`: [RunAdOptions](../modules/_client_apis_adconfigurationapi_.md#runadoptions)): *Promise‹[RunAd](../modules/_client_apis_adconfigurationapi_.md#runad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RunAdOptions](../modules/_client_apis_adconfigurationapi_.md#runadoptions) |

**Returns:** *Promise‹[RunAd](../modules/_client_apis_adconfigurationapi_.md#runad)›*

___

### <a id="stopad" name="stopad"></a>  stopAd

▸ **stopAd**(`options`: [StopAdOptions](../modules/_client_apis_adconfigurationapi_.md#stopadoptions)): *Promise‹[StopAd](../modules/_client_apis_adconfigurationapi_.md#stopad)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [StopAdOptions](../modules/_client_apis_adconfigurationapi_.md#stopadoptions) |

**Returns:** *Promise‹[StopAd](../modules/_client_apis_adconfigurationapi_.md#stopad)›*
