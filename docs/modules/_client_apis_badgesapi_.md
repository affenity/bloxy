
# Module: "client/apis/BadgesAPI"

## Index

### Classes

* [AvatarAPI](../classes/_client_apis_badgesapi_.avatarapi.md)

### Type aliases

* [DeleteBadgeFromSelf](_client_apis_badgesapi_.md#deletebadgefromself)
* [DeleteBadgeFromSelfOptions](_client_apis_badgesapi_.md#deletebadgefromselfoptions)
* [DeleteBadgeFromUser](_client_apis_badgesapi_.md#deletebadgefromuser)
* [DeleteBadgeFromUserOptions](_client_apis_badgesapi_.md#deletebadgefromuseroptions)
* [GetBadge](_client_apis_badgesapi_.md#getbadge)
* [GetBadgeOptions](_client_apis_badgesapi_.md#getbadgeoptions)
* [GetUniverseBadges](_client_apis_badgesapi_.md#getuniversebadges)
* [GetUniverseBadgesOptions](_client_apis_badgesapi_.md#getuniversebadgesoptions)
* [GetUserBadges](_client_apis_badgesapi_.md#getuserbadges)
* [GetUserBadgesAwardedDates](_client_apis_badgesapi_.md#getuserbadgesawardeddates)
* [GetUserBadgesAwardedDatesOptions](_client_apis_badgesapi_.md#getuserbadgesawardeddatesoptions)
* [GetUserBadgesOptions](_client_apis_badgesapi_.md#getuserbadgesoptions)
* [UpdateBadge](_client_apis_badgesapi_.md#updatebadge)
* [UpdateBadgeOptions](_client_apis_badgesapi_.md#updatebadgeoptions)

## Type aliases

### <a id="deletebadgefromself" name="deletebadgefromself"></a>  DeleteBadgeFromSelf

Ƭ **DeleteBadgeFromSelf**: *[DeleteBadgeFromUser](_client_apis_badgesapi_.md#deletebadgefromuser)*

___

### <a id="deletebadgefromselfoptions" name="deletebadgefromselfoptions"></a>  DeleteBadgeFromSelfOptions

Ƭ **DeleteBadgeFromSelfOptions**: *object*

#### Type declaration:

* **badgeId**: *number*

___

### <a id="deletebadgefromuser" name="deletebadgefromuser"></a>  DeleteBadgeFromUser

Ƭ **DeleteBadgeFromUser**: *object*

#### Type declaration:

___

### <a id="deletebadgefromuseroptions" name="deletebadgefromuseroptions"></a>  DeleteBadgeFromUserOptions

Ƭ **DeleteBadgeFromUserOptions**: *object*

#### Type declaration:

* **badgeId**: *number*

* **userId**: *number*

___

### <a id="getbadge" name="getbadge"></a>  GetBadge

Ƭ **GetBadge**: *[GameBadgeOptions](../interfaces/_structures_game_.gamebadgeoptions.md)*

___

### <a id="getbadgeoptions" name="getbadgeoptions"></a>  GetBadgeOptions

Ƭ **GetBadgeOptions**: *object*

#### Type declaration:

* **badgeId**: *number*

___

### <a id="getuniversebadges" name="getuniversebadges"></a>  GetUniverseBadges

Ƭ **GetUniverseBadges**: *object*

#### Type declaration:

* **data**: *[GetBadge](_client_apis_badgesapi_.md#getbadge)[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuniversebadgesoptions" name="getuniversebadgesoptions"></a>  GetUniverseBadgesOptions

Ƭ **GetUniverseBadgesOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **universeId**: *number*

___

### <a id="getuserbadges" name="getuserbadges"></a>  GetUserBadges

Ƭ **GetUserBadges**: *[GetUniverseBadges](_client_apis_badgesapi_.md#getuniversebadges)*

___

### <a id="getuserbadgesawardeddates" name="getuserbadgesawardeddates"></a>  GetUserBadgesAwardedDates

Ƭ **GetUserBadgesAwardedDates**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getuserbadgesawardeddatesoptions" name="getuserbadgesawardeddatesoptions"></a>  GetUserBadgesAwardedDatesOptions

Ƭ **GetUserBadgesAwardedDatesOptions**: *object*

#### Type declaration:

* **badgeIds**: *number[]*

* **userId**: *number*

___

### <a id="getuserbadgesoptions" name="getuserbadgesoptions"></a>  GetUserBadgesOptions

Ƭ **GetUserBadgesOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **userId**: *number*

___

### <a id="updatebadge" name="updatebadge"></a>  UpdateBadge

Ƭ **UpdateBadge**: *object*

#### Type declaration:

___

### <a id="updatebadgeoptions" name="updatebadgeoptions"></a>  UpdateBadgeOptions

Ƭ **UpdateBadgeOptions**: *object*

#### Type declaration:

* **description**: *string*

* **enabled**: *boolean*

* **id**: *number*

* **name**: *string*
