
# Class: CatalogAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **CatalogAPI**

## Index

### Constructors

* [constructor](_client_apis_catalogapi_.catalogapi.md#constructor)

### Properties

* [client](_client_apis_catalogapi_.catalogapi.md#client)
* [options](_client_apis_catalogapi_.catalogapi.md#options)

### Methods

* [favoriteAsset](_client_apis_catalogapi_.catalogapi.md#favoriteasset)
* [favoriteBundle](_client_apis_catalogapi_.catalogapi.md#favoritebundle)
* [getAppStoreExclusiveBundles](_client_apis_catalogapi_.catalogapi.md#getappstoreexclusivebundles)
* [getAssetBundles](_client_apis_catalogapi_.catalogapi.md#getassetbundles)
* [getAssetFavoriteCount](_client_apis_catalogapi_.catalogapi.md#getassetfavoritecount)
* [getAssetToCategory](_client_apis_catalogapi_.catalogapi.md#getassettocategory)
* [getAssetToSubCategory](_client_apis_catalogapi_.catalogapi.md#getassettosubcategory)
* [getBundleDetails](_client_apis_catalogapi_.catalogapi.md#getbundledetails)
* [getBundleFavoriteCount](_client_apis_catalogapi_.catalogapi.md#getbundlefavoritecount)
* [getBundleRecommendationsByBundleId](_client_apis_catalogapi_.catalogapi.md#getbundlerecommendationsbybundleid)
* [getCategories](_client_apis_catalogapi_.catalogapi.md#getcategories)
* [getMultiBundleDetails](_client_apis_catalogapi_.catalogapi.md#getmultibundledetails)
* [getSubCategories](_client_apis_catalogapi_.catalogapi.md#getsubcategories)
* [getUserBundles](_client_apis_catalogapi_.catalogapi.md#getuserbundles)
* [getUserBundlesByType](_client_apis_catalogapi_.catalogapi.md#getuserbundlesbytype)
* [getUserFavoriteAsset](_client_apis_catalogapi_.catalogapi.md#getuserfavoriteasset)
* [getUserFavoriteBundle](_client_apis_catalogapi_.catalogapi.md#getuserfavoritebundle)
* [removeAssetFavorite](_client_apis_catalogapi_.catalogapi.md#removeassetfavorite)
* [removeBundleFavorite](_client_apis_catalogapi_.catalogapi.md#removebundlefavorite)
* [request](_client_apis_catalogapi_.catalogapi.md#request)
* [unpackBundle](_client_apis_catalogapi_.catalogapi.md#unpackbundle)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new CatalogAPI**(`client`: [Client](_client_client_.client.md)): *[CatalogAPI](_client_apis_catalogapi_.catalogapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[CatalogAPI](_client_apis_catalogapi_.catalogapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="favoriteasset" name="favoriteasset"></a>  favoriteAsset

▸ **favoriteAsset**(`options`: [FavoriteAssetOptions](../modules/_client_apis_catalogapi_.md#favoriteassetoptions)): *Promise‹[FavoriteAsset](../modules/_client_apis_catalogapi_.md#favoriteasset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FavoriteAssetOptions](../modules/_client_apis_catalogapi_.md#favoriteassetoptions) |

**Returns:** *Promise‹[FavoriteAsset](../modules/_client_apis_catalogapi_.md#favoriteasset)›*

___

### <a id="favoritebundle" name="favoritebundle"></a>  favoriteBundle

▸ **favoriteBundle**(`options`: [FavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#favoritebundleoptions)): *Promise‹[FavoriteBundle](../modules/_client_apis_catalogapi_.md#favoritebundle)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#favoritebundleoptions) |

**Returns:** *Promise‹[FavoriteBundle](../modules/_client_apis_catalogapi_.md#favoritebundle)›*

___

### <a id="getappstoreexclusivebundles" name="getappstoreexclusivebundles"></a>  getAppStoreExclusiveBundles

▸ **getAppStoreExclusiveBundles**(`options`: [GetAppStoreExclusiveBundlesOptions](../modules/_client_apis_catalogapi_.md#getappstoreexclusivebundlesoptions)): *Promise‹[GetAppStoreExclusiveBundles](../modules/_client_apis_catalogapi_.md#getappstoreexclusivebundles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAppStoreExclusiveBundlesOptions](../modules/_client_apis_catalogapi_.md#getappstoreexclusivebundlesoptions) |

**Returns:** *Promise‹[GetAppStoreExclusiveBundles](../modules/_client_apis_catalogapi_.md#getappstoreexclusivebundles)›*

___

### <a id="getassetbundles" name="getassetbundles"></a>  getAssetBundles

▸ **getAssetBundles**(`options`: [GetAssetBundlesOptions](../modules/_client_apis_catalogapi_.md#getassetbundlesoptions)): *Promise‹[GetAssetBundles](../modules/_client_apis_catalogapi_.md#getassetbundles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetBundlesOptions](../modules/_client_apis_catalogapi_.md#getassetbundlesoptions) |

**Returns:** *Promise‹[GetAssetBundles](../modules/_client_apis_catalogapi_.md#getassetbundles)›*

___

### <a id="getassetfavoritecount" name="getassetfavoritecount"></a>  getAssetFavoriteCount

▸ **getAssetFavoriteCount**(`options`: [GetAssetFavoriteCountOptions](../modules/_client_apis_catalogapi_.md#getassetfavoritecountoptions)): *Promise‹[GetAssetFavoriteCount](../modules/_client_apis_catalogapi_.md#getassetfavoritecount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetFavoriteCountOptions](../modules/_client_apis_catalogapi_.md#getassetfavoritecountoptions) |

**Returns:** *Promise‹[GetAssetFavoriteCount](../modules/_client_apis_catalogapi_.md#getassetfavoritecount)›*

___

### <a id="getassettocategory" name="getassettocategory"></a>  getAssetToCategory

▸ **getAssetToCategory**(): *Promise‹[GetAssetToCategory](../modules/_client_apis_catalogapi_.md#getassettocategory)›*

**Returns:** *Promise‹[GetAssetToCategory](../modules/_client_apis_catalogapi_.md#getassettocategory)›*

___

### <a id="getassettosubcategory" name="getassettosubcategory"></a>  getAssetToSubCategory

▸ **getAssetToSubCategory**(): *Promise‹[GetAssetToSubCategory](../modules/_client_apis_catalogapi_.md#getassettosubcategory)›*

**Returns:** *Promise‹[GetAssetToSubCategory](../modules/_client_apis_catalogapi_.md#getassettosubcategory)›*

___

### <a id="getbundledetails" name="getbundledetails"></a>  getBundleDetails

▸ **getBundleDetails**(`options`: [GetBundleDetailsOptions](../modules/_client_apis_catalogapi_.md#getbundledetailsoptions)): *Promise‹[GetBundleDetails](../modules/_client_apis_catalogapi_.md#getbundledetails)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetBundleDetailsOptions](../modules/_client_apis_catalogapi_.md#getbundledetailsoptions) |

**Returns:** *Promise‹[GetBundleDetails](../modules/_client_apis_catalogapi_.md#getbundledetails)›*

___

### <a id="getbundlefavoritecount" name="getbundlefavoritecount"></a>  getBundleFavoriteCount

▸ **getBundleFavoriteCount**(`options`: [GetBundleFavoriteCountOptions](../modules/_client_apis_catalogapi_.md#getbundlefavoritecountoptions)): *Promise‹[GetBundleFavoriteCount](../modules/_client_apis_catalogapi_.md#getbundlefavoritecount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetBundleFavoriteCountOptions](../modules/_client_apis_catalogapi_.md#getbundlefavoritecountoptions) |

**Returns:** *Promise‹[GetBundleFavoriteCount](../modules/_client_apis_catalogapi_.md#getbundlefavoritecount)›*

___

### <a id="getbundlerecommendationsbybundleid" name="getbundlerecommendationsbybundleid"></a>  getBundleRecommendationsByBundleId

▸ **getBundleRecommendationsByBundleId**(`options`: [GetBundleRecommendationsByBundleIdOptions](../modules/_client_apis_catalogapi_.md#getbundlerecommendationsbybundleidoptions)): *Promise‹[GetBundleRecommendationsByBundleId](../modules/_client_apis_catalogapi_.md#getbundlerecommendationsbybundleid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetBundleRecommendationsByBundleIdOptions](../modules/_client_apis_catalogapi_.md#getbundlerecommendationsbybundleidoptions) |

**Returns:** *Promise‹[GetBundleRecommendationsByBundleId](../modules/_client_apis_catalogapi_.md#getbundlerecommendationsbybundleid)›*

___

### <a id="getcategories" name="getcategories"></a>  getCategories

▸ **getCategories**(): *Promise‹[GetCategories](../modules/_client_apis_catalogapi_.md#getcategories)›*

**Returns:** *Promise‹[GetCategories](../modules/_client_apis_catalogapi_.md#getcategories)›*

___

### <a id="getmultibundledetails" name="getmultibundledetails"></a>  getMultiBundleDetails

▸ **getMultiBundleDetails**(`options`: [GetMultiBundleDetailsOptions](../modules/_client_apis_catalogapi_.md#getmultibundledetailsoptions)): *Promise‹[GetMultiBundleDetails](../modules/_client_apis_catalogapi_.md#getmultibundledetails)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMultiBundleDetailsOptions](../modules/_client_apis_catalogapi_.md#getmultibundledetailsoptions) |

**Returns:** *Promise‹[GetMultiBundleDetails](../modules/_client_apis_catalogapi_.md#getmultibundledetails)›*

___

### <a id="getsubcategories" name="getsubcategories"></a>  getSubCategories

▸ **getSubCategories**(): *Promise‹[GetSubCategories](../modules/_client_apis_catalogapi_.md#getsubcategories)›*

**Returns:** *Promise‹[GetSubCategories](../modules/_client_apis_catalogapi_.md#getsubcategories)›*

___

### <a id="getuserbundles" name="getuserbundles"></a>  getUserBundles

▸ **getUserBundles**(`options`: [GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions)): *Promise‹[GetUserBundles](../modules/_client_apis_catalogapi_.md#getuserbundles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions) |

**Returns:** *Promise‹[GetUserBundles](../modules/_client_apis_catalogapi_.md#getuserbundles)›*

___

### <a id="getuserbundlesbytype" name="getuserbundlesbytype"></a>  getUserBundlesByType

▸ **getUserBundlesByType**(`options`: [GetUserBundlesByTypeOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesbytypeoptions)): *Promise‹[GetUserBundlesByType](../modules/_client_apis_catalogapi_.md#getuserbundlesbytype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserBundlesByTypeOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesbytypeoptions) |

**Returns:** *Promise‹[GetUserBundlesByType](../modules/_client_apis_catalogapi_.md#getuserbundlesbytype)›*

___

### <a id="getuserfavoriteasset" name="getuserfavoriteasset"></a>  getUserFavoriteAsset

▸ **getUserFavoriteAsset**(`options`: [GetUserFavoriteAssetOptions](../modules/_client_apis_catalogapi_.md#getuserfavoriteassetoptions)): *Promise‹[GetUserFavoriteAsset](../modules/_client_apis_catalogapi_.md#getuserfavoriteasset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFavoriteAssetOptions](../modules/_client_apis_catalogapi_.md#getuserfavoriteassetoptions) |

**Returns:** *Promise‹[GetUserFavoriteAsset](../modules/_client_apis_catalogapi_.md#getuserfavoriteasset)›*

___

### <a id="getuserfavoritebundle" name="getuserfavoritebundle"></a>  getUserFavoriteBundle

▸ **getUserFavoriteBundle**(`options`: [GetSelfFavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#getselffavoritebundleoptions)): *Promise‹[GetSelfFavoriteBundle](../modules/_client_apis_catalogapi_.md#getselffavoritebundle)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfFavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#getselffavoritebundleoptions) |

**Returns:** *Promise‹[GetSelfFavoriteBundle](../modules/_client_apis_catalogapi_.md#getselffavoritebundle)›*

___

### <a id="removeassetfavorite" name="removeassetfavorite"></a>  removeAssetFavorite

▸ **removeAssetFavorite**(`options`: [RemoveSelfAssetFavoriteOptions](../modules/_client_apis_catalogapi_.md#removeselfassetfavoriteoptions)): *Promise‹[RemoveSelfAssetFavorite](../modules/_client_apis_catalogapi_.md#removeselfassetfavorite)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RemoveSelfAssetFavoriteOptions](../modules/_client_apis_catalogapi_.md#removeselfassetfavoriteoptions) |

**Returns:** *Promise‹[RemoveSelfAssetFavorite](../modules/_client_apis_catalogapi_.md#removeselfassetfavorite)›*

___

### <a id="removebundlefavorite" name="removebundlefavorite"></a>  removeBundleFavorite

▸ **removeBundleFavorite**(`options`: [RemoveFavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#removefavoritebundleoptions)): *Promise‹[RemoveFavoriteBundle](../modules/_client_apis_catalogapi_.md#removefavoritebundle)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RemoveFavoriteBundleOptions](../modules/_client_apis_catalogapi_.md#removefavoritebundleoptions) |

**Returns:** *Promise‹[RemoveFavoriteBundle](../modules/_client_apis_catalogapi_.md#removefavoritebundle)›*

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

### <a id="unpackbundle" name="unpackbundle"></a>  unpackBundle

▸ **unpackBundle**(`options`: [UnpackBundleOptions](../modules/_client_apis_catalogapi_.md#unpackbundleoptions)): *Promise‹[UnpackBundle](../modules/_client_apis_catalogapi_.md#unpackbundle)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnpackBundleOptions](../modules/_client_apis_catalogapi_.md#unpackbundleoptions) |

**Returns:** *Promise‹[UnpackBundle](../modules/_client_apis_catalogapi_.md#unpackbundle)›*
