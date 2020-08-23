
# Class: BaseAPI

## Hierarchy

* **BaseAPI**

  ↳ [DevelopAPI](_client_apis_developapi_.developapi.md)

  ↳ [BillingAPI](_client_apis_billingapi_.billingapi.md)

  ↳ [EconomyAPI](_client_apis_economyapi_.economyapi.md)

  ↳ [GroupsAPI](_client_apis_groupsapi_.groupsapi.md)

  ↳ [AvatarAPI](_client_apis_avatarapi_.avatarapi.md)

  ↳ [AvatarAPI](_client_apis_badgesapi_.avatarapi.md)

  ↳ [CatalogAPI](_client_apis_catalogapi_.catalogapi.md)

  ↳ [ChatAPI](_client_apis_chatapi_.chatapi.md)

  ↳ [ContactsAPI](_client_apis_contactsapi_.contactsapi.md)

  ↳ [FriendsAPI](_client_apis_friendsapi_.friendsapi.md)

  ↳ [InventoryAPI](_client_apis_inventoryapi_.inventoryapi.md)

  ↳ [PremiumFeaturesAPI](_client_apis_premiumfeaturesapi_.premiumfeaturesapi.md)

  ↳ [PresenceAPI](_client_apis_presenceapi_.presenceapi.md)

  ↳ [PrivateMessagesAPI](_client_apis_privatemessagesapi_.privatemessagesapi.md)

  ↳ [ThumbnailsAPI](_client_apis_thumbnailsapi_.thumbnailsapi.md)

  ↳ [TradesAPI](_client_apis_tradesapi_.tradesapi.md)

  ↳ [TradesAPI](_client_apis_translationrolesapi_.tradesapi.md)

  ↳ [GamesAPI](_client_apis_gamesapi_.gamesapi.md)

  ↳ [GeneralAPI](_client_apis_generalapi_.generalapi.md)

  ↳ [AccountSettingsAPI](_client_apis_accountsettingsapi_.accountsettingsapi.md)

  ↳ [AdConfigurationAPI](_client_apis_adconfigurationapi_.adconfigurationapi.md)

  ↳ [AdsAPI](_client_apis_adsapi_.adsapi.md)

  ↳ [AssetDeliveryAPI](_client_apis_assetdeliveryapi_.assetdeliveryapi.md)

  ↳ [AuthAPI](_client_apis_authapi_.authapi.md)

  ↳ [CaptchaAPI](_client_apis_captchaapi_.captchaapi.md)

  ↳ [EconomyCreatorStatsAPI](_client_apis_economycreatorstatsapi_.economycreatorstatsapi.md)

  ↳ [EngagementPayoutsAPI](_client_apis_engagementpayoutsapi_.engagementpayoutsapi.md)

  ↳ [FollowingsAPI](_client_apis_followingsapi_.followingsapi.md)

  ↳ [GameInternationalizationAPI](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md)

  ↳ [InventoryAPI](_client_apis_itemconfigurationapi_.inventoryapi.md)

  ↳ [LocaleAPI](_client_apis_localeapi_.localeapi.md)

  ↳ [LocaleAPI](_client_apis_metricsapi_.localeapi.md)

  ↳ [NotificationsAPI](_client_apis_notificationsapi_.notificationsapi.md)

  ↳ [PublishAPI](_client_apis_publishapi_.publishapi.md)

  ↳ [UsersAPI](_client_apis_usersapi_.usersapi.md)

  ↳ [OtherAPI](_client_apis_otherapi_.otherapi.md)

  ↳ [AccountInformationAPI](_client_apis_accountinformationapi_.accountinformationapi.md)

## Index

### Constructors

* [constructor](_client_apis_baseapi_.baseapi.md#constructor)

### Properties

* [client](_client_apis_baseapi_.baseapi.md#client)
* [options](_client_apis_baseapi_.baseapi.md#options)

### Methods

* [request](_client_apis_baseapi_.baseapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new BaseAPI**(`options`: [BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)): *[BaseAPI](_client_apis_baseapi_.baseapi.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions) |

**Returns:** *[BaseAPI](_client_apis_baseapi_.baseapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

## Methods

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
