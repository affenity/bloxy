
# Class: GamesAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **GamesAPI**

## Index

### Constructors

* [constructor](_client_apis_gamesapi_.gamesapi.md#constructor)

### Properties

* [client](_client_apis_gamesapi_.gamesapi.md#client)
* [options](_client_apis_gamesapi_.gamesapi.md#options)

### Methods

* [canSelfInviteUserToVIPServer](_client_apis_gamesapi_.gamesapi.md#canselfinviteusertovipserver)
* [createVIPServer](_client_apis_gamesapi_.gamesapi.md#createvipserver)
* [getGameFavoriteCount](_client_apis_gamesapi_.gamesapi.md#getgamefavoritecount)
* [getGameGamePasses](_client_apis_gamesapi_.gamesapi.md#getgamegamepasses)
* [getGameRecommendationsByAlgorithm](_client_apis_gamesapi_.gamesapi.md#getgamerecommendationsbyalgorithm)
* [getGameRecommendationsByGame](_client_apis_gamesapi_.gamesapi.md#getgamerecommendationsbygame)
* [getGameServersByType](_client_apis_gamesapi_.gamesapi.md#getgameserversbytype)
* [getGameSorts](_client_apis_gamesapi_.gamesapi.md#getgamesorts)
* [getGames](_client_apis_gamesapi_.gamesapi.md#getgames)
* [getGamesProductInfo](_client_apis_gamesapi_.gamesapi.md#getgamesproductinfo)
* [getGamesVotes](_client_apis_gamesapi_.gamesapi.md#getgamesvotes)
* [getMultiGamesPlayabilityStatus](_client_apis_gamesapi_.gamesapi.md#getmultigamesplayabilitystatus)
* [getMultiPlaces](_client_apis_gamesapi_.gamesapi.md#getmultiplaces)
* [getSelfGameVote](_client_apis_gamesapi_.gamesapi.md#getselfgamevote)
* [getVIPServer](_client_apis_gamesapi_.gamesapi.md#getvipserver)
* [isGameFavorited](_client_apis_gamesapi_.gamesapi.md#isgamefavorited)
* [listGames](_client_apis_gamesapi_.gamesapi.md#listgames)
* [request](_client_apis_gamesapi_.gamesapi.md#request)
* [setSelfGameVote](_client_apis_gamesapi_.gamesapi.md#setselfgamevote)
* [toggleGameFavorite](_client_apis_gamesapi_.gamesapi.md#togglegamefavorite)
* [updateVIPServer](_client_apis_gamesapi_.gamesapi.md#updatevipserver)
* [updateVIPServerPermissions](_client_apis_gamesapi_.gamesapi.md#updatevipserverpermissions)
* [updateVIPServerSubscription](_client_apis_gamesapi_.gamesapi.md#updatevipserversubscription)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GamesAPI**(`client`: [Client](_client_client_.client.md)): *[GamesAPI](_client_apis_gamesapi_.gamesapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GamesAPI](_client_apis_gamesapi_.gamesapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="canselfinviteusertovipserver" name="canselfinviteusertovipserver"></a>  canSelfInviteUserToVIPServer

▸ **canSelfInviteUserToVIPServer**(`options`: [CanSelfInviteUserToVIPServerOptions](../modules/_client_apis_gamesapi_.md#canselfinviteusertovipserveroptions)): *Promise‹[CanSelfInviteUserToVIPServer](../modules/_client_apis_gamesapi_.md#canselfinviteusertovipserver)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CanSelfInviteUserToVIPServerOptions](../modules/_client_apis_gamesapi_.md#canselfinviteusertovipserveroptions) |

**Returns:** *Promise‹[CanSelfInviteUserToVIPServer](../modules/_client_apis_gamesapi_.md#canselfinviteusertovipserver)›*

___

### <a id="createvipserver" name="createvipserver"></a>  createVIPServer

▸ **createVIPServer**(`options`: [CreateVIPServerOptions](../modules/_client_apis_gamesapi_.md#createvipserveroptions)): *Promise‹[CreateVIPServer](../modules/_client_apis_gamesapi_.md#createvipserver)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateVIPServerOptions](../modules/_client_apis_gamesapi_.md#createvipserveroptions) |

**Returns:** *Promise‹[CreateVIPServer](../modules/_client_apis_gamesapi_.md#createvipserver)›*

___

### <a id="getgamefavoritecount" name="getgamefavoritecount"></a>  getGameFavoriteCount

▸ **getGameFavoriteCount**(`options`: [GetGameFavoriteCountOptions](../modules/_client_apis_gamesapi_.md#getgamefavoritecountoptions)): *Promise‹[GetGameFavoriteCount](../modules/_client_apis_gamesapi_.md#getgamefavoritecount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameFavoriteCountOptions](../modules/_client_apis_gamesapi_.md#getgamefavoritecountoptions) |

**Returns:** *Promise‹[GetGameFavoriteCount](../modules/_client_apis_gamesapi_.md#getgamefavoritecount)›*

___

### <a id="getgamegamepasses" name="getgamegamepasses"></a>  getGameGamePasses

▸ **getGameGamePasses**(`options`: [GetGameGamePassesOptions](../modules/_client_apis_gamesapi_.md#getgamegamepassesoptions)): *Promise‹[GetGameGamePasses](../modules/_client_apis_gamesapi_.md#getgamegamepasses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameGamePassesOptions](../modules/_client_apis_gamesapi_.md#getgamegamepassesoptions) |

**Returns:** *Promise‹[GetGameGamePasses](../modules/_client_apis_gamesapi_.md#getgamegamepasses)›*

___

### <a id="getgamerecommendationsbyalgorithm" name="getgamerecommendationsbyalgorithm"></a>  getGameRecommendationsByAlgorithm

▸ **getGameRecommendationsByAlgorithm**(`options`: [GetGameRecommendationsByAlgorithmOptions](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithmoptions)): *Promise‹[GetGameRecommendationsByAlgorithm](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithm)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameRecommendationsByAlgorithmOptions](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithmoptions) |

**Returns:** *Promise‹[GetGameRecommendationsByAlgorithm](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithm)›*

___

### <a id="getgamerecommendationsbygame" name="getgamerecommendationsbygame"></a>  getGameRecommendationsByGame

▸ **getGameRecommendationsByGame**(`options`: [GetGameRecommendationsByGameOptions](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbygameoptions)): *Promise‹[GetGameRecommendationsByGame](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbygame)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameRecommendationsByGameOptions](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbygameoptions) |

**Returns:** *Promise‹[GetGameRecommendationsByGame](../modules/_client_apis_gamesapi_.md#getgamerecommendationsbygame)›*

___

### <a id="getgameserversbytype" name="getgameserversbytype"></a>  getGameServersByType

▸ **getGameServersByType**(`options`: [GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions)): *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameServersByTypeOptions](../modules/_client_apis_gamesapi_.md#getgameserversbytypeoptions) |

**Returns:** *Promise‹[GetGameServersByType](../modules/_client_apis_gamesapi_.md#getgameserversbytype)›*

___

### <a id="getgamesorts" name="getgamesorts"></a>  getGameSorts

▸ **getGameSorts**(`options`: [GetGameSortsOptions](../modules/_client_apis_gamesapi_.md#getgamesortsoptions)): *Promise‹[GetGameSorts](../modules/_client_apis_gamesapi_.md#getgamesorts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameSortsOptions](../modules/_client_apis_gamesapi_.md#getgamesortsoptions) |

**Returns:** *Promise‹[GetGameSorts](../modules/_client_apis_gamesapi_.md#getgamesorts)›*

___

### <a id="getgames" name="getgames"></a>  getGames

▸ **getGames**(`options`: [GetGameUniversesOptions](../modules/_client_apis_gamesapi_.md#getgameuniversesoptions)): *Promise‹[GetGameUniverses](../modules/_client_apis_gamesapi_.md#getgameuniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameUniversesOptions](../modules/_client_apis_gamesapi_.md#getgameuniversesoptions) |

**Returns:** *Promise‹[GetGameUniverses](../modules/_client_apis_gamesapi_.md#getgameuniverses)›*

___

### <a id="getgamesproductinfo" name="getgamesproductinfo"></a>  getGamesProductInfo

▸ **getGamesProductInfo**(`options`: [GetGamesProductInfoOptions](../modules/_client_apis_gamesapi_.md#getgamesproductinfooptions)): *Promise‹[GameGamesProductInfo](../modules/_client_apis_gamesapi_.md#gamegamesproductinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGamesProductInfoOptions](../modules/_client_apis_gamesapi_.md#getgamesproductinfooptions) |

**Returns:** *Promise‹[GameGamesProductInfo](../modules/_client_apis_gamesapi_.md#gamegamesproductinfo)›*

___

### <a id="getgamesvotes" name="getgamesvotes"></a>  getGamesVotes

▸ **getGamesVotes**(`options`: [GetGamesVotesOptions](../modules/_client_apis_gamesapi_.md#getgamesvotesoptions)): *Promise‹[GetGamesVotes](../modules/_client_apis_gamesapi_.md#getgamesvotes)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGamesVotesOptions](../modules/_client_apis_gamesapi_.md#getgamesvotesoptions) |

**Returns:** *Promise‹[GetGamesVotes](../modules/_client_apis_gamesapi_.md#getgamesvotes)›*

___

### <a id="getmultigamesplayabilitystatus" name="getmultigamesplayabilitystatus"></a>  getMultiGamesPlayabilityStatus

▸ **getMultiGamesPlayabilityStatus**(`options`: [MultiGetGameUniversesPlayabilityOptions](../modules/_client_apis_gamesapi_.md#multigetgameuniversesplayabilityoptions)): *Promise‹[MultiGetGameUniversesPlayability](../modules/_client_apis_gamesapi_.md#multigetgameuniversesplayability)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MultiGetGameUniversesPlayabilityOptions](../modules/_client_apis_gamesapi_.md#multigetgameuniversesplayabilityoptions) |

**Returns:** *Promise‹[MultiGetGameUniversesPlayability](../modules/_client_apis_gamesapi_.md#multigetgameuniversesplayability)›*

___

### <a id="getmultiplaces" name="getmultiplaces"></a>  getMultiPlaces

▸ **getMultiPlaces**(`options`: [MultiGetPlacesOptions](../modules/_client_apis_gamesapi_.md#multigetplacesoptions)): *Promise‹[MultiGetPlaces](../modules/_client_apis_gamesapi_.md#multigetplaces)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MultiGetPlacesOptions](../modules/_client_apis_gamesapi_.md#multigetplacesoptions) |

**Returns:** *Promise‹[MultiGetPlaces](../modules/_client_apis_gamesapi_.md#multigetplaces)›*

___

### <a id="getselfgamevote" name="getselfgamevote"></a>  getSelfGameVote

▸ **getSelfGameVote**(`options`: [GetSelfUniverseVoteStatusOptions](../modules/_client_apis_gamesapi_.md#getselfuniversevotestatusoptions)): *Promise‹[GetSelfUniverseVoteStatus](../modules/_client_apis_gamesapi_.md#getselfuniversevotestatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfUniverseVoteStatusOptions](../modules/_client_apis_gamesapi_.md#getselfuniversevotestatusoptions) |

**Returns:** *Promise‹[GetSelfUniverseVoteStatus](../modules/_client_apis_gamesapi_.md#getselfuniversevotestatus)›*

___

### <a id="getvipserver" name="getvipserver"></a>  getVIPServer

▸ **getVIPServer**(`options`: [GetVIPServerOptions](../modules/_client_apis_gamesapi_.md#getvipserveroptions)): *Promise‹[GetVIPServer](../modules/_client_apis_gamesapi_.md#getvipserver)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetVIPServerOptions](../modules/_client_apis_gamesapi_.md#getvipserveroptions) |

**Returns:** *Promise‹[GetVIPServer](../modules/_client_apis_gamesapi_.md#getvipserver)›*

___

### <a id="isgamefavorited" name="isgamefavorited"></a>  isGameFavorited

▸ **isGameFavorited**(`options`: [IsGameFavoritedOptions](../modules/_client_apis_gamesapi_.md#isgamefavoritedoptions)): *Promise‹[IsGameFavorited](../modules/_client_apis_gamesapi_.md#isgamefavorited)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IsGameFavoritedOptions](../modules/_client_apis_gamesapi_.md#isgamefavoritedoptions) |

**Returns:** *Promise‹[IsGameFavorited](../modules/_client_apis_gamesapi_.md#isgamefavorited)›*

___

### <a id="listgames" name="listgames"></a>  listGames

▸ **listGames**(`options`: [ListGamesOptions](../modules/_client_apis_gamesapi_.md#listgamesoptions)): *Promise‹[ListGames](../modules/_client_apis_gamesapi_.md#listgames)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ListGamesOptions](../modules/_client_apis_gamesapi_.md#listgamesoptions) |

**Returns:** *Promise‹[ListGames](../modules/_client_apis_gamesapi_.md#listgames)›*

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

### <a id="setselfgamevote" name="setselfgamevote"></a>  setSelfGameVote

▸ **setSelfGameVote**(`options`: [SetSelfGameVoteOptions](../modules/_client_apis_gamesapi_.md#setselfgamevoteoptions)): *Promise‹[SetSelfGameVote](../modules/_client_apis_gamesapi_.md#setselfgamevote)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetSelfGameVoteOptions](../modules/_client_apis_gamesapi_.md#setselfgamevoteoptions) |

**Returns:** *Promise‹[SetSelfGameVote](../modules/_client_apis_gamesapi_.md#setselfgamevote)›*

___

### <a id="togglegamefavorite" name="togglegamefavorite"></a>  toggleGameFavorite

▸ **toggleGameFavorite**(`options`: [ToggleGameFavoriteOptions](../modules/_client_apis_gamesapi_.md#togglegamefavoriteoptions)): *Promise‹[ToggleGameFavorite](../modules/_client_apis_gamesapi_.md#togglegamefavorite)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ToggleGameFavoriteOptions](../modules/_client_apis_gamesapi_.md#togglegamefavoriteoptions) |

**Returns:** *Promise‹[ToggleGameFavorite](../modules/_client_apis_gamesapi_.md#togglegamefavorite)›*

___

### <a id="updatevipserver" name="updatevipserver"></a>  updateVIPServer

▸ **updateVIPServer**(`options`: [UpdateVIPServerOptions](../modules/_client_apis_gamesapi_.md#updatevipserveroptions)): *Promise‹[UpdateVIPServer](../modules/_client_apis_gamesapi_.md#updatevipserver)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateVIPServerOptions](../modules/_client_apis_gamesapi_.md#updatevipserveroptions) |

**Returns:** *Promise‹[UpdateVIPServer](../modules/_client_apis_gamesapi_.md#updatevipserver)›*

___

### <a id="updatevipserverpermissions" name="updatevipserverpermissions"></a>  updateVIPServerPermissions

▸ **updateVIPServerPermissions**(`options`: [UpdateVIPServerPermissionsOptions](../modules/_client_apis_gamesapi_.md#updatevipserverpermissionsoptions)): *Promise‹[UpdateVIPServerPermissions](../modules/_client_apis_gamesapi_.md#updatevipserverpermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateVIPServerPermissionsOptions](../modules/_client_apis_gamesapi_.md#updatevipserverpermissionsoptions) |

**Returns:** *Promise‹[UpdateVIPServerPermissions](../modules/_client_apis_gamesapi_.md#updatevipserverpermissions)›*

___

### <a id="updatevipserversubscription" name="updatevipserversubscription"></a>  updateVIPServerSubscription

▸ **updateVIPServerSubscription**(`options`: [UpdateVIPServerSubscriptionOptions](../modules/_client_apis_gamesapi_.md#updatevipserversubscriptionoptions)): *Promise‹[UpdateVIPServerSubscription](../modules/_client_apis_gamesapi_.md#updatevipserversubscription)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateVIPServerSubscriptionOptions](../modules/_client_apis_gamesapi_.md#updatevipserversubscriptionoptions) |

**Returns:** *Promise‹[UpdateVIPServerSubscription](../modules/_client_apis_gamesapi_.md#updatevipserversubscription)›*
