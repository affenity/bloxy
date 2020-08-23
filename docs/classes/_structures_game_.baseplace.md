
# Class: BasePlace

## Hierarchy

* **BasePlace**

  ↳ [Place](_structures_game_.place.md)

  ↳ [PartialPlace](_structures_game_.partialplace.md)

## Index

### Constructors

* [constructor](_structures_game_.baseplace.md#constructor)

### Properties

* [client](_structures_game_.baseplace.md#client)
* [id](_structures_game_.baseplace.md#id)
* [name](_structures_game_.baseplace.md#name)

### Methods

* [awardBadge](_structures_game_.baseplace.md#awardbadge)
* [getCompatibilities](_structures_game_.baseplace.md#getcompatibilities)
* [getGameServers](_structures_game_.baseplace.md#getgameservers)
* [getStatistics](_structures_game_.baseplace.md#getstatistics)
* [updatePlaceConfiguration](_structures_game_.baseplace.md#updateplaceconfiguration)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new BasePlace**(`options`: [BasePlaceOptions](../interfaces/_structures_game_.baseplaceoptions.md), `client`: [Client](_client_client_.client.md)): *[BasePlace](_structures_game_.baseplace.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BasePlaceOptions](../interfaces/_structures_game_.baseplaceoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[BasePlace](_structures_game_.baseplace.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

## Methods

### <a id="awardbadge" name="awardbadge"></a>  awardBadge

▸ **awardBadge**(`userId`: number, `badgeId`: number): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |
`badgeId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="getcompatibilities" name="getcompatibilities"></a>  getCompatibilities

▸ **getCompatibilities**(): *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

**Returns:** *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

___

### <a id="getgameservers" name="getgameservers"></a>  getGameServers

▸ **getGameServers**(`options`: Omit‹[GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions), "placeId"›): *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions), "placeId"› |

**Returns:** *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

___

### <a id="getstatistics" name="getstatistics"></a>  getStatistics

▸ **getStatistics**(`options`: Omit‹[GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions), "placeId"›): *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions), "placeId"› |

**Returns:** *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

___

### <a id="updateplaceconfiguration" name="updateplaceconfiguration"></a>  updatePlaceConfiguration

▸ **updatePlaceConfiguration**(`options`: object): *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`description` | string |
`name` | string |

**Returns:** *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*
