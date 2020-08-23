
# Class: OtherAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **OtherAPI**

## Index

### Constructors

* [constructor](_client_apis_otherapi_.otherapi.md#constructor)

### Properties

* [client](_client_apis_otherapi_.otherapi.md#client)
* [options](_client_apis_otherapi_.otherapi.md#options)

### Methods

* [getUserProfileHeader](_client_apis_otherapi_.otherapi.md#getuserprofileheader)
* [request](_client_apis_otherapi_.otherapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new OtherAPI**(`client`: [Client](_client_client_.client.md)): *[OtherAPI](_client_apis_otherapi_.otherapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[OtherAPI](_client_apis_otherapi_.otherapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getuserprofileheader" name="getuserprofileheader"></a>  getUserProfileHeader

▸ **getUserProfileHeader**(`options`: [GetUserProfileHeaderOptions](../modules/_client_apis_otherapi_.md#getuserprofileheaderoptions)): *Promise‹[GetUserProfileHeader](../modules/_client_apis_otherapi_.md#getuserprofileheader)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserProfileHeaderOptions](../modules/_client_apis_otherapi_.md#getuserprofileheaderoptions) |

**Returns:** *Promise‹[GetUserProfileHeader](../modules/_client_apis_otherapi_.md#getuserprofileheader)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
