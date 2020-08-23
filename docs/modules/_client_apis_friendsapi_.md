
# Module: "client/apis/FriendsAPI"

## Index

### Classes

* [FriendsAPI](../classes/_client_apis_friendsapi_.friendsapi.md)

### Type aliases

* [AcceptFriendRequest](_client_apis_friendsapi_.md#acceptfriendrequest)
* [AcceptFriendRequestOptions](_client_apis_friendsapi_.md#acceptfriendrequestoptions)
* [CheckSessionHealth](_client_apis_friendsapi_.md#checksessionhealth)
* [DeclineAllFriendRequests](_client_apis_friendsapi_.md#declineallfriendrequests)
* [DeclineFriendRequest](_client_apis_friendsapi_.md#declinefriendrequest)
* [DeclineFriendRequestOptions](_client_apis_friendsapi_.md#declinefriendrequestoptions)
* [DeleteQRCodeSession](_client_apis_friendsapi_.md#deleteqrcodesession)
* [DeleteSession](_client_apis_friendsapi_.md#deletesession)
* [FindFriendByCode](_client_apis_friendsapi_.md#findfriendbycode)
* [FindFriendByCodeOptions](_client_apis_friendsapi_.md#findfriendbycodeoptions)
* [FollowUser](_client_apis_friendsapi_.md#followuser)
* [FollowUserOptions](_client_apis_friendsapi_.md#followuseroptions)
* [GetMetaData](_client_apis_friendsapi_.md#getmetadata)
* [GetMetaDataOptions](_client_apis_friendsapi_.md#getmetadataoptions)
* [GetOrCreateNearbySession](_client_apis_friendsapi_.md#getorcreatenearbysession)
* [GetOrCreateQRCodeSession](_client_apis_friendsapi_.md#getorcreateqrcodesession)
* [GetSelfFriendRequests](_client_apis_friendsapi_.md#getselffriendrequests)
* [GetSelfFriendRequestsCount](_client_apis_friendsapi_.md#getselffriendrequestscount)
* [GetSelfFriendRequestsOptions](_client_apis_friendsapi_.md#getselffriendrequestsoptions)
* [GetSelfFriendsCount](_client_apis_friendsapi_.md#getselffriendscount)
* [GetSelfRecommendedUsers](_client_apis_friendsapi_.md#getselfrecommendedusers)
* [GetUserFollowers](_client_apis_friendsapi_.md#getuserfollowers)
* [GetUserFollowersCount](_client_apis_friendsapi_.md#getuserfollowerscount)
* [GetUserFollowersCountOptions](_client_apis_friendsapi_.md#getuserfollowerscountoptions)
* [GetUserFollowersOptions](_client_apis_friendsapi_.md#getuserfollowersoptions)
* [GetUserFollowing](_client_apis_friendsapi_.md#getuserfollowing)
* [GetUserFollowingCount](_client_apis_friendsapi_.md#getuserfollowingcount)
* [GetUserFollowingCountOptions](_client_apis_friendsapi_.md#getuserfollowingcountoptions)
* [GetUserFollowingOptions](_client_apis_friendsapi_.md#getuserfollowingoptions)
* [GetUserFriends](_client_apis_friendsapi_.md#getuserfriends)
* [GetUserFriendsOptions](_client_apis_friendsapi_.md#getuserfriendsoptions)
* [GetUserFriendsWithStatuses](_client_apis_friendsapi_.md#getuserfriendswithstatuses)
* [GetUserFriendsWithStatusesOptions](_client_apis_friendsapi_.md#getuserfriendswithstatusesoptions)
* [GetUserOnlineFriends](_client_apis_friendsapi_.md#getuseronlinefriends)
* [GetUserOnlineFriendsOptions](_client_apis_friendsapi_.md#getuseronlinefriendsoptions)
* [MatchContacts](_client_apis_friendsapi_.md#matchcontacts)
* [MatchContactsOptions](_client_apis_friendsapi_.md#matchcontactsoptions)
* [RedeemNearbyFriendCode](_client_apis_friendsapi_.md#redeemnearbyfriendcode)
* [RedeemNearbyFriendCodeOptions](_client_apis_friendsapi_.md#redeemnearbyfriendcodeoptions)
* [RedeemQRCode](_client_apis_friendsapi_.md#redeemqrcode)
* [RedeemQRCodeOptions](_client_apis_friendsapi_.md#redeemqrcodeoptions)
* [SendFriendRequest](_client_apis_friendsapi_.md#sendfriendrequest)
* [SendFriendRequestOptions](_client_apis_friendsapi_.md#sendfriendrequestoptions)
* [UnFollowUser](_client_apis_friendsapi_.md#unfollowuser)
* [UnFollowUserOptions](_client_apis_friendsapi_.md#unfollowuseroptions)
* [UnfriendUser](_client_apis_friendsapi_.md#unfrienduser)
* [UnfriendUserOptions](_client_apis_friendsapi_.md#unfrienduseroptions)
* [UpdateContacts](_client_apis_friendsapi_.md#updatecontacts)
* [UpdateContactsOptions](_client_apis_friendsapi_.md#updatecontactsoptions)

## Type aliases

### <a id="acceptfriendrequest" name="acceptfriendrequest"></a>  AcceptFriendRequest

Ƭ **AcceptFriendRequest**: *object*

#### Type declaration:

___

### <a id="acceptfriendrequestoptions" name="acceptfriendrequestoptions"></a>  AcceptFriendRequestOptions

Ƭ **AcceptFriendRequestOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="checksessionhealth" name="checksessionhealth"></a>  CheckSessionHealth

Ƭ **CheckSessionHealth**: *object*

#### Type declaration:

___

### <a id="declineallfriendrequests" name="declineallfriendrequests"></a>  DeclineAllFriendRequests

Ƭ **DeclineAllFriendRequests**: *object*

#### Type declaration:

___

### <a id="declinefriendrequest" name="declinefriendrequest"></a>  DeclineFriendRequest

Ƭ **DeclineFriendRequest**: *object*

#### Type declaration:

___

### <a id="declinefriendrequestoptions" name="declinefriendrequestoptions"></a>  DeclineFriendRequestOptions

Ƭ **DeclineFriendRequestOptions**: *[AcceptFriendRequestOptions](_client_apis_friendsapi_.md#acceptfriendrequestoptions)*

___

### <a id="deleteqrcodesession" name="deleteqrcodesession"></a>  DeleteQRCodeSession

Ƭ **DeleteQRCodeSession**: *object*

#### Type declaration:

___

### <a id="deletesession" name="deletesession"></a>  DeleteSession

Ƭ **DeleteSession**: *object*

#### Type declaration:

___

### <a id="findfriendbycode" name="findfriendbycode"></a>  FindFriendByCode

Ƭ **FindFriendByCode**: *object*

#### Type declaration:

* **friendshipStatus**: *"NoFriendship" | string*

* **userId**: *number*

* **username**: *string*

___

### <a id="findfriendbycodeoptions" name="findfriendbycodeoptions"></a>  FindFriendByCodeOptions

Ƭ **FindFriendByCodeOptions**: *object*

#### Type declaration:

* **code**: *string*

___

### <a id="followuser" name="followuser"></a>  FollowUser

Ƭ **FollowUser**: *object*

#### Type declaration:

* **isCaptchaRequired**: *boolean*

* **success**: *boolean*

___

### <a id="followuseroptions" name="followuseroptions"></a>  FollowUserOptions

Ƭ **FollowUserOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getmetadata" name="getmetadata"></a>  GetMetaData

Ƭ **GetMetaData**: *object*

#### Type declaration:

* **isFriendFinderEnabled**: *boolean*

* **isFriendsUserDataStoreCacheEnabled**: *boolean*

* **isNearbyUpsellEnabled**: *boolean*

* **userName**: *string*

___

### <a id="getmetadataoptions" name="getmetadataoptions"></a>  GetMetaDataOptions

Ƭ **GetMetaDataOptions**: *object*

#### Type declaration:

* **targetUserId**: *number*

___

### <a id="getorcreatenearbysession" name="getorcreatenearbysession"></a>  GetOrCreateNearbySession

Ƭ **GetOrCreateNearbySession**: *object*

#### Type declaration:

* **code**: *string*

* **expires**: *number*

___

### <a id="getorcreateqrcodesession" name="getorcreateqrcodesession"></a>  GetOrCreateQRCodeSession

Ƭ **GetOrCreateQRCodeSession**: *[GetOrCreateNearbySession](_client_apis_friendsapi_.md#getorcreatenearbysession)*

___

### <a id="getselffriendrequests" name="getselffriendrequests"></a>  GetSelfFriendRequests

Ƭ **GetSelfFriendRequests**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getselffriendrequestscount" name="getselffriendrequestscount"></a>  GetSelfFriendRequestsCount

Ƭ **GetSelfFriendRequestsCount**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="getselffriendrequestsoptions" name="getselffriendrequestsoptions"></a>  GetSelfFriendRequestsOptions

Ƭ **GetSelfFriendRequestsOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Desc" | "Asc"*

___

### <a id="getselffriendscount" name="getselffriendscount"></a>  GetSelfFriendsCount

Ƭ **GetSelfFriendsCount**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="getselfrecommendedusers" name="getselfrecommendedusers"></a>  GetSelfRecommendedUsers

Ƭ **GetSelfRecommendedUsers**: *object[]*

___

### <a id="getuserfollowers" name="getuserfollowers"></a>  GetUserFollowers

Ƭ **GetUserFollowers**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuserfollowerscount" name="getuserfollowerscount"></a>  GetUserFollowersCount

Ƭ **GetUserFollowersCount**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="getuserfollowerscountoptions" name="getuserfollowerscountoptions"></a>  GetUserFollowersCountOptions

Ƭ **GetUserFollowersCountOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getuserfollowersoptions" name="getuserfollowersoptions"></a>  GetUserFollowersOptions

Ƭ **GetUserFollowersOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **userId**: *number*

___

### <a id="getuserfollowing" name="getuserfollowing"></a>  GetUserFollowing

Ƭ **GetUserFollowing**: *[GetUserFollowers](_client_apis_friendsapi_.md#getuserfollowers)*

___

### <a id="getuserfollowingcount" name="getuserfollowingcount"></a>  GetUserFollowingCount

Ƭ **GetUserFollowingCount**: *[GetUserFollowersCount](_client_apis_friendsapi_.md#getuserfollowerscount)*

___

### <a id="getuserfollowingcountoptions" name="getuserfollowingcountoptions"></a>  GetUserFollowingCountOptions

Ƭ **GetUserFollowingCountOptions**: *[GetUserFollowersCountOptions](_client_apis_friendsapi_.md#getuserfollowerscountoptions)*

___

### <a id="getuserfollowingoptions" name="getuserfollowingoptions"></a>  GetUserFollowingOptions

Ƭ **GetUserFollowingOptions**: *[GetUserFollowersOptions](_client_apis_friendsapi_.md#getuserfollowersoptions)*

___

### <a id="getuserfriends" name="getuserfriends"></a>  GetUserFriends

Ƭ **GetUserFriends**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getuserfriendsoptions" name="getuserfriendsoptions"></a>  GetUserFriendsOptions

Ƭ **GetUserFriendsOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **userId**: *number*

___

### <a id="getuserfriendswithstatuses" name="getuserfriendswithstatuses"></a>  GetUserFriendsWithStatuses

Ƭ **GetUserFriendsWithStatuses**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getuserfriendswithstatusesoptions" name="getuserfriendswithstatusesoptions"></a>  GetUserFriendsWithStatusesOptions

Ƭ **GetUserFriendsWithStatusesOptions**: *object*

#### Type declaration:

* **userId**: *number*

* **withUserIds**: *number[]*

___

### <a id="getuseronlinefriends" name="getuseronlinefriends"></a>  GetUserOnlineFriends

Ƭ **GetUserOnlineFriends**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getuseronlinefriendsoptions" name="getuseronlinefriendsoptions"></a>  GetUserOnlineFriendsOptions

Ƭ **GetUserOnlineFriendsOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="matchcontacts" name="matchcontacts"></a>  MatchContacts

Ƭ **MatchContacts**: *ContactsAPIMatchContacts*

___

### <a id="matchcontactsoptions" name="matchcontactsoptions"></a>  MatchContactsOptions

Ƭ **MatchContactsOptions**: *ContactsAPIMatchContactsOptions*

___

### <a id="redeemnearbyfriendcode" name="redeemnearbyfriendcode"></a>  RedeemNearbyFriendCode

Ƭ **RedeemNearbyFriendCode**: *object*

#### Type declaration:

___

### <a id="redeemnearbyfriendcodeoptions" name="redeemnearbyfriendcodeoptions"></a>  RedeemNearbyFriendCodeOptions

Ƭ **RedeemNearbyFriendCodeOptions**: *object*

#### Type declaration:

* **code**: *string*

___

### <a id="redeemqrcode" name="redeemqrcode"></a>  RedeemQRCode

Ƭ **RedeemQRCode**: *object*

#### Type declaration:

* **userId**: *number*

* **username**: *string*

___

### <a id="redeemqrcodeoptions" name="redeemqrcodeoptions"></a>  RedeemQRCodeOptions

Ƭ **RedeemQRCodeOptions**: *object*

#### Type declaration:

* **code**: *string*

___

### <a id="sendfriendrequest" name="sendfriendrequest"></a>  SendFriendRequest

Ƭ **SendFriendRequest**: *object*

#### Type declaration:

* **isCaptchaRequired**: *boolean*

* **success**: *boolean*

___

### <a id="sendfriendrequestoptions" name="sendfriendrequestoptions"></a>  SendFriendRequestOptions

Ƭ **SendFriendRequestOptions**: *object*

#### Type declaration:

* **source**? : *"Unknown" | string*

* **userId**: *number*

___

### <a id="unfollowuser" name="unfollowuser"></a>  UnFollowUser

Ƭ **UnFollowUser**: *[FollowUser](_client_apis_friendsapi_.md#followuser)*

___

### <a id="unfollowuseroptions" name="unfollowuseroptions"></a>  UnFollowUserOptions

Ƭ **UnFollowUserOptions**: *[FollowUserOptions](_client_apis_friendsapi_.md#followuseroptions)*

___

### <a id="unfrienduser" name="unfrienduser"></a>  UnfriendUser

Ƭ **UnfriendUser**: *object*

#### Type declaration:

___

### <a id="unfrienduseroptions" name="unfrienduseroptions"></a>  UnfriendUserOptions

Ƭ **UnfriendUserOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="updatecontacts" name="updatecontacts"></a>  UpdateContacts

Ƭ **UpdateContacts**: *ContactsAPIUpdateContacts*

___

### <a id="updatecontactsoptions" name="updatecontactsoptions"></a>  UpdateContactsOptions

Ƭ **UpdateContactsOptions**: *ContactsAPIUpdateContactsOptions*
