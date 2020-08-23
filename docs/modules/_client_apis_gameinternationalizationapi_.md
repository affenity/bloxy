
# Module: "client/apis/GameInternationalizationAPI"

## Index

### Classes

* [GameInternationalizationAPI](../classes/_client_apis_gameinternationalizationapi_.gameinternationalizationapi.md)

### Type aliases

* [GetGameAutomaticTranslationResults](_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresults)
* [GetGameAutomaticTranslationResultsOptions](_client_apis_gameinternationalizationapi_.md#getgameautomatictranslationresultsoptions)
* [GetGameInfo](_client_apis_gameinternationalizationapi_.md#getgameinfo)
* [GetGameInfoHistory](_client_apis_gameinternationalizationapi_.md#getgameinfohistory)
* [GetGameInfoHistoryOptions](_client_apis_gameinternationalizationapi_.md#getgameinfohistoryoptions)
* [GetGameInfoOptions](_client_apis_gameinternationalizationapi_.md#getgameinfooptions)
* [GetGameSourceLanguage](_client_apis_gameinternationalizationapi_.md#getgamesourcelanguage)
* [GetGameSourceLanguageOptions](_client_apis_gameinternationalizationapi_.md#getgamesourcelanguageoptions)
* [GetGameSupportedLanguages](_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguages)
* [GetGameSupportedLanguagesOptions](_client_apis_gameinternationalizationapi_.md#getgamesupportedlanguagesoptions)
* [GetNameDescriptionMetaData](_client_apis_gameinternationalizationapi_.md#getnamedescriptionmetadata)
* [GetSupportedLanguagesMetaData](_client_apis_gameinternationalizationapi_.md#getsupportedlanguagesmetadata)
* [ModifyGameSupportedLanguages](_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguages)
* [ModifyGameSupportedLanguagesOptions](_client_apis_gameinternationalizationapi_.md#modifygamesupportedlanguagesoptions)
* [ToggleAutomaticGameTranslation](_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslation)
* [ToggleAutomaticGameTranslationOptions](_client_apis_gameinternationalizationapi_.md#toggleautomaticgametranslationoptions)
* [UpdateGameInfo](_client_apis_gameinternationalizationapi_.md#updategameinfo)
* [UpdateGameInfoOptions](_client_apis_gameinternationalizationapi_.md#updategameinfooptions)
* [UpdateGameSourceLanguage](_client_apis_gameinternationalizationapi_.md#updategamesourcelanguage)
* [UpdateGameSourceLanguageOptions](_client_apis_gameinternationalizationapi_.md#updategamesourcelanguageoptions)

## Type aliases

### <a id="getgameautomatictranslationresults" name="getgameautomatictranslationresults"></a>  GetGameAutomaticTranslationResults

Ƭ **GetGameAutomaticTranslationResults**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getgameautomatictranslationresultsoptions" name="getgameautomatictranslationresultsoptions"></a>  GetGameAutomaticTranslationResultsOptions

Ƭ **GetGameAutomaticTranslationResultsOptions**: *object*

#### Type declaration:

* **gameId**: *number*

___

### <a id="getgameinfo" name="getgameinfo"></a>  GetGameInfo

Ƭ **GetGameInfo**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getgameinfohistory" name="getgameinfohistory"></a>  GetGameInfoHistory

Ƭ **GetGameInfoHistory**: *object*

#### Type declaration:

* **history**: *object[]*

* **lastEvaluatedId**: *string*

___

### <a id="getgameinfohistoryoptions" name="getgameinfohistoryoptions"></a>  GetGameInfoHistoryOptions

Ƭ **GetGameInfoHistoryOptions**: *object*

#### Type declaration:

* **count**: *number*

* **cursor**: *string*

* **gameId**: *number*

* **languageCode**: *string*

* **requestType**: *string*

* **sortOrder**: *"Asc" | "Desc" | string*

___

### <a id="getgameinfooptions" name="getgameinfooptions"></a>  GetGameInfoOptions

Ƭ **GetGameInfoOptions**: *object*

#### Type declaration:

* **gameId**: *number*

___

### <a id="getgamesourcelanguage" name="getgamesourcelanguage"></a>  GetGameSourceLanguage

Ƭ **GetGameSourceLanguage**: *object*

#### Type declaration:

* **languageCode**: *string*

* **name**: *string*

* **nativeName**: *string*

___

### <a id="getgamesourcelanguageoptions" name="getgamesourcelanguageoptions"></a>  GetGameSourceLanguageOptions

Ƭ **GetGameSourceLanguageOptions**: *object*

#### Type declaration:

* **gameId**: *number*

___

### <a id="getgamesupportedlanguages" name="getgamesupportedlanguages"></a>  GetGameSupportedLanguages

Ƭ **GetGameSupportedLanguages**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getgamesupportedlanguagesoptions" name="getgamesupportedlanguagesoptions"></a>  GetGameSupportedLanguagesOptions

Ƭ **GetGameSupportedLanguagesOptions**: *object*

#### Type declaration:

* **gameId**: *number*

___

### <a id="getnamedescriptionmetadata" name="getnamedescriptionmetadata"></a>  GetNameDescriptionMetaData

Ƭ **GetNameDescriptionMetaData**: *object*

#### Type declaration:

* **isNameDescriptionMigrationEnabled**: *boolean*

___

### <a id="getsupportedlanguagesmetadata" name="getsupportedlanguagesmetadata"></a>  GetSupportedLanguagesMetaData

Ƭ **GetSupportedLanguagesMetaData**: *object*

#### Type declaration:

* **areAllLanguagesEnabled**: *boolean*

* **isAutomaticTranslationProgressUIEnabled**: *boolean*

* **isFeatureEnabled**: *boolean*

* **isHumanTranslationProgressUIEnabled**: *boolean*

* **isSupportedLanguagesChildLocalesUIEnabled**: *boolean*

* **minimumUniverseIdForFeature**: *number*

___

### <a id="modifygamesupportedlanguages" name="modifygamesupportedlanguages"></a>  ModifyGameSupportedLanguages

Ƭ **ModifyGameSupportedLanguages**: *object*

#### Type declaration:

___

### <a id="modifygamesupportedlanguagesoptions" name="modifygamesupportedlanguagesoptions"></a>  ModifyGameSupportedLanguagesOptions

Ƭ **ModifyGameSupportedLanguagesOptions**: *object*

#### Type declaration:

* **data**: *object[]*

* **gameId**: *number*

___

### <a id="toggleautomaticgametranslation" name="toggleautomaticgametranslation"></a>  ToggleAutomaticGameTranslation

Ƭ **ToggleAutomaticGameTranslation**: *object*

#### Type declaration:

* **gameId**: *number*

* **isAutomaticTranslationEnabled**: *boolean*

* **languageCode**: *string*

___

### <a id="toggleautomaticgametranslationoptions" name="toggleautomaticgametranslationoptions"></a>  ToggleAutomaticGameTranslationOptions

Ƭ **ToggleAutomaticGameTranslationOptions**: *object*

#### Type declaration:

* **enableAutomaticTranslation**: *boolean*

* **gameId**: *number*

* **languageCode**: *string*

___

### <a id="updategameinfo" name="updategameinfo"></a>  UpdateGameInfo

Ƭ **UpdateGameInfo**: *object*

#### Type declaration:

* **failedOperations**: *object[]*

* **successOperations**: *GetGameInfo["data"]*

___

### <a id="updategameinfooptions" name="updategameinfooptions"></a>  UpdateGameInfoOptions

Ƭ **UpdateGameInfoOptions**: *object*

#### Type declaration:

* **data**: *[GetGameInfo](_client_apis_gameinternationalizationapi_.md#getgameinfo)*

* **gameId**: *number*

___

### <a id="updategamesourcelanguage" name="updategamesourcelanguage"></a>  UpdateGameSourceLanguage

Ƭ **UpdateGameSourceLanguage**: *object*

#### Type declaration:

___

### <a id="updategamesourcelanguageoptions" name="updategamesourcelanguageoptions"></a>  UpdateGameSourceLanguageOptions

Ƭ **UpdateGameSourceLanguageOptions**: *object*

#### Type declaration:

* **gameId**: *number*

* **languageCode**: *string*
