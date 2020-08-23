
# Class: PublishAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **PublishAPI**

## Index

### Constructors

* [constructor](_client_apis_publishapi_.publishapi.md#constructor)

### Properties

* [client](_client_apis_publishapi_.publishapi.md#client)
* [options](_client_apis_publishapi_.publishapi.md#options)

### Methods

* [publishAudio](_client_apis_publishapi_.publishapi.md#publishaudio)
* [publishBadgeIcon](_client_apis_publishapi_.publishapi.md#publishbadgeicon)
* [publishGamePassIcon](_client_apis_publishapi_.publishapi.md#publishgamepassicon)
* [request](_client_apis_publishapi_.publishapi.md#request)
* [uploadAssets](_client_apis_publishapi_.publishapi.md#uploadassets)
* [uploadGameThumbnail](_client_apis_publishapi_.publishapi.md#uploadgamethumbnail)
* [uploadPluginIcon](_client_apis_publishapi_.publishapi.md#uploadpluginicon)
* [verifyAudio](_client_apis_publishapi_.publishapi.md#verifyaudio)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PublishAPI**(`client`: [Client](_client_client_.client.md)): *[PublishAPI](_client_apis_publishapi_.publishapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PublishAPI](_client_apis_publishapi_.publishapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="publishaudio" name="publishaudio"></a>  publishAudio

▸ **publishAudio**(`options`: [PublishAudioOptions](../modules/_client_apis_publishapi_.md#publishaudiooptions)): *Promise‹[PublishAudio](../modules/_client_apis_publishapi_.md#publishaudio)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PublishAudioOptions](../modules/_client_apis_publishapi_.md#publishaudiooptions) |

**Returns:** *Promise‹[PublishAudio](../modules/_client_apis_publishapi_.md#publishaudio)›*

___

### <a id="publishbadgeicon" name="publishbadgeicon"></a>  publishBadgeIcon

▸ **publishBadgeIcon**(`options`: [PublishBadgeIconOptions](../modules/_client_apis_publishapi_.md#publishbadgeiconoptions)): *Promise‹[PublishBadgeIcon](../modules/_client_apis_publishapi_.md#publishbadgeicon)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PublishBadgeIconOptions](../modules/_client_apis_publishapi_.md#publishbadgeiconoptions) |

**Returns:** *Promise‹[PublishBadgeIcon](../modules/_client_apis_publishapi_.md#publishbadgeicon)›*

___

### <a id="publishgamepassicon" name="publishgamepassicon"></a>  publishGamePassIcon

▸ **publishGamePassIcon**(`options`: [PublishGamePassIconOptions](../modules/_client_apis_publishapi_.md#publishgamepassiconoptions)): *Promise‹[PublishGamePassIcon](../modules/_client_apis_publishapi_.md#publishgamepassicon)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PublishGamePassIconOptions](../modules/_client_apis_publishapi_.md#publishgamepassiconoptions) |

**Returns:** *Promise‹[PublishGamePassIcon](../modules/_client_apis_publishapi_.md#publishgamepassicon)›*

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

### <a id="uploadassets" name="uploadassets"></a>  uploadAssets

▸ **uploadAssets**(`options`: [UploadAssetsOptions](../modules/_client_apis_publishapi_.md#uploadassetsoptions)): *Promise‹[UploadAssets](../modules/_client_apis_publishapi_.md#uploadassets)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadAssetsOptions](../modules/_client_apis_publishapi_.md#uploadassetsoptions) |

**Returns:** *Promise‹[UploadAssets](../modules/_client_apis_publishapi_.md#uploadassets)›*

___

### <a id="uploadgamethumbnail" name="uploadgamethumbnail"></a>  uploadGameThumbnail

▸ **uploadGameThumbnail**(`options`: [UploadGameThumbnailOptions](../modules/_client_apis_publishapi_.md#uploadgamethumbnailoptions)): *Promise‹[UploadGameThumbnail](../modules/_client_apis_publishapi_.md#uploadgamethumbnail)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadGameThumbnailOptions](../modules/_client_apis_publishapi_.md#uploadgamethumbnailoptions) |

**Returns:** *Promise‹[UploadGameThumbnail](../modules/_client_apis_publishapi_.md#uploadgamethumbnail)›*

___

### <a id="uploadpluginicon" name="uploadpluginicon"></a>  uploadPluginIcon

▸ **uploadPluginIcon**(`options`: [UploadPluginIconOptions](../modules/_client_apis_publishapi_.md#uploadpluginiconoptions)): *Promise‹[UploadPluginIcon](../modules/_client_apis_publishapi_.md#uploadpluginicon)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UploadPluginIconOptions](../modules/_client_apis_publishapi_.md#uploadpluginiconoptions) |

**Returns:** *Promise‹[UploadPluginIcon](../modules/_client_apis_publishapi_.md#uploadpluginicon)›*

___

### <a id="verifyaudio" name="verifyaudio"></a>  verifyAudio

▸ **verifyAudio**(`options`: [VerifyAudioOptions](../modules/_client_apis_publishapi_.md#verifyaudiooptions)): *Promise‹[VerifyAudio](../modules/_client_apis_publishapi_.md#verifyaudio)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [VerifyAudioOptions](../modules/_client_apis_publishapi_.md#verifyaudiooptions) |

**Returns:** *Promise‹[VerifyAudio](../modules/_client_apis_publishapi_.md#verifyaudio)›*
