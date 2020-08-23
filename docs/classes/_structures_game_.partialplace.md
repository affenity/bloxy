
# Class: PartialPlace

## Hierarchy

* [BasePlace](_structures_game_.baseplace.md)

  ↳ **PartialPlace**

## Index

### Constructors

* [constructor](_structures_game_.partialplace.md#constructor)

### Properties

* [client](_structures_game_.partialplace.md#client)
* [id](_structures_game_.partialplace.md#id)
* [name](_structures_game_.partialplace.md#name)

### Methods

* [awardBadge](_structures_game_.partialplace.md#awardbadge)
* [getCompatibilities](_structures_game_.partialplace.md#getcompatibilities)
* [getGameServers](_structures_game_.partialplace.md#getgameservers)
* [getStatistics](_structures_game_.partialplace.md#getstatistics)
* [updatePlaceConfiguration](_structures_game_.partialplace.md#updateplaceconfiguration)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PartialPlace**(`data`: [PartialPlaceOptions](../interfaces/_structures_game_.partialplaceoptions.md), `client`: [Client](_client_client_.client.md)): *[PartialPlace](_structures_game_.partialplace.md)*

*Overrides [BasePlace](_structures_game_.baseplace.md).[constructor](_structures_game_.baseplace.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [PartialPlaceOptions](../interfaces/_structures_game_.partialplaceoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PartialPlace](_structures_game_.partialplace.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[client](_structures_game_.baseplace.md#client)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[id](_structures_game_.baseplace.md#id)*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[name](_structures_game_.baseplace.md#name)*

## Methods

### <a id="awardbadge" name="awardbadge"></a>  awardBadge

▸ **awardBadge**(`userId`: number, `badgeId`: number): *Promise‹boolean›*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[awardBadge](_structures_game_.baseplace.md#awardbadge)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |
`badgeId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="getcompatibilities" name="getcompatibilities"></a>  getCompatibilities

▸ **getCompatibilities**(): *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[getCompatibilities](_structures_game_.baseplace.md#getcompatibilities)*

**Returns:** *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

___

### <a id="getgameservers" name="getgameservers"></a>  getGameServers

▸ **getGameServers**(`options`: Omit‹[GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions), "placeId"›): *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[getGameServers](_structures_game_.baseplace.md#getgameservers)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions), "placeId"› |

**Returns:** *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

___

### <a id="getstatistics" name="getstatistics"></a>  getStatistics

▸ **getStatistics**(`options`: Omit‹[GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions), "placeId"›): *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[getStatistics](_structures_game_.baseplace.md#getstatistics)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions), "placeId"› |

**Returns:** *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

___

### <a id="updateplaceconfiguration" name="updateplaceconfiguration"></a>  updatePlaceConfiguration

▸ **updatePlaceConfiguration**(`options`: object): *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[updatePlaceConfiguration](_structures_game_.baseplace.md#updateplaceconfiguration)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`description` | string |
`name` | string |

**Returns:** *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*
