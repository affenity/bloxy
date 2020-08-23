
# Class: Place

## Hierarchy

* [BasePlace](_structures_game_.baseplace.md)

  ↳ **Place**

## Index

### Constructors

* [constructor](_structures_game_.place.md#constructor)

### Properties

* [client](_structures_game_.place.md#client)
* [creatorId](_structures_game_.place.md#creatorid)
* [creatorName](_structures_game_.place.md#creatorname)
* [description](_structures_game_.place.md#description)
* [id](_structures_game_.place.md#id)
* [imageToken](_structures_game_.place.md#imagetoken)
* [name](_structures_game_.place.md#name)
* [playable](_structures_game_.place.md#playable)
* [price](_structures_game_.place.md#price)
* [prohibited](_structures_game_.place.md#prohibited)
* [prohibitedReason](_structures_game_.place.md#prohibitedreason)
* [universe](_structures_game_.place.md#universe)
* [url](_structures_game_.place.md#url)

### Methods

* [awardBadge](_structures_game_.place.md#awardbadge)
* [getCompatibilities](_structures_game_.place.md#getcompatibilities)
* [getGameServers](_structures_game_.place.md#getgameservers)
* [getStatistics](_structures_game_.place.md#getstatistics)
* [updatePlaceConfiguration](_structures_game_.place.md#updateplaceconfiguration)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Place**(`data`: [PlaceOptions](../interfaces/_structures_game_.placeoptions.md), `client`: [Client](_client_client_.client.md)): *[Place](_structures_game_.place.md)*

*Overrides [BasePlace](_structures_game_.baseplace.md).[constructor](_structures_game_.baseplace.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [PlaceOptions](../interfaces/_structures_game_.placeoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[Place](_structures_game_.place.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[client](_structures_game_.baseplace.md#client)*

___

### <a id="creatorid" name="creatorid"></a>  creatorId

• **creatorId**: *number*

___

### <a id="creatorname" name="creatorname"></a>  creatorName

• **creatorName**: *string*

___

### <a id="description" name="description"></a>  description

• **description**: *string*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[id](_structures_game_.baseplace.md#id)*

___

### <a id="imagetoken" name="imagetoken"></a>  imageToken

• **imageToken**: *string*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

*Inherited from [BasePlace](_structures_game_.baseplace.md).[name](_structures_game_.baseplace.md#name)*

___

### <a id="playable" name="playable"></a>  playable

• **playable**: *boolean*

___

### <a id="price" name="price"></a>  price

• **price**: *number*

___

### <a id="prohibited" name="prohibited"></a>  prohibited

• **prohibited**: *boolean*

___

### <a id="prohibitedreason" name="prohibitedreason"></a>  prohibitedReason

• **prohibitedReason**: *string*

___

### <a id="universe" name="universe"></a>  universe

• **universe**: *[PartialGameUniverse](_structures_game_.partialgameuniverse.md)*

___

### <a id="url" name="url"></a>  url

• **url**: *string*

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
