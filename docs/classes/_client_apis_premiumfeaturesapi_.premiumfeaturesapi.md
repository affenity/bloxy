
# Class: PremiumFeaturesAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **PremiumFeaturesAPI**

## Index

### Constructors

* [constructor](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#constructor)

### Properties

* [client](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#client)
* [options](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#options)

### Methods

* [premiumUpsellCheck](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#premiumupsellcheck)
* [request](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#request)
* [validateUserMembership](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md#validateusermembership)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PremiumFeaturesAPI**(`client`: [Client](_client_client_.client.md)): *[PremiumFeaturesAPI](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PremiumFeaturesAPI](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="premiumupsellcheck" name="premiumupsellcheck"></a>  premiumUpsellCheck

▸ **premiumUpsellCheck**(`options`: [PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions)): *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions) |

**Returns:** *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*

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

### <a id="validateusermembership" name="validateusermembership"></a>  validateUserMembership

▸ **validateUserMembership**(`options`: [ValidateUserMembershipOptions](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembershipoptions)): *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateUserMembershipOptions](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembershipoptions) |

**Returns:** *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*
