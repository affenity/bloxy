
# Module: "structures/Asset"

## Index

### Classes

* [AssetVersion](../classes/_structures_asset_.assetversion.md)
* [Bundle](../classes/_structures_asset_.bundle.md)
* [CollectibleAsset](../classes/_structures_asset_.collectibleasset.md)
* [CursorPage](../classes/_structures_asset_.cursorpage.md)
* [Product](../classes/_structures_asset_.product.md)
* [Trade](../classes/_structures_asset_.trade.md)

### Interfaces

* [AssetVersionOptions](../interfaces/_structures_asset_.assetversionoptions.md)
* [BundleOptions](../interfaces/_structures_asset_.bundleoptions.md)
* [CollectibleAssetOptions](../interfaces/_structures_asset_.collectibleassetoptions.md)
* [ProductOptions](../interfaces/_structures_asset_.productoptions.md)
* [Structures](../interfaces/_structures_asset_.structures.md)
* [TradeOptions](../interfaces/_structures_asset_.tradeoptions.md)

### Type aliases

* [CursorPageOptions](_structures_asset_.md#cursorpageoptions)
* [CursorPageResponse](_structures_asset_.md#cursorpageresponse)

### Functions

* [retrieveStructures](_structures_asset_.md#const-retrievestructures)

## Type aliases

### <a id="cursorpageoptions" name="cursorpageoptions"></a>  CursorPageOptions

Ƭ **CursorPageOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="cursorpageresponse" name="cursorpageresponse"></a>  CursorPageResponse

Ƭ **CursorPageResponse**: *object*

#### Type declaration:

* **data**: *unknown*

* **nextPageCursor**: *string | null*

* **previousPageCursor**: *string | null*

## Functions

### <a id="const-retrievestructures" name="const-retrievestructures"></a> `Const` retrieveStructures

▸ **retrieveStructures**(): *[Structures](../interfaces/_structures_asset_.structures.md)*

**Returns:** *[Structures](../interfaces/_structures_asset_.structures.md)*
