
# Class: GroupMember

## Hierarchy

* [UserBase](_structures_user_.userbase.md)

  ↳ **GroupMember**

## Index

### Constructors

* [constructor](_structures_group_.groupmember.md#constructor)

### Properties

* [client](_structures_group_.groupmember.md#client)
* [group](_structures_group_.groupmember.md#group)
* [id](_structures_group_.groupmember.md#id)
* [membership](_structures_group_.groupmember.md#membership)
* [name](_structures_group_.groupmember.md#name)
* [role](_structures_group_.groupmember.md#role)

### Methods

* [acceptFriendRequest](_structures_group_.groupmember.md#acceptfriendrequest)
* [acceptJoinRequestInGroup](_structures_group_.groupmember.md#acceptjoinrequestingroup)
* [addToChatConversation](_structures_group_.groupmember.md#addtochatconversation)
* [awardBadge](_structures_group_.groupmember.md#awardbadge)
* [block](_structures_group_.groupmember.md#block)
* [canInviteToVIPServer](_structures_group_.groupmember.md#caninvitetovipserver)
* [canManageAsset](_structures_group_.groupmember.md#canmanageasset)
* [declineFriendRequest](_structures_group_.groupmember.md#declinefriendrequest)
* [declineJoinRequestInGroup](_structures_group_.groupmember.md#declinejoinrequestingroup)
* [deleteBadge](_structures_group_.groupmember.md#deletebadge)
* [deleteGroupWallPosts](_structures_group_.groupmember.md#deletegroupwallposts)
* [follow](_structures_group_.groupmember.md#follow)
* [friend](_structures_group_.groupmember.md#friend)
* [getAvatar](_structures_group_.groupmember.md#getavatar)
* [getAvatarBustImage](_structures_group_.groupmember.md#getavatarbustimage)
* [getAvatarHeadShotImage](_structures_group_.groupmember.md#getavatarheadshotimage)
* [getBadges](_structures_group_.groupmember.md#getbadges)
* [getBadgesAwardedDates](_structures_group_.groupmember.md#getbadgesawardeddates)
* [getBundles](_structures_group_.groupmember.md#getbundles)
* [getBundlesByType](_structures_group_.groupmember.md#getbundlesbytype)
* [getCanTrade](_structures_group_.groupmember.md#getcantrade)
* [getCollectibles](_structures_group_.groupmember.md#getcollectibles)
* [getCurrentlyWearing](_structures_group_.groupmember.md#getcurrentlywearing)
* [getFollowers](_structures_group_.groupmember.md#getfollowers)
* [getFollowersCount](_structures_group_.groupmember.md#getfollowerscount)
* [getFollowing](_structures_group_.groupmember.md#getfollowing)
* [getFollowingCount](_structures_group_.groupmember.md#getfollowingcount)
* [getFriends](_structures_group_.groupmember.md#getfriends)
* [getFriendsCount](_structures_group_.groupmember.md#getfriendscount)
* [getFriendsWithStatuses](_structures_group_.groupmember.md#getfriendswithstatuses)
* [getFullBodyAvatarImage](_structures_group_.groupmember.md#getfullbodyavatarimage)
* [getGroups](_structures_group_.groupmember.md#getgroups)
* [getInventory](_structures_group_.groupmember.md#getinventory)
* [getInventoryByAssetTypeId](_structures_group_.groupmember.md#getinventorybyassettypeid)
* [getItemsByTypeAndTargetId](_structures_group_.groupmember.md#getitemsbytypeandtargetid)
* [getJoinRequestInGroup](_structures_group_.groupmember.md#getjoinrequestingroup)
* [getOutfits](_structures_group_.groupmember.md#getoutfits)
* [getPremiumMembership](_structures_group_.groupmember.md#getpremiummembership)
* [getPresence](_structures_group_.groupmember.md#getpresence)
* [getPrimaryGroup](_structures_group_.groupmember.md#getprimarygroup)
* [getResellableAssetCopies](_structures_group_.groupmember.md#getresellableassetcopies)
* [getStatus](_structures_group_.groupmember.md#getstatus)
* [getTag](_structures_group_.groupmember.md#gettag)
* [getUser](_structures_group_.groupmember.md#getuser)
* [isFollowedByUser](_structures_group_.groupmember.md#isfollowedbyuser)
* [kick](_structures_group_.groupmember.md#kick)
* [kickFromGroup](_structures_group_.groupmember.md#kickfromgroup)
* [ownsAsset](_structures_group_.groupmember.md#ownsasset)
* [payoutUserFromGroup](_structures_group_.groupmember.md#payoutuserfromgroup)
* [removeFromConversation](_structures_group_.groupmember.md#removefromconversation)
* [removeFromTeamCreate](_structures_group_.groupmember.md#removefromteamcreate)
* [sendMessage](_structures_group_.groupmember.md#sendmessage)
* [sendTrade](_structures_group_.groupmember.md#sendtrade)
* [setGroupOwner](_structures_group_.groupmember.md#setgroupowner)
* [setPendingTag](_structures_group_.groupmember.md#setpendingtag)
* [setTag](_structures_group_.groupmember.md#settag)
* [startConversation](_structures_group_.groupmember.md#startconversation)
* [unFollow](_structures_group_.groupmember.md#unfollow)
* [unblock](_structures_group_.groupmember.md#unblock)
* [unfriend](_structures_group_.groupmember.md#unfriend)
* [updateMemberInGroup](_structures_group_.groupmember.md#updatememberingroup)
* [updateTranslationGameAccess](_structures_group_.groupmember.md#updatetranslationgameaccess)
* [upsellPremiumCheck](_structures_group_.groupmember.md#upsellpremiumcheck)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GroupMember**(`data`: [GroupMemberOptions](../interfaces/_structures_group_.groupmemberoptions.md), `client`: [Client](_client_client_.client.md)): *[GroupMember](_structures_group_.groupmember.md)*

*Overrides [UserBase](_structures_user_.userbase.md).[constructor](_structures_user_.userbase.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [GroupMemberOptions](../interfaces/_structures_group_.groupmemberoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GroupMember](_structures_group_.groupmember.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [UserBase](_structures_user_.userbase.md).[client](_structures_user_.userbase.md#client)*

___

### <a id="group" name="group"></a>  group

• **group**: *[PartialGroup](_structures_group_.partialgroup.md)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

*Inherited from [UserBase](_structures_user_.userbase.md).[id](_structures_user_.userbase.md#id)*

___

### <a id="membership" name="membership"></a>  membership

• **membership**: *unknown*

*Inherited from [UserBase](_structures_user_.userbase.md).[membership](_structures_user_.userbase.md#membership)*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

*Inherited from [UserBase](_structures_user_.userbase.md).[name](_structures_user_.userbase.md#name)*

___

### <a id="role" name="role"></a>  role

• **role**: *[GroupRole](_structures_group_.grouprole.md) | null*

## Methods

### <a id="acceptfriendrequest" name="acceptfriendrequest"></a>  acceptFriendRequest

▸ **acceptFriendRequest**(): *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[acceptFriendRequest](_structures_user_.userbase.md#acceptfriendrequest)*

**Returns:** *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

___

### <a id="acceptjoinrequestingroup" name="acceptjoinrequestingroup"></a>  acceptJoinRequestInGroup

▸ **acceptJoinRequestInGroup**(`groupId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[acceptJoinRequestInGroup](_structures_user_.userbase.md#acceptjoinrequestingroup)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="addtochatconversation" name="addtochatconversation"></a>  addToChatConversation

▸ **addToChatConversation**(`conversationId`: number): *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[addToChatConversation](_structures_user_.userbase.md#addtochatconversation)*

**Parameters:**

Name | Type |
------ | ------ |
`conversationId` | number |

**Returns:** *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

___

### <a id="awardbadge" name="awardbadge"></a>  awardBadge

▸ **awardBadge**(`badgeId`: number, `placeId`: number): *Promise‹string›*

*Inherited from [UserBase](_structures_user_.userbase.md).[awardBadge](_structures_user_.userbase.md#awardbadge)*

**Parameters:**

Name | Type |
------ | ------ |
`badgeId` | number |
`placeId` | number |

**Returns:** *Promise‹string›*

___

### <a id="block" name="block"></a>  block

▸ **block**(): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[block](_structures_user_.userbase.md#block)*

**Returns:** *Promise‹boolean›*

___

### <a id="caninvitetovipserver" name="caninvitetovipserver"></a>  canInviteToVIPServer

▸ **canInviteToVIPServer**(): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[canInviteToVIPServer](_structures_user_.userbase.md#caninvitetovipserver)*

**Returns:** *Promise‹boolean›*

___

### <a id="canmanageasset" name="canmanageasset"></a>  canManageAsset

▸ **canManageAsset**(`assetId`: number): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[canManageAsset](_structures_user_.userbase.md#canmanageasset)*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="declinefriendrequest" name="declinefriendrequest"></a>  declineFriendRequest

▸ **declineFriendRequest**(): *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[declineFriendRequest](_structures_user_.userbase.md#declinefriendrequest)*

**Returns:** *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

___

### <a id="declinejoinrequestingroup" name="declinejoinrequestingroup"></a>  declineJoinRequestInGroup

▸ **declineJoinRequestInGroup**(`groupId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[declineJoinRequestInGroup](_structures_user_.userbase.md#declinejoinrequestingroup)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="deletebadge" name="deletebadge"></a>  deleteBadge

▸ **deleteBadge**(`badgeId`: number): *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[deleteBadge](_structures_user_.userbase.md#deletebadge)*

**Parameters:**

Name | Type |
------ | ------ |
`badgeId` | number |

**Returns:** *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

___

### <a id="deletegroupwallposts" name="deletegroupwallposts"></a>  deleteGroupWallPosts

▸ **deleteGroupWallPosts**(`groupId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[deleteGroupWallPosts](_structures_user_.userbase.md#deletegroupwallposts)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="follow" name="follow"></a>  follow

▸ **follow**(): *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[follow](_structures_user_.userbase.md#follow)*

**Returns:** *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

___

### <a id="friend" name="friend"></a>  friend

▸ **friend**(`source?`: undefined | string): *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[friend](_structures_user_.userbase.md#friend)*

**Parameters:**

Name | Type |
------ | ------ |
`source?` | undefined &#124; string |

**Returns:** *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

___

### <a id="getavatar" name="getavatar"></a>  getAvatar

▸ **getAvatar**(): *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getAvatar](_structures_user_.userbase.md#getavatar)*

**Returns:** *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

___

### <a id="getavatarbustimage" name="getavatarbustimage"></a>  getAvatarBustImage

▸ **getAvatarBustImage**(`options`: Omit‹[GetUsersAvatarBustImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarbustimagesoptions), "userIds"›): *Promise‹GetUsersAvatarBustImages["data"][0]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getAvatarBustImage](_structures_user_.userbase.md#getavatarbustimage)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersAvatarBustImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarbustimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersAvatarBustImages["data"][0]›*

___

### <a id="getavatarheadshotimage" name="getavatarheadshotimage"></a>  getAvatarHeadShotImage

▸ **getAvatarHeadShotImage**(`options`: Omit‹[GetUsersAvatarHeadShotsImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarheadshotsimagesoptions), "userIds"›): *Promise‹GetUsersAvatarHeadShotsImages["data"][0]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getAvatarHeadShotImage](_structures_user_.userbase.md#getavatarheadshotimage)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersAvatarHeadShotsImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarheadshotsimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersAvatarHeadShotsImages["data"][0]›*

___

### <a id="getbadges" name="getbadges"></a>  getBadges

▸ **getBadges**(`options?`: Omit‹[GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBadges["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getBadges](_structures_user_.userbase.md#getbadges)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBadges["data"][0]››*

___

### <a id="getbadgesawardeddates" name="getbadgesawardeddates"></a>  getBadgesAwardedDates

▸ **getBadgesAwardedDates**(`badges`: number[]): *Promise‹object[]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getBadgesAwardedDates](_structures_user_.userbase.md#getbadgesawardeddates)*

**Parameters:**

Name | Type |
------ | ------ |
`badges` | number[] |

**Returns:** *Promise‹object[]›*

___

### <a id="getbundles" name="getbundles"></a>  getBundles

▸ **getBundles**(`options?`: Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundles["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getBundles](_structures_user_.userbase.md#getbundles)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundles["data"][0]››*

___

### <a id="getbundlesbytype" name="getbundlesbytype"></a>  getBundlesByType

▸ **getBundlesByType**(`bundleType`: string, `options?`: Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundlesByType["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getBundlesByType](_structures_user_.userbase.md#getbundlesbytype)*

**Parameters:**

Name | Type |
------ | ------ |
`bundleType` | string |
`options?` | Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundlesByType["data"][0]››*

___

### <a id="getcantrade" name="getcantrade"></a>  getCanTrade

▸ **getCanTrade**(): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getCanTrade](_structures_user_.userbase.md#getcantrade)*

**Returns:** *Promise‹boolean›*

___

### <a id="getcollectibles" name="getcollectibles"></a>  getCollectibles

▸ **getCollectibles**(`options?`: Omit‹[GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserCollectibles["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getCollectibles](_structures_user_.userbase.md#getcollectibles)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserCollectibles["data"][0]››*

___

### <a id="getcurrentlywearing" name="getcurrentlywearing"></a>  getCurrentlyWearing

▸ **getCurrentlyWearing**(): *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getCurrentlyWearing](_structures_user_.userbase.md#getcurrentlywearing)*

**Returns:** *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

___

### <a id="getfollowers" name="getfollowers"></a>  getFollowers

▸ **getFollowers**(`options?`: Omit‹[GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowers["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFollowers](_structures_user_.userbase.md#getfollowers)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowers["data"][0]››*

___

### <a id="getfollowerscount" name="getfollowerscount"></a>  getFollowersCount

▸ **getFollowersCount**(): *Promise‹number›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFollowersCount](_structures_user_.userbase.md#getfollowerscount)*

**Returns:** *Promise‹number›*

___

### <a id="getfollowing" name="getfollowing"></a>  getFollowing

▸ **getFollowing**(`options?`: Omit‹[GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowing["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFollowing](_structures_user_.userbase.md#getfollowing)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowing["data"][0]››*

___

### <a id="getfollowingcount" name="getfollowingcount"></a>  getFollowingCount

▸ **getFollowingCount**(): *Promise‹number›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFollowingCount](_structures_user_.userbase.md#getfollowingcount)*

**Returns:** *Promise‹number›*

___

### <a id="getfriends" name="getfriends"></a>  getFriends

▸ **getFriends**(): *Promise‹[FriendRequest](_structures_user_.friendrequest.md)[]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFriends](_structures_user_.userbase.md#getfriends)*

**Returns:** *Promise‹[FriendRequest](_structures_user_.friendrequest.md)[]›*

___

### <a id="getfriendscount" name="getfriendscount"></a>  getFriendsCount

▸ **getFriendsCount**(): *Promise‹number›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFriendsCount](_structures_user_.userbase.md#getfriendscount)*

**Returns:** *Promise‹number›*

___

### <a id="getfriendswithstatuses" name="getfriendswithstatuses"></a>  getFriendsWithStatuses

▸ **getFriendsWithStatuses**(`userIds`: number[]): *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFriendsWithStatuses](_structures_user_.userbase.md#getfriendswithstatuses)*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | number[] |

**Returns:** *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

___

### <a id="getfullbodyavatarimage" name="getfullbodyavatarimage"></a>  getFullBodyAvatarImage

▸ **getFullBodyAvatarImage**(`options`: Omit‹[GetUsersFullBodyAvatarImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersfullbodyavatarimagesoptions), "userIds"›): *Promise‹GetUsersFullBodyAvatarImages["data"][0]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getFullBodyAvatarImage](_structures_user_.userbase.md#getfullbodyavatarimage)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersFullBodyAvatarImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersfullbodyavatarimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersFullBodyAvatarImages["data"][0]›*

___

### <a id="getgroups" name="getgroups"></a>  getGroups

▸ **getGroups**(): *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getGroups](_structures_user_.userbase.md#getgroups)*

**Returns:** *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

___

### <a id="getinventory" name="getinventory"></a>  getInventory

▸ **getInventory**(`options`: Omit‹[GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventory["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getInventory](_structures_user_.userbase.md#getinventory)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventory["data"][0]››*

___

### <a id="getinventorybyassettypeid" name="getinventorybyassettypeid"></a>  getInventoryByAssetTypeId

▸ **getInventoryByAssetTypeId**(`options`: Omit‹[GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventoryByAssetTypeId["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getInventoryByAssetTypeId](_structures_user_.userbase.md#getinventorybyassettypeid)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventoryByAssetTypeId["data"][0]››*

___

### <a id="getitemsbytypeandtargetid" name="getitemsbytypeandtargetid"></a>  getItemsByTypeAndTargetId

▸ **getItemsByTypeAndTargetId**(`itemType`: GetUserItemsByTypeAndTargetIdOptions["itemType"], `id`: number): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserItemsByTypeAndTargetId["data"][0]››*

*Inherited from [UserBase](_structures_user_.userbase.md).[getItemsByTypeAndTargetId](_structures_user_.userbase.md#getitemsbytypeandtargetid)*

**Parameters:**

Name | Type |
------ | ------ |
`itemType` | GetUserItemsByTypeAndTargetIdOptions["itemType"] |
`id` | number |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserItemsByTypeAndTargetId["data"][0]››*

___

### <a id="getjoinrequestingroup" name="getjoinrequestingroup"></a>  getJoinRequestInGroup

▸ **getJoinRequestInGroup**(`groupId`: number): *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getJoinRequestInGroup](_structures_user_.userbase.md#getjoinrequestingroup)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

___

### <a id="getoutfits" name="getoutfits"></a>  getOutfits

▸ **getOutfits**(`options`: Omit‹[GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions), "userId"›): *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getOutfits](_structures_user_.userbase.md#getoutfits)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions), "userId"› |

**Returns:** *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

___

### <a id="getpremiummembership" name="getpremiummembership"></a>  getPremiumMembership

▸ **getPremiumMembership**(): *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getPremiumMembership](_structures_user_.userbase.md#getpremiummembership)*

**Returns:** *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*

___

### <a id="getpresence" name="getpresence"></a>  getPresence

▸ **getPresence**(): *Promise‹GetUsersPresences["userPresences"][0]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getPresence](_structures_user_.userbase.md#getpresence)*

**Returns:** *Promise‹GetUsersPresences["userPresences"][0]›*

___

### <a id="getprimarygroup" name="getprimarygroup"></a>  getPrimaryGroup

▸ **getPrimaryGroup**(): *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getPrimaryGroup](_structures_user_.userbase.md#getprimarygroup)*

**Returns:** *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

___

### <a id="getresellableassetcopies" name="getresellableassetcopies"></a>  getResellableAssetCopies

▸ **getResellableAssetCopies**(`assetId`: number): *Promise‹[GetUserResellableAssetCopies](../modules/_client_apis_economyapi_.md#getuserresellableassetcopies)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getResellableAssetCopies](_structures_user_.userbase.md#getresellableassetcopies)*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹[GetUserResellableAssetCopies](../modules/_client_apis_economyapi_.md#getuserresellableassetcopies)›*

___

### <a id="getstatus" name="getstatus"></a>  getStatus

▸ **getStatus**(): *Promise‹string›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getStatus](_structures_user_.userbase.md#getstatus)*

**Returns:** *Promise‹string›*

___

### <a id="gettag" name="gettag"></a>  getTag

▸ **getTag**(): *Promise‹GetUsersTags[0]›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getTag](_structures_user_.userbase.md#gettag)*

**Returns:** *Promise‹GetUsersTags[0]›*

___

### <a id="getuser" name="getuser"></a>  getUser

▸ **getUser**(): *Promise‹[User](_structures_user_.user.md)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[getUser](_structures_user_.userbase.md#getuser)*

**Returns:** *Promise‹[User](_structures_user_.user.md)›*

___

### <a id="isfollowedbyuser" name="isfollowedbyuser"></a>  isFollowedByUser

▸ **isFollowedByUser**(`userId`: number): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[isFollowedByUser](_structures_user_.userbase.md#isfollowedbyuser)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="kick" name="kick"></a>  kick

▸ **kick**(): *Promise‹unknown›*

**Returns:** *Promise‹unknown›*

___

### <a id="kickfromgroup" name="kickfromgroup"></a>  kickFromGroup

▸ **kickFromGroup**(`groupId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[kickFromGroup](_structures_user_.userbase.md#kickfromgroup)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="ownsasset" name="ownsasset"></a>  ownsAsset

▸ **ownsAsset**(`assetId`: number): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[ownsAsset](_structures_user_.userbase.md#ownsasset)*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="payoutuserfromgroup" name="payoutuserfromgroup"></a>  payoutUserFromGroup

▸ **payoutUserFromGroup**(`options`: object): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[payoutUserFromGroup](_structures_user_.userbase.md#payoutuserfromgroup)*

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`amount` | number |
`groupId` | number |
`type` | PayoutMembersOptions["type"] |

**Returns:** *Promise‹unknown›*

___

### <a id="removefromconversation" name="removefromconversation"></a>  removeFromConversation

▸ **removeFromConversation**(`conversationId`: number): *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[removeFromConversation](_structures_user_.userbase.md#removefromconversation)*

**Parameters:**

Name | Type |
------ | ------ |
`conversationId` | number |

**Returns:** *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

___

### <a id="removefromteamcreate" name="removefromteamcreate"></a>  removeFromTeamCreate

▸ **removeFromTeamCreate**(`universeId`: number): *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[removeFromTeamCreate](_structures_user_.userbase.md#removefromteamcreate)*

**Parameters:**

Name | Type |
------ | ------ |
`universeId` | number |

**Returns:** *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

___

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: Omit‹[SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions), "userId"›): *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[sendMessage](_structures_user_.userbase.md#sendmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions), "userId"› |

**Returns:** *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

___

### <a id="sendtrade" name="sendtrade"></a>  sendTrade

▸ **sendTrade**(`offers`: Omit‹SendTradeOptions["offers"][0], "userId"›[]): *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[sendTrade](_structures_user_.userbase.md#sendtrade)*

**Parameters:**

Name | Type |
------ | ------ |
`offers` | Omit‹SendTradeOptions["offers"][0], "userId"›[] |

**Returns:** *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*

___

### <a id="setgroupowner" name="setgroupowner"></a>  setGroupOwner

▸ **setGroupOwner**(`groupId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[setGroupOwner](_structures_user_.userbase.md#setgroupowner)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="setpendingtag" name="setpendingtag"></a>  setPendingTag

▸ **setPendingTag**(`tag`: string): *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[setPendingTag](_structures_user_.userbase.md#setpendingtag)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

___

### <a id="settag" name="settag"></a>  setTag

▸ **setTag**(`tag`: string): *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[setTag](_structures_user_.userbase.md#settag)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

___

### <a id="startconversation" name="startconversation"></a>  startConversation

▸ **startConversation**(): *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[startConversation](_structures_user_.userbase.md#startconversation)*

**Returns:** *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

___

### <a id="unfollow" name="unfollow"></a>  unFollow

▸ **unFollow**(): *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[unFollow](_structures_user_.userbase.md#unfollow)*

**Returns:** *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

___

### <a id="unblock" name="unblock"></a>  unblock

▸ **unblock**(): *Promise‹boolean›*

*Inherited from [UserBase](_structures_user_.userbase.md).[unblock](_structures_user_.userbase.md#unblock)*

**Returns:** *Promise‹boolean›*

___

### <a id="unfriend" name="unfriend"></a>  unfriend

▸ **unfriend**(): *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[unfriend](_structures_user_.userbase.md#unfriend)*

**Returns:** *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

___

### <a id="updatememberingroup" name="updatememberingroup"></a>  updateMemberInGroup

▸ **updateMemberInGroup**(`groupId`: number, `roleId`: number): *Promise‹unknown›*

*Inherited from [UserBase](_structures_user_.userbase.md).[updateMemberInGroup](_structures_user_.userbase.md#updatememberingroup)*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |
`roleId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="updatetranslationgameaccess" name="updatetranslationgameaccess"></a>  updateTranslationGameAccess

▸ **updateTranslationGameAccess**(`options`: Omit‹[UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess), "userId"›): *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[updateTranslationGameAccess](_structures_user_.userbase.md#updatetranslationgameaccess)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess), "userId"› |

**Returns:** *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*

___

### <a id="upsellpremiumcheck" name="upsellpremiumcheck"></a>  upsellPremiumCheck

▸ **upsellPremiumCheck**(`options`: Omit‹[PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions), "userId"›): *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*

*Inherited from [UserBase](_structures_user_.userbase.md).[upsellPremiumCheck](_structures_user_.userbase.md#upsellpremiumcheck)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions), "userId"› |

**Returns:** *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*
