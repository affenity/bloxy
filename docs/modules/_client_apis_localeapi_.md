
# Module: "client/apis/LocaleAPI"

## Index

### Classes

* [LocaleAPI](../classes/_client_apis_localeapi_.localeapi.md)

### Type aliases

* [GetCountryRegions](_client_apis_localeapi_.md#getcountryregions)
* [GetCountryRegionsOptions](_client_apis_localeapi_.md#getcountryregionsoptions)
* [GetLocales](_client_apis_localeapi_.md#getlocales)
* [GetLocalesOptions](_client_apis_localeapi_.md#getlocalesoptions)
* [GetLocusSupportedLocales](_client_apis_localeapi_.md#getlocussupportedlocales)
* [GetSupportedLocales](_client_apis_localeapi_.md#getsupportedlocales)
* [GetUserLocale](_client_apis_localeapi_.md#getuserlocale)
* [SetUserLocale](_client_apis_localeapi_.md#setuserlocale)
* [SetUserLocaleOptions](_client_apis_localeapi_.md#setuserlocaleoptions)

## Type aliases

### <a id="getcountryregions" name="getcountryregions"></a>  GetCountryRegions

Ƭ **GetCountryRegions**: *object*

#### Type declaration:

* **countryRegionList**: *object[]*

___

### <a id="getcountryregionsoptions" name="getcountryregionsoptions"></a>  GetCountryRegionsOptions

Ƭ **GetCountryRegionsOptions**: *object*

#### Type declaration:

* **locale**: *string*

___

### <a id="getlocales" name="getlocales"></a>  GetLocales

Ƭ **GetLocales**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getlocalesoptions" name="getlocalesoptions"></a>  GetLocalesOptions

Ƭ **GetLocalesOptions**: *object*

#### Type declaration:

* **displayValueLocale**? : *undefined | string*

___

### <a id="getlocussupportedlocales" name="getlocussupportedlocales"></a>  GetLocusSupportedLocales

Ƭ **GetLocusSupportedLocales**: *object*

#### Type declaration:

* **generalExperience**: *GetLocales["data"][0]["locale"]*

* **signupAndLogin**: *GetLocales["data"][0]["locale"]*

* **ugc**: *GetLocales["data"][0]["locale"]*

___

### <a id="getsupportedlocales" name="getsupportedlocales"></a>  GetSupportedLocales

Ƭ **GetSupportedLocales**: *object*

#### Type declaration:

* **supportedLocales**: *GetLocales["data"][0]["locale"][]*

___

### <a id="getuserlocale" name="getuserlocale"></a>  GetUserLocale

Ƭ **GetUserLocale**: *object*

#### Type declaration:

* **supportedLocale**: *GetLocales["data"][0]["locale"]*

___

### <a id="setuserlocale" name="setuserlocale"></a>  SetUserLocale

Ƭ **SetUserLocale**: *object*

#### Type declaration:

* **success**: *boolean*

___

### <a id="setuserlocaleoptions" name="setuserlocaleoptions"></a>  SetUserLocaleOptions

Ƭ **SetUserLocaleOptions**: *object*

#### Type declaration:

* **supportedLocaleCode**: *string*
