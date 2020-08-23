
# Module: "client/apis/AvatarAPI"

## Index

### Classes

* [AvatarAPI](../classes/_client_apis_avatarapi_.avatarapi.md)

### Type aliases

* [BodyColors](_client_apis_avatarapi_.md#bodycolors)
* [BodyScales](_client_apis_avatarapi_.md#bodyscales)
* [ColorPalette](_client_apis_avatarapi_.md#colorpalette)
* [CreateOutfit](_client_apis_avatarapi_.md#createoutfit)
* [CreateOutfitOptions](_client_apis_avatarapi_.md#createoutfitoptions)
* [DeleteOutfit](_client_apis_avatarapi_.md#deleteoutfit)
* [DeleteOutfitOptions](_client_apis_avatarapi_.md#deleteoutfitoptions)
* [GetAvatarMetadata](_client_apis_avatarapi_.md#getavatarmetadata)
* [GetAvatarRules](_client_apis_avatarapi_.md#getavatarrules)
* [GetOutfit](_client_apis_avatarapi_.md#getoutfit)
* [GetOutfitOptions](_client_apis_avatarapi_.md#getoutfitoptions)
* [GetRecentItems](_client_apis_avatarapi_.md#getrecentitems)
* [GetRecentItemsOptions](_client_apis_avatarapi_.md#getrecentitemsoptions)
* [GetUserAvatar](_client_apis_avatarapi_.md#getuseravatar)
* [GetUserAvatarOptions](_client_apis_avatarapi_.md#getuseravataroptions)
* [GetUserCurrentlyWearing](_client_apis_avatarapi_.md#getusercurrentlywearing)
* [GetUserCurrentlyWearingOptions](_client_apis_avatarapi_.md#getusercurrentlywearingoptions)
* [GetUserOutfits](_client_apis_avatarapi_.md#getuseroutfits)
* [GetUserOutfitsOptions](_client_apis_avatarapi_.md#getuseroutfitsoptions)
* [RedrawThumbnail](_client_apis_avatarapi_.md#redrawthumbnail)
* [RemoveAssetFromAvatar](_client_apis_avatarapi_.md#removeassetfromavatar)
* [RemoveAssetFromAvatarOptions](_client_apis_avatarapi_.md#removeassetfromavataroptions)
* [Scale](_client_apis_avatarapi_.md#scale)
* [SetBodyColors](_client_apis_avatarapi_.md#setbodycolors)
* [SetBodyColorsOptions](_client_apis_avatarapi_.md#setbodycolorsoptions)
* [SetPlayerAvatarScales](_client_apis_avatarapi_.md#setplayeravatarscales)
* [SetPlayerAvatarScalesOptions](_client_apis_avatarapi_.md#setplayeravatarscalesoptions)
* [SetPlayerAvatarType](_client_apis_avatarapi_.md#setplayeravatartype)
* [SetPlayerAvatarTypeOptions](_client_apis_avatarapi_.md#setplayeravatartypeoptions)
* [SetPlayerAvatarWearingAssets](_client_apis_avatarapi_.md#setplayeravatarwearingassets)
* [SetPlayerAvatarWearingAssetsOptions](_client_apis_avatarapi_.md#setplayeravatarwearingassetsoptions)
* [UpdateOutfit](_client_apis_avatarapi_.md#updateoutfit)
* [UpdateOutfitOptions](_client_apis_avatarapi_.md#updateoutfitoptions)
* [UserAvatar](_client_apis_avatarapi_.md#useravatar)
* [WearAssetOnAvatar](_client_apis_avatarapi_.md#wearassetonavatar)
* [WearAssetOnAvatarOptions](_client_apis_avatarapi_.md#wearassetonavataroptions)
* [WearOutfit](_client_apis_avatarapi_.md#wearoutfit)
* [WearOutfitOptions](_client_apis_avatarapi_.md#wearoutfitoptions)

## Type aliases

### <a id="bodycolors" name="bodycolors"></a>  BodyColors

Ƭ **BodyColors**: *object*

#### Type declaration:

* **headColorId**: *number*

* **leftArmColorId**: *number*

* **leftLegColorId**: *number*

* **rightArmColorId**: *number*

* **rightLegColorId**: *number*

* **torsoColorId**: *number*

___

### <a id="bodyscales" name="bodyscales"></a>  BodyScales

Ƭ **BodyScales**: *object*

#### Type declaration:

* **bodyType**: *number*

* **depth**: *number*

* **head**: *number*

* **height**: *number*

* **proportion**: *number*

* **width**: *number*

___

### <a id="colorpalette" name="colorpalette"></a>  ColorPalette

Ƭ **ColorPalette**: *object*

#### Type declaration:

* **brickColorId**: *number*

* **hexColor**: *string*

* **name**: *string*

___

### <a id="createoutfit" name="createoutfit"></a>  CreateOutfit

Ƭ **CreateOutfit**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="createoutfitoptions" name="createoutfitoptions"></a>  CreateOutfitOptions

Ƭ **CreateOutfitOptions**: *Omit‹[GetOutfit](_client_apis_avatarapi_.md#getoutfit), "id" | "isEditable"›*

___

### <a id="deleteoutfit" name="deleteoutfit"></a>  DeleteOutfit

Ƭ **DeleteOutfit**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="deleteoutfitoptions" name="deleteoutfitoptions"></a>  DeleteOutfitOptions

Ƭ **DeleteOutfitOptions**: *object*

#### Type declaration:

* **userOutfitId**: *number*

___

### <a id="getavatarmetadata" name="getavatarmetadata"></a>  GetAvatarMetadata

Ƭ **GetAvatarMetadata**: *object*

#### Type declaration:

* **areThreeDeeThumbsEnabled**: *boolean*

* **enableDefaultClothingMessage**: *boolean*

* **isAvatarScaleEmbeddedInTab**: *boolean*

* **isBodyTypeScaleOutOfTab**: *boolean*

* **scaleBodyTypeIncrement**: *number*

* **scaleHeadIncrement**: *number*

* **scaleHeightIncrement**: *number*

* **scaleProportionIncrement**: *number*

* **scaleWidthIncrement**: *number*

* **showDefaultClothingMessageOnPageLoad**: *boolean*

* **supportProportionAndBodyType**: *boolean*

___

### <a id="getavatarrules" name="getavatarrules"></a>  GetAvatarRules

Ƭ **GetAvatarRules**: *object*

#### Type declaration:

* **basicBodyColorsPalette**: *[ColorPalette](_client_apis_avatarapi_.md#colorpalette)[]*

* **bodyColorsPalette**: *[ColorPalette](_client_apis_avatarapi_.md#colorpalette)[]*

* **bundlesEnabledForUser**: *boolean*

* **defaultClothingAssetLists**(): *object*

  * **defaultPantAssetIds**: *number[]*

  * **defaultShirtAssetIds**: *number[]*

* **emotesEnabledForUser**: *boolean*

* **minimumDeltaEBodyColorDifference**: *number*

* **playerAvatarTypes**: *string[]*

* **proportionsAndBodyTypeEnabledForUser**: *boolean*

* **scales**(): *object*

  * **bodyType**: *[Scale](_client_apis_avatarapi_.md#scale)*

  * **head**: *[Scale](_client_apis_avatarapi_.md#scale)*

  * **height**: *[Scale](_client_apis_avatarapi_.md#scale)*

  * **width**: *[Scale](_client_apis_avatarapi_.md#scale)*

* **wearableAssetTypes**: *object[]*

___

### <a id="getoutfit" name="getoutfit"></a>  GetOutfit

Ƭ **GetOutfit**: *object*

#### Type declaration:

* **assets**: *object[]*

* **bodyColors**: *[BodyColors](_client_apis_avatarapi_.md#bodycolors)*

* **id**: *number*

* **isEditable**: *boolean*

* **name**: *string*

* **playerAvatarType**: *string*

* **scale**(): *object*

  * **bodyType**: *number*

  * **depth**: *number*

  * **head**: *number*

  * **height**: *number*

  * **proportion**: *number*

  * **width**: *number*

___

### <a id="getoutfitoptions" name="getoutfitoptions"></a>  GetOutfitOptions

Ƭ **GetOutfitOptions**: *object*

#### Type declaration:

* **userOutfitId**: *number*

___

### <a id="getrecentitems" name="getrecentitems"></a>  GetRecentItems

Ƭ **GetRecentItems**: *object*

#### Type declaration:

* **data**: *object[]*

* **total**: *number*

___

### <a id="getrecentitemsoptions" name="getrecentitemsoptions"></a>  GetRecentItemsOptions

Ƭ **GetRecentItemsOptions**: *object*

#### Type declaration:

* **recentItemListType**: *"All" | "Clothing" | "BodyParts" | "AvatarAnimations" | "Accessories" | "Outfits" | "Gear" | string*

___

### <a id="getuseravatar" name="getuseravatar"></a>  GetUserAvatar

Ƭ **GetUserAvatar**: *[UserAvatar](_client_apis_avatarapi_.md#useravatar)*

___

### <a id="getuseravataroptions" name="getuseravataroptions"></a>  GetUserAvatarOptions

Ƭ **GetUserAvatarOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getusercurrentlywearing" name="getusercurrentlywearing"></a>  GetUserCurrentlyWearing

Ƭ **GetUserCurrentlyWearing**: *object*

#### Type declaration:

* **assetIds**: *number[]*

___

### <a id="getusercurrentlywearingoptions" name="getusercurrentlywearingoptions"></a>  GetUserCurrentlyWearingOptions

Ƭ **GetUserCurrentlyWearingOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getuseroutfits" name="getuseroutfits"></a>  GetUserOutfits

Ƭ **GetUserOutfits**: *object*

#### Type declaration:

* **data**: *object[]*

* **filteredCount**: *number*

* **total**: *number*

___

### <a id="getuseroutfitsoptions" name="getuseroutfitsoptions"></a>  GetUserOutfitsOptions

Ƭ **GetUserOutfitsOptions**: *object*

#### Type declaration:

* **isEditable**? : *undefined | false | true*

* **itemsPerPage**? : *undefined | number*

* **page**? : *undefined | number*

* **userId**: *number*

___

### <a id="redrawthumbnail" name="redrawthumbnail"></a>  RedrawThumbnail

Ƭ **RedrawThumbnail**: *object*

#### Type declaration:

___

### <a id="removeassetfromavatar" name="removeassetfromavatar"></a>  RemoveAssetFromAvatar

Ƭ **RemoveAssetFromAvatar**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="removeassetfromavataroptions" name="removeassetfromavataroptions"></a>  RemoveAssetFromAvatarOptions

Ƭ **RemoveAssetFromAvatarOptions**: *object*

#### Type declaration:

* **assetId**: *number*

___

### <a id="scale" name="scale"></a>  Scale

Ƭ **Scale**: *object*

#### Type declaration:

* **increment**: *number*

* **max**: *number*

* **min**: *number*

___

### <a id="setbodycolors" name="setbodycolors"></a>  SetBodyColors

Ƭ **SetBodyColors**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="setbodycolorsoptions" name="setbodycolorsoptions"></a>  SetBodyColorsOptions

Ƭ **SetBodyColorsOptions**: *[BodyColors](_client_apis_avatarapi_.md#bodycolors)*

___

### <a id="setplayeravatarscales" name="setplayeravatarscales"></a>  SetPlayerAvatarScales

Ƭ **SetPlayerAvatarScales**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="setplayeravatarscalesoptions" name="setplayeravatarscalesoptions"></a>  SetPlayerAvatarScalesOptions

Ƭ **SetPlayerAvatarScalesOptions**: *[BodyScales](_client_apis_avatarapi_.md#bodyscales)*

___

### <a id="setplayeravatartype" name="setplayeravatartype"></a>  SetPlayerAvatarType

Ƭ **SetPlayerAvatarType**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="setplayeravatartypeoptions" name="setplayeravatartypeoptions"></a>  SetPlayerAvatarTypeOptions

Ƭ **SetPlayerAvatarTypeOptions**: *object*

#### Type declaration:

* **playerAvatarType**: *"R6" | "R15" | string*

___

### <a id="setplayeravatarwearingassets" name="setplayeravatarwearingassets"></a>  SetPlayerAvatarWearingAssets

Ƭ **SetPlayerAvatarWearingAssets**: *object*

#### Type declaration:

* **invalidAssetIds**? : *number[]*

* **invalidAssets**? : *object[]*

* **success**: *boolean*

___

### <a id="setplayeravatarwearingassetsoptions" name="setplayeravatarwearingassetsoptions"></a>  SetPlayerAvatarWearingAssetsOptions

Ƭ **SetPlayerAvatarWearingAssetsOptions**: *object*

#### Type declaration:

* **assetIds**: *number[]*

___

### <a id="updateoutfit" name="updateoutfit"></a>  UpdateOutfit

Ƭ **UpdateOutfit**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="updateoutfitoptions" name="updateoutfitoptions"></a>  UpdateOutfitOptions

Ƭ **UpdateOutfitOptions**: *Omit‹[GetOutfit](_client_apis_avatarapi_.md#getoutfit), "isEditable"›*

___

### <a id="useravatar" name="useravatar"></a>  UserAvatar

Ƭ **UserAvatar**: *object*

#### Type declaration:

* **assets**: *object[]*

* **bodyColors**: *[BodyColors](_client_apis_avatarapi_.md#bodycolors)*

* **defaultPantsApplied**: *boolean*

* **defaultShirtApplied**: *boolean*

* **emotes**: *object[]*

* **playerAvatarType**: *"R6" | "R15" | string*

* **scales**: *[BodyScales](_client_apis_avatarapi_.md#bodyscales)*

___

### <a id="wearassetonavatar" name="wearassetonavatar"></a>  WearAssetOnAvatar

Ƭ **WearAssetOnAvatar**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="wearassetonavataroptions" name="wearassetonavataroptions"></a>  WearAssetOnAvatarOptions

Ƭ **WearAssetOnAvatarOptions**: *object*

#### Type declaration:

* **assetId**: *number*

___

### <a id="wearoutfit" name="wearoutfit"></a>  WearOutfit

Ƭ **WearOutfit**: *[SetPlayerAvatarWearingAssets](_client_apis_avatarapi_.md#setplayeravatarwearingassets)*

___

### <a id="wearoutfitoptions" name="wearoutfitoptions"></a>  WearOutfitOptions

Ƭ **WearOutfitOptions**: *object*

#### Type declaration:

* **userOutfitId**: *number*
