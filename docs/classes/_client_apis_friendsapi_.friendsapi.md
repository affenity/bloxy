
# Class: FriendsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **FriendsAPI**

## Index

### Constructors

* [constructor](_client_apis_friendsapi_.friendsapi.md#constructor)

### Properties

* [client](_client_apis_friendsapi_.friendsapi.md#client)
* [options](_client_apis_friendsapi_.friendsapi.md#options)

### Methods

* [acceptFriendRequest](_client_apis_friendsapi_.friendsapi.md#acceptfriendrequest)
* [checkSessionHealth](_client_apis_friendsapi_.friendsapi.md#checksessionhealth)
* [declineAllFriendRequests](_client_apis_friendsapi_.friendsapi.md#declineallfriendrequests)
* [declineFriendRequest](_client_apis_friendsapi_.friendsapi.md#declinefriendrequest)
* [deleteFriendQRSession](_client_apis_friendsapi_.friendsapi.md#deletefriendqrsession)
* [deleteFriendSession](_client_apis_friendsapi_.friendsapi.md#deletefriendsession)
* [findFriendByCode](_client_apis_friendsapi_.friendsapi.md#findfriendbycode)
* [followUser](_client_apis_friendsapi_.friendsapi.md#followuser)
* [getFriendQRSession](_client_apis_friendsapi_.friendsapi.md#getfriendqrsession)
* [getMetaData](_client_apis_friendsapi_.friendsapi.md#getmetadata)
* [getRecommendedUsers](_client_apis_friendsapi_.friendsapi.md#getrecommendedusers)
* [getSelfFriendRequests](_client_apis_friendsapi_.friendsapi.md#getselffriendrequests)
* [getSelfFriendRequestsCount](_client_apis_friendsapi_.friendsapi.md#getselffriendrequestscount)
* [getSelfFriendsCount](_client_apis_friendsapi_.friendsapi.md#getselffriendscount)
* [getSession](_client_apis_friendsapi_.friendsapi.md#getsession)
* [getUserFollowers](_client_apis_friendsapi_.friendsapi.md#getuserfollowers)
* [getUserFollowersCount](_client_apis_friendsapi_.friendsapi.md#getuserfollowerscount)
* [getUserFollowing](_client_apis_friendsapi_.friendsapi.md#getuserfollowing)
* [getUserFollowingCount](_client_apis_friendsapi_.friendsapi.md#getuserfollowingcount)
* [getUserFriends](_client_apis_friendsapi_.friendsapi.md#getuserfriends)
* [getUserFriendsCount](_client_apis_friendsapi_.friendsapi.md#getuserfriendscount)
* [getUserFriendsOnline](_client_apis_friendsapi_.friendsapi.md#getuserfriendsonline)
* [getUserFriendsWithStatuses](_client_apis_friendsapi_.friendsapi.md#getuserfriendswithstatuses)
* [matchContacts](_client_apis_friendsapi_.friendsapi.md#matchcontacts)
* [redeemFriendCode](_client_apis_friendsapi_.friendsapi.md#redeemfriendcode)
* [redeemFriendQRCode](_client_apis_friendsapi_.friendsapi.md#redeemfriendqrcode)
* [request](_client_apis_friendsapi_.friendsapi.md#request)
* [sendFriendRequest](_client_apis_friendsapi_.friendsapi.md#sendfriendrequest)
* [unFollowUser](_client_apis_friendsapi_.friendsapi.md#unfollowuser)
* [unfriendUser](_client_apis_friendsapi_.friendsapi.md#unfrienduser)
* [updateContacts](_client_apis_friendsapi_.friendsapi.md#updatecontacts)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new FriendsAPI**(`client`: [Client](_client_client_.client.md)): *[FriendsAPI](_client_apis_friendsapi_.friendsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[FriendsAPI](_client_apis_friendsapi_.friendsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="acceptfriendrequest" name="acceptfriendrequest"></a>  acceptFriendRequest

▸ **acceptFriendRequest**(`options`: [AcceptFriendRequestOptions](../modules/_client_apis_friendsapi_.md#acceptfriendrequestoptions)): *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptFriendRequestOptions](../modules/_client_apis_friendsapi_.md#acceptfriendrequestoptions) |

**Returns:** *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

___

### <a id="checksessionhealth" name="checksessionhealth"></a>  checkSessionHealth

▸ **checkSessionHealth**(): *Promise‹[CheckSessionHealth](../modules/_client_apis_friendsapi_.md#checksessionhealth)›*

**Returns:** *Promise‹[CheckSessionHealth](../modules/_client_apis_friendsapi_.md#checksessionhealth)›*

___

### <a id="declineallfriendrequests" name="declineallfriendrequests"></a>  declineAllFriendRequests

▸ **declineAllFriendRequests**(): *Promise‹[DeclineAllFriendRequests](../modules/_client_apis_friendsapi_.md#declineallfriendrequests)›*

**Returns:** *Promise‹[DeclineAllFriendRequests](../modules/_client_apis_friendsapi_.md#declineallfriendrequests)›*

___

### <a id="declinefriendrequest" name="declinefriendrequest"></a>  declineFriendRequest

▸ **declineFriendRequest**(`options`: [DeclineFriendRequestOptions](../modules/_client_apis_friendsapi_.md#declinefriendrequestoptions)): *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineFriendRequestOptions](../modules/_client_apis_friendsapi_.md#declinefriendrequestoptions) |

**Returns:** *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

___

### <a id="deletefriendqrsession" name="deletefriendqrsession"></a>  deleteFriendQRSession

▸ **deleteFriendQRSession**(): *Promise‹[DeleteQRCodeSession](../modules/_client_apis_friendsapi_.md#deleteqrcodesession)›*

**Returns:** *Promise‹[DeleteQRCodeSession](../modules/_client_apis_friendsapi_.md#deleteqrcodesession)›*

___

### <a id="deletefriendsession" name="deletefriendsession"></a>  deleteFriendSession

▸ **deleteFriendSession**(): *Promise‹[DeleteSession](../modules/_client_apis_friendsapi_.md#deletesession)›*

**Returns:** *Promise‹[DeleteSession](../modules/_client_apis_friendsapi_.md#deletesession)›*

___

### <a id="findfriendbycode" name="findfriendbycode"></a>  findFriendByCode

▸ **findFriendByCode**(`options`: [FindFriendByCodeOptions](../modules/_client_apis_friendsapi_.md#findfriendbycodeoptions)): *Promise‹[FindFriendByCode](../modules/_client_apis_friendsapi_.md#findfriendbycode)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FindFriendByCodeOptions](../modules/_client_apis_friendsapi_.md#findfriendbycodeoptions) |

**Returns:** *Promise‹[FindFriendByCode](../modules/_client_apis_friendsapi_.md#findfriendbycode)›*

___

### <a id="followuser" name="followuser"></a>  followUser

▸ **followUser**(`options`: [FollowUserOptions](../modules/_client_apis_friendsapi_.md#followuseroptions)): *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FollowUserOptions](../modules/_client_apis_friendsapi_.md#followuseroptions) |

**Returns:** *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

___

### <a id="getfriendqrsession" name="getfriendqrsession"></a>  getFriendQRSession

▸ **getFriendQRSession**(): *Promise‹[GetOrCreateQRCodeSession](../modules/_client_apis_friendsapi_.md#getorcreateqrcodesession)›*

**Returns:** *Promise‹[GetOrCreateQRCodeSession](../modules/_client_apis_friendsapi_.md#getorcreateqrcodesession)›*

___

### <a id="getmetadata" name="getmetadata"></a>  getMetaData

▸ **getMetaData**(`options`: [GetMetaDataOptions](../modules/_client_apis_friendsapi_.md#getmetadataoptions)): *Promise‹[GetMetaData](../modules/_client_apis_friendsapi_.md#getmetadata)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMetaDataOptions](../modules/_client_apis_friendsapi_.md#getmetadataoptions) |

**Returns:** *Promise‹[GetMetaData](../modules/_client_apis_friendsapi_.md#getmetadata)›*

___

### <a id="getrecommendedusers" name="getrecommendedusers"></a>  getRecommendedUsers

▸ **getRecommendedUsers**(): *Promise‹[GetSelfRecommendedUsers](../modules/_client_apis_friendsapi_.md#getselfrecommendedusers)›*

**Returns:** *Promise‹[GetSelfRecommendedUsers](../modules/_client_apis_friendsapi_.md#getselfrecommendedusers)›*

___

### <a id="getselffriendrequests" name="getselffriendrequests"></a>  getSelfFriendRequests

▸ **getSelfFriendRequests**(`options`: [GetSelfFriendRequestsOptions](../modules/_client_apis_friendsapi_.md#getselffriendrequestsoptions)): *Promise‹[GetSelfFriendRequests](../modules/_client_apis_friendsapi_.md#getselffriendrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfFriendRequestsOptions](../modules/_client_apis_friendsapi_.md#getselffriendrequestsoptions) |

**Returns:** *Promise‹[GetSelfFriendRequests](../modules/_client_apis_friendsapi_.md#getselffriendrequests)›*

___

### <a id="getselffriendrequestscount" name="getselffriendrequestscount"></a>  getSelfFriendRequestsCount

▸ **getSelfFriendRequestsCount**(): *Promise‹[GetSelfFriendRequestsCount](../modules/_client_apis_friendsapi_.md#getselffriendrequestscount)›*

**Returns:** *Promise‹[GetSelfFriendRequestsCount](../modules/_client_apis_friendsapi_.md#getselffriendrequestscount)›*

___

### <a id="getselffriendscount" name="getselffriendscount"></a>  getSelfFriendsCount

▸ **getSelfFriendsCount**(): *Promise‹[GetSelfFriendsCount](../modules/_client_apis_friendsapi_.md#getselffriendscount)›*

**Returns:** *Promise‹[GetSelfFriendsCount](../modules/_client_apis_friendsapi_.md#getselffriendscount)›*

___

### <a id="getsession" name="getsession"></a>  getSession

▸ **getSession**(): *Promise‹[FindFriendByCode](../modules/_client_apis_friendsapi_.md#findfriendbycode)›*

**Returns:** *Promise‹[FindFriendByCode](../modules/_client_apis_friendsapi_.md#findfriendbycode)›*

___

### <a id="getuserfollowers" name="getuserfollowers"></a>  getUserFollowers

▸ **getUserFollowers**(`options`: [GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions)): *Promise‹[GetUserFollowers](../modules/_client_apis_friendsapi_.md#getuserfollowers)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions) |

**Returns:** *Promise‹[GetUserFollowers](../modules/_client_apis_friendsapi_.md#getuserfollowers)›*

___

### <a id="getuserfollowerscount" name="getuserfollowerscount"></a>  getUserFollowersCount

▸ **getUserFollowersCount**(`options`: [GetUserFollowersCountOptions](../modules/_client_apis_friendsapi_.md#getuserfollowerscountoptions)): *Promise‹[GetUserFollowersCount](../modules/_client_apis_friendsapi_.md#getuserfollowerscount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowersCountOptions](../modules/_client_apis_friendsapi_.md#getuserfollowerscountoptions) |

**Returns:** *Promise‹[GetUserFollowersCount](../modules/_client_apis_friendsapi_.md#getuserfollowerscount)›*

___

### <a id="getuserfollowing" name="getuserfollowing"></a>  getUserFollowing

▸ **getUserFollowing**(`options`: [GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions)): *Promise‹[GetUserFollowing](../modules/_client_apis_friendsapi_.md#getuserfollowing)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions) |

**Returns:** *Promise‹[GetUserFollowing](../modules/_client_apis_friendsapi_.md#getuserfollowing)›*

___

### <a id="getuserfollowingcount" name="getuserfollowingcount"></a>  getUserFollowingCount

▸ **getUserFollowingCount**(`options`: [GetUserFollowingCountOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingcountoptions)): *Promise‹[GetUserFollowingCount](../modules/_client_apis_friendsapi_.md#getuserfollowingcount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFollowingCountOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingcountoptions) |

**Returns:** *Promise‹[GetUserFollowingCount](../modules/_client_apis_friendsapi_.md#getuserfollowingcount)›*

___

### <a id="getuserfriends" name="getuserfriends"></a>  getUserFriends

▸ **getUserFriends**(`options`: [GetUserFriendsOptions](../modules/_client_apis_friendsapi_.md#getuserfriendsoptions)): *Promise‹[GetUserFriends](../modules/_client_apis_friendsapi_.md#getuserfriends)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFriendsOptions](../modules/_client_apis_friendsapi_.md#getuserfriendsoptions) |

**Returns:** *Promise‹[GetUserFriends](../modules/_client_apis_friendsapi_.md#getuserfriends)›*

___

### <a id="getuserfriendscount" name="getuserfriendscount"></a>  getUserFriendsCount

▸ **getUserFriendsCount**(`options`: [GetUserFriendsCountOptions](../modules/_client_apis_generalapi_.md#getuserfriendscountoptions)): *Promise‹[GetUserFriendsCount](../modules/_client_apis_generalapi_.md#getuserfriendscount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFriendsCountOptions](../modules/_client_apis_generalapi_.md#getuserfriendscountoptions) |

**Returns:** *Promise‹[GetUserFriendsCount](../modules/_client_apis_generalapi_.md#getuserfriendscount)›*

___

### <a id="getuserfriendsonline" name="getuserfriendsonline"></a>  getUserFriendsOnline

▸ **getUserFriendsOnline**(`options`: [GetUserOnlineFriendsOptions](../modules/_client_apis_friendsapi_.md#getuseronlinefriendsoptions)): *Promise‹[GetUserOnlineFriends](../modules/_client_apis_friendsapi_.md#getuseronlinefriends)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserOnlineFriendsOptions](../modules/_client_apis_friendsapi_.md#getuseronlinefriendsoptions) |

**Returns:** *Promise‹[GetUserOnlineFriends](../modules/_client_apis_friendsapi_.md#getuseronlinefriends)›*

___

### <a id="getuserfriendswithstatuses" name="getuserfriendswithstatuses"></a>  getUserFriendsWithStatuses

▸ **getUserFriendsWithStatuses**(`options`: [GetUserFriendsWithStatusesOptions](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatusesoptions)): *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFriendsWithStatusesOptions](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatusesoptions) |

**Returns:** *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

___

### <a id="matchcontacts" name="matchcontacts"></a>  matchContacts

▸ **matchContacts**(`options`: [MatchContactsOptions](../modules/_client_apis_friendsapi_.md#matchcontactsoptions)): *Promise‹[MatchContacts](../modules/_client_apis_friendsapi_.md#matchcontacts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MatchContactsOptions](../modules/_client_apis_friendsapi_.md#matchcontactsoptions) |

**Returns:** *Promise‹[MatchContacts](../modules/_client_apis_friendsapi_.md#matchcontacts)›*

___

### <a id="redeemfriendcode" name="redeemfriendcode"></a>  redeemFriendCode

▸ **redeemFriendCode**(`options`: [RedeemNearbyFriendCodeOptions](../modules/_client_apis_friendsapi_.md#redeemnearbyfriendcodeoptions)): *Promise‹[RedeemNearbyFriendCode](../modules/_client_apis_friendsapi_.md#redeemnearbyfriendcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RedeemNearbyFriendCodeOptions](../modules/_client_apis_friendsapi_.md#redeemnearbyfriendcodeoptions) |

**Returns:** *Promise‹[RedeemNearbyFriendCode](../modules/_client_apis_friendsapi_.md#redeemnearbyfriendcode)›*

___

### <a id="redeemfriendqrcode" name="redeemfriendqrcode"></a>  redeemFriendQRCode

▸ **redeemFriendQRCode**(`options`: [RedeemQRCodeOptions](../modules/_client_apis_friendsapi_.md#redeemqrcodeoptions)): *Promise‹[RedeemQRCode](../modules/_client_apis_friendsapi_.md#redeemqrcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RedeemQRCodeOptions](../modules/_client_apis_friendsapi_.md#redeemqrcodeoptions) |

**Returns:** *Promise‹[RedeemQRCode](../modules/_client_apis_friendsapi_.md#redeemqrcode)›*

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

### <a id="sendfriendrequest" name="sendfriendrequest"></a>  sendFriendRequest

▸ **sendFriendRequest**(`options`: [SendFriendRequestOptions](../modules/_client_apis_friendsapi_.md#sendfriendrequestoptions)): *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendFriendRequestOptions](../modules/_client_apis_friendsapi_.md#sendfriendrequestoptions) |

**Returns:** *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

___

### <a id="unfollowuser" name="unfollowuser"></a>  unFollowUser

▸ **unFollowUser**(`options`: [UnFollowUserOptions](../modules/_client_apis_friendsapi_.md#unfollowuseroptions)): *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnFollowUserOptions](../modules/_client_apis_friendsapi_.md#unfollowuseroptions) |

**Returns:** *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

___

### <a id="unfrienduser" name="unfrienduser"></a>  unfriendUser

▸ **unfriendUser**(`options`: [UnfriendUserOptions](../modules/_client_apis_friendsapi_.md#unfrienduseroptions)): *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnfriendUserOptions](../modules/_client_apis_friendsapi_.md#unfrienduseroptions) |

**Returns:** *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

___

### <a id="updatecontacts" name="updatecontacts"></a>  updateContacts

▸ **updateContacts**(`options`: [UpdateContactsOptions](../modules/_client_apis_friendsapi_.md#updatecontactsoptions)): *Promise‹[UpdateContacts](../modules/_client_apis_friendsapi_.md#updatecontacts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateContactsOptions](../modules/_client_apis_friendsapi_.md#updatecontactsoptions) |

**Returns:** *Promise‹[UpdateContacts](../modules/_client_apis_friendsapi_.md#updatecontacts)›*
