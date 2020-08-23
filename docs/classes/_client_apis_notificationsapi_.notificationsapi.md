
# Class: NotificationsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **NotificationsAPI**

## Index

### Constructors

* [constructor](_client_apis_notificationsapi_.notificationsapi.md#constructor)

### Properties

* [client](_client_apis_notificationsapi_.notificationsapi.md#client)
* [options](_client_apis_notificationsapi_.notificationsapi.md#options)

### Methods

* [allowNotificationDestination](_client_apis_notificationsapi_.notificationsapi.md#allownotificationdestination)
* [allowNotificationSource](_client_apis_notificationsapi_.notificationsapi.md#allownotificationsource)
* [clearUnreadStreamNotifications](_client_apis_notificationsapi_.notificationsapi.md#clearunreadstreamnotifications)
* [deregisterAllDevices](_client_apis_notificationsapi_.notificationsapi.md#deregisteralldevices)
* [deregisterCurrentDevice](_client_apis_notificationsapi_.notificationsapi.md#deregistercurrentdevice)
* [disallowNotificationDestination](_client_apis_notificationsapi_.notificationsapi.md#disallownotificationdestination)
* [disallowNotificationSource](_client_apis_notificationsapi_.notificationsapi.md#disallownotificationsource)
* [getChromeManifest](_client_apis_notificationsapi_.notificationsapi.md#getchromemanifest)
* [getCurrentDeviceDestination](_client_apis_notificationsapi_.notificationsapi.md#getcurrentdevicedestination)
* [getDestinations](_client_apis_notificationsapi_.notificationsapi.md#getdestinations)
* [getLatestUniversesUpdates](_client_apis_notificationsapi_.notificationsapi.md#getlatestuniversesupdates)
* [getNotificationIds](_client_apis_notificationsapi_.notificationsapi.md#getnotificationids)
* [getNotificationsSettings](_client_apis_notificationsapi_.notificationsapi.md#getnotificationssettings)
* [getPushNotificationsMetaData](_client_apis_notificationsapi_.notificationsapi.md#getpushnotificationsmetadata)
* [getRealtimeNotificationSettings](_client_apis_notificationsapi_.notificationsapi.md#getrealtimenotificationsettings)
* [getRecentStreamNotifications](_client_apis_notificationsapi_.notificationsapi.md#getrecentstreamnotifications)
* [getStreamNotificationsMetaData](_client_apis_notificationsapi_.notificationsapi.md#getstreamnotificationsmetadata)
* [getStreamNotificationsPromptSettings](_client_apis_notificationsapi_.notificationsapi.md#getstreamnotificationspromptsettings)
* [getUnreadStreamNotificationsCount](_client_apis_notificationsapi_.notificationsapi.md#getunreadstreamnotificationscount)
* [markGameUpdateNotificationInteracted](_client_apis_notificationsapi_.notificationsapi.md#markgameupdatenotificationinteracted)
* [markGameUpdateNotificationRead](_client_apis_notificationsapi_.notificationsapi.md#markgameupdatenotificationread)
* [markNotificationCategoryRead](_client_apis_notificationsapi_.notificationsapi.md#marknotificationcategoryread)
* [markNotificationInteraction](_client_apis_notificationsapi_.notificationsapi.md#marknotificationinteraction)
* [markNotificationRead](_client_apis_notificationsapi_.notificationsapi.md#marknotificationread)
* [registerAndroidAmazon](_client_apis_notificationsapi_.notificationsapi.md#registerandroidamazon)
* [registerAndroidNative](_client_apis_notificationsapi_.notificationsapi.md#registerandroidnative)
* [registerAndroidTencentSerice](_client_apis_notificationsapi_.notificationsapi.md#registerandroidtencentserice)
* [registerChrome](_client_apis_notificationsapi_.notificationsapi.md#registerchrome)
* [registerFirefox](_client_apis_notificationsapi_.notificationsapi.md#registerfirefox)
* [registerIOSNative](_client_apis_notificationsapi_.notificationsapi.md#registeriosnative)
* [request](_client_apis_notificationsapi_.notificationsapi.md#request)
* [suppressStreamNotificationsPrompt](_client_apis_notificationsapi_.notificationsapi.md#suppressstreamnotificationsprompt)
* [updateDestinationSetting](_client_apis_notificationsapi_.notificationsapi.md#updatedestinationsetting)
* [updateNotificationSettings](_client_apis_notificationsapi_.notificationsapi.md#updatenotificationsettings)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new NotificationsAPI**(`client`: [Client](_client_client_.client.md)): *[NotificationsAPI](_client_apis_notificationsapi_.notificationsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[NotificationsAPI](_client_apis_notificationsapi_.notificationsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="allownotificationdestination" name="allownotificationdestination"></a>  allowNotificationDestination

▸ **allowNotificationDestination**(`options`: [AllowNotificationsDestinationOptions](../modules/_client_apis_notificationsapi_.md#allownotificationsdestinationoptions)): *Promise‹[AllowNotificationsDestination](../modules/_client_apis_notificationsapi_.md#allownotificationsdestination)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AllowNotificationsDestinationOptions](../modules/_client_apis_notificationsapi_.md#allownotificationsdestinationoptions) |

**Returns:** *Promise‹[AllowNotificationsDestination](../modules/_client_apis_notificationsapi_.md#allownotificationsdestination)›*

___

### <a id="allownotificationsource" name="allownotificationsource"></a>  allowNotificationSource

▸ **allowNotificationSource**(`options`: [AllowNotificationSourceOptions](../modules/_client_apis_notificationsapi_.md#allownotificationsourceoptions)): *Promise‹[AllowNotificationSource](../modules/_client_apis_notificationsapi_.md#allownotificationsource)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AllowNotificationSourceOptions](../modules/_client_apis_notificationsapi_.md#allownotificationsourceoptions) |

**Returns:** *Promise‹[AllowNotificationSource](../modules/_client_apis_notificationsapi_.md#allownotificationsource)›*

___

### <a id="clearunreadstreamnotifications" name="clearunreadstreamnotifications"></a>  clearUnreadStreamNotifications

▸ **clearUnreadStreamNotifications**(): *Promise‹[ClearUnreadStreamNotifications](../modules/_client_apis_notificationsapi_.md#clearunreadstreamnotifications)›*

**Returns:** *Promise‹[ClearUnreadStreamNotifications](../modules/_client_apis_notificationsapi_.md#clearunreadstreamnotifications)›*

___

### <a id="deregisteralldevices" name="deregisteralldevices"></a>  deregisterAllDevices

▸ **deregisterAllDevices**(): *Promise‹[DeregisterAllDevices](../modules/_client_apis_notificationsapi_.md#deregisteralldevices)›*

**Returns:** *Promise‹[DeregisterAllDevices](../modules/_client_apis_notificationsapi_.md#deregisteralldevices)›*

___

### <a id="deregistercurrentdevice" name="deregistercurrentdevice"></a>  deregisterCurrentDevice

▸ **deregisterCurrentDevice**(): *Promise‹[DeregisterCurrentDevice](../modules/_client_apis_notificationsapi_.md#deregistercurrentdevice)›*

**Returns:** *Promise‹[DeregisterCurrentDevice](../modules/_client_apis_notificationsapi_.md#deregistercurrentdevice)›*

___

### <a id="disallownotificationdestination" name="disallownotificationdestination"></a>  disallowNotificationDestination

▸ **disallowNotificationDestination**(`options`: [DisallowNotificationsDestinationOptions](../modules/_client_apis_notificationsapi_.md#disallownotificationsdestinationoptions)): *Promise‹[DisallowNotificationsDestination](../modules/_client_apis_notificationsapi_.md#disallownotificationsdestination)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DisallowNotificationsDestinationOptions](../modules/_client_apis_notificationsapi_.md#disallownotificationsdestinationoptions) |

**Returns:** *Promise‹[DisallowNotificationsDestination](../modules/_client_apis_notificationsapi_.md#disallownotificationsdestination)›*

___

### <a id="disallownotificationsource" name="disallownotificationsource"></a>  disallowNotificationSource

▸ **disallowNotificationSource**(`options`: [DisallowNotificationSourceOptions](../modules/_client_apis_notificationsapi_.md#disallownotificationsourceoptions)): *Promise‹[DisallowNotificationSource](../modules/_client_apis_notificationsapi_.md#disallownotificationsource)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DisallowNotificationSourceOptions](../modules/_client_apis_notificationsapi_.md#disallownotificationsourceoptions) |

**Returns:** *Promise‹[DisallowNotificationSource](../modules/_client_apis_notificationsapi_.md#disallownotificationsource)›*

___

### <a id="getchromemanifest" name="getchromemanifest"></a>  getChromeManifest

▸ **getChromeManifest**(): *Promise‹[GetChromeNotificationsManifest](../modules/_client_apis_notificationsapi_.md#getchromenotificationsmanifest)›*

**Returns:** *Promise‹[GetChromeNotificationsManifest](../modules/_client_apis_notificationsapi_.md#getchromenotificationsmanifest)›*

___

### <a id="getcurrentdevicedestination" name="getcurrentdevicedestination"></a>  getCurrentDeviceDestination

▸ **getCurrentDeviceDestination**(): *Promise‹[GetCurrentNotificationDeviceDestination](../modules/_client_apis_notificationsapi_.md#getcurrentnotificationdevicedestination)›*

**Returns:** *Promise‹[GetCurrentNotificationDeviceDestination](../modules/_client_apis_notificationsapi_.md#getcurrentnotificationdevicedestination)›*

___

### <a id="getdestinations" name="getdestinations"></a>  getDestinations

▸ **getDestinations**(): *Promise‹[GetNotificationDestinations](../modules/_client_apis_notificationsapi_.md#getnotificationdestinations)›*

**Returns:** *Promise‹[GetNotificationDestinations](../modules/_client_apis_notificationsapi_.md#getnotificationdestinations)›*

___

### <a id="getlatestuniversesupdates" name="getlatestuniversesupdates"></a>  getLatestUniversesUpdates

▸ **getLatestUniversesUpdates**(`options`: [GetLatestUniversesUpdatesOptions](../modules/_client_apis_notificationsapi_.md#getlatestuniversesupdatesoptions)): *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetLatestUniversesUpdatesOptions](../modules/_client_apis_notificationsapi_.md#getlatestuniversesupdatesoptions) |

**Returns:** *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

___

### <a id="getnotificationids" name="getnotificationids"></a>  getNotificationIds

▸ **getNotificationIds**(`options`: [GetNotificationIdsOptions](../modules/_client_apis_notificationsapi_.md#getnotificationidsoptions)): *Promise‹[GetNotificationIds](../modules/_client_apis_notificationsapi_.md#getnotificationids)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetNotificationIdsOptions](../modules/_client_apis_notificationsapi_.md#getnotificationidsoptions) |

**Returns:** *Promise‹[GetNotificationIds](../modules/_client_apis_notificationsapi_.md#getnotificationids)›*

___

### <a id="getnotificationssettings" name="getnotificationssettings"></a>  getNotificationsSettings

▸ **getNotificationsSettings**(): *Promise‹[GetNotificationsSettings](../modules/_client_apis_notificationsapi_.md#getnotificationssettings)›*

**Returns:** *Promise‹[GetNotificationsSettings](../modules/_client_apis_notificationsapi_.md#getnotificationssettings)›*

___

### <a id="getpushnotificationsmetadata" name="getpushnotificationsmetadata"></a>  getPushNotificationsMetaData

▸ **getPushNotificationsMetaData**(): *Promise‹[GetNotificationsMetaData](../modules/_client_apis_notificationsapi_.md#getnotificationsmetadata)›*

**Returns:** *Promise‹[GetNotificationsMetaData](../modules/_client_apis_notificationsapi_.md#getnotificationsmetadata)›*

___

### <a id="getrealtimenotificationsettings" name="getrealtimenotificationsettings"></a>  getRealtimeNotificationSettings

▸ **getRealtimeNotificationSettings**(): *Promise‹[GetRealtimeNotificationsSettings](../modules/_client_apis_notificationsapi_.md#getrealtimenotificationssettings)›*

**Returns:** *Promise‹[GetRealtimeNotificationsSettings](../modules/_client_apis_notificationsapi_.md#getrealtimenotificationssettings)›*

___

### <a id="getrecentstreamnotifications" name="getrecentstreamnotifications"></a>  getRecentStreamNotifications

▸ **getRecentStreamNotifications**(`options`: [GetRecentStreamNotificationsOptions](../modules/_client_apis_notificationsapi_.md#getrecentstreamnotificationsoptions)): *Promise‹[GetRecentStreamNotifications](../modules/_client_apis_notificationsapi_.md#getrecentstreamnotifications)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRecentStreamNotificationsOptions](../modules/_client_apis_notificationsapi_.md#getrecentstreamnotificationsoptions) |

**Returns:** *Promise‹[GetRecentStreamNotifications](../modules/_client_apis_notificationsapi_.md#getrecentstreamnotifications)›*

___

### <a id="getstreamnotificationsmetadata" name="getstreamnotificationsmetadata"></a>  getStreamNotificationsMetaData

▸ **getStreamNotificationsMetaData**(): *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

**Returns:** *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

___

### <a id="getstreamnotificationspromptsettings" name="getstreamnotificationspromptsettings"></a>  getStreamNotificationsPromptSettings

▸ **getStreamNotificationsPromptSettings**(): *Promise‹[GetStreamNotificationsPromptSettings](../modules/_client_apis_notificationsapi_.md#getstreamnotificationspromptsettings)›*

**Returns:** *Promise‹[GetStreamNotificationsPromptSettings](../modules/_client_apis_notificationsapi_.md#getstreamnotificationspromptsettings)›*

___

### <a id="getunreadstreamnotificationscount" name="getunreadstreamnotificationscount"></a>  getUnreadStreamNotificationsCount

▸ **getUnreadStreamNotificationsCount**(): *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

**Returns:** *Promise‹[GetLatestUniverseUpdates](../modules/_client_apis_notificationsapi_.md#getlatestuniverseupdates)›*

___

### <a id="markgameupdatenotificationinteracted" name="markgameupdatenotificationinteracted"></a>  markGameUpdateNotificationInteracted

▸ **markGameUpdateNotificationInteracted**(`options`: [SendGameUpdateNotificationInteractedOptions](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationinteractedoptions)): *Promise‹[SendGameUpdateNotificationInteracted](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationinteracted)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendGameUpdateNotificationInteractedOptions](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationinteractedoptions) |

**Returns:** *Promise‹[SendGameUpdateNotificationInteracted](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationinteracted)›*

___

### <a id="markgameupdatenotificationread" name="markgameupdatenotificationread"></a>  markGameUpdateNotificationRead

▸ **markGameUpdateNotificationRead**(`options`: [SendGameUpdateNotificationReadOptions](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationreadoptions)): *Promise‹[SendGameUpdateNotificationRead](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendGameUpdateNotificationReadOptions](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationreadoptions) |

**Returns:** *Promise‹[SendGameUpdateNotificationRead](../modules/_client_apis_notificationsapi_.md#sendgameupdatenotificationread)›*

___

### <a id="marknotificationcategoryread" name="marknotificationcategoryread"></a>  markNotificationCategoryRead

▸ **markNotificationCategoryRead**(`options`: [MarkNotificationCategoryReadOptions](../modules/_client_apis_notificationsapi_.md#marknotificationcategoryreadoptions)): *Promise‹[MarkNotificationCategoryRead](../modules/_client_apis_notificationsapi_.md#marknotificationcategoryread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkNotificationCategoryReadOptions](../modules/_client_apis_notificationsapi_.md#marknotificationcategoryreadoptions) |

**Returns:** *Promise‹[MarkNotificationCategoryRead](../modules/_client_apis_notificationsapi_.md#marknotificationcategoryread)›*

___

### <a id="marknotificationinteraction" name="marknotificationinteraction"></a>  markNotificationInteraction

▸ **markNotificationInteraction**(`options`: [MarkNotificationInteractionOptions](../modules/_client_apis_notificationsapi_.md#marknotificationinteractionoptions)): *Promise‹[MarkNotificationInteraction](../modules/_client_apis_notificationsapi_.md#marknotificationinteraction)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkNotificationInteractionOptions](../modules/_client_apis_notificationsapi_.md#marknotificationinteractionoptions) |

**Returns:** *Promise‹[MarkNotificationInteraction](../modules/_client_apis_notificationsapi_.md#marknotificationinteraction)›*

___

### <a id="marknotificationread" name="marknotificationread"></a>  markNotificationRead

▸ **markNotificationRead**(`options`: [MarkNotificationReadOptions](../modules/_client_apis_notificationsapi_.md#marknotificationreadoptions)): *Promise‹[MarkNotificationRead](../modules/_client_apis_notificationsapi_.md#marknotificationread)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MarkNotificationReadOptions](../modules/_client_apis_notificationsapi_.md#marknotificationreadoptions) |

**Returns:** *Promise‹[MarkNotificationRead](../modules/_client_apis_notificationsapi_.md#marknotificationread)›*

___

### <a id="registerandroidamazon" name="registerandroidamazon"></a>  registerAndroidAmazon

▸ **registerAndroidAmazon**(`options`: [RegisterAmazonAndroidOptions](../modules/_client_apis_notificationsapi_.md#registeramazonandroidoptions)): *Promise‹[RegisterAmazonAndroid](../modules/_client_apis_notificationsapi_.md#registeramazonandroid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterAmazonAndroidOptions](../modules/_client_apis_notificationsapi_.md#registeramazonandroidoptions) |

**Returns:** *Promise‹[RegisterAmazonAndroid](../modules/_client_apis_notificationsapi_.md#registeramazonandroid)›*

___

### <a id="registerandroidnative" name="registerandroidnative"></a>  registerAndroidNative

▸ **registerAndroidNative**(`options`: [RegisterAndroidNativeOptions](../modules/_client_apis_notificationsapi_.md#registerandroidnativeoptions)): *Promise‹[RegisterAndroidNative](../modules/_client_apis_notificationsapi_.md#registerandroidnative)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterAndroidNativeOptions](../modules/_client_apis_notificationsapi_.md#registerandroidnativeoptions) |

**Returns:** *Promise‹[RegisterAndroidNative](../modules/_client_apis_notificationsapi_.md#registerandroidnative)›*

___

### <a id="registerandroidtencentserice" name="registerandroidtencentserice"></a>  registerAndroidTencentSerice

▸ **registerAndroidTencentSerice**(`options`: [RegisterAndroidTencentServiceOptions](../modules/_client_apis_notificationsapi_.md#registerandroidtencentserviceoptions)): *Promise‹[RegisterAndroidTencentService](../modules/_client_apis_notificationsapi_.md#registerandroidtencentservice)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterAndroidTencentServiceOptions](../modules/_client_apis_notificationsapi_.md#registerandroidtencentserviceoptions) |

**Returns:** *Promise‹[RegisterAndroidTencentService](../modules/_client_apis_notificationsapi_.md#registerandroidtencentservice)›*

___

### <a id="registerchrome" name="registerchrome"></a>  registerChrome

▸ **registerChrome**(`options`: [RegisterChromeOptions](../modules/_client_apis_notificationsapi_.md#registerchromeoptions)): *Promise‹[RegisterChrome](../modules/_client_apis_notificationsapi_.md#registerchrome)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterChromeOptions](../modules/_client_apis_notificationsapi_.md#registerchromeoptions) |

**Returns:** *Promise‹[RegisterChrome](../modules/_client_apis_notificationsapi_.md#registerchrome)›*

___

### <a id="registerfirefox" name="registerfirefox"></a>  registerFirefox

▸ **registerFirefox**(`options`: [RegisterFirefoxOptions](../modules/_client_apis_notificationsapi_.md#registerfirefoxoptions)): *Promise‹[RegisterFirefox](../modules/_client_apis_notificationsapi_.md#registerfirefox)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterFirefoxOptions](../modules/_client_apis_notificationsapi_.md#registerfirefoxoptions) |

**Returns:** *Promise‹[RegisterFirefox](../modules/_client_apis_notificationsapi_.md#registerfirefox)›*

___

### <a id="registeriosnative" name="registeriosnative"></a>  registerIOSNative

▸ **registerIOSNative**(`options`: [RegisterIOSNativeOptions](../modules/_client_apis_notificationsapi_.md#registeriosnativeoptions)): *Promise‹[RegisterIOSNative](../modules/_client_apis_notificationsapi_.md#registeriosnative)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RegisterIOSNativeOptions](../modules/_client_apis_notificationsapi_.md#registeriosnativeoptions) |

**Returns:** *Promise‹[RegisterIOSNative](../modules/_client_apis_notificationsapi_.md#registeriosnative)›*

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

### <a id="suppressstreamnotificationsprompt" name="suppressstreamnotificationsprompt"></a>  suppressStreamNotificationsPrompt

▸ **suppressStreamNotificationsPrompt**(): *Promise‹[SuppressStreamNotificationsPrompt](../modules/_client_apis_notificationsapi_.md#suppressstreamnotificationsprompt)›*

**Returns:** *Promise‹[SuppressStreamNotificationsPrompt](../modules/_client_apis_notificationsapi_.md#suppressstreamnotificationsprompt)›*

___

### <a id="updatedestinationsetting" name="updatedestinationsetting"></a>  updateDestinationSetting

▸ **updateDestinationSetting**(`options`: [UpdateNotificationDestinationSettingsOptions](../modules/_client_apis_notificationsapi_.md#updatenotificationdestinationsettingsoptions)): *Promise‹[UpdateNotificationDestinationSettings](../modules/_client_apis_notificationsapi_.md#updatenotificationdestinationsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateNotificationDestinationSettingsOptions](../modules/_client_apis_notificationsapi_.md#updatenotificationdestinationsettingsoptions) |

**Returns:** *Promise‹[UpdateNotificationDestinationSettings](../modules/_client_apis_notificationsapi_.md#updatenotificationdestinationsettings)›*

___

### <a id="updatenotificationsettings" name="updatenotificationsettings"></a>  updateNotificationSettings

▸ **updateNotificationSettings**(`options`: [UpdateNotificationSettingsOptions](../modules/_client_apis_notificationsapi_.md#updatenotificationsettingsoptions)): *Promise‹[UpdateNotificationSettings](../modules/_client_apis_notificationsapi_.md#updatenotificationsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateNotificationSettingsOptions](../modules/_client_apis_notificationsapi_.md#updatenotificationsettingsoptions) |

**Returns:** *Promise‹[UpdateNotificationSettings](../modules/_client_apis_notificationsapi_.md#updatenotificationsettings)›*
