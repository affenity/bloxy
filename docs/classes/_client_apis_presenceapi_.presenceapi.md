
# Class: PresenceAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **PresenceAPI**

## Index

### Constructors

* [constructor](_client_apis_presenceapi_.presenceapi.md#constructor)

### Properties

* [client](_client_apis_presenceapi_.presenceapi.md#client)
* [options](_client_apis_presenceapi_.presenceapi.md#options)

### Methods

* [getUsersPresences](_client_apis_presenceapi_.presenceapi.md#getuserspresences)
* [registerAppPresence](_client_apis_presenceapi_.presenceapi.md#registerapppresence)
* [request](_client_apis_presenceapi_.presenceapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PresenceAPI**(`client`: [Client](_client_client_.client.md)): *[PresenceAPI](_client_apis_presenceapi_.presenceapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PresenceAPI](_client_apis_presenceapi_.presenceapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getuserspresences" name="getuserspresences"></a>  getUsersPresences

▸ **getUsersPresences**(`options`: [GetUsersPresencesOptions](../modules/_client_apis_presenceapi_.md#getuserspresencesoptions)): *Promise‹[GetUsersPresences](../modules/_client_apis_presenceapi_.md#getuserspresences)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUsersPresencesOptions](../modules/_client_apis_presenceapi_.md#getuserspresencesoptions) |

**Returns:** *Promise‹[GetUsersPresences](../modules/_client_apis_presenceapi_.md#getuserspresences)›*

___

### <a id="registerapppresence" name="registerapppresence"></a>  registerAppPresence

▸ **registerAppPresence**(`options`: [RegisterAppPresenceOptions](../modules/_client_apis_presenceapi_.md#registerapppresenceoptions)): *Promise‹[RegisterAppPresence](../modules/_client_apis_presenceapi_.md#registerapppresence)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterAppPresenceOptions](../modules/_client_apis_presenceapi_.md#registerapppresenceoptions) |

**Returns:** *Promise‹[RegisterAppPresence](../modules/_client_apis_presenceapi_.md#registerapppresence)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
