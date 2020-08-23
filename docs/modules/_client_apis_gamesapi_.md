
# Module: "client/apis/GamesAPI"

## Index

### Classes

* [GamesAPI](../classes/_client_apis_gamesapi_.gamesapi.md)

### Type aliases

* [CanSelfInviteUserToVIPServer](_client_apis_gamesapi_.md#canselfinviteusertovipserver)
* [CanSelfInviteUserToVIPServerOptions](_client_apis_gamesapi_.md#canselfinviteusertovipserveroptions)
* [CreateVIPServer](_client_apis_gamesapi_.md#createvipserver)
* [CreateVIPServerOptions](_client_apis_gamesapi_.md#createvipserveroptions)
* [GameGamesProductInfo](_client_apis_gamesapi_.md#gamegamesproductinfo)
* [GameServer](_client_apis_gamesapi_.md#gameserver)
* [GetGameFavoriteCount](_client_apis_gamesapi_.md#getgamefavoritecount)
* [GetGameFavoriteCountOptions](_client_apis_gamesapi_.md#getgamefavoritecountoptions)
* [GetGameGamePasses](_client_apis_gamesapi_.md#getgamegamepasses)
* [GetGameGamePassesOptions](_client_apis_gamesapi_.md#getgamegamepassesoptions)
* [GetGameRecommendationsByAlgorithm](_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithm)
* [GetGameRecommendationsByAlgorithmOptions](_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithmoptions)
* [GetGameRecommendationsByGame](_client_apis_gamesapi_.md#getgamerecommendationsbygame)
* [GetGameRecommendationsByGameOptions](_client_apis_gamesapi_.md#getgamerecommendationsbygameoptions)
* [GetGameServersByType](_client_apis_gamesapi_.md#getgameserversbytype)
* [GetGameServersByTypeOptions](_client_apis_gamesapi_.md#getgameserversbytypeoptions)
* [GetGameSorts](_client_apis_gamesapi_.md#getgamesorts)
* [GetGameSortsOptions](_client_apis_gamesapi_.md#getgamesortsoptions)
* [GetGameUniverses](_client_apis_gamesapi_.md#getgameuniverses)
* [GetGameUniversesOptions](_client_apis_gamesapi_.md#getgameuniversesoptions)
* [GetGamesProductInfoOptions](_client_apis_gamesapi_.md#getgamesproductinfooptions)
* [GetGamesVotes](_client_apis_gamesapi_.md#getgamesvotes)
* [GetGamesVotesOptions](_client_apis_gamesapi_.md#getgamesvotesoptions)
* [GetSelfUniverseVoteStatus](_client_apis_gamesapi_.md#getselfuniversevotestatus)
* [GetSelfUniverseVoteStatusOptions](_client_apis_gamesapi_.md#getselfuniversevotestatusoptions)
* [GetVIPServer](_client_apis_gamesapi_.md#getvipserver)
* [GetVIPServerOptions](_client_apis_gamesapi_.md#getvipserveroptions)
* [IsGameFavorited](_client_apis_gamesapi_.md#isgamefavorited)
* [IsGameFavoritedOptions](_client_apis_gamesapi_.md#isgamefavoritedoptions)
* [ListGames](_client_apis_gamesapi_.md#listgames)
* [ListGamesOptions](_client_apis_gamesapi_.md#listgamesoptions)
* [MultiGetGameUniversesPlayability](_client_apis_gamesapi_.md#multigetgameuniversesplayability)
* [MultiGetGameUniversesPlayabilityOptions](_client_apis_gamesapi_.md#multigetgameuniversesplayabilityoptions)
* [MultiGetPlaces](_client_apis_gamesapi_.md#multigetplaces)
* [MultiGetPlacesOptions](_client_apis_gamesapi_.md#multigetplacesoptions)
* [SetSelfGameVote](_client_apis_gamesapi_.md#setselfgamevote)
* [SetSelfGameVoteOptions](_client_apis_gamesapi_.md#setselfgamevoteoptions)
* [ToggleGameFavorite](_client_apis_gamesapi_.md#togglegamefavorite)
* [ToggleGameFavoriteOptions](_client_apis_gamesapi_.md#togglegamefavoriteoptions)
* [UpdateVIPServer](_client_apis_gamesapi_.md#updatevipserver)
* [UpdateVIPServerOptions](_client_apis_gamesapi_.md#updatevipserveroptions)
* [UpdateVIPServerPermissions](_client_apis_gamesapi_.md#updatevipserverpermissions)
* [UpdateVIPServerPermissionsOptions](_client_apis_gamesapi_.md#updatevipserverpermissionsoptions)
* [UpdateVIPServerSubscription](_client_apis_gamesapi_.md#updatevipserversubscription)
* [UpdateVIPServerSubscriptionOptions](_client_apis_gamesapi_.md#updatevipserversubscriptionoptions)

## Type aliases

### <a id="canselfinviteusertovipserver" name="canselfinviteusertovipserver"></a>  CanSelfInviteUserToVIPServer

Ƭ **CanSelfInviteUserToVIPServer**: *object*

#### Type declaration:

* **canInvite**: *boolean*

___

### <a id="canselfinviteusertovipserveroptions" name="canselfinviteusertovipserveroptions"></a>  CanSelfInviteUserToVIPServerOptions

Ƭ **CanSelfInviteUserToVIPServerOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="createvipserver" name="createvipserver"></a>  CreateVIPServer

Ƭ **CreateVIPServer**: *[GameServer](_client_apis_gamesapi_.md#gameserver)*

___

### <a id="createvipserveroptions" name="createvipserveroptions"></a>  CreateVIPServerOptions

Ƭ **CreateVIPServerOptions**: *object*

#### Type declaration:

* **expectedPrice**: *number*

* **name**: *string*

* **universeId**: *number*

___

### <a id="gamegamesproductinfo" name="gamegamesproductinfo"></a>  GameGamesProductInfo

Ƭ **GameGamesProductInfo**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="gameserver" name="gameserver"></a>  GameServer

Ƭ **GameServer**: *object*

#### Type declaration:

* **accessCode**: *string*

* **fps**: *number*

* **id**: *string*

* **maxPlayers**: *number*

* **name**: *string*

* **ping**: *number*

* **playing**: *number*

* **vipServerId**: *number*

___

### <a id="getgamefavoritecount" name="getgamefavoritecount"></a>  GetGameFavoriteCount

Ƭ **GetGameFavoriteCount**: *object*

#### Type declaration:

* **favoritesCount**: *number*

___

### <a id="getgamefavoritecountoptions" name="getgamefavoritecountoptions"></a>  GetGameFavoriteCountOptions

Ƭ **GetGameFavoriteCountOptions**: *object*

#### Type declaration:

* **universeId**: *number*

___

### <a id="getgamegamepasses" name="getgamegamepasses"></a>  GetGameGamePasses

Ƭ **GetGameGamePasses**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getgamegamepassesoptions" name="getgamegamepassesoptions"></a>  GetGameGamePassesOptions

Ƭ **GetGameGamePassesOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **universeId**: *number*

___

### <a id="getgamerecommendationsbyalgorithm" name="getgamerecommendationsbyalgorithm"></a>  GetGameRecommendationsByAlgorithm

Ƭ **GetGameRecommendationsByAlgorithm**: *object*

#### Type declaration:

* **games**: *ListGames["games"]*

* **nextPaginationKey**: *string | null*

___

### <a id="getgamerecommendationsbyalgorithmoptions" name="getgamerecommendationsbyalgorithmoptions"></a>  GetGameRecommendationsByAlgorithmOptions

Ƭ **GetGameRecommendationsByAlgorithmOptions**: *object*

#### Type declaration:

* **algorithmName**: *string*

* **maxRows**? : *undefined | number*

* **paginationKey**? : *undefined | string*

___

### <a id="getgamerecommendationsbygame" name="getgamerecommendationsbygame"></a>  GetGameRecommendationsByGame

Ƭ **GetGameRecommendationsByGame**: *[GetGameRecommendationsByAlgorithm](_client_apis_gamesapi_.md#getgamerecommendationsbyalgorithm)*

___

### <a id="getgamerecommendationsbygameoptions" name="getgamerecommendationsbygameoptions"></a>  GetGameRecommendationsByGameOptions

Ƭ **GetGameRecommendationsByGameOptions**: *object*

#### Type declaration:

* **maxRows**? : *undefined | number*

* **paginationKey**? : *undefined | string*

* **universeId**: *number*

___

### <a id="getgameserversbytype" name="getgameserversbytype"></a>  GetGameServersByType

Ƭ **GetGameServersByType**: *object*

#### Type declaration:

* **data**: *[GameServer](_client_apis_gamesapi_.md#gameserver)[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getgameserversbytypeoptions" name="getgameserversbytypeoptions"></a>  GetGameServersByTypeOptions

Ƭ **GetGameServersByTypeOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **placeId**: *number*

* **serverType**: *"Public" | "Friend" | "VIP"*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="getgamesorts" name="getgamesorts"></a>  GetGameSorts

Ƭ **GetGameSorts**: *object*

#### Type declaration:

* **genreFilters**: *object[]*

* **pageContext**(): *object*

  * **isSeeAllPage**: *boolean*

  * **pageId**: *string*

* **sorts**: *object[]*

* **timeFilters**: *object[]*

___

### <a id="getgamesortsoptions" name="getgamesortsoptions"></a>  GetGameSortsOptions

Ƭ **GetGameSortsOptions**: *object*

#### Type declaration:

* **gameSortsContext**? : *"GamesDefaultSorts" | "GamesAllSorts" | "HomeSorts" | "ChatSorts" | "UnifiedHomeSorts" | "GamesPageAbTestSorts1" | "GamesPageAbTestSorts2"*

___

### <a id="getgameuniverses" name="getgameuniverses"></a>  GetGameUniverses

Ƭ **GetGameUniverses**: *[GameUniverseOptions](../interfaces/_structures_game_.gameuniverseoptions.md)[]*

___

### <a id="getgameuniversesoptions" name="getgameuniversesoptions"></a>  GetGameUniversesOptions

Ƭ **GetGameUniversesOptions**: *object*

#### Type declaration:

* **universeIds**: *number[]*

___

### <a id="getgamesproductinfooptions" name="getgamesproductinfooptions"></a>  GetGamesProductInfoOptions

Ƭ **GetGamesProductInfoOptions**: *object*

#### Type declaration:

* **universeIds**: *number[]*

___

### <a id="getgamesvotes" name="getgamesvotes"></a>  GetGamesVotes

Ƭ **GetGamesVotes**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getgamesvotesoptions" name="getgamesvotesoptions"></a>  GetGamesVotesOptions

Ƭ **GetGamesVotesOptions**: *object*

#### Type declaration:

* **universeIds**: *number[]*

___

### <a id="getselfuniversevotestatus" name="getselfuniversevotestatus"></a>  GetSelfUniverseVoteStatus

Ƭ **GetSelfUniverseVoteStatus**: *object*

#### Type declaration:

* **canVote**: *boolean*

* **reasonForNotVoteable**: *string*

* **userVote**: *boolean*

___

### <a id="getselfuniversevotestatusoptions" name="getselfuniversevotestatusoptions"></a>  GetSelfUniverseVoteStatusOptions

Ƭ **GetSelfUniverseVoteStatusOptions**: *object*

#### Type declaration:

* **universeId**: *number*

___

### <a id="getvipserver" name="getvipserver"></a>  GetVIPServer

Ƭ **GetVIPServer**: *[VIPServerOptions](../interfaces/_structures_game_.vipserveroptions.md)*

___

### <a id="getvipserveroptions" name="getvipserveroptions"></a>  GetVIPServerOptions

Ƭ **GetVIPServerOptions**: *object*

#### Type declaration:

* **id**: *number*

___

### <a id="isgamefavorited" name="isgamefavorited"></a>  IsGameFavorited

Ƭ **IsGameFavorited**: *object*

#### Type declaration:

* **isFavorited**: *boolean*

___

### <a id="isgamefavoritedoptions" name="isgamefavoritedoptions"></a>  IsGameFavoritedOptions

Ƭ **IsGameFavoritedOptions**: *object*

#### Type declaration:

* **universeId**: *number*

___

### <a id="listgames" name="listgames"></a>  ListGames

Ƭ **ListGames**: *object*

#### Type declaration:

* **algorithm**: *string*

* **algorithmQueryType**: *string*

* **correctedKeyword**: *string*

* **cutOffIndex**: *number*

* **emphasis**: *boolean*

* **featuredSearchUniverseId**: *number*

* **filteredKeyword**: *string*

* **games**: *object[]*

* **hasMoreRows**: *boolean*

* **nextPageExclusiveStartId**: *number*

* **suggestedKeyword**: *string*

* **suggestionAlgorithm**: *string*

___

### <a id="listgamesoptions" name="listgamesoptions"></a>  ListGamesOptions

Ƭ **ListGamesOptions**: *object*

#### Type declaration:

* **contextCountryRegionId**? : *undefined | number*

* **contextUniverseId**? : *undefined | number*

* **exclusiveStartId**? : *undefined | number*

* **gameFilter**? : *undefined | string*

* **gameSetTargetId**? : *undefined | number*

* **genreFilter**? : *undefined | string*

* **isKeywordSuggestionEnabled**? : *undefined | false | true*

* **keyword**? : *undefined | string*

* **maxRows**? : *undefined | number*

* **pageContextPageId**? : *undefined | number*

* **pageContextSeeAll**? : *undefined | false | true*

* **sortOrder**? : *undefined | string*

* **sortPosition**? : *undefined | number*

* **sortToken**? : *undefined | string*

* **startRows**? : *undefined | number*

* **timeFilter**? : *undefined | string*

___

### <a id="multigetgameuniversesplayability" name="multigetgameuniversesplayability"></a>  MultiGetGameUniversesPlayability

Ƭ **MultiGetGameUniversesPlayability**: *object[]*

___

### <a id="multigetgameuniversesplayabilityoptions" name="multigetgameuniversesplayabilityoptions"></a>  MultiGetGameUniversesPlayabilityOptions

Ƭ **MultiGetGameUniversesPlayabilityOptions**: *object*

#### Type declaration:

* **universeIds**: *number[]*

___

### <a id="multigetplaces" name="multigetplaces"></a>  MultiGetPlaces

Ƭ **MultiGetPlaces**: *[PlaceOptions](../interfaces/_structures_game_.placeoptions.md)[]*

___

### <a id="multigetplacesoptions" name="multigetplacesoptions"></a>  MultiGetPlacesOptions

Ƭ **MultiGetPlacesOptions**: *object*

#### Type declaration:

* **placeIds**: *number[]*

___

### <a id="setselfgamevote" name="setselfgamevote"></a>  SetSelfGameVote

Ƭ **SetSelfGameVote**: *object*

#### Type declaration:

___

### <a id="setselfgamevoteoptions" name="setselfgamevoteoptions"></a>  SetSelfGameVoteOptions

Ƭ **SetSelfGameVoteOptions**: *object*

#### Type declaration:

* **universeId**: *number*

* **vote**: *boolean*

___

### <a id="togglegamefavorite" name="togglegamefavorite"></a>  ToggleGameFavorite

Ƭ **ToggleGameFavorite**: *object*

#### Type declaration:

___

### <a id="togglegamefavoriteoptions" name="togglegamefavoriteoptions"></a>  ToggleGameFavoriteOptions

Ƭ **ToggleGameFavoriteOptions**: *object*

#### Type declaration:

* **favorite**: *boolean*

* **universeId**: *number*

___

### <a id="updatevipserver" name="updatevipserver"></a>  UpdateVIPServer

Ƭ **UpdateVIPServer**: *[VIPServerOptions](../interfaces/_structures_game_.vipserveroptions.md)*

___

### <a id="updatevipserveroptions" name="updatevipserveroptions"></a>  UpdateVIPServerOptions

Ƭ **UpdateVIPServerOptions**: *object*

#### Type declaration:

* **active**: *boolean*

* **id**: *number*

* **name**: *string*

* **newJoinCode**: *boolean*

___

### <a id="updatevipserverpermissions" name="updatevipserverpermissions"></a>  UpdateVIPServerPermissions

Ƭ **UpdateVIPServerPermissions**: *object*

#### Type declaration:

* **clanAllowed**: *boolean*

* **enemyClanId**: *number*

* **friendsAllowed**: *boolean*

* **users**: *object[]*

___

### <a id="updatevipserverpermissionsoptions" name="updatevipserverpermissionsoptions"></a>  UpdateVIPServerPermissionsOptions

Ƭ **UpdateVIPServerPermissionsOptions**: *object*

#### Type declaration:

* **clanAllowed**: *boolean*

* **enemyClanId**: *number*

* **friendsAllowed**: *boolean*

* **id**: *number*

* **usersToAdd**: *number[]*

* **usersToRemove**: *number[]*

___

### <a id="updatevipserversubscription" name="updatevipserversubscription"></a>  UpdateVIPServerSubscription

Ƭ **UpdateVIPServerSubscription**: *object*

#### Type declaration:

* **active**: *boolean*

* **expirationDate**: *string*

* **expired**: *boolean*

* **price**: *number*

___

### <a id="updatevipserversubscriptionoptions" name="updatevipserversubscriptionoptions"></a>  UpdateVIPServerSubscriptionOptions

Ƭ **UpdateVIPServerSubscriptionOptions**: *object*

#### Type declaration:

* **active**: *boolean*

* **id**: *number*

* **price**: *number*
