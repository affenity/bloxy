
# Module: "client/apis/OtherAPI"

## Index

### Classes

* [OtherAPI](../classes/_client_apis_otherapi_.otherapi.md)

### Type aliases

* [GetUserProfileHeader](_client_apis_otherapi_.md#getuserprofileheader)
* [GetUserProfileHeaderOptions](_client_apis_otherapi_.md#getuserprofileheaderoptions)

## Type aliases

### <a id="getuserprofileheader" name="getuserprofileheader"></a>  GetUserProfileHeader

Ƭ **GetUserProfileHeader**: *object*

#### Type declaration:

* **AreFriends**: *boolean*

* **CanBeFollowed**: *boolean*

* **CanMessage**: *boolean*

* **CanSeeFavorites**: *boolean*

* **CanSeeInventory**: *boolean*

* **CanTrade**: *boolean*

* **FollowersCount**: *number*

* **FollowingsCount**: *number*

* **FriendRequestPending**: *boolean*

* **FriendsCount**: *number*

* **HeadShotImage**(): *object*

  * **EndpointType**: *"Avatar" | string*

  * **Final**: *boolean*

  * **RetryUrl**: *string | null*

  * **Url**: *string*

  * **UserId**: *number*

* **IncomingFriendRequestPending**: *boolean*

* **IsFollowing**: *boolean*

* **IsUserOnPhone**: *boolean*

* **IsVieweeBlocked**: *boolean*

* **IsViewerBlocked**: *boolean*

* **LastLocation**: *string | null*

* **MayEdit**: *boolean*

* **MayFollow**: *boolean*

* **MayImpersonate**: *boolean*

* **MaySendFriendInvitation**: *boolean*

* **MessagesDisabled**: *boolean*

* **PreviousUserNames**: *string*

* **ProfileDisplayName**: *string*

* **ProfileUserId**: *number*

* **ProfileUserName**: *string*

* **UserId**: *number*

* **UserPlaceId**: *number | null*

* **UserPresenceType**: *number*

* **UserStatus**: *string | null*

* **UserStatusDate**: *string | null*

___

### <a id="getuserprofileheaderoptions" name="getuserprofileheaderoptions"></a>  GetUserProfileHeaderOptions

Ƭ **GetUserProfileHeaderOptions**: *object*

#### Type declaration:

* **userId**: *number*
