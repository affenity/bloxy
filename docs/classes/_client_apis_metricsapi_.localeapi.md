
# Class: LocaleAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **LocaleAPI**

## Index

### Constructors

* [constructor](_client_apis_metricsapi_.localeapi.md#constructor)

### Properties

* [client](_client_apis_metricsapi_.localeapi.md#client)
* [options](_client_apis_metricsapi_.localeapi.md#options)

### Methods

* [getThumbnailsMetaData](_client_apis_metricsapi_.localeapi.md#getthumbnailsmetadata)
* [recordBundleLoad](_client_apis_metricsapi_.localeapi.md#recordbundleload)
* [recordThumbnailLoad](_client_apis_metricsapi_.localeapi.md#recordthumbnailload)
* [request](_client_apis_metricsapi_.localeapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new LocaleAPI**(`client`: [Client](_client_client_.client.md)): *[LocaleAPI](_client_apis_metricsapi_.localeapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[LocaleAPI](_client_apis_metricsapi_.localeapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getthumbnailsmetadata" name="getthumbnailsmetadata"></a>  getThumbnailsMetaData

▸ **getThumbnailsMetaData**(): *Promise‹[GetThumbnailsMetaData](../modules/_client_apis_metricsapi_.md#getthumbnailsmetadata)›*

**Returns:** *Promise‹[GetThumbnailsMetaData](../modules/_client_apis_metricsapi_.md#getthumbnailsmetadata)›*

___

### <a id="recordbundleload" name="recordbundleload"></a>  recordBundleLoad

▸ **recordBundleLoad**(`options`: [RecordBundleLoadOptions](../modules/_client_apis_metricsapi_.md#recordbundleloadoptions)): *Promise‹[RecordBundleLoad](../modules/_client_apis_metricsapi_.md#recordbundleload)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RecordBundleLoadOptions](../modules/_client_apis_metricsapi_.md#recordbundleloadoptions) |

**Returns:** *Promise‹[RecordBundleLoad](../modules/_client_apis_metricsapi_.md#recordbundleload)›*

___

### <a id="recordthumbnailload" name="recordthumbnailload"></a>  recordThumbnailLoad

▸ **recordThumbnailLoad**(`options`: [RecordThumbnailLoadOptions](../modules/_client_apis_metricsapi_.md#recordthumbnailloadoptions)): *Promise‹[RecordThumbnailLoad](../modules/_client_apis_metricsapi_.md#recordthumbnailload)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RecordThumbnailLoadOptions](../modules/_client_apis_metricsapi_.md#recordthumbnailloadoptions) |

**Returns:** *Promise‹[RecordThumbnailLoad](../modules/_client_apis_metricsapi_.md#recordthumbnailload)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
