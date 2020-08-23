
# Class: AvatarAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AvatarAPI**

## Index

### Constructors

* [constructor](_client_apis_badgesapi_.avatarapi.md#constructor)

### Properties

* [client](_client_apis_badgesapi_.avatarapi.md#client)
* [options](_client_apis_badgesapi_.avatarapi.md#options)

### Methods

* [deleteBadgeFromSelf](_client_apis_badgesapi_.avatarapi.md#deletebadgefromself)
* [deleteBadgeFromUser](_client_apis_badgesapi_.avatarapi.md#deletebadgefromuser)
* [getBadge](_client_apis_badgesapi_.avatarapi.md#getbadge)
* [getUniverseBadges](_client_apis_badgesapi_.avatarapi.md#getuniversebadges)
* [getUserBadges](_client_apis_badgesapi_.avatarapi.md#getuserbadges)
* [getUserBadgesAwardedDates](_client_apis_badgesapi_.avatarapi.md#getuserbadgesawardeddates)
* [request](_client_apis_badgesapi_.avatarapi.md#request)
* [updateBadge](_client_apis_badgesapi_.avatarapi.md#updatebadge)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AvatarAPI**(`client`: [Client](_client_client_.client.md)): *[AvatarAPI](_client_apis_badgesapi_.avatarapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AvatarAPI](_client_apis_badgesapi_.avatarapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="deletebadgefromself" name="deletebadgefromself"></a>  deleteBadgeFromSelf

▸ **deleteBadgeFromSelf**(`options`: [DeleteBadgeFromSelfOptions](../modules/_client_apis_badgesapi_.md#deletebadgefromselfoptions)): *Promise‹[DeleteBadgeFromSelf](../modules/_client_apis_badgesapi_.md#deletebadgefromself)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteBadgeFromSelfOptions](../modules/_client_apis_badgesapi_.md#deletebadgefromselfoptions) |

**Returns:** *Promise‹[DeleteBadgeFromSelf](../modules/_client_apis_badgesapi_.md#deletebadgefromself)›*

___

### <a id="deletebadgefromuser" name="deletebadgefromuser"></a>  deleteBadgeFromUser

▸ **deleteBadgeFromUser**(`options`: [DeleteBadgeFromUserOptions](../modules/_client_apis_badgesapi_.md#deletebadgefromuseroptions)): *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteBadgeFromUserOptions](../modules/_client_apis_badgesapi_.md#deletebadgefromuseroptions) |

**Returns:** *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

___

### <a id="getbadge" name="getbadge"></a>  getBadge

▸ **getBadge**(`options`: [GetBadgeOptions](../modules/_client_apis_badgesapi_.md#getbadgeoptions)): *Promise‹[GetBadge](../modules/_client_apis_badgesapi_.md#getbadge)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetBadgeOptions](../modules/_client_apis_badgesapi_.md#getbadgeoptions) |

**Returns:** *Promise‹[GetBadge](../modules/_client_apis_badgesapi_.md#getbadge)›*

___

### <a id="getuniversebadges" name="getuniversebadges"></a>  getUniverseBadges

▸ **getUniverseBadges**(`options`: [GetUniverseBadgesOptions](../modules/_client_apis_badgesapi_.md#getuniversebadgesoptions)): *Promise‹[GetUniverseBadges](../modules/_client_apis_badgesapi_.md#getuniversebadges)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseBadgesOptions](../modules/_client_apis_badgesapi_.md#getuniversebadgesoptions) |

**Returns:** *Promise‹[GetUniverseBadges](../modules/_client_apis_badgesapi_.md#getuniversebadges)›*

___

### <a id="getuserbadges" name="getuserbadges"></a>  getUserBadges

▸ **getUserBadges**(`options`: [GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions)): *Promise‹[GetUserBadges](../modules/_client_apis_badgesapi_.md#getuserbadges)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions) |

**Returns:** *Promise‹[GetUserBadges](../modules/_client_apis_badgesapi_.md#getuserbadges)›*

___

### <a id="getuserbadgesawardeddates" name="getuserbadgesawardeddates"></a>  getUserBadgesAwardedDates

▸ **getUserBadgesAwardedDates**(`options`: [GetUserBadgesAwardedDatesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesawardeddatesoptions)): *Promise‹[GetUserBadgesAwardedDates](../modules/_client_apis_badgesapi_.md#getuserbadgesawardeddates)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserBadgesAwardedDatesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesawardeddatesoptions) |

**Returns:** *Promise‹[GetUserBadgesAwardedDates](../modules/_client_apis_badgesapi_.md#getuserbadgesawardeddates)›*

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

### <a id="updatebadge" name="updatebadge"></a>  updateBadge

▸ **updateBadge**(`options`: [UpdateBadgeOptions](../modules/_client_apis_badgesapi_.md#updatebadgeoptions)): *Promise‹[UpdateBadge](../modules/_client_apis_badgesapi_.md#updatebadge)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateBadgeOptions](../modules/_client_apis_badgesapi_.md#updatebadgeoptions) |

**Returns:** *Promise‹[UpdateBadge](../modules/_client_apis_badgesapi_.md#updatebadge)›*
