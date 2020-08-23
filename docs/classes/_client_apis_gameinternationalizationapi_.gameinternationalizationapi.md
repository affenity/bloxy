
# Class: GameInternationalizationAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **GameInternationalizationAPI**

## Index

### Constructors

* [constructor](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#constructor)

### Properties

* [client](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#client)
* [options](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#options)

### Methods

* [getGameAutomaticTranslationStatus](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getgameautomatictranslationstatus)
* [getGameInfo](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getgameinfo)
* [getGameInfoHistory](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getgameinfohistory)
* [getGameSourceLanguage](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getgamesourcelanguage)
* [getGameSupportedLanguages](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getgamesupportedlanguages)
* [getNameDescriptionMetaData](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getnamedescriptionmetadata)
* [getSupportedLanguagesMetaData](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#getsupportedlanguagesmetadata)
* [modifyGameSupportedLanguages](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#modifygamesupportedlanguages)
* [request](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#request)
* [toggleGameAutomaticTranslation](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#togglegameautomatictranslation)
* [updateGameInfo](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#updategameinfo)
* [updateGameSourceLanguage](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md#updategamesourcelanguage)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GameInternationalizationAPI**(`client`: [Client](_client_client_.client.md)): *[GameInternationalizationAPI](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GameInternationalizationAPI](_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getgameautomatictranslationstatus" name="getgameautomatictranslationstatus"></a>  getGameAutomaticTranslationStatus

▸ **getGameAutomaticTranslationStatus**(`options`: [GetGameAutomaticTranslationResultsOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresultsoptions)): *Promise‹[GetGameAutomaticTranslationResults](../modules/_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresults)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameAutomaticTranslationResultsOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresultsoptions) |

**Returns:** *Promise‹[GetGameAutomaticTranslationResults](../modules/_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresults)›*

___

### <a id="getgameinfo" name="getgameinfo"></a>  getGameInfo

▸ **getGameInfo**(`options`: [GetGameInfoOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfooptions)): *Promise‹[GetGameInfo](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameInfoOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfooptions) |

**Returns:** *Promise‹[GetGameInfo](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfo)›*

___

### <a id="getgameinfohistory" name="getgameinfohistory"></a>  getGameInfoHistory

▸ **getGameInfoHistory**(`options`: [GetGameInfoHistoryOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfohistoryoptions)): *Promise‹[GetGameInfoHistory](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfohistory)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameInfoHistoryOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfohistoryoptions) |

**Returns:** *Promise‹[GetGameInfoHistory](../modules/_client_apis_gameinternationalizationapi_.md#getgameinfohistory)›*

___

### <a id="getgamesourcelanguage" name="getgamesourcelanguage"></a>  getGameSourceLanguage

▸ **getGameSourceLanguage**(`options`: [GetGameSourceLanguageOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgamesourcelanguageoptions)): *Promise‹[GetGameSourceLanguage](../modules/_client_apis_gameinternationalizationapi_.md#getgamesourcelanguage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameSourceLanguageOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgamesourcelanguageoptions) |

**Returns:** *Promise‹[GetGameSourceLanguage](../modules/_client_apis_gameinternationalizationapi_.md#getgamesourcelanguage)›*

___

### <a id="getgamesupportedlanguages" name="getgamesupportedlanguages"></a>  getGameSupportedLanguages

▸ **getGameSupportedLanguages**(`options`: [GetGameSupportedLanguagesOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguagesoptions)): *Promise‹[GetGameSupportedLanguages](../modules/_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameSupportedLanguagesOptions](../modules/_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguagesoptions) |

**Returns:** *Promise‹[GetGameSupportedLanguages](../modules/_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguages)›*

___

### <a id="getnamedescriptionmetadata" name="getnamedescriptionmetadata"></a>  getNameDescriptionMetaData

▸ **getNameDescriptionMetaData**(): *Promise‹[GetNameDescriptionMetaData](../modules/_client_apis_gameinternationalizationapi_.md#getnamedescriptionmetadata)›*

**Returns:** *Promise‹[GetNameDescriptionMetaData](../modules/_client_apis_gameinternationalizationapi_.md#getnamedescriptionmetadata)›*

___

### <a id="getsupportedlanguagesmetadata" name="getsupportedlanguagesmetadata"></a>  getSupportedLanguagesMetaData

▸ **getSupportedLanguagesMetaData**(): *Promise‹[GetSupportedLanguagesMetaData](../modules/_client_apis_gameinternationalizationapi_.md#getsupportedlanguagesmetadata)›*

**Returns:** *Promise‹[GetSupportedLanguagesMetaData](../modules/_client_apis_gameinternationalizationapi_.md#getsupportedlanguagesmetadata)›*

___

### <a id="modifygamesupportedlanguages" name="modifygamesupportedlanguages"></a>  modifyGameSupportedLanguages

▸ **modifyGameSupportedLanguages**(`options`: [ModifyGameSupportedLanguagesOptions](../modules/_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguagesoptions)): *Promise‹[ModifyGameSupportedLanguages](../modules/_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguages)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ModifyGameSupportedLanguagesOptions](../modules/_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguagesoptions) |

**Returns:** *Promise‹[ModifyGameSupportedLanguages](../modules/_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguages)›*

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

### <a id="togglegameautomatictranslation" name="togglegameautomatictranslation"></a>  toggleGameAutomaticTranslation

▸ **toggleGameAutomaticTranslation**(`options`: [ToggleAutomaticGameTranslationOptions](../modules/_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslationoptions)): *Promise‹[ToggleAutomaticGameTranslation](../modules/_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslation)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ToggleAutomaticGameTranslationOptions](../modules/_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslationoptions) |

**Returns:** *Promise‹[ToggleAutomaticGameTranslation](../modules/_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslation)›*

___

### <a id="updategameinfo" name="updategameinfo"></a>  updateGameInfo

▸ **updateGameInfo**(`options`: [UpdateGameInfoOptions](../modules/_client_apis_gameinternationalizationapi_.md#updategameinfooptions)): *Promise‹[UpdateGameInfo](../modules/_client_apis_gameinternationalizationapi_.md#updategameinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGameInfoOptions](../modules/_client_apis_gameinternationalizationapi_.md#updategameinfooptions) |

**Returns:** *Promise‹[UpdateGameInfo](../modules/_client_apis_gameinternationalizationapi_.md#updategameinfo)›*

___

### <a id="updategamesourcelanguage" name="updategamesourcelanguage"></a>  updateGameSourceLanguage

▸ **updateGameSourceLanguage**(`options`: [UpdateGameSourceLanguageOptions](../modules/_client_apis_gameinternationalizationapi_.md#updategamesourcelanguageoptions)): *Promise‹[UpdateGameSourceLanguage](../modules/_client_apis_gameinternationalizationapi_.md#updategamesourcelanguage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGameSourceLanguageOptions](../modules/_client_apis_gameinternationalizationapi_.md#updategamesourcelanguageoptions) |

**Returns:** *Promise‹[UpdateGameSourceLanguage](../modules/_client_apis_gameinternationalizationapi_.md#updategamesourcelanguage)›*
