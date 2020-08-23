
# Class: AvatarAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AvatarAPI**

## Index

### Constructors

* [constructor](_client_apis_avatarapi_.avatarapi.md#constructor)

### Properties

* [client](_client_apis_avatarapi_.avatarapi.md#client)
* [options](_client_apis_avatarapi_.avatarapi.md#options)

### Methods

* [createOutfit](_client_apis_avatarapi_.avatarapi.md#createoutfit)
* [deleteOutfit](_client_apis_avatarapi_.avatarapi.md#deleteoutfit)
* [getAvatarMetaData](_client_apis_avatarapi_.avatarapi.md#getavatarmetadata)
* [getAvatarRules](_client_apis_avatarapi_.avatarapi.md#getavatarrules)
* [getOutfit](_client_apis_avatarapi_.avatarapi.md#getoutfit)
* [getRecentlyUsed](_client_apis_avatarapi_.avatarapi.md#getrecentlyused)
* [getSelfAvatar](_client_apis_avatarapi_.avatarapi.md#getselfavatar)
* [getUserAvatar](_client_apis_avatarapi_.avatarapi.md#getuseravatar)
* [getUserCurrentlyWearing](_client_apis_avatarapi_.avatarapi.md#getusercurrentlywearing)
* [getUserOutfits](_client_apis_avatarapi_.avatarapi.md#getuseroutfits)
* [redrawThumbnail](_client_apis_avatarapi_.avatarapi.md#redrawthumbnail)
* [removeAssetFromAvatar](_client_apis_avatarapi_.avatarapi.md#removeassetfromavatar)
* [request](_client_apis_avatarapi_.avatarapi.md#request)
* [setSelfAvatarBodyColors](_client_apis_avatarapi_.avatarapi.md#setselfavatarbodycolors)
* [setSelfAvatarScales](_client_apis_avatarapi_.avatarapi.md#setselfavatarscales)
* [setSelfAvatarType](_client_apis_avatarapi_.avatarapi.md#setselfavatartype)
* [setSelfWearingAssets](_client_apis_avatarapi_.avatarapi.md#setselfwearingassets)
* [updateOutfit](_client_apis_avatarapi_.avatarapi.md#updateoutfit)
* [wearAssetOnAvatar](_client_apis_avatarapi_.avatarapi.md#wearassetonavatar)
* [wearOutfit](_client_apis_avatarapi_.avatarapi.md#wearoutfit)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AvatarAPI**(`client`: [Client](_client_client_.client.md)): *[AvatarAPI](_client_apis_avatarapi_.avatarapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AvatarAPI](_client_apis_avatarapi_.avatarapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="createoutfit" name="createoutfit"></a>  createOutfit

▸ **createOutfit**(`options`: [CreateOutfitOptions](../modules/_client_apis_avatarapi_.md#createoutfitoptions)): *Promise‹[CreateOutfit](../modules/_client_apis_avatarapi_.md#createoutfit)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateOutfitOptions](../modules/_client_apis_avatarapi_.md#createoutfitoptions) |

**Returns:** *Promise‹[CreateOutfit](../modules/_client_apis_avatarapi_.md#createoutfit)›*

___

### <a id="deleteoutfit" name="deleteoutfit"></a>  deleteOutfit

▸ **deleteOutfit**(`options`: [DeleteOutfitOptions](../modules/_client_apis_avatarapi_.md#deleteoutfitoptions)): *Promise‹[DeleteOutfit](../modules/_client_apis_avatarapi_.md#deleteoutfit)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteOutfitOptions](../modules/_client_apis_avatarapi_.md#deleteoutfitoptions) |

**Returns:** *Promise‹[DeleteOutfit](../modules/_client_apis_avatarapi_.md#deleteoutfit)›*

___

### <a id="getavatarmetadata" name="getavatarmetadata"></a>  getAvatarMetaData

▸ **getAvatarMetaData**(): *Promise‹[GetAvatarMetadata](../modules/_client_apis_avatarapi_.md#getavatarmetadata)›*

**Returns:** *Promise‹[GetAvatarMetadata](../modules/_client_apis_avatarapi_.md#getavatarmetadata)›*

___

### <a id="getavatarrules" name="getavatarrules"></a>  getAvatarRules

▸ **getAvatarRules**(): *Promise‹[GetAvatarRules](../modules/_client_apis_avatarapi_.md#getavatarrules)›*

**Returns:** *Promise‹[GetAvatarRules](../modules/_client_apis_avatarapi_.md#getavatarrules)›*

___

### <a id="getoutfit" name="getoutfit"></a>  getOutfit

▸ **getOutfit**(`options`: [GetOutfitOptions](../modules/_client_apis_avatarapi_.md#getoutfitoptions)): *Promise‹[GetOutfit](../modules/_client_apis_avatarapi_.md#getoutfit)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetOutfitOptions](../modules/_client_apis_avatarapi_.md#getoutfitoptions) |

**Returns:** *Promise‹[GetOutfit](../modules/_client_apis_avatarapi_.md#getoutfit)›*

___

### <a id="getrecentlyused" name="getrecentlyused"></a>  getRecentlyUsed

▸ **getRecentlyUsed**(`options`: [GetRecentItemsOptions](../modules/_client_apis_avatarapi_.md#getrecentitemsoptions)): *Promise‹[GetRecentItems](../modules/_client_apis_avatarapi_.md#getrecentitems)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRecentItemsOptions](../modules/_client_apis_avatarapi_.md#getrecentitemsoptions) |

**Returns:** *Promise‹[GetRecentItems](../modules/_client_apis_avatarapi_.md#getrecentitems)›*

___

### <a id="getselfavatar" name="getselfavatar"></a>  getSelfAvatar

▸ **getSelfAvatar**(): *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

**Returns:** *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

___

### <a id="getuseravatar" name="getuseravatar"></a>  getUserAvatar

▸ **getUserAvatar**(`options`: [GetUserAvatarOptions](../modules/_client_apis_avatarapi_.md#getuseravataroptions)): *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserAvatarOptions](../modules/_client_apis_avatarapi_.md#getuseravataroptions) |

**Returns:** *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

___

### <a id="getusercurrentlywearing" name="getusercurrentlywearing"></a>  getUserCurrentlyWearing

▸ **getUserCurrentlyWearing**(`options`: [GetUserCurrentlyWearingOptions](../modules/_client_apis_avatarapi_.md#getusercurrentlywearingoptions)): *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserCurrentlyWearingOptions](../modules/_client_apis_avatarapi_.md#getusercurrentlywearingoptions) |

**Returns:** *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

___

### <a id="getuseroutfits" name="getuseroutfits"></a>  getUserOutfits

▸ **getUserOutfits**(`options`: [GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions)): *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions) |

**Returns:** *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

___

### <a id="redrawthumbnail" name="redrawthumbnail"></a>  redrawThumbnail

▸ **redrawThumbnail**(): *Promise‹[RedrawThumbnail](../modules/_client_apis_avatarapi_.md#redrawthumbnail)›*

**Returns:** *Promise‹[RedrawThumbnail](../modules/_client_apis_avatarapi_.md#redrawthumbnail)›*

___

### <a id="removeassetfromavatar" name="removeassetfromavatar"></a>  removeAssetFromAvatar

▸ **removeAssetFromAvatar**(`options`: [RemoveAssetFromAvatarOptions](../modules/_client_apis_avatarapi_.md#removeassetfromavataroptions)): *Promise‹[RemoveAssetFromAvatar](../modules/_client_apis_avatarapi_.md#removeassetfromavatar)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RemoveAssetFromAvatarOptions](../modules/_client_apis_avatarapi_.md#removeassetfromavataroptions) |

**Returns:** *Promise‹[RemoveAssetFromAvatar](../modules/_client_apis_avatarapi_.md#removeassetfromavatar)›*

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

### <a id="setselfavatarbodycolors" name="setselfavatarbodycolors"></a>  setSelfAvatarBodyColors

▸ **setSelfAvatarBodyColors**(`options`: [SetBodyColorsOptions](../modules/_client_apis_avatarapi_.md#setbodycolorsoptions)): *Promise‹[SetBodyColors](../modules/_client_apis_avatarapi_.md#setbodycolors)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetBodyColorsOptions](../modules/_client_apis_avatarapi_.md#setbodycolorsoptions) |

**Returns:** *Promise‹[SetBodyColors](../modules/_client_apis_avatarapi_.md#setbodycolors)›*

___

### <a id="setselfavatarscales" name="setselfavatarscales"></a>  setSelfAvatarScales

▸ **setSelfAvatarScales**(`options`: [SetPlayerAvatarScalesOptions](../modules/_client_apis_avatarapi_.md#setplayeravatarscalesoptions)): *Promise‹[SetPlayerAvatarScales](../modules/_client_apis_avatarapi_.md#setplayeravatarscales)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetPlayerAvatarScalesOptions](../modules/_client_apis_avatarapi_.md#setplayeravatarscalesoptions) |

**Returns:** *Promise‹[SetPlayerAvatarScales](../modules/_client_apis_avatarapi_.md#setplayeravatarscales)›*

___

### <a id="setselfavatartype" name="setselfavatartype"></a>  setSelfAvatarType

▸ **setSelfAvatarType**(`options`: [SetPlayerAvatarTypeOptions](../modules/_client_apis_avatarapi_.md#setplayeravatartypeoptions)): *Promise‹[SetPlayerAvatarType](../modules/_client_apis_avatarapi_.md#setplayeravatartype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetPlayerAvatarTypeOptions](../modules/_client_apis_avatarapi_.md#setplayeravatartypeoptions) |

**Returns:** *Promise‹[SetPlayerAvatarType](../modules/_client_apis_avatarapi_.md#setplayeravatartype)›*

___

### <a id="setselfwearingassets" name="setselfwearingassets"></a>  setSelfWearingAssets

▸ **setSelfWearingAssets**(`options`: [SetPlayerAvatarWearingAssetsOptions](../modules/_client_apis_avatarapi_.md#setplayeravatarwearingassetsoptions)): *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetPlayerAvatarWearingAssetsOptions](../modules/_client_apis_avatarapi_.md#setplayeravatarwearingassetsoptions) |

**Returns:** *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

___

### <a id="updateoutfit" name="updateoutfit"></a>  updateOutfit

▸ **updateOutfit**(`options`: [UpdateOutfitOptions](../modules/_client_apis_avatarapi_.md#updateoutfitoptions)): *Promise‹[UpdateOutfit](../modules/_client_apis_avatarapi_.md#updateoutfit)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateOutfitOptions](../modules/_client_apis_avatarapi_.md#updateoutfitoptions) |

**Returns:** *Promise‹[UpdateOutfit](../modules/_client_apis_avatarapi_.md#updateoutfit)›*

___

### <a id="wearassetonavatar" name="wearassetonavatar"></a>  wearAssetOnAvatar

▸ **wearAssetOnAvatar**(`options`: [WearAssetOnAvatarOptions](../modules/_client_apis_avatarapi_.md#wearassetonavataroptions)): *Promise‹[WearAssetOnAvatar](../modules/_client_apis_avatarapi_.md#wearassetonavatar)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WearAssetOnAvatarOptions](../modules/_client_apis_avatarapi_.md#wearassetonavataroptions) |

**Returns:** *Promise‹[WearAssetOnAvatar](../modules/_client_apis_avatarapi_.md#wearassetonavatar)›*

___

### <a id="wearoutfit" name="wearoutfit"></a>  wearOutfit

▸ **wearOutfit**(`options`: [WearOutfitOptions](../modules/_client_apis_avatarapi_.md#wearoutfitoptions)): *Promise‹[WearOutfit](../modules/_client_apis_avatarapi_.md#wearoutfit)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [WearOutfitOptions](../modules/_client_apis_avatarapi_.md#wearoutfitoptions) |

**Returns:** *Promise‹[WearOutfit](../modules/_client_apis_avatarapi_.md#wearoutfit)›*
