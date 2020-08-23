
# Module: "client/apis/NotificationsAPI"

## Index

### Classes

* [NotificationsAPI](../classes/_client_apis_notificationsapi_.notificationsapi.md)

### Type aliases

* [AllowNotificationSource](_client_apis_notificationsapi_.md#allownotificationsource)
* [AllowNotificationSourceOptions](_client_apis_notificationsapi_.md#allownotificationsourceoptions)
* [AllowNotificationsDestination](_client_apis_notificationsapi_.md#allownotificationsdestination)
* [AllowNotificationsDestinationOptions](_client_apis_notificationsapi_.md#allownotificationsdestinationoptions)
* [ClearUnreadStreamNotifications](_client_apis_notificationsapi_.md#clearunreadstreamnotifications)
* [DeregisterAllDevices](_client_apis_notificationsapi_.md#deregisteralldevices)
* [DeregisterCurrentDevice](_client_apis_notificationsapi_.md#deregistercurrentdevice)
* [DisallowNotificationSource](_client_apis_notificationsapi_.md#disallownotificationsource)
* [DisallowNotificationSourceOptions](_client_apis_notificationsapi_.md#disallownotificationsourceoptions)
* [DisallowNotificationsDestination](_client_apis_notificationsapi_.md#disallownotificationsdestination)
* [DisallowNotificationsDestinationOptions](_client_apis_notificationsapi_.md#disallownotificationsdestinationoptions)
* [GetChromeNotificationsManifest](_client_apis_notificationsapi_.md#getchromenotificationsmanifest)
* [GetCurrentNotificationDeviceDestination](_client_apis_notificationsapi_.md#getcurrentnotificationdevicedestination)
* [GetLatestUniverseUpdates](_client_apis_notificationsapi_.md#getlatestuniverseupdates)
* [GetLatestUniversesUpdatesOptions](_client_apis_notificationsapi_.md#getlatestuniversesupdatesoptions)
* [GetNotificationDestinations](_client_apis_notificationsapi_.md#getnotificationdestinations)
* [GetNotificationIds](_client_apis_notificationsapi_.md#getnotificationids)
* [GetNotificationIdsOptions](_client_apis_notificationsapi_.md#getnotificationidsoptions)
* [GetNotificationsMetaData](_client_apis_notificationsapi_.md#getnotificationsmetadata)
* [GetNotificationsMetaDataOptions](_client_apis_notificationsapi_.md#getnotificationsmetadataoptions)
* [GetNotificationsSettings](_client_apis_notificationsapi_.md#getnotificationssettings)
* [GetRealtimeNotificationsSettings](_client_apis_notificationsapi_.md#getrealtimenotificationssettings)
* [GetRecentStreamNotifications](_client_apis_notificationsapi_.md#getrecentstreamnotifications)
* [GetRecentStreamNotificationsOptions](_client_apis_notificationsapi_.md#getrecentstreamnotificationsoptions)
* [GetStreamNotificationsMetaData](_client_apis_notificationsapi_.md#getstreamnotificationsmetadata)
* [GetStreamNotificationsPromptSettings](_client_apis_notificationsapi_.md#getstreamnotificationspromptsettings)
* [GetStreamNotificationsUnreadCount](_client_apis_notificationsapi_.md#getstreamnotificationsunreadcount)
* [MarkNotificationCategoryRead](_client_apis_notificationsapi_.md#marknotificationcategoryread)
* [MarkNotificationCategoryReadOptions](_client_apis_notificationsapi_.md#marknotificationcategoryreadoptions)
* [MarkNotificationInteraction](_client_apis_notificationsapi_.md#marknotificationinteraction)
* [MarkNotificationInteractionOptions](_client_apis_notificationsapi_.md#marknotificationinteractionoptions)
* [MarkNotificationRead](_client_apis_notificationsapi_.md#marknotificationread)
* [MarkNotificationReadOptions](_client_apis_notificationsapi_.md#marknotificationreadoptions)
* [MarkStreamNotificationInteracted](_client_apis_notificationsapi_.md#markstreamnotificationinteracted)
* [MarkStreamNotificationInteractedOptions](_client_apis_notificationsapi_.md#markstreamnotificationinteractedoptions)
* [RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)
* [RegisterAmazonAndroidOptions](_client_apis_notificationsapi_.md#registeramazonandroidoptions)
* [RegisterAndroidNative](_client_apis_notificationsapi_.md#registerandroidnative)
* [RegisterAndroidNativeOptions](_client_apis_notificationsapi_.md#registerandroidnativeoptions)
* [RegisterAndroidTencentService](_client_apis_notificationsapi_.md#registerandroidtencentservice)
* [RegisterAndroidTencentServiceOptions](_client_apis_notificationsapi_.md#registerandroidtencentserviceoptions)
* [RegisterChrome](_client_apis_notificationsapi_.md#registerchrome)
* [RegisterChromeOptions](_client_apis_notificationsapi_.md#registerchromeoptions)
* [RegisterFirefox](_client_apis_notificationsapi_.md#registerfirefox)
* [RegisterFirefoxOptions](_client_apis_notificationsapi_.md#registerfirefoxoptions)
* [RegisterIOSNative](_client_apis_notificationsapi_.md#registeriosnative)
* [RegisterIOSNativeOptions](_client_apis_notificationsapi_.md#registeriosnativeoptions)
* [SendGameUpdateNotificationInteracted](_client_apis_notificationsapi_.md#sendgameupdatenotificationinteracted)
* [SendGameUpdateNotificationInteractedOptions](_client_apis_notificationsapi_.md#sendgameupdatenotificationinteractedoptions)
* [SendGameUpdateNotificationRead](_client_apis_notificationsapi_.md#sendgameupdatenotificationread)
* [SendGameUpdateNotificationReadOptions](_client_apis_notificationsapi_.md#sendgameupdatenotificationreadoptions)
* [SuppressStreamNotificationsPrompt](_client_apis_notificationsapi_.md#suppressstreamnotificationsprompt)
* [UpdateNotificationDestinationSettings](_client_apis_notificationsapi_.md#updatenotificationdestinationsettings)
* [UpdateNotificationDestinationSettingsOptions](_client_apis_notificationsapi_.md#updatenotificationdestinationsettingsoptions)
* [UpdateNotificationSettings](_client_apis_notificationsapi_.md#updatenotificationsettings)
* [UpdateNotificationSettingsOptions](_client_apis_notificationsapi_.md#updatenotificationsettingsoptions)

## Type aliases

### <a id="allownotificationsource" name="allownotificationsource"></a>  AllowNotificationSource

Ƭ **AllowNotificationSource**: *object*

#### Type declaration:

___

### <a id="allownotificationsourceoptions" name="allownotificationsourceoptions"></a>  AllowNotificationSourceOptions

Ƭ **AllowNotificationSourceOptions**: *object*

#### Type declaration:

* **sourceType**: *string*

___

### <a id="allownotificationsdestination" name="allownotificationsdestination"></a>  AllowNotificationsDestination

Ƭ **AllowNotificationsDestination**: *object*

#### Type declaration:

___

### <a id="allownotificationsdestinationoptions" name="allownotificationsdestinationoptions"></a>  AllowNotificationsDestinationOptions

Ƭ **AllowNotificationsDestinationOptions**: *object*

#### Type declaration:

* **destinationType**: *string*

___

### <a id="clearunreadstreamnotifications" name="clearunreadstreamnotifications"></a>  ClearUnreadStreamNotifications

Ƭ **ClearUnreadStreamNotifications**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="deregisteralldevices" name="deregisteralldevices"></a>  DeregisterAllDevices

Ƭ **DeregisterAllDevices**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="deregistercurrentdevice" name="deregistercurrentdevice"></a>  DeregisterCurrentDevice

Ƭ **DeregisterCurrentDevice**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="disallownotificationsource" name="disallownotificationsource"></a>  DisallowNotificationSource

Ƭ **DisallowNotificationSource**: *object*

#### Type declaration:

___

### <a id="disallownotificationsourceoptions" name="disallownotificationsourceoptions"></a>  DisallowNotificationSourceOptions

Ƭ **DisallowNotificationSourceOptions**: *[AllowNotificationSourceOptions](_client_apis_notificationsapi_.md#allownotificationsourceoptions)*

___

### <a id="disallownotificationsdestination" name="disallownotificationsdestination"></a>  DisallowNotificationsDestination

Ƭ **DisallowNotificationsDestination**: *object*

#### Type declaration:

___

### <a id="disallownotificationsdestinationoptions" name="disallownotificationsdestinationoptions"></a>  DisallowNotificationsDestinationOptions

Ƭ **DisallowNotificationsDestinationOptions**: *[AllowNotificationsDestinationOptions](_client_apis_notificationsapi_.md#allownotificationsdestinationoptions)*

___

### <a id="getchromenotificationsmanifest" name="getchromenotificationsmanifest"></a>  GetChromeNotificationsManifest

Ƭ **GetChromeNotificationsManifest**: *object*

#### Type declaration:

* **gcm_sender_id**: *string*

* **name**: *string*

___

### <a id="getcurrentnotificationdevicedestination" name="getcurrentnotificationdevicedestination"></a>  GetCurrentNotificationDeviceDestination

Ƭ **GetCurrentNotificationDeviceDestination**: *object*

#### Type declaration:

* **destination**(): *object*

  * **application**: *string*

  * **name**: *string*

  * **notificationToken**: *string*

  * **platform**: *string*

  * **supportsUpdateNotifications**: *boolean*

  * **user**(): *object*

    * **name**: *string*

    * **userId**: *number*

  * **userPushNotificationDestinationId**: *number*

* **statusMessage**: *string*

___

### <a id="getlatestuniverseupdates" name="getlatestuniverseupdates"></a>  GetLatestUniverseUpdates

Ƭ **GetLatestUniverseUpdates**: *object[]*

___

### <a id="getlatestuniversesupdatesoptions" name="getlatestuniversesupdatesoptions"></a>  GetLatestUniversesUpdatesOptions

Ƭ **GetLatestUniversesUpdatesOptions**: *object*

#### Type declaration:

* **sinceDateTime**? : *undefined | string*

* **universeIds**: *number[]*

___

### <a id="getnotificationdestinations" name="getnotificationdestinations"></a>  GetNotificationDestinations

Ƭ **GetNotificationDestinations**: *object*

#### Type declaration:

* **destinations**: *GetCurrentNotificationDeviceDestination["destination"][]*

* **statusMessage**: *string*

___

### <a id="getnotificationids" name="getnotificationids"></a>  GetNotificationIds

Ƭ **GetNotificationIds**: *object*

#### Type declaration:

* **ids**: *string[]*

* **statusMessage**: *string*

___

### <a id="getnotificationidsoptions" name="getnotificationidsoptions"></a>  GetNotificationIdsOptions

Ƭ **GetNotificationIdsOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**: *number*

* **notificationToken**: *string*

___

### <a id="getnotificationsmetadata" name="getnotificationsmetadata"></a>  GetNotificationsMetaData

Ƭ **GetNotificationsMetaData**: *object*

#### Type declaration:

* **metadata**(): *object*

  * **detail**: *unknown*

  * **fallbackDelivered**: *boolean*

  * **notificationId**: *string*

  * **type**: *string*

* **statusMessage**: *string*

___

### <a id="getnotificationsmetadataoptions" name="getnotificationsmetadataoptions"></a>  GetNotificationsMetaDataOptions

Ƭ **GetNotificationsMetaDataOptions**: *object*

#### Type declaration:

* **notificationId**: *number*

* **notificationToken**: *string*

___

### <a id="getnotificationssettings" name="getnotificationssettings"></a>  GetNotificationsSettings

Ƭ **GetNotificationsSettings**: *object*

#### Type declaration:

* **notificationBandSettings**: *object[]*

* **optedOutNotificationSourceTypes**: *string[]*

* **optedOutReceiverDestinationTypes**: *string[]*

___

### <a id="getrealtimenotificationssettings" name="getrealtimenotificationssettings"></a>  GetRealtimeNotificationsSettings

Ƭ **GetRealtimeNotificationsSettings**: *object*

#### Type declaration:

* **fallbackDomain**: *string*

* **primaryDomain**: *string*

___

### <a id="getrecentstreamnotifications" name="getrecentstreamnotifications"></a>  GetRecentStreamNotifications

Ƭ **GetRecentStreamNotifications**: *object[]*

___

### <a id="getrecentstreamnotificationsoptions" name="getrecentstreamnotificationsoptions"></a>  GetRecentStreamNotificationsOptions

Ƭ **GetRecentStreamNotificationsOptions**: *object*

#### Type declaration:

* **maxRows**? : *undefined | number*

* **startIndex**? : *undefined | number*

___

### <a id="getstreamnotificationsmetadata" name="getstreamnotificationsmetadata"></a>  GetStreamNotificationsMetaData

Ƭ **GetStreamNotificationsMetaData**: *object*

#### Type declaration:

* **bannerDismissTimeSpan**: *number*

* **canLaunchGameFromGameUpdate**: *boolean*

* **signalRDisconnectionResponseInMilliseconds**: *number*

* **useFriendsApiForAjaxRequests**: *boolean*

___

### <a id="getstreamnotificationspromptsettings" name="getstreamnotificationspromptsettings"></a>  GetStreamNotificationsPromptSettings

Ƭ **GetStreamNotificationsPromptSettings**: *object*

#### Type declaration:

* **hasUserInteractedWithNotificationsStream**: *boolean*

* **showNotificationStreamPrompt**: *boolean*

___

### <a id="getstreamnotificationsunreadcount" name="getstreamnotificationsunreadcount"></a>  GetStreamNotificationsUnreadCount

Ƭ **GetStreamNotificationsUnreadCount**: *object*

#### Type declaration:

* **statusMessage**: *string*

* **unreadNotifications**: *number*

___

### <a id="marknotificationcategoryread" name="marknotificationcategoryread"></a>  MarkNotificationCategoryRead

Ƭ **MarkNotificationCategoryRead**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="marknotificationcategoryreadoptions" name="marknotificationcategoryreadoptions"></a>  MarkNotificationCategoryReadOptions

Ƭ **MarkNotificationCategoryReadOptions**: *object*

#### Type declaration:

* **category**: *string*

* **latestNotificationId**: *string*

* **notificationType**: *string*

___

### <a id="marknotificationinteraction" name="marknotificationinteraction"></a>  MarkNotificationInteraction

Ƭ **MarkNotificationInteraction**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="marknotificationinteractionoptions" name="marknotificationinteractionoptions"></a>  MarkNotificationInteractionOptions

Ƭ **MarkNotificationInteractionOptions**: *object*

#### Type declaration:

* **interactionType**: *string*

* **notificationId**: *number*

* **notificationToken**: *string*

* **platformType**: *string*

___

### <a id="marknotificationread" name="marknotificationread"></a>  MarkNotificationRead

Ƭ **MarkNotificationRead**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="marknotificationreadoptions" name="marknotificationreadoptions"></a>  MarkNotificationReadOptions

Ƭ **MarkNotificationReadOptions**: *object*

#### Type declaration:

* **notificationId**: *string*

* **platformType**: *string*

___

### <a id="markstreamnotificationinteracted" name="markstreamnotificationinteracted"></a>  MarkStreamNotificationInteracted

Ƭ **MarkStreamNotificationInteracted**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="markstreamnotificationinteractedoptions" name="markstreamnotificationinteractedoptions"></a>  MarkStreamNotificationInteractedOptions

Ƭ **MarkStreamNotificationInteractedOptions**: *object*

#### Type declaration:

* **eventId**: *string*

___

### <a id="registeramazonandroid" name="registeramazonandroid"></a>  RegisterAmazonAndroid

Ƭ **RegisterAmazonAndroid**: *object*

#### Type declaration:

* **registration**(): *object*

  * **application**: *string*

  * **name**: *string*

  * **notificationToken**: *string*

  * **platform**: *string*

  * **userPushNotificationDestinationId**: *number*

* **statusMessage**: *string*

___

### <a id="registeramazonandroidoptions" name="registeramazonandroidoptions"></a>  RegisterAmazonAndroidOptions

Ƭ **RegisterAmazonAndroidOptions**: *object*

#### Type declaration:

* **authorizeForUser**: *boolean*

* **deviceName**: *string*

* **notificationToken**: *string*

* **oldNotificationToken**: *string*

___

### <a id="registerandroidnative" name="registerandroidnative"></a>  RegisterAndroidNative

Ƭ **RegisterAndroidNative**: *[RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)*

___

### <a id="registerandroidnativeoptions" name="registerandroidnativeoptions"></a>  RegisterAndroidNativeOptions

Ƭ **RegisterAndroidNativeOptions**: *[RegisterAmazonAndroidOptions](_client_apis_notificationsapi_.md#registeramazonandroidoptions)*

___

### <a id="registerandroidtencentservice" name="registerandroidtencentservice"></a>  RegisterAndroidTencentService

Ƭ **RegisterAndroidTencentService**: *[RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)*

___

### <a id="registerandroidtencentserviceoptions" name="registerandroidtencentserviceoptions"></a>  RegisterAndroidTencentServiceOptions

Ƭ **RegisterAndroidTencentServiceOptions**: *[RegisterAmazonAndroidOptions](_client_apis_notificationsapi_.md#registeramazonandroidoptions)*

___

### <a id="registerchrome" name="registerchrome"></a>  RegisterChrome

Ƭ **RegisterChrome**: *[RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)*

___

### <a id="registerchromeoptions" name="registerchromeoptions"></a>  RegisterChromeOptions

Ƭ **RegisterChromeOptions**: *object*

#### Type declaration:

* **initiatedByUser**: *boolean*

* **notificationToken**: *string*

___

### <a id="registerfirefox" name="registerfirefox"></a>  RegisterFirefox

Ƭ **RegisterFirefox**: *[RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)*

___

### <a id="registerfirefoxoptions" name="registerfirefoxoptions"></a>  RegisterFirefoxOptions

Ƭ **RegisterFirefoxOptions**: *[RegisterChromeOptions](_client_apis_notificationsapi_.md#registerchromeoptions) & object*

___

### <a id="registeriosnative" name="registeriosnative"></a>  RegisterIOSNative

Ƭ **RegisterIOSNative**: *[RegisterAmazonAndroid](_client_apis_notificationsapi_.md#registeramazonandroid)*

___

### <a id="registeriosnativeoptions" name="registeriosnativeoptions"></a>  RegisterIOSNativeOptions

Ƭ **RegisterIOSNativeOptions**: *object*

#### Type declaration:

* **authorizeForUser**: *boolean*

* **destinationIdentifier**: *string*

* **deviceName**: *string*

* **notificationToken**: *string*

* **oldNotificationToken**: *string*

___

### <a id="sendgameupdatenotificationinteracted" name="sendgameupdatenotificationinteracted"></a>  SendGameUpdateNotificationInteracted

Ƭ **SendGameUpdateNotificationInteracted**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="sendgameupdatenotificationinteractedoptions" name="sendgameupdatenotificationinteractedoptions"></a>  SendGameUpdateNotificationInteractedOptions

Ƭ **SendGameUpdateNotificationInteractedOptions**: *object*

#### Type declaration:

* **createdOnKey**: *string*

* **currentUserId**: *number*

* **interactioNType**: *string*

* **universeId**: *number*

___

### <a id="sendgameupdatenotificationread" name="sendgameupdatenotificationread"></a>  SendGameUpdateNotificationRead

Ƭ **SendGameUpdateNotificationRead**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="sendgameupdatenotificationreadoptions" name="sendgameupdatenotificationreadoptions"></a>  SendGameUpdateNotificationReadOptions

Ƭ **SendGameUpdateNotificationReadOptions**: *object*

#### Type declaration:

* **createdOn**: *string*

* **currentUserId**: *number*

* **universeId**: *number*

___

### <a id="suppressstreamnotificationsprompt" name="suppressstreamnotificationsprompt"></a>  SuppressStreamNotificationsPrompt

Ƭ **SuppressStreamNotificationsPrompt**: *object*

#### Type declaration:

* **statusMessage**: *string*

___

### <a id="updatenotificationdestinationsettings" name="updatenotificationdestinationsettings"></a>  UpdateNotificationDestinationSettings

Ƭ **UpdateNotificationDestinationSettings**: *object*

#### Type declaration:

___

### <a id="updatenotificationdestinationsettingsoptions" name="updatenotificationdestinationsettingsoptions"></a>  UpdateNotificationDestinationSettingsOptions

Ƭ **UpdateNotificationDestinationSettingsOptions**: *object*

#### Type declaration:

* **destinationId**: *number*

* **isEnabled**: *boolean*

* **notificationSourceType**: *string*

___

### <a id="updatenotificationsettings" name="updatenotificationsettings"></a>  UpdateNotificationSettings

Ƭ **UpdateNotificationSettings**: *object*

#### Type declaration:

___

### <a id="updatenotificationsettingsoptions" name="updatenotificationsettingsoptions"></a>  UpdateNotificationSettingsOptions

Ƭ **UpdateNotificationSettingsOptions**: *object*

#### Type declaration:

* **updatedSettings**: *object[]*
