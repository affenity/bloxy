
# Class: CaptchaAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **CaptchaAPI**

## Index

### Constructors

* [constructor](_client_apis_captchaapi_.captchaapi.md#constructor)

### Properties

* [client](_client_apis_captchaapi_.captchaapi.md#client)
* [options](_client_apis_captchaapi_.captchaapi.md#options)

### Methods

* [getCaptchaMetaData](_client_apis_captchaapi_.captchaapi.md#getcaptchametadata)
* [getLanguageResources](_client_apis_captchaapi_.captchaapi.md#getlanguageresources)
* [request](_client_apis_captchaapi_.captchaapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new CaptchaAPI**(`client`: [Client](_client_client_.client.md)): *[CaptchaAPI](_client_apis_captchaapi_.captchaapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[CaptchaAPI](_client_apis_captchaapi_.captchaapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getcaptchametadata" name="getcaptchametadata"></a>  getCaptchaMetaData

▸ **getCaptchaMetaData**(): *Promise‹[GetCaptchaMetadata](../modules/_client_apis_captchaapi_.md#getcaptchametadata)›*

**Returns:** *Promise‹[GetCaptchaMetadata](../modules/_client_apis_captchaapi_.md#getcaptchametadata)›*

___

### <a id="getlanguageresources" name="getlanguageresources"></a>  getLanguageResources

▸ **getLanguageResources**(): *Promise‹[GetLanguageResources](../modules/_client_apis_captchaapi_.md#getlanguageresources)›*

**Returns:** *Promise‹[GetLanguageResources](../modules/_client_apis_captchaapi_.md#getlanguageresources)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
