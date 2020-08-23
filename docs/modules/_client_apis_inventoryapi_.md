
# Module: "client/apis/InventoryAPI"

## Index

### Classes

* [InventoryAPI](../classes/_client_apis_inventoryapi_.inventoryapi.md)

### Type aliases

* [GetAssetOwners](_client_apis_inventoryapi_.md#getassetowners)
* [GetAssetOwnersOptions](_client_apis_inventoryapi_.md#getassetownersoptions)
* [GetPackageAssets](_client_apis_inventoryapi_.md#getpackageassets)
* [GetPackageAssetsOptions](_client_apis_inventoryapi_.md#getpackageassetsoptions)
* [GetUserCollectibles](_client_apis_inventoryapi_.md#getusercollectibles)
* [GetUserCollectiblesOptions](_client_apis_inventoryapi_.md#getusercollectiblesoptions)
* [GetUserInventory](_client_apis_inventoryapi_.md#getuserinventory)
* [GetUserInventoryByAssetTypeId](_client_apis_inventoryapi_.md#getuserinventorybyassettypeid)
* [GetUserInventoryByAssetTypeIdOptions](_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions)
* [GetUserInventoryOptions](_client_apis_inventoryapi_.md#getuserinventoryoptions)
* [GetUserItemsByTypeAndTargetId](_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetid)
* [GetUserItemsByTypeAndTargetIdOptions](_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetidoptions)

## Type aliases

### <a id="getassetowners" name="getassetowners"></a>  GetAssetOwners

Ƭ **GetAssetOwners**: *object*

#### Type declaration:

* **data**(): *object*

  * **created**: *string*

  * **id**: *number*

  * **owner**(): *object*

    * **id**: *number*

    * **name**: *string*

    * **type**: *"User" | string*

  * **serialNumber**: *number*

  * **updated**: *string*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getassetownersoptions" name="getassetownersoptions"></a>  GetAssetOwnersOptions

Ƭ **GetAssetOwnersOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="getpackageassets" name="getpackageassets"></a>  GetPackageAssets

Ƭ **GetPackageAssets**: *object*

#### Type declaration:

* **assetIds**: *number[]*

___

### <a id="getpackageassetsoptions" name="getpackageassetsoptions"></a>  GetPackageAssetsOptions

Ƭ **GetPackageAssetsOptions**: *object*

#### Type declaration:

* **packageId**: *number*

___

### <a id="getusercollectibles" name="getusercollectibles"></a>  GetUserCollectibles

Ƭ **GetUserCollectibles**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getusercollectiblesoptions" name="getusercollectiblesoptions"></a>  GetUserCollectiblesOptions

Ƭ **GetUserCollectiblesOptions**: *object*

#### Type declaration:

* **assetType**? : *"Image" | "TShirt" | "Audio" | "Mesh" | "Lua" | "HTML" | "Text" | "Hat" | "Place" | "Model" | "Shirt" | "Pants" | "Decal" | "Avatar" | "Head" | "Face" | "Gear" | "Badge" | "GroupEmblem" | "Animation" | "Arms" | "Legs" | "Torso" | "RightArm" | "LeftArm" | "LeftLeg" | "RightLeg" | "Package" | "YouTubeVideo" | "GamePass" | "App" | "Code" | "Plugin" | "SolidModel" | "MeshPart" | "HairAccessory" | "NeckAccessory" | "ShoulderAccessory" | "FrontAccessory" | "BackAccessory" | "WaistAccessory" | "ClimbAnimation" | "DeathAnimation" | "FallAnimation" | "IdleAnimation" | "JumpAnimation" | "RunAnimation" | "SwimAnimation" | "WalkAnimation" | "PoseAnimation" | "LocalizationTableManifest" | "LocalizationTableTranslation" | "EmoteAnimation" | "Video" | "TexturePack"*

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **userId**: *number*

___

### <a id="getuserinventory" name="getuserinventory"></a>  GetUserInventory

Ƭ **GetUserInventory**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuserinventorybyassettypeid" name="getuserinventorybyassettypeid"></a>  GetUserInventoryByAssetTypeId

Ƭ **GetUserInventoryByAssetTypeId**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuserinventorybyassettypeidoptions" name="getuserinventorybyassettypeidoptions"></a>  GetUserInventoryByAssetTypeIdOptions

Ƭ **GetUserInventoryByAssetTypeIdOptions**: *Omit‹[GetUserInventoryOptions](_client_apis_inventoryapi_.md#getuserinventoryoptions), "assetTypes"› & object*

___

### <a id="getuserinventoryoptions" name="getuserinventoryoptions"></a>  GetUserInventoryOptions

Ƭ **GetUserInventoryOptions**: *object*

#### Type declaration:

* **assetTypes**: *GetUserCollectiblesOptions["assetType"][]*

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **userId**: *number*

___

### <a id="getuseritemsbytypeandtargetid" name="getuseritemsbytypeandtargetid"></a>  GetUserItemsByTypeAndTargetId

Ƭ **GetUserItemsByTypeAndTargetId**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuseritemsbytypeandtargetidoptions" name="getuseritemsbytypeandtargetidoptions"></a>  GetUserItemsByTypeAndTargetIdOptions

Ƭ **GetUserItemsByTypeAndTargetIdOptions**: *object*

#### Type declaration:

* **itemTargetId**: *number*

* **itemType**: *"Asset" | "GamePass" | "Badge" | "Bundle"*

* **userId**: *number*
