
# Class: FollowingsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **FollowingsAPI**

## Index

### Constructors

* [constructor](_client_apis_followingsapi_.followingsapi.md#constructor)

### Properties

* [client](_client_apis_followingsapi_.followingsapi.md#client)
* [options](_client_apis_followingsapi_.followingsapi.md#options)

### Methods

* [followUniverse](_client_apis_followingsapi_.followingsapi.md#followuniverse)
* [getUserFollowedUniverses](_client_apis_followingsapi_.followingsapi.md#getuserfolloweduniverses)
* [getUserFollowingUniverseStatus](_client_apis_followingsapi_.followingsapi.md#getuserfollowinguniversestatus)
* [request](_client_apis_followingsapi_.followingsapi.md#request)
* [unFollowUniverse](_client_apis_followingsapi_.followingsapi.md#unfollowuniverse)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new FollowingsAPI**(`client`: [Client](_client_client_.client.md)): *[FollowingsAPI](_client_apis_followingsapi_.followingsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[FollowingsAPI](_client_apis_followingsapi_.followingsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="followuniverse" name="followuniverse"></a>  followUniverse

▸ **followUniverse**(`options`: [FollowUniverseOptions](../modules/_client_apis_followingsapi_.md#followuniverseoptions)): *Promise‹[FollowUniverse](../modules/_client_apis_followingsapi_.md#followuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FollowUniverseOptions](../modules/_client_apis_followingsapi_.md#followuniverseoptions) |

**Returns:** *Promise‹[FollowUniverse](../modules/_client_apis_followingsapi_.md#followuniverse)›*

___

### <a id="getuserfolloweduniverses" name="getuserfolloweduniverses"></a>  getUserFollowedUniverses

▸ **getUserFollowedUniverses**(`options`: [GetUserFollowedUniversesOptions](../modules/_client_apis_followingsapi_.md#getuserfolloweduniversesoptions)): *Promise‹[GetUserFollowedUniverses](../modules/_client_apis_followingsapi_.md#getuserfolloweduniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowedUniversesOptions](../modules/_client_apis_followingsapi_.md#getuserfolloweduniversesoptions) |

**Returns:** *Promise‹[GetUserFollowedUniverses](../modules/_client_apis_followingsapi_.md#getuserfolloweduniverses)›*

___

### <a id="getuserfollowinguniversestatus" name="getuserfollowinguniversestatus"></a>  getUserFollowingUniverseStatus

▸ **getUserFollowingUniverseStatus**(`options`: [GetUserFollowingUniverseStatusOptions](../modules/_client_apis_followingsapi_.md#getuserfollowinguniversestatusoptions)): *Promise‹[GetUserFollowingUniverseStatus](../modules/_client_apis_followingsapi_.md#getuserfollowinguniversestatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowingUniverseStatusOptions](../modules/_client_apis_followingsapi_.md#getuserfollowinguniversestatusoptions) |

**Returns:** *Promise‹[GetUserFollowingUniverseStatus](../modules/_client_apis_followingsapi_.md#getuserfollowinguniversestatus)›*

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

### <a id="unfollowuniverse" name="unfollowuniverse"></a>  unFollowUniverse

▸ **unFollowUniverse**(`options`: [UnFollowUniverseOptions](../modules/_client_apis_followingsapi_.md#unfollowuniverseoptions)): *Promise‹[UnFollowUniverse](../modules/_client_apis_followingsapi_.md#unfollowuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnFollowUniverseOptions](../modules/_client_apis_followingsapi_.md#unfollowuniverseoptions) |

**Returns:** *Promise‹[UnFollowUniverse](../modules/_client_apis_followingsapi_.md#unfollowuniverse)›*
