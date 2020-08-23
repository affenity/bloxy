
# Class: DevelopAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **DevelopAPI**

## Index

### Constructors

* [constructor](_client_apis_developapi_.developapi.md#constructor)

### Properties

* [client](_client_apis_developapi_.developapi.md#client)
* [options](_client_apis_developapi_.developapi.md#options)

### Methods

* [activateUniverse](_client_apis_developapi_.developapi.md#activateuniverse)
* [createDeveloperProduct](_client_apis_developapi_.developapi.md#createdeveloperproduct)
* [createUniverseAlias](_client_apis_developapi_.developapi.md#createuniversealias)
* [deactivateUniverse](_client_apis_developapi_.developapi.md#deactivateuniverse)
* [deleteUniverseAlias](_client_apis_developapi_.developapi.md#deleteuniversealias)
* [downloadUniverseStatisticReportsByTime](_client_apis_developapi_.developapi.md#downloaduniversestatisticreportsbytime)
* [filterGameUpdateNotificationText](_client_apis_developapi_.developapi.md#filtergameupdatenotificationtext)
* [generateUniverseStatisticReportsByTime](_client_apis_developapi_.developapi.md#generateuniversestatisticreportsbytime)
* [getAssetsVoting](_client_apis_developapi_.developapi.md#getassetsvoting)
* [getGameTemplates](_client_apis_developapi_.developapi.md#getgametemplates)
* [getGameUpdatesHistory](_client_apis_developapi_.developapi.md#getgameupdateshistory)
* [getGroupUniverses](_client_apis_developapi_.developapi.md#getgroupuniverses)
* [getMultiPlugins](_client_apis_developapi_.developapi.md#getmultiplugins)
* [getMultiUniverses](_client_apis_developapi_.developapi.md#getmultiuniverses)
* [getMultiUniversesPermissions](_client_apis_developapi_.developapi.md#getmultiuniversespermissions)
* [getPlaceCompatibilities](_client_apis_developapi_.developapi.md#getplacecompatibilities)
* [getPlaceStatistics](_client_apis_developapi_.developapi.md#getplacestatistics)
* [getPlacesInUniverse](_client_apis_developapi_.developapi.md#getplacesinuniverse)
* [getSelfManageableGroups](_client_apis_developapi_.developapi.md#getselfmanageablegroups)
* [getSelfNotificationStatisticReports](_client_apis_developapi_.developapi.md#getselfnotificationstatisticreports)
* [getSelfUniversePermissions](_client_apis_developapi_.developapi.md#getselfuniversepermissions)
* [getSelfUniverses](_client_apis_developapi_.developapi.md#getselfuniverses)
* [getSelfUniversesTeamCreateAccess](_client_apis_developapi_.developapi.md#getselfuniversesteamcreateaccess)
* [getStudioData](_client_apis_developapi_.developapi.md#getstudiodata)
* [getUniverse](_client_apis_developapi_.developapi.md#getuniverse)
* [getUniverseConfiguration](_client_apis_developapi_.developapi.md#getuniverseconfiguration)
* [getUniverseStatisticReports](_client_apis_developapi_.developapi.md#getuniversestatisticreports)
* [getUniverseStatisticReportsByTime](_client_apis_developapi_.developapi.md#getuniversestatisticreportsbytime)
* [getUniverseTeamCreateMembers](_client_apis_developapi_.developapi.md#getuniverseteamcreatemembers)
* [getUniverseTeamCreateSettings](_client_apis_developapi_.developapi.md#getuniverseteamcreatesettings)
* [getUniverseVIPServersConfiguration](_client_apis_developapi_.developapi.md#getuniversevipserversconfiguration)
* [publishGameUpdateNotification](_client_apis_developapi_.developapi.md#publishgameupdatenotification)
* [removeUserFromUniverseTeamCreate](_client_apis_developapi_.developapi.md#removeuserfromuniverseteamcreate)
* [request](_client_apis_developapi_.developapi.md#request)
* [searchToolbox](_client_apis_developapi_.developapi.md#searchtoolbox)
* [searchUniverses](_client_apis_developapi_.developapi.md#searchuniverses)
* [setStudioData](_client_apis_developapi_.developapi.md#setstudiodata)
* [updateDeveloperProduct](_client_apis_developapi_.developapi.md#updatedeveloperproduct)
* [updatePlaceConfiguration](_client_apis_developapi_.developapi.md#updateplaceconfiguration)
* [updatePlugin](_client_apis_developapi_.developapi.md#updateplugin)
* [updateUniverseAlias](_client_apis_developapi_.developapi.md#updateuniversealias)
* [updateUniverseConfiguration](_client_apis_developapi_.developapi.md#updateuniverseconfiguration)
* [updateUniverseTeamCreateSettings](_client_apis_developapi_.developapi.md#updateuniverseteamcreatesettings)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new DevelopAPI**(`client`: [Client](_client_client_.client.md)): *[DevelopAPI](_client_apis_developapi_.developapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[DevelopAPI](_client_apis_developapi_.developapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="activateuniverse" name="activateuniverse"></a>  activateUniverse

▸ **activateUniverse**(`options`: [ActivateUniverseOptions](../modules/_client_apis_developapi_.md#activateuniverseoptions)): *Promise‹[ActivateUniverse](../modules/_client_apis_developapi_.md#activateuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ActivateUniverseOptions](../modules/_client_apis_developapi_.md#activateuniverseoptions) |

**Returns:** *Promise‹[ActivateUniverse](../modules/_client_apis_developapi_.md#activateuniverse)›*

___

### <a id="createdeveloperproduct" name="createdeveloperproduct"></a>  createDeveloperProduct

▸ **createDeveloperProduct**(`options`: [CreateDeveloperProductOptions](../modules/_client_apis_developapi_.md#createdeveloperproductoptions)): *Promise‹[CreateDeveloperProduct](../modules/_client_apis_developapi_.md#createdeveloperproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateDeveloperProductOptions](../modules/_client_apis_developapi_.md#createdeveloperproductoptions) |

**Returns:** *Promise‹[CreateDeveloperProduct](../modules/_client_apis_developapi_.md#createdeveloperproduct)›*

___

### <a id="createuniversealias" name="createuniversealias"></a>  createUniverseAlias

▸ **createUniverseAlias**(`options`: [CreateUniverseAliasOptions](../modules/_client_apis_developapi_.md#createuniversealiasoptions)): *Promise‹[CreateUniverseAlias](../modules/_client_apis_developapi_.md#createuniversealias)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateUniverseAliasOptions](../modules/_client_apis_developapi_.md#createuniversealiasoptions) |

**Returns:** *Promise‹[CreateUniverseAlias](../modules/_client_apis_developapi_.md#createuniversealias)›*

___

### <a id="deactivateuniverse" name="deactivateuniverse"></a>  deactivateUniverse

▸ **deactivateUniverse**(`options`: [DeactivateUniverseOptions](../modules/_client_apis_developapi_.md#deactivateuniverseoptions)): *Promise‹[DeactivateUniverse](../modules/_client_apis_developapi_.md#deactivateuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeactivateUniverseOptions](../modules/_client_apis_developapi_.md#deactivateuniverseoptions) |

**Returns:** *Promise‹[DeactivateUniverse](../modules/_client_apis_developapi_.md#deactivateuniverse)›*

___

### <a id="deleteuniversealias" name="deleteuniversealias"></a>  deleteUniverseAlias

▸ **deleteUniverseAlias**(`options`: [DeleteUniverseAliasOptions](../modules/_client_apis_developapi_.md#deleteuniversealiasoptions)): *Promise‹[DeleteUniverseAlias](../modules/_client_apis_developapi_.md#deleteuniversealias)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteUniverseAliasOptions](../modules/_client_apis_developapi_.md#deleteuniversealiasoptions) |

**Returns:** *Promise‹[DeleteUniverseAlias](../modules/_client_apis_developapi_.md#deleteuniversealias)›*

___

### <a id="downloaduniversestatisticreportsbytime" name="downloaduniversestatisticreportsbytime"></a>  downloadUniverseStatisticReportsByTime

▸ **downloadUniverseStatisticReportsByTime**(`options`: [DownloadUniverseStatisticsReportByTimeOptions](../modules/_client_apis_developapi_.md#downloaduniversestatisticsreportbytimeoptions)): *Promise‹[DownloadUniverseStatisticsReportByTime](../modules/_client_apis_developapi_.md#downloaduniversestatisticsreportbytime)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DownloadUniverseStatisticsReportByTimeOptions](../modules/_client_apis_developapi_.md#downloaduniversestatisticsreportbytimeoptions) |

**Returns:** *Promise‹[DownloadUniverseStatisticsReportByTime](../modules/_client_apis_developapi_.md#downloaduniversestatisticsreportbytime)›*

___

### <a id="filtergameupdatenotificationtext" name="filtergameupdatenotificationtext"></a>  filterGameUpdateNotificationText

▸ **filterGameUpdateNotificationText**(`options`: [FilterPublishGameNotificationOptions](../modules/_client_apis_developapi_.md#filterpublishgamenotificationoptions)): *Promise‹[FilterPublishGameNotification](../modules/_client_apis_developapi_.md#filterpublishgamenotification)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FilterPublishGameNotificationOptions](../modules/_client_apis_developapi_.md#filterpublishgamenotificationoptions) |

**Returns:** *Promise‹[FilterPublishGameNotification](../modules/_client_apis_developapi_.md#filterpublishgamenotification)›*

___

### <a id="generateuniversestatisticreportsbytime" name="generateuniversestatisticreportsbytime"></a>  generateUniverseStatisticReportsByTime

▸ **generateUniverseStatisticReportsByTime**(`options`: [GenerateUniverseStatisticReportsByTimeOptions](../modules/_client_apis_developapi_.md#generateuniversestatisticreportsbytimeoptions)): *Promise‹[GenerateUniverseStatisticReportsByTime](../modules/_client_apis_developapi_.md#generateuniversestatisticreportsbytime)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GenerateUniverseStatisticReportsByTimeOptions](../modules/_client_apis_developapi_.md#generateuniversestatisticreportsbytimeoptions) |

**Returns:** *Promise‹[GenerateUniverseStatisticReportsByTime](../modules/_client_apis_developapi_.md#generateuniversestatisticreportsbytime)›*

___

### <a id="getassetsvoting" name="getassetsvoting"></a>  getAssetsVoting

▸ **getAssetsVoting**(`options`: [GetAssetsVoteInformationOptions](../modules/_client_apis_developapi_.md#getassetsvoteinformationoptions)): *Promise‹[GetAssetsVoteInformation](../modules/_client_apis_developapi_.md#getassetsvoteinformation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetsVoteInformationOptions](../modules/_client_apis_developapi_.md#getassetsvoteinformationoptions) |

**Returns:** *Promise‹[GetAssetsVoteInformation](../modules/_client_apis_developapi_.md#getassetsvoteinformation)›*

___

### <a id="getgametemplates" name="getgametemplates"></a>  getGameTemplates

▸ **getGameTemplates**(): *Promise‹[GetGameTemplates](../modules/_client_apis_developapi_.md#getgametemplates)›*

**Returns:** *Promise‹[GetGameTemplates](../modules/_client_apis_developapi_.md#getgametemplates)›*

___

### <a id="getgameupdateshistory" name="getgameupdateshistory"></a>  getGameUpdatesHistory

▸ **getGameUpdatesHistory**(`options`: [GetGameUpdatesHistoryOptions](../modules/_client_apis_developapi_.md#getgameupdateshistoryoptions)): *Promise‹[GetGameUpdatesHistory](../modules/_client_apis_developapi_.md#getgameupdateshistory)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameUpdatesHistoryOptions](../modules/_client_apis_developapi_.md#getgameupdateshistoryoptions) |

**Returns:** *Promise‹[GetGameUpdatesHistory](../modules/_client_apis_developapi_.md#getgameupdateshistory)›*

___

### <a id="getgroupuniverses" name="getgroupuniverses"></a>  getGroupUniverses

▸ **getGroupUniverses**(`options`: [GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions)): *Promise‹[GetGroupUniverses](../modules/_client_apis_developapi_.md#getgroupuniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions) |

**Returns:** *Promise‹[GetGroupUniverses](../modules/_client_apis_developapi_.md#getgroupuniverses)›*

___

### <a id="getmultiplugins" name="getmultiplugins"></a>  getMultiPlugins

▸ **getMultiPlugins**(`options`: [GetPluginsByIdOptions](../modules/_client_apis_developapi_.md#getpluginsbyidoptions)): *Promise‹[GetPluginsById](../modules/_client_apis_developapi_.md#getpluginsbyid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetPluginsByIdOptions](../modules/_client_apis_developapi_.md#getpluginsbyidoptions) |

**Returns:** *Promise‹[GetPluginsById](../modules/_client_apis_developapi_.md#getpluginsbyid)›*

___

### <a id="getmultiuniverses" name="getmultiuniverses"></a>  getMultiUniverses

▸ **getMultiUniverses**(`options`: [MultiGetUniversesOptions](../modules/_client_apis_developapi_.md#multigetuniversesoptions)): *Promise‹[MultiGetUniverses](../modules/_client_apis_developapi_.md#multigetuniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MultiGetUniversesOptions](../modules/_client_apis_developapi_.md#multigetuniversesoptions) |

**Returns:** *Promise‹[MultiGetUniverses](../modules/_client_apis_developapi_.md#multigetuniverses)›*

___

### <a id="getmultiuniversespermissions" name="getmultiuniversespermissions"></a>  getMultiUniversesPermissions

▸ **getMultiUniversesPermissions**(`options`: [MultiGetUniversesPermissionsOptions](../modules/_client_apis_developapi_.md#multigetuniversespermissionsoptions)): *Promise‹[MultiGetUniversesPermissions](../modules/_client_apis_developapi_.md#multigetuniversespermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MultiGetUniversesPermissionsOptions](../modules/_client_apis_developapi_.md#multigetuniversespermissionsoptions) |

**Returns:** *Promise‹[MultiGetUniversesPermissions](../modules/_client_apis_developapi_.md#multigetuniversespermissions)›*

___

### <a id="getplacecompatibilities" name="getplacecompatibilities"></a>  getPlaceCompatibilities

▸ **getPlaceCompatibilities**(`options`: [GetPlaceCompatibilitiesOptions](../modules/_client_apis_developapi_.md#getplacecompatibilitiesoptions)): *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetPlaceCompatibilitiesOptions](../modules/_client_apis_developapi_.md#getplacecompatibilitiesoptions) |

**Returns:** *Promise‹[GetPlaceCompatibilities](../modules/_client_apis_developapi_.md#getplacecompatibilities)›*

___

### <a id="getplacestatistics" name="getplacestatistics"></a>  getPlaceStatistics

▸ **getPlaceStatistics**(`options`: [GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions)): *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetPlaceStatisticsByTypeOptions](../modules/_client_apis_developapi_.md#getplacestatisticsbytypeoptions) |

**Returns:** *Promise‹[GetPlaceStatisticsByType](../modules/_client_apis_developapi_.md#getplacestatisticsbytype)›*

___

### <a id="getplacesinuniverse" name="getplacesinuniverse"></a>  getPlacesInUniverse

▸ **getPlacesInUniverse**(`options`: [GetUniversePlacesOptions](../modules/_client_apis_developapi_.md#getuniverseplacesoptions)): *Promise‹[GetUniversePlaces](../modules/_client_apis_developapi_.md#getuniverseplaces)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniversePlacesOptions](../modules/_client_apis_developapi_.md#getuniverseplacesoptions) |

**Returns:** *Promise‹[GetUniversePlaces](../modules/_client_apis_developapi_.md#getuniverseplaces)›*

___

### <a id="getselfmanageablegroups" name="getselfmanageablegroups"></a>  getSelfManageableGroups

▸ **getSelfManageableGroups**(): *Promise‹[GetSelfGroupsAccess](../modules/_client_apis_developapi_.md#getselfgroupsaccess)›*

**Returns:** *Promise‹[GetSelfGroupsAccess](../modules/_client_apis_developapi_.md#getselfgroupsaccess)›*

___

### <a id="getselfnotificationstatisticreports" name="getselfnotificationstatisticreports"></a>  getSelfNotificationStatisticReports

▸ **getSelfNotificationStatisticReports**(): *Promise‹[GetNotificationsStatisticReports](../modules/_client_apis_developapi_.md#getnotificationsstatisticreports)›*

**Returns:** *Promise‹[GetNotificationsStatisticReports](../modules/_client_apis_developapi_.md#getnotificationsstatisticreports)›*

___

### <a id="getselfuniversepermissions" name="getselfuniversepermissions"></a>  getSelfUniversePermissions

▸ **getSelfUniversePermissions**(`options`: [GetUniversePermissionsOptions](../modules/_client_apis_developapi_.md#getuniversepermissionsoptions)): *Promise‹[GetUniversePermissions](../modules/_client_apis_developapi_.md#getuniversepermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniversePermissionsOptions](../modules/_client_apis_developapi_.md#getuniversepermissionsoptions) |

**Returns:** *Promise‹[GetUniversePermissions](../modules/_client_apis_developapi_.md#getuniversepermissions)›*

___

### <a id="getselfuniverses" name="getselfuniverses"></a>  getSelfUniverses

▸ **getSelfUniverses**(`options`: [GetSelfUniversesOptions](../modules/_client_apis_developapi_.md#getselfuniversesoptions)): *Promise‹[GetSelfUniverses](../modules/_client_apis_developapi_.md#getselfuniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfUniversesOptions](../modules/_client_apis_developapi_.md#getselfuniversesoptions) |

**Returns:** *Promise‹[GetSelfUniverses](../modules/_client_apis_developapi_.md#getselfuniverses)›*

___

### <a id="getselfuniversesteamcreateaccess" name="getselfuniversesteamcreateaccess"></a>  getSelfUniversesTeamCreateAccess

▸ **getSelfUniversesTeamCreateAccess**(`options`: [GetSelfTeamCreateUniversesAccessOptions](../modules/_client_apis_developapi_.md#getselfteamcreateuniversesaccessoptions)): *Promise‹[GetSelfTeamCreateUniversesAccess](../modules/_client_apis_developapi_.md#getselfteamcreateuniversesaccess)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfTeamCreateUniversesAccessOptions](../modules/_client_apis_developapi_.md#getselfteamcreateuniversesaccessoptions) |

**Returns:** *Promise‹[GetSelfTeamCreateUniversesAccess](../modules/_client_apis_developapi_.md#getselfteamcreateuniversesaccess)›*

___

### <a id="getstudiodata" name="getstudiodata"></a>  getStudioData

▸ **getStudioData**(`options`: [GetStudioDataOptions](../modules/_client_apis_developapi_.md#getstudiodataoptions)): *Promise‹[GetStudioData](../modules/_client_apis_developapi_.md#getstudiodata)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetStudioDataOptions](../modules/_client_apis_developapi_.md#getstudiodataoptions) |

**Returns:** *Promise‹[GetStudioData](../modules/_client_apis_developapi_.md#getstudiodata)›*

___

### <a id="getuniverse" name="getuniverse"></a>  getUniverse

▸ **getUniverse**(`options`: [GetUniverseOptions](../modules/_client_apis_developapi_.md#getuniverseoptions)): *Promise‹[GetUniverse](../modules/_client_apis_developapi_.md#getuniverse)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseOptions](../modules/_client_apis_developapi_.md#getuniverseoptions) |

**Returns:** *Promise‹[GetUniverse](../modules/_client_apis_developapi_.md#getuniverse)›*

___

### <a id="getuniverseconfiguration" name="getuniverseconfiguration"></a>  getUniverseConfiguration

▸ **getUniverseConfiguration**(`options`: [GetUniverseConfigurationOptions](../modules/_client_apis_developapi_.md#getuniverseconfigurationoptions)): *Promise‹[GetUniverseConfiguration](../modules/_client_apis_developapi_.md#getuniverseconfiguration)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseConfigurationOptions](../modules/_client_apis_developapi_.md#getuniverseconfigurationoptions) |

**Returns:** *Promise‹[GetUniverseConfiguration](../modules/_client_apis_developapi_.md#getuniverseconfiguration)›*

___

### <a id="getuniversestatisticreports" name="getuniversestatisticreports"></a>  getUniverseStatisticReports

▸ **getUniverseStatisticReports**(`options`: [GetUniverseStatisticsReportsOptions](../modules/_client_apis_developapi_.md#getuniversestatisticsreportsoptions)): *Promise‹[GetUniverseStatisticsReports](../modules/_client_apis_developapi_.md#getuniversestatisticsreports)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseStatisticsReportsOptions](../modules/_client_apis_developapi_.md#getuniversestatisticsreportsoptions) |

**Returns:** *Promise‹[GetUniverseStatisticsReports](../modules/_client_apis_developapi_.md#getuniversestatisticsreports)›*

___

### <a id="getuniversestatisticreportsbytime" name="getuniversestatisticreportsbytime"></a>  getUniverseStatisticReportsByTime

▸ **getUniverseStatisticReportsByTime**(`options`: [GetUniverseStatisticsReportsByTimeOptions](../modules/_client_apis_developapi_.md#getuniversestatisticsreportsbytimeoptions)): *Promise‹[GetUniverseStatisticsReportByTime](../modules/_client_apis_developapi_.md#getuniversestatisticsreportbytime)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseStatisticsReportsByTimeOptions](../modules/_client_apis_developapi_.md#getuniversestatisticsreportsbytimeoptions) |

**Returns:** *Promise‹[GetUniverseStatisticsReportByTime](../modules/_client_apis_developapi_.md#getuniversestatisticsreportbytime)›*

___

### <a id="getuniverseteamcreatemembers" name="getuniverseteamcreatemembers"></a>  getUniverseTeamCreateMembers

▸ **getUniverseTeamCreateMembers**(`options`: [GetUsersInUniverseTeamCreateOptions](../modules/_client_apis_developapi_.md#getusersinuniverseteamcreateoptions)): *Promise‹[GetUsersInUniverseTeamCreate](../modules/_client_apis_developapi_.md#getusersinuniverseteamcreate)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUsersInUniverseTeamCreateOptions](../modules/_client_apis_developapi_.md#getusersinuniverseteamcreateoptions) |

**Returns:** *Promise‹[GetUsersInUniverseTeamCreate](../modules/_client_apis_developapi_.md#getusersinuniverseteamcreate)›*

___

### <a id="getuniverseteamcreatesettings" name="getuniverseteamcreatesettings"></a>  getUniverseTeamCreateSettings

▸ **getUniverseTeamCreateSettings**(`options`: [GetUniverseTeamCreateSettingsOptions](../modules/_client_apis_developapi_.md#getuniverseteamcreatesettingsoptions)): *Promise‹[GetUniverseTeamCreateSettings](../modules/_client_apis_developapi_.md#getuniverseteamcreatesettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseTeamCreateSettingsOptions](../modules/_client_apis_developapi_.md#getuniverseteamcreatesettingsoptions) |

**Returns:** *Promise‹[GetUniverseTeamCreateSettings](../modules/_client_apis_developapi_.md#getuniverseteamcreatesettings)›*

___

### <a id="getuniversevipserversconfiguration" name="getuniversevipserversconfiguration"></a>  getUniverseVIPServersConfiguration

▸ **getUniverseVIPServersConfiguration**(`options`: [GetUniverseVIPServersConfigurationOptions](../modules/_client_apis_developapi_.md#getuniversevipserversconfigurationoptions)): *Promise‹[GetUniverseVIPServersConfiguration](../modules/_client_apis_developapi_.md#getuniversevipserversconfiguration)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUniverseVIPServersConfigurationOptions](../modules/_client_apis_developapi_.md#getuniversevipserversconfigurationoptions) |

**Returns:** *Promise‹[GetUniverseVIPServersConfiguration](../modules/_client_apis_developapi_.md#getuniversevipserversconfiguration)›*

___

### <a id="publishgameupdatenotification" name="publishgameupdatenotification"></a>  publishGameUpdateNotification

▸ **publishGameUpdateNotification**(`options`: [PublishGameNotificationOptions](../modules/_client_apis_developapi_.md#publishgamenotificationoptions)): *Promise‹[PublishGameNotification](../modules/_client_apis_developapi_.md#publishgamenotification)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PublishGameNotificationOptions](../modules/_client_apis_developapi_.md#publishgamenotificationoptions) |

**Returns:** *Promise‹[PublishGameNotification](../modules/_client_apis_developapi_.md#publishgamenotification)›*

___

### <a id="removeuserfromuniverseteamcreate" name="removeuserfromuniverseteamcreate"></a>  removeUserFromUniverseTeamCreate

▸ **removeUserFromUniverseTeamCreate**(`options`: [RemoveUserFromUniverseTeamCreateOptions](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreateoptions)): *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RemoveUserFromUniverseTeamCreateOptions](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreateoptions) |

**Returns:** *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

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

### <a id="searchtoolbox" name="searchtoolbox"></a>  searchToolbox

▸ **searchToolbox**(`options`: [SearchToolboxOptions](../modules/_client_apis_developapi_.md#searchtoolboxoptions)): *Promise‹[SearchToolbox](../modules/_client_apis_developapi_.md#searchtoolbox)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchToolboxOptions](../modules/_client_apis_developapi_.md#searchtoolboxoptions) |

**Returns:** *Promise‹[SearchToolbox](../modules/_client_apis_developapi_.md#searchtoolbox)›*

___

### <a id="searchuniverses" name="searchuniverses"></a>  searchUniverses

▸ **searchUniverses**(`options`: [SearchUniversesOptions](../modules/_client_apis_developapi_.md#searchuniversesoptions)): *Promise‹[SearchUniverses](../modules/_client_apis_developapi_.md#searchuniverses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchUniversesOptions](../modules/_client_apis_developapi_.md#searchuniversesoptions) |

**Returns:** *Promise‹[SearchUniverses](../modules/_client_apis_developapi_.md#searchuniverses)›*

___

### <a id="setstudiodata" name="setstudiodata"></a>  setStudioData

▸ **setStudioData**(`options`: [SetStudioDataOptions](../modules/_client_apis_developapi_.md#setstudiodataoptions)): *Promise‹[SetStudioData](../modules/_client_apis_developapi_.md#setstudiodata)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetStudioDataOptions](../modules/_client_apis_developapi_.md#setstudiodataoptions) |

**Returns:** *Promise‹[SetStudioData](../modules/_client_apis_developapi_.md#setstudiodata)›*

___

### <a id="updatedeveloperproduct" name="updatedeveloperproduct"></a>  updateDeveloperProduct

▸ **updateDeveloperProduct**(`options`: [UpdateDeveloperProductOptions](../modules/_client_apis_developapi_.md#updatedeveloperproductoptions)): *Promise‹[UpdateDeveloperProduct](../modules/_client_apis_developapi_.md#updatedeveloperproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateDeveloperProductOptions](../modules/_client_apis_developapi_.md#updatedeveloperproductoptions) |

**Returns:** *Promise‹[UpdateDeveloperProduct](../modules/_client_apis_developapi_.md#updatedeveloperproduct)›*

___

### <a id="updateplaceconfiguration" name="updateplaceconfiguration"></a>  updatePlaceConfiguration

▸ **updatePlaceConfiguration**(`options`: [UpdatePlaceConfigurationOptions](../modules/_client_apis_developapi_.md#updateplaceconfigurationoptions)): *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdatePlaceConfigurationOptions](../modules/_client_apis_developapi_.md#updateplaceconfigurationoptions) |

**Returns:** *Promise‹[UpdatePlaceConfiguration](../modules/_client_apis_developapi_.md#updateplaceconfiguration)›*

___

### <a id="updateplugin" name="updateplugin"></a>  updatePlugin

▸ **updatePlugin**(`options`: [UpdatePluginOptions](../modules/_client_apis_developapi_.md#updatepluginoptions)): *Promise‹[UpdatePlugin](../modules/_client_apis_developapi_.md#updateplugin)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdatePluginOptions](../modules/_client_apis_developapi_.md#updatepluginoptions) |

**Returns:** *Promise‹[UpdatePlugin](../modules/_client_apis_developapi_.md#updateplugin)›*

___

### <a id="updateuniversealias" name="updateuniversealias"></a>  updateUniverseAlias

▸ **updateUniverseAlias**(`options`: [UpdateUniverseAliasOptions](../modules/_client_apis_developapi_.md#updateuniversealiasoptions)): *Promise‹[UpdateUniverseAlias](../modules/_client_apis_developapi_.md#updateuniversealias)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateUniverseAliasOptions](../modules/_client_apis_developapi_.md#updateuniversealiasoptions) |

**Returns:** *Promise‹[UpdateUniverseAlias](../modules/_client_apis_developapi_.md#updateuniversealias)›*

___

### <a id="updateuniverseconfiguration" name="updateuniverseconfiguration"></a>  updateUniverseConfiguration

▸ **updateUniverseConfiguration**(`options`: [UpdateUniverseConfigurationOptions](../modules/_client_apis_developapi_.md#updateuniverseconfigurationoptions)): *Promise‹[UpdateUniverseConfiguration](../modules/_client_apis_developapi_.md#updateuniverseconfiguration)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateUniverseConfigurationOptions](../modules/_client_apis_developapi_.md#updateuniverseconfigurationoptions) |

**Returns:** *Promise‹[UpdateUniverseConfiguration](../modules/_client_apis_developapi_.md#updateuniverseconfiguration)›*

___

### <a id="updateuniverseteamcreatesettings" name="updateuniverseteamcreatesettings"></a>  updateUniverseTeamCreateSettings

▸ **updateUniverseTeamCreateSettings**(`options`: [UpdateUniverseTeamCreateSettingsOptions](../modules/_client_apis_developapi_.md#updateuniverseteamcreatesettingsoptions)): *Promise‹[UpdateUniverseTeamCreateSettings](../modules/_client_apis_developapi_.md#updateuniverseteamcreatesettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateUniverseTeamCreateSettingsOptions](../modules/_client_apis_developapi_.md#updateuniverseteamcreatesettingsoptions) |

**Returns:** *Promise‹[UpdateUniverseTeamCreateSettings](../modules/_client_apis_developapi_.md#updateuniverseteamcreatesettings)›*
