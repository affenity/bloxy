
# Module: "client/apis/FollowingsAPI"

## Index

### Classes

* [FollowingsAPI](../classes/_client_apis_followingsapi_.followingsapi.md)

### Type aliases

* [FollowUniverse](_client_apis_followingsapi_.md#followuniverse)
* [FollowUniverseOptions](_client_apis_followingsapi_.md#followuniverseoptions)
* [GetUserFollowedUniverses](_client_apis_followingsapi_.md#getuserfolloweduniverses)
* [GetUserFollowedUniversesOptions](_client_apis_followingsapi_.md#getuserfolloweduniversesoptions)
* [GetUserFollowingUniverseStatus](_client_apis_followingsapi_.md#getuserfollowinguniversestatus)
* [GetUserFollowingUniverseStatusOptions](_client_apis_followingsapi_.md#getuserfollowinguniversestatusoptions)
* [UnFollowUniverse](_client_apis_followingsapi_.md#unfollowuniverse)
* [UnFollowUniverseOptions](_client_apis_followingsapi_.md#unfollowuniverseoptions)

## Type aliases

### <a id="followuniverse" name="followuniverse"></a>  FollowUniverse

Ƭ **FollowUniverse**: *[UnFollowUniverse](_client_apis_followingsapi_.md#unfollowuniverse)*

___

### <a id="followuniverseoptions" name="followuniverseoptions"></a>  FollowUniverseOptions

Ƭ **FollowUniverseOptions**: *[UnFollowUniverseOptions](_client_apis_followingsapi_.md#unfollowuniverseoptions)*

___

### <a id="getuserfolloweduniverses" name="getuserfolloweduniverses"></a>  GetUserFollowedUniverses

Ƭ **GetUserFollowedUniverses**: *object[]*

___

### <a id="getuserfolloweduniversesoptions" name="getuserfolloweduniversesoptions"></a>  GetUserFollowedUniversesOptions

Ƭ **GetUserFollowedUniversesOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getuserfollowinguniversestatus" name="getuserfollowinguniversestatus"></a>  GetUserFollowingUniverseStatus

Ƭ **GetUserFollowingUniverseStatus**: *object*

#### Type declaration:

* **CanFollow**: *boolean*

* **FollowingCountByType**: *number*

* **FollowingLimitByType**: *number*

* **IsFollowing**: *boolean*

* **UniverseId**: *number*

* **UserId**: *number*

___

### <a id="getuserfollowinguniversestatusoptions" name="getuserfollowinguniversestatusoptions"></a>  GetUserFollowingUniverseStatusOptions

Ƭ **GetUserFollowingUniverseStatusOptions**: *object*

#### Type declaration:

* **universeId**: *number*

* **userId**: *number*

___

### <a id="unfollowuniverse" name="unfollowuniverse"></a>  UnFollowUniverse

Ƭ **UnFollowUniverse**: *object*

#### Type declaration:

* **universeId**: *number*

* **userId**: *number*

___

### <a id="unfollowuniverseoptions" name="unfollowuniverseoptions"></a>  UnFollowUniverseOptions

Ƭ **UnFollowUniverseOptions**: *object*

#### Type declaration:

* **universeId**: *number*

* **userId**: *number*
