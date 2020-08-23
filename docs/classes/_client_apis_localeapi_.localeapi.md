
# Class: LocaleAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **LocaleAPI**

## Index

### Constructors

* [constructor](_client_apis_localeapi_.localeapi.md#constructor)

### Properties

* [client](_client_apis_localeapi_.localeapi.md#client)
* [options](_client_apis_localeapi_.localeapi.md#options)

### Methods

* [getCountryRegions](_client_apis_localeapi_.localeapi.md#getcountryregions)
* [getLocales](_client_apis_localeapi_.localeapi.md#getlocales)
* [getLocusSupportedLocales](_client_apis_localeapi_.localeapi.md#getlocussupportedlocales)
* [getSupportedLocales](_client_apis_localeapi_.localeapi.md#getsupportedlocales)
* [getUserLocale](_client_apis_localeapi_.localeapi.md#getuserlocale)
* [request](_client_apis_localeapi_.localeapi.md#request)
* [setUserLocale](_client_apis_localeapi_.localeapi.md#setuserlocale)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new LocaleAPI**(`client`: [Client](_client_client_.client.md)): *[LocaleAPI](_client_apis_localeapi_.localeapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[LocaleAPI](_client_apis_localeapi_.localeapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getcountryregions" name="getcountryregions"></a>  getCountryRegions

▸ **getCountryRegions**(`options`: [GetCountryRegionsOptions](../modules/_client_apis_localeapi_.md#getcountryregionsoptions)): *Promise‹[GetCountryRegions](../modules/_client_apis_localeapi_.md#getcountryregions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetCountryRegionsOptions](../modules/_client_apis_localeapi_.md#getcountryregionsoptions) |

**Returns:** *Promise‹[GetCountryRegions](../modules/_client_apis_localeapi_.md#getcountryregions)›*

___

### <a id="getlocales" name="getlocales"></a>  getLocales

▸ **getLocales**(`options`: [GetLocalesOptions](../modules/_client_apis_localeapi_.md#getlocalesoptions)): *Promise‹[GetLocales](../modules/_client_apis_localeapi_.md#getlocales)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetLocalesOptions](../modules/_client_apis_localeapi_.md#getlocalesoptions) |

**Returns:** *Promise‹[GetLocales](../modules/_client_apis_localeapi_.md#getlocales)›*

___

### <a id="getlocussupportedlocales" name="getlocussupportedlocales"></a>  getLocusSupportedLocales

▸ **getLocusSupportedLocales**(): *Promise‹[GetLocusSupportedLocales](../modules/_client_apis_localeapi_.md#getlocussupportedlocales)›*

**Returns:** *Promise‹[GetLocusSupportedLocales](../modules/_client_apis_localeapi_.md#getlocussupportedlocales)›*

___

### <a id="getsupportedlocales" name="getsupportedlocales"></a>  getSupportedLocales

▸ **getSupportedLocales**(): *Promise‹[GetSupportedLocales](../modules/_client_apis_localeapi_.md#getsupportedlocales)›*

**Returns:** *Promise‹[GetSupportedLocales](../modules/_client_apis_localeapi_.md#getsupportedlocales)›*

___

### <a id="getuserlocale" name="getuserlocale"></a>  getUserLocale

▸ **getUserLocale**(): *Promise‹[GetUserLocale](../modules/_client_apis_localeapi_.md#getuserlocale)›*

**Returns:** *Promise‹[GetUserLocale](../modules/_client_apis_localeapi_.md#getuserlocale)›*

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

### <a id="setuserlocale" name="setuserlocale"></a>  setUserLocale

▸ **setUserLocale**(`options`: [SetUserLocaleOptions](../modules/_client_apis_localeapi_.md#setuserlocaleoptions)): *Promise‹[SetUserLocale](../modules/_client_apis_localeapi_.md#setuserlocale)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetUserLocaleOptions](../modules/_client_apis_localeapi_.md#setuserlocaleoptions) |

**Returns:** *Promise‹[SetUserLocale](../modules/_client_apis_localeapi_.md#setuserlocale)›*
