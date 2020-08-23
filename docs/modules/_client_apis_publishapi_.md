
# Module: "client/apis/PublishAPI"

## Index

### Classes

* [PublishAPI](../classes/_client_apis_publishapi_.publishapi.md)

### Type aliases

* [PublishAudio](_client_apis_publishapi_.md#publishaudio)
* [PublishAudioOptions](_client_apis_publishapi_.md#publishaudiooptions)
* [PublishBadgeIcon](_client_apis_publishapi_.md#publishbadgeicon)
* [PublishBadgeIconOptions](_client_apis_publishapi_.md#publishbadgeiconoptions)
* [PublishGamePassIcon](_client_apis_publishapi_.md#publishgamepassicon)
* [PublishGamePassIconOptions](_client_apis_publishapi_.md#publishgamepassiconoptions)
* [UploadAssets](_client_apis_publishapi_.md#uploadassets)
* [UploadAssetsOptions](_client_apis_publishapi_.md#uploadassetsoptions)
* [UploadGameThumbnail](_client_apis_publishapi_.md#uploadgamethumbnail)
* [UploadGameThumbnailOptions](_client_apis_publishapi_.md#uploadgamethumbnailoptions)
* [UploadPluginIcon](_client_apis_publishapi_.md#uploadpluginicon)
* [UploadPluginIconOptions](_client_apis_publishapi_.md#uploadpluginiconoptions)
* [VerifyAudio](_client_apis_publishapi_.md#verifyaudio)
* [VerifyAudioOptions](_client_apis_publishapi_.md#verifyaudiooptions)

## Type aliases

### <a id="publishaudio" name="publishaudio"></a>  PublishAudio

Ƭ **PublishAudio**: *object*

#### Type declaration:

* **Id**: *number*

* **Name**: *string*

___

### <a id="publishaudiooptions" name="publishaudiooptions"></a>  PublishAudioOptions

Ƭ **PublishAudioOptions**: *object*

#### Type declaration:

* **file**: *unknown*

* **groupId**? : *undefined | number*

* **name**: *string*

* **paymentSource**: *string*

___

### <a id="publishbadgeicon" name="publishbadgeicon"></a>  PublishBadgeIcon

Ƭ **PublishBadgeIcon**: *object*

#### Type declaration:

* **targetId**: *number*

___

### <a id="publishbadgeiconoptions" name="publishbadgeiconoptions"></a>  PublishBadgeIconOptions

Ƭ **PublishBadgeIconOptions**: *object*

#### Type declaration:

* **badgeId**: *number*

* **files**: *unknown*

___

### <a id="publishgamepassicon" name="publishgamepassicon"></a>  PublishGamePassIcon

Ƭ **PublishGamePassIcon**: *object*

#### Type declaration:

* **targetId**: *number*

___

### <a id="publishgamepassiconoptions" name="publishgamepassiconoptions"></a>  PublishGamePassIconOptions

Ƭ **PublishGamePassIconOptions**: *object*

#### Type declaration:

* **files**: *unknown*

* **gamePassId**: *number*

___

### <a id="uploadassets" name="uploadassets"></a>  UploadAssets

Ƭ **UploadAssets**: *object*

#### Type declaration:

* **AssetDetails**: *object[]*

___

### <a id="uploadassetsoptions" name="uploadassetsoptions"></a>  UploadAssetsOptions

Ƭ **UploadAssetsOptions**: *object*

#### Type declaration:

* **files**: *unknown*

___

### <a id="uploadgamethumbnail" name="uploadgamethumbnail"></a>  UploadGameThumbnail

Ƭ **UploadGameThumbnail**: *object*

#### Type declaration:

* **targetId**: *number*

___

### <a id="uploadgamethumbnailoptions" name="uploadgamethumbnailoptions"></a>  UploadGameThumbnailOptions

Ƭ **UploadGameThumbnailOptions**: *object*

#### Type declaration:

* **files**: *unknown*

* **gameId**: *number*

___

### <a id="uploadpluginicon" name="uploadpluginicon"></a>  UploadPluginIcon

Ƭ **UploadPluginIcon**: *object*

#### Type declaration:

* **targetId**: *number*

___

### <a id="uploadpluginiconoptions" name="uploadpluginiconoptions"></a>  UploadPluginIconOptions

Ƭ **UploadPluginIconOptions**: *object*

#### Type declaration:

* **files**: *unknown*

* **pluginId**: *number*

___

### <a id="verifyaudio" name="verifyaudio"></a>  VerifyAudio

Ƭ **VerifyAudio**: *object*

#### Type declaration:

* **canAfford**: *boolean*

* **price**: *number*

___

### <a id="verifyaudiooptions" name="verifyaudiooptions"></a>  VerifyAudioOptions

Ƭ **VerifyAudioOptions**: *[PublishAudioOptions](_client_apis_publishapi_.md#publishaudiooptions)*
