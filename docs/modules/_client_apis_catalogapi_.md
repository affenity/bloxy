
# Module: "client/apis/CatalogAPI"

## Index

### Classes

* [CatalogAPI](../classes/_client_apis_catalogapi_.catalogapi.md)

### Type aliases

* [FavoriteAsset](_client_apis_catalogapi_.md#favoriteasset)
* [FavoriteAssetOptions](_client_apis_catalogapi_.md#favoriteassetoptions)
* [FavoriteBundle](_client_apis_catalogapi_.md#favoritebundle)
* [FavoriteBundleOptions](_client_apis_catalogapi_.md#favoritebundleoptions)
* [GetAppStoreExclusiveBundles](_client_apis_catalogapi_.md#getappstoreexclusivebundles)
* [GetAppStoreExclusiveBundlesOptions](_client_apis_catalogapi_.md#getappstoreexclusivebundlesoptions)
* [GetAssetBundles](_client_apis_catalogapi_.md#getassetbundles)
* [GetAssetBundlesOptions](_client_apis_catalogapi_.md#getassetbundlesoptions)
* [GetAssetFavoriteCount](_client_apis_catalogapi_.md#getassetfavoritecount)
* [GetAssetFavoriteCountOptions](_client_apis_catalogapi_.md#getassetfavoritecountoptions)
* [GetAssetToCategory](_client_apis_catalogapi_.md#getassettocategory)
* [GetAssetToSubCategory](_client_apis_catalogapi_.md#getassettosubcategory)
* [GetBundleDetails](_client_apis_catalogapi_.md#getbundledetails)
* [GetBundleDetailsOptions](_client_apis_catalogapi_.md#getbundledetailsoptions)
* [GetBundleFavoriteCount](_client_apis_catalogapi_.md#getbundlefavoritecount)
* [GetBundleFavoriteCountOptions](_client_apis_catalogapi_.md#getbundlefavoritecountoptions)
* [GetBundleRecommendationsByBundleId](_client_apis_catalogapi_.md#getbundlerecommendationsbybundleid)
* [GetBundleRecommendationsByBundleIdOptions](_client_apis_catalogapi_.md#getbundlerecommendationsbybundleidoptions)
* [GetCategories](_client_apis_catalogapi_.md#getcategories)
* [GetMultiBundleDetails](_client_apis_catalogapi_.md#getmultibundledetails)
* [GetMultiBundleDetailsOptions](_client_apis_catalogapi_.md#getmultibundledetailsoptions)
* [GetSelfFavoriteBundle](_client_apis_catalogapi_.md#getselffavoritebundle)
* [GetSelfFavoriteBundleOptions](_client_apis_catalogapi_.md#getselffavoritebundleoptions)
* [GetSubCategories](_client_apis_catalogapi_.md#getsubcategories)
* [GetUserBundles](_client_apis_catalogapi_.md#getuserbundles)
* [GetUserBundlesByType](_client_apis_catalogapi_.md#getuserbundlesbytype)
* [GetUserBundlesByTypeOptions](_client_apis_catalogapi_.md#getuserbundlesbytypeoptions)
* [GetUserBundlesOptions](_client_apis_catalogapi_.md#getuserbundlesoptions)
* [GetUserFavoriteAsset](_client_apis_catalogapi_.md#getuserfavoriteasset)
* [GetUserFavoriteAssetOptions](_client_apis_catalogapi_.md#getuserfavoriteassetoptions)
* [ProductDetails](_client_apis_catalogapi_.md#productdetails)
* [RemoveFavoriteBundle](_client_apis_catalogapi_.md#removefavoritebundle)
* [RemoveFavoriteBundleOptions](_client_apis_catalogapi_.md#removefavoritebundleoptions)
* [RemoveSelfAssetFavorite](_client_apis_catalogapi_.md#removeselfassetfavorite)
* [RemoveSelfAssetFavoriteOptions](_client_apis_catalogapi_.md#removeselfassetfavoriteoptions)
* [UnpackBundle](_client_apis_catalogapi_.md#unpackbundle)
* [UnpackBundleOptions](_client_apis_catalogapi_.md#unpackbundleoptions)

## Type aliases

### <a id="favoriteasset" name="favoriteasset"></a>  FavoriteAsset

Ƭ **FavoriteAsset**: *object*

#### Type declaration:

___

### <a id="favoriteassetoptions" name="favoriteassetoptions"></a>  FavoriteAssetOptions

Ƭ **FavoriteAssetOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **userId**: *number*

___

### <a id="favoritebundle" name="favoritebundle"></a>  FavoriteBundle

Ƭ **FavoriteBundle**: *object*

#### Type declaration:

___

### <a id="favoritebundleoptions" name="favoritebundleoptions"></a>  FavoriteBundleOptions

Ƭ **FavoriteBundleOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

* **userId**: *number*

___

### <a id="getappstoreexclusivebundles" name="getappstoreexclusivebundles"></a>  GetAppStoreExclusiveBundles

Ƭ **GetAppStoreExclusiveBundles**: *object*

#### Type declaration:

* **data**: *[ProductDetails](_client_apis_catalogapi_.md#productdetails)[]*

___

### <a id="getappstoreexclusivebundlesoptions" name="getappstoreexclusivebundlesoptions"></a>  GetAppStoreExclusiveBundlesOptions

Ƭ **GetAppStoreExclusiveBundlesOptions**: *object*

#### Type declaration:

* **appStoreType**: *"iOS" | "GooglePlay" | "Xbox" | "Amazon"*

___

### <a id="getassetbundles" name="getassetbundles"></a>  GetAssetBundles

Ƭ **GetAssetBundles**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getassetbundlesoptions" name="getassetbundlesoptions"></a>  GetAssetBundlesOptions

Ƭ **GetAssetBundlesOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="getassetfavoritecount" name="getassetfavoritecount"></a>  GetAssetFavoriteCount

Ƭ **GetAssetFavoriteCount**: *number*

___

### <a id="getassetfavoritecountoptions" name="getassetfavoritecountoptions"></a>  GetAssetFavoriteCountOptions

Ƭ **GetAssetFavoriteCountOptions**: *object*

#### Type declaration:

* **assetId**: *number*

___

### <a id="getassettocategory" name="getassettocategory"></a>  GetAssetToCategory

Ƭ **GetAssetToCategory**: *Record‹string, number›*

___

### <a id="getassettosubcategory" name="getassettosubcategory"></a>  GetAssetToSubCategory

Ƭ **GetAssetToSubCategory**: *[GetAssetToCategory](_client_apis_catalogapi_.md#getassettocategory)*

___

### <a id="getbundledetails" name="getbundledetails"></a>  GetBundleDetails

Ƭ **GetBundleDetails**: *GetAssetBundles["data"][0]*

___

### <a id="getbundledetailsoptions" name="getbundledetailsoptions"></a>  GetBundleDetailsOptions

Ƭ **GetBundleDetailsOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

___

### <a id="getbundlefavoritecount" name="getbundlefavoritecount"></a>  GetBundleFavoriteCount

Ƭ **GetBundleFavoriteCount**: *number*

___

### <a id="getbundlefavoritecountoptions" name="getbundlefavoritecountoptions"></a>  GetBundleFavoriteCountOptions

Ƭ **GetBundleFavoriteCountOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

___

### <a id="getbundlerecommendationsbybundleid" name="getbundlerecommendationsbybundleid"></a>  GetBundleRecommendationsByBundleId

Ƭ **GetBundleRecommendationsByBundleId**: *object*

#### Type declaration:

* **data**: *GetAssetBundles["data"]*

___

### <a id="getbundlerecommendationsbybundleidoptions" name="getbundlerecommendationsbybundleidoptions"></a>  GetBundleRecommendationsByBundleIdOptions

Ƭ **GetBundleRecommendationsByBundleIdOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

* **numItems**? : *undefined | number*

___

### <a id="getcategories" name="getcategories"></a>  GetCategories

Ƭ **GetCategories**: *[GetAssetToCategory](_client_apis_catalogapi_.md#getassettocategory)*

___

### <a id="getmultibundledetails" name="getmultibundledetails"></a>  GetMultiBundleDetails

Ƭ **GetMultiBundleDetails**: *GetAssetBundles["data"]*

___

### <a id="getmultibundledetailsoptions" name="getmultibundledetailsoptions"></a>  GetMultiBundleDetailsOptions

Ƭ **GetMultiBundleDetailsOptions**: *object*

#### Type declaration:

* **bundleIds**: *number[]*

___

### <a id="getselffavoritebundle" name="getselffavoritebundle"></a>  GetSelfFavoriteBundle

Ƭ **GetSelfFavoriteBundle**: *object*

#### Type declaration:

* **bundleId**: *number*

* **created**: *string*

* **userId**: *number*

___

### <a id="getselffavoritebundleoptions" name="getselffavoritebundleoptions"></a>  GetSelfFavoriteBundleOptions

Ƭ **GetSelfFavoriteBundleOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

* **userId**: *number*

___

### <a id="getsubcategories" name="getsubcategories"></a>  GetSubCategories

Ƭ **GetSubCategories**: *[GetAssetToCategory](_client_apis_catalogapi_.md#getassettocategory)*

___

### <a id="getuserbundles" name="getuserbundles"></a>  GetUserBundles

Ƭ **GetUserBundles**: *[GetAssetBundles](_client_apis_catalogapi_.md#getassetbundles)*

___

### <a id="getuserbundlesbytype" name="getuserbundlesbytype"></a>  GetUserBundlesByType

Ƭ **GetUserBundlesByType**: *[GetUserBundles](_client_apis_catalogapi_.md#getuserbundles)*

___

### <a id="getuserbundlesbytypeoptions" name="getuserbundlesbytypeoptions"></a>  GetUserBundlesByTypeOptions

Ƭ **GetUserBundlesByTypeOptions**: *[GetUserBundlesOptions](_client_apis_catalogapi_.md#getuserbundlesoptions) & object*

___

### <a id="getuserbundlesoptions" name="getuserbundlesoptions"></a>  GetUserBundlesOptions

Ƭ **GetUserBundlesOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **userId**: *number*

___

### <a id="getuserfavoriteasset" name="getuserfavoriteasset"></a>  GetUserFavoriteAsset

Ƭ **GetUserFavoriteAsset**: *object*

#### Type declaration:

* **assetId**: *number*

* **created**: *string*

* **userId**: *number*

___

### <a id="getuserfavoriteassetoptions" name="getuserfavoriteassetoptions"></a>  GetUserFavoriteAssetOptions

Ƭ **GetUserFavoriteAssetOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **userId**: *number*

___

### <a id="productdetails" name="productdetails"></a>  ProductDetails

Ƭ **ProductDetails**: *object*

#### Type declaration:

* **id**: *number*

* **isForSale**: *boolean*

* **isPublicDomain**: *boolean*

* **premiumPricing**(): *object*

  * **premiumDiscountPercentage**: *number*

  * **premiumPriceInRobux**: *number*

* **priceInRobux**: *number*

* **type**: *string*

___

### <a id="removefavoritebundle" name="removefavoritebundle"></a>  RemoveFavoriteBundle

Ƭ **RemoveFavoriteBundle**: *object*

#### Type declaration:

___

### <a id="removefavoritebundleoptions" name="removefavoritebundleoptions"></a>  RemoveFavoriteBundleOptions

Ƭ **RemoveFavoriteBundleOptions**: *object*

#### Type declaration:

* **bundleId**: *number*

* **userId**: *number*

___

### <a id="removeselfassetfavorite" name="removeselfassetfavorite"></a>  RemoveSelfAssetFavorite

Ƭ **RemoveSelfAssetFavorite**: *object*

#### Type declaration:

___

### <a id="removeselfassetfavoriteoptions" name="removeselfassetfavoriteoptions"></a>  RemoveSelfAssetFavoriteOptions

Ƭ **RemoveSelfAssetFavoriteOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **userId**: *number*

___

### <a id="unpackbundle" name="unpackbundle"></a>  UnpackBundle

Ƭ **UnpackBundle**: *object*

#### Type declaration:

___

### <a id="unpackbundleoptions" name="unpackbundleoptions"></a>  UnpackBundleOptions

Ƭ **UnpackBundleOptions**: *object*

#### Type declaration:

* **bundleId**: *number*
