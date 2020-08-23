
# Class: GeneralAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **GeneralAPI**

## Index

### Constructors

* [constructor](_client_apis_generalapi_.generalapi.md#constructor)

### Properties

* [client](_client_apis_generalapi_.generalapi.md#client)
* [options](_client_apis_generalapi_.generalapi.md#options)

### Methods

* [acceptFriendRequest](_client_apis_generalapi_.generalapi.md#acceptfriendrequest)
* [awardBadge](_client_apis_generalapi_.generalapi.md#awardbadge)
* [blockUser](_client_apis_generalapi_.generalapi.md#blockuser)
* [declineFriendRequest](_client_apis_generalapi_.generalapi.md#declinefriendrequest)
* [followUser](_client_apis_generalapi_.generalapi.md#followuser)
* [getAssetVersions](_client_apis_generalapi_.generalapi.md#getassetversions)
* [getBalance](_client_apis_generalapi_.generalapi.md#getbalance)
* [getDeviceInfo](_client_apis_generalapi_.generalapi.md#getdeviceinfo)
* [getGamePassProductInfo](_client_apis_generalapi_.generalapi.md#getgamepassproductinfo)
* [getGroup](_client_apis_generalapi_.generalapi.md#getgroup)
* [getGroupAllies](_client_apis_generalapi_.generalapi.md#getgroupallies)
* [getGroupEnemies](_client_apis_generalapi_.generalapi.md#getgroupenemies)
* [getIncomingItems](_client_apis_generalapi_.generalapi.md#getincomingitems)
* [getProductInfo](_client_apis_generalapi_.generalapi.md#getproductinfo)
* [getUserById](_client_apis_generalapi_.generalapi.md#getuserbyid)
* [getUserByUsername](_client_apis_generalapi_.generalapi.md#getuserbyusername)
* [getUserFriends](_client_apis_generalapi_.generalapi.md#getuserfriends)
* [getUserFriendsCount](_client_apis_generalapi_.generalapi.md#getuserfriendscount)
* [getUserGroups](_client_apis_generalapi_.generalapi.md#getusergroups)
* [isUserFollowing](_client_apis_generalapi_.generalapi.md#isuserfollowing)
* [request](_client_apis_generalapi_.generalapi.md#request)
* [sendFriendRequest](_client_apis_generalapi_.generalapi.md#sendfriendrequest)
* [unblockUser](_client_apis_generalapi_.generalapi.md#unblockuser)
* [unfollowUser](_client_apis_generalapi_.generalapi.md#unfollowuser)
* [unfriendUser](_client_apis_generalapi_.generalapi.md#unfrienduser)
* [userCanManageAsset](_client_apis_generalapi_.generalapi.md#usercanmanageasset)
* [userOwnsAsset](_client_apis_generalapi_.generalapi.md#userownsasset)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GeneralAPI**(`client`: [Client](_client_client_.client.md)): *[GeneralAPI](_client_apis_generalapi_.generalapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GeneralAPI](_client_apis_generalapi_.generalapi.md)*

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

▸ **acceptFriendRequest**(`options`: [AcceptFriendRequestOptions](../modules/_client_apis_generalapi_.md#acceptfriendrequestoptions)): *Promise‹[AcceptFriendRequest](../modules/_client_apis_generalapi_.md#acceptfriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptFriendRequestOptions](../modules/_client_apis_generalapi_.md#acceptfriendrequestoptions) |

**Returns:** *Promise‹[AcceptFriendRequest](../modules/_client_apis_generalapi_.md#acceptfriendrequest)›*

___

### <a id="awardbadge" name="awardbadge"></a>  awardBadge

▸ **awardBadge**(`options`: [AwardBadgeOptions](../modules/_client_apis_generalapi_.md#awardbadgeoptions)): *Promise‹[AwardBadge](../modules/_client_apis_generalapi_.md#awardbadge)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AwardBadgeOptions](../modules/_client_apis_generalapi_.md#awardbadgeoptions) |

**Returns:** *Promise‹[AwardBadge](../modules/_client_apis_generalapi_.md#awardbadge)›*

___

### <a id="blockuser" name="blockuser"></a>  blockUser

▸ **blockUser**(`options`: [BlockUserOptions](../modules/_client_apis_generalapi_.md#blockuseroptions)): *Promise‹[BlockUser](../modules/_client_apis_generalapi_.md#blockuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BlockUserOptions](../modules/_client_apis_generalapi_.md#blockuseroptions) |

**Returns:** *Promise‹[BlockUser](../modules/_client_apis_generalapi_.md#blockuser)›*

___

### <a id="declinefriendrequest" name="declinefriendrequest"></a>  declineFriendRequest

▸ **declineFriendRequest**(`options`: [DeclineFriendRequestOptions](../modules/_client_apis_generalapi_.md#declinefriendrequestoptions)): *Promise‹[DeclineFriendRequest](../modules/_client_apis_generalapi_.md#declinefriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineFriendRequestOptions](../modules/_client_apis_generalapi_.md#declinefriendrequestoptions) |

**Returns:** *Promise‹[DeclineFriendRequest](../modules/_client_apis_generalapi_.md#declinefriendrequest)›*

___

### <a id="followuser" name="followuser"></a>  followUser

▸ **followUser**(`options`: [FollowUserOptions](../modules/_client_apis_generalapi_.md#followuseroptions)): *Promise‹[FollowUser](../modules/_client_apis_generalapi_.md#followuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [FollowUserOptions](../modules/_client_apis_generalapi_.md#followuseroptions) |

**Returns:** *Promise‹[FollowUser](../modules/_client_apis_generalapi_.md#followuser)›*

___

### <a id="getassetversions" name="getassetversions"></a>  getAssetVersions

▸ **getAssetVersions**(`options`: [GetAssetVersionOptions](../modules/_client_apis_generalapi_.md#getassetversionoptions)): *Promise‹[GetAssetVersions](../modules/_client_apis_generalapi_.md#getassetversions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetVersionOptions](../modules/_client_apis_generalapi_.md#getassetversionoptions) |

**Returns:** *Promise‹[GetAssetVersions](../modules/_client_apis_generalapi_.md#getassetversions)›*

___

### <a id="getbalance" name="getbalance"></a>  getBalance

▸ **getBalance**(): *Promise‹[GetBalance](../modules/_client_apis_generalapi_.md#getbalance)›*

**Returns:** *Promise‹[GetBalance](../modules/_client_apis_generalapi_.md#getbalance)›*

___

### <a id="getdeviceinfo" name="getdeviceinfo"></a>  getDeviceInfo

▸ **getDeviceInfo**(): *Promise‹[GetDeviceInfo](../modules/_client_apis_generalapi_.md#getdeviceinfo)›*

**Returns:** *Promise‹[GetDeviceInfo](../modules/_client_apis_generalapi_.md#getdeviceinfo)›*

___

### <a id="getgamepassproductinfo" name="getgamepassproductinfo"></a>  getGamePassProductInfo

▸ **getGamePassProductInfo**(`options`: [GetGamePassProductInfoOptions](../modules/_client_apis_generalapi_.md#getgamepassproductinfooptions)): *Promise‹[GetGamePassProductInfo](../modules/_client_apis_generalapi_.md#getgamepassproductinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGamePassProductInfoOptions](../modules/_client_apis_generalapi_.md#getgamepassproductinfooptions) |

**Returns:** *Promise‹[GetGamePassProductInfo](../modules/_client_apis_generalapi_.md#getgamepassproductinfo)›*

___

### <a id="getgroup" name="getgroup"></a>  getGroup

▸ **getGroup**(`options`: [GetGroupOptions](../modules/_client_apis_generalapi_.md#getgroupoptions)): *Promise‹[GetGroup](../modules/_client_apis_generalapi_.md#getgroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupOptions](../modules/_client_apis_generalapi_.md#getgroupoptions) |

**Returns:** *Promise‹[GetGroup](../modules/_client_apis_generalapi_.md#getgroup)›*

___

### <a id="getgroupallies" name="getgroupallies"></a>  getGroupAllies

▸ **getGroupAllies**(`options`: [GetGroupAlliesOptions](../modules/_client_apis_generalapi_.md#getgroupalliesoptions)): *Promise‹[GetGroupAllies](../modules/_client_apis_generalapi_.md#getgroupallies)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupAlliesOptions](../modules/_client_apis_generalapi_.md#getgroupalliesoptions) |

**Returns:** *Promise‹[GetGroupAllies](../modules/_client_apis_generalapi_.md#getgroupallies)›*

___

### <a id="getgroupenemies" name="getgroupenemies"></a>  getGroupEnemies

▸ **getGroupEnemies**(`options`: [GetGroupEnemiesOptions](../modules/_client_apis_generalapi_.md#getgroupenemiesoptions)): *Promise‹[GetGroupEnemies](../modules/_client_apis_generalapi_.md#getgroupenemies)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupEnemiesOptions](../modules/_client_apis_generalapi_.md#getgroupenemiesoptions) |

**Returns:** *Promise‹[GetGroupEnemies](../modules/_client_apis_generalapi_.md#getgroupenemies)›*

___

### <a id="getincomingitems" name="getincomingitems"></a>  getIncomingItems

▸ **getIncomingItems**(): *Promise‹[GetIncomingItems](../modules/_client_apis_generalapi_.md#getincomingitems)›*

**Returns:** *Promise‹[GetIncomingItems](../modules/_client_apis_generalapi_.md#getincomingitems)›*

___

### <a id="getproductinfo" name="getproductinfo"></a>  getProductInfo

▸ **getProductInfo**(`options`: [GetProductInfoOptions](../modules/_client_apis_generalapi_.md#getproductinfooptions)): *Promise‹[GetProductInfo](../modules/_client_apis_generalapi_.md#getproductinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetProductInfoOptions](../modules/_client_apis_generalapi_.md#getproductinfooptions) |

**Returns:** *Promise‹[GetProductInfo](../modules/_client_apis_generalapi_.md#getproductinfo)›*

___

### <a id="getuserbyid" name="getuserbyid"></a>  getUserById

▸ **getUserById**(`options`: [GetUserByIdOptions](../modules/_client_apis_generalapi_.md#getuserbyidoptions)): *Promise‹[GetUserById](../modules/_client_apis_generalapi_.md#getuserbyid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserByIdOptions](../modules/_client_apis_generalapi_.md#getuserbyidoptions) |

**Returns:** *Promise‹[GetUserById](../modules/_client_apis_generalapi_.md#getuserbyid)›*

___

### <a id="getuserbyusername" name="getuserbyusername"></a>  getUserByUsername

▸ **getUserByUsername**(`options`: [GetUserByUsernameOptions](../modules/_client_apis_generalapi_.md#getuserbyusernameoptions)): *Promise‹[GetUserByUsername](../modules/_client_apis_generalapi_.md#getuserbyusername)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserByUsernameOptions](../modules/_client_apis_generalapi_.md#getuserbyusernameoptions) |

**Returns:** *Promise‹[GetUserByUsername](../modules/_client_apis_generalapi_.md#getuserbyusername)›*

___

### <a id="getuserfriends" name="getuserfriends"></a>  getUserFriends

▸ **getUserFriends**(`options`: [GetUserFriendsOptions](../modules/_client_apis_generalapi_.md#getuserfriendsoptions)): *Promise‹[GetUserFriends](../modules/_client_apis_generalapi_.md#getuserfriends)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFriendsOptions](../modules/_client_apis_generalapi_.md#getuserfriendsoptions) |

**Returns:** *Promise‹[GetUserFriends](../modules/_client_apis_generalapi_.md#getuserfriends)›*

___

### <a id="getuserfriendscount" name="getuserfriendscount"></a>  getUserFriendsCount

▸ **getUserFriendsCount**(`options`: [GetUserFriendsCountOptions](../modules/_client_apis_generalapi_.md#getuserfriendscountoptions)): *Promise‹[GetUserFriendsCount](../modules/_client_apis_generalapi_.md#getuserfriendscount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserFriendsCountOptions](../modules/_client_apis_generalapi_.md#getuserfriendscountoptions) |

**Returns:** *Promise‹[GetUserFriendsCount](../modules/_client_apis_generalapi_.md#getuserfriendscount)›*

___

### <a id="getusergroups" name="getusergroups"></a>  getUserGroups

▸ **getUserGroups**(`options`: [GetUserGroupsOptions](../modules/_client_apis_generalapi_.md#getusergroupsoptions)): *Promise‹[GetUserGroups](../modules/_client_apis_generalapi_.md#getusergroups)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserGroupsOptions](../modules/_client_apis_generalapi_.md#getusergroupsoptions) |

**Returns:** *Promise‹[GetUserGroups](../modules/_client_apis_generalapi_.md#getusergroups)›*

___

### <a id="isuserfollowing" name="isuserfollowing"></a>  isUserFollowing

▸ **isUserFollowing**(`options`: [IsUserFollowingOptions](../modules/_client_apis_generalapi_.md#isuserfollowingoptions)): *Promise‹[IsUserFollowing](../modules/_client_apis_generalapi_.md#isuserfollowing)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IsUserFollowingOptions](../modules/_client_apis_generalapi_.md#isuserfollowingoptions) |

**Returns:** *Promise‹[IsUserFollowing](../modules/_client_apis_generalapi_.md#isuserfollowing)›*

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

▸ **sendFriendRequest**(`options`: [SendFriendRequestOptions](../modules/_client_apis_generalapi_.md#sendfriendrequestoptions)): *Promise‹[SendFriendRequest](../modules/_client_apis_generalapi_.md#sendfriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendFriendRequestOptions](../modules/_client_apis_generalapi_.md#sendfriendrequestoptions) |

**Returns:** *Promise‹[SendFriendRequest](../modules/_client_apis_generalapi_.md#sendfriendrequest)›*

___

### <a id="unblockuser" name="unblockuser"></a>  unblockUser

▸ **unblockUser**(`options`: [UnblockUserOptions](../modules/_client_apis_generalapi_.md#unblockuseroptions)): *Promise‹[UnblockUser](../modules/_client_apis_generalapi_.md#unblockuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnblockUserOptions](../modules/_client_apis_generalapi_.md#unblockuseroptions) |

**Returns:** *Promise‹[UnblockUser](../modules/_client_apis_generalapi_.md#unblockuser)›*

___

### <a id="unfollowuser" name="unfollowuser"></a>  unfollowUser

▸ **unfollowUser**(`options`: [UnfollowUserOptions](../modules/_client_apis_generalapi_.md#unfollowuseroptions)): *Promise‹[UnfollowUser](../modules/_client_apis_generalapi_.md#unfollowuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnfollowUserOptions](../modules/_client_apis_generalapi_.md#unfollowuseroptions) |

**Returns:** *Promise‹[UnfollowUser](../modules/_client_apis_generalapi_.md#unfollowuser)›*

___

### <a id="unfrienduser" name="unfrienduser"></a>  unfriendUser

▸ **unfriendUser**(`options`: [UnfriendUserOptions](../modules/_client_apis_generalapi_.md#unfrienduseroptions)): *Promise‹[UnfriendUser](../modules/_client_apis_generalapi_.md#unfrienduser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UnfriendUserOptions](../modules/_client_apis_generalapi_.md#unfrienduseroptions) |

**Returns:** *Promise‹[UnfriendUser](../modules/_client_apis_generalapi_.md#unfrienduser)›*

___

### <a id="usercanmanageasset" name="usercanmanageasset"></a>  userCanManageAsset

▸ **userCanManageAsset**(`options`: [UserCanManageAssetOptions](../modules/_client_apis_generalapi_.md#usercanmanageassetoptions)): *Promise‹[UserCanManageAsset](../modules/_client_apis_generalapi_.md#usercanmanageasset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UserCanManageAssetOptions](../modules/_client_apis_generalapi_.md#usercanmanageassetoptions) |

**Returns:** *Promise‹[UserCanManageAsset](../modules/_client_apis_generalapi_.md#usercanmanageasset)›*

___

### <a id="userownsasset" name="userownsasset"></a>  userOwnsAsset

▸ **userOwnsAsset**(`options`: [UserOwnsAssetOptions](../modules/_client_apis_generalapi_.md#userownsassetoptions)): *Promise‹[UserOwnsAsset](../modules/_client_apis_generalapi_.md#userownsasset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UserOwnsAssetOptions](../modules/_client_apis_generalapi_.md#userownsassetoptions) |

**Returns:** *Promise‹[UserOwnsAsset](../modules/_client_apis_generalapi_.md#userownsasset)›*
