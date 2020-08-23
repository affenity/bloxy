
# Class: UserBase

## Hierarchy

* **UserBase**

  ↳ [PartialUser](_structures_user_.partialuser.md)

  ↳ [GroupMember](_structures_group_.groupmember.md)

## Index

### Constructors

* [constructor](_structures_user_.userbase.md#constructor)

### Properties

* [client](_structures_user_.userbase.md#client)
* [id](_structures_user_.userbase.md#id)
* [membership](_structures_user_.userbase.md#membership)
* [name](_structures_user_.userbase.md#name)

### Methods

* [acceptFriendRequest](_structures_user_.userbase.md#acceptfriendrequest)
* [acceptJoinRequestInGroup](_structures_user_.userbase.md#acceptjoinrequestingroup)
* [addToChatConversation](_structures_user_.userbase.md#addtochatconversation)
* [awardBadge](_structures_user_.userbase.md#awardbadge)
* [block](_structures_user_.userbase.md#block)
* [canInviteToVIPServer](_structures_user_.userbase.md#caninvitetovipserver)
* [canManageAsset](_structures_user_.userbase.md#canmanageasset)
* [declineFriendRequest](_structures_user_.userbase.md#declinefriendrequest)
* [declineJoinRequestInGroup](_structures_user_.userbase.md#declinejoinrequestingroup)
* [deleteBadge](_structures_user_.userbase.md#deletebadge)
* [deleteGroupWallPosts](_structures_user_.userbase.md#deletegroupwallposts)
* [follow](_structures_user_.userbase.md#follow)
* [friend](_structures_user_.userbase.md#friend)
* [getAvatar](_structures_user_.userbase.md#getavatar)
* [getAvatarBustImage](_structures_user_.userbase.md#getavatarbustimage)
* [getAvatarHeadShotImage](_structures_user_.userbase.md#getavatarheadshotimage)
* [getBadges](_structures_user_.userbase.md#getbadges)
* [getBadgesAwardedDates](_structures_user_.userbase.md#getbadgesawardeddates)
* [getBundles](_structures_user_.userbase.md#getbundles)
* [getBundlesByType](_structures_user_.userbase.md#getbundlesbytype)
* [getCanTrade](_structures_user_.userbase.md#getcantrade)
* [getCollectibles](_structures_user_.userbase.md#getcollectibles)
* [getCurrentlyWearing](_structures_user_.userbase.md#getcurrentlywearing)
* [getFollowers](_structures_user_.userbase.md#getfollowers)
* [getFollowersCount](_structures_user_.userbase.md#getfollowerscount)
* [getFollowing](_structures_user_.userbase.md#getfollowing)
* [getFollowingCount](_structures_user_.userbase.md#getfollowingcount)
* [getFriends](_structures_user_.userbase.md#getfriends)
* [getFriendsCount](_structures_user_.userbase.md#getfriendscount)
* [getFriendsWithStatuses](_structures_user_.userbase.md#getfriendswithstatuses)
* [getFullBodyAvatarImage](_structures_user_.userbase.md#getfullbodyavatarimage)
* [getGroups](_structures_user_.userbase.md#getgroups)
* [getInventory](_structures_user_.userbase.md#getinventory)
* [getInventoryByAssetTypeId](_structures_user_.userbase.md#getinventorybyassettypeid)
* [getItemsByTypeAndTargetId](_structures_user_.userbase.md#getitemsbytypeandtargetid)
* [getJoinRequestInGroup](_structures_user_.userbase.md#getjoinrequestingroup)
* [getOutfits](_structures_user_.userbase.md#getoutfits)
* [getPremiumMembership](_structures_user_.userbase.md#getpremiummembership)
* [getPresence](_structures_user_.userbase.md#getpresence)
* [getPrimaryGroup](_structures_user_.userbase.md#getprimarygroup)
* [getResellableAssetCopies](_structures_user_.userbase.md#getresellableassetcopies)
* [getStatus](_structures_user_.userbase.md#getstatus)
* [getTag](_structures_user_.userbase.md#gettag)
* [getUser](_structures_user_.userbase.md#getuser)
* [isFollowedByUser](_structures_user_.userbase.md#isfollowedbyuser)
* [kickFromGroup](_structures_user_.userbase.md#kickfromgroup)
* [ownsAsset](_structures_user_.userbase.md#ownsasset)
* [payoutUserFromGroup](_structures_user_.userbase.md#payoutuserfromgroup)
* [removeFromConversation](_structures_user_.userbase.md#removefromconversation)
* [removeFromTeamCreate](_structures_user_.userbase.md#removefromteamcreate)
* [sendMessage](_structures_user_.userbase.md#sendmessage)
* [sendTrade](_structures_user_.userbase.md#sendtrade)
* [setGroupOwner](_structures_user_.userbase.md#setgroupowner)
* [setPendingTag](_structures_user_.userbase.md#setpendingtag)
* [setTag](_structures_user_.userbase.md#settag)
* [startConversation](_structures_user_.userbase.md#startconversation)
* [unFollow](_structures_user_.userbase.md#unfollow)
* [unblock](_structures_user_.userbase.md#unblock)
* [unfriend](_structures_user_.userbase.md#unfriend)
* [updateMemberInGroup](_structures_user_.userbase.md#updatememberingroup)
* [updateTranslationGameAccess](_structures_user_.userbase.md#updatetranslationgameaccess)
* [upsellPremiumCheck](_structures_user_.userbase.md#upsellpremiumcheck)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new UserBase**(`data`: [UserBaseOptions](../interfaces/_structures_user_.userbaseoptions.md), `client`: [Client](_client_client_.client.md)): *[UserBase](_structures_user_.userbase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [UserBaseOptions](../interfaces/_structures_user_.userbaseoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[UserBase](_structures_user_.userbase.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="membership" name="membership"></a>  membership

• **membership**: *unknown*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

## Methods

### <a id="acceptfriendrequest" name="acceptfriendrequest"></a>  acceptFriendRequest

▸ **acceptFriendRequest**(): *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

**Returns:** *Promise‹[AcceptFriendRequest](../modules/_client_apis_friendsapi_.md#acceptfriendrequest)›*

___

### <a id="acceptjoinrequestingroup" name="acceptjoinrequestingroup"></a>  acceptJoinRequestInGroup

▸ **acceptJoinRequestInGroup**(`groupId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="addtochatconversation" name="addtochatconversation"></a>  addToChatConversation

▸ **addToChatConversation**(`conversationId`: number): *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

**Parameters:**

Name | Type |
------ | ------ |
`conversationId` | number |

**Returns:** *Promise‹[AddUsersToConversation](../modules/_client_apis_chatapi_.md#adduserstoconversation)›*

___

### <a id="awardbadge" name="awardbadge"></a>  awardBadge

▸ **awardBadge**(`badgeId`: number, `placeId`: number): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`badgeId` | number |
`placeId` | number |

**Returns:** *Promise‹string›*

___

### <a id="block" name="block"></a>  block

▸ **block**(): *Promise‹boolean›*

**Returns:** *Promise‹boolean›*

___

### <a id="caninvitetovipserver" name="caninvitetovipserver"></a>  canInviteToVIPServer

▸ **canInviteToVIPServer**(): *Promise‹boolean›*

**Returns:** *Promise‹boolean›*

___

### <a id="canmanageasset" name="canmanageasset"></a>  canManageAsset

▸ **canManageAsset**(`assetId`: number): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="declinefriendrequest" name="declinefriendrequest"></a>  declineFriendRequest

▸ **declineFriendRequest**(): *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

**Returns:** *Promise‹[DeclineFriendRequest](../modules/_client_apis_friendsapi_.md#declinefriendrequest)›*

___

### <a id="declinejoinrequestingroup" name="declinejoinrequestingroup"></a>  declineJoinRequestInGroup

▸ **declineJoinRequestInGroup**(`groupId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="deletebadge" name="deletebadge"></a>  deleteBadge

▸ **deleteBadge**(`badgeId`: number): *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`badgeId` | number |

**Returns:** *Promise‹[DeleteBadgeFromUser](../modules/_client_apis_badgesapi_.md#deletebadgefromuser)›*

___

### <a id="deletegroupwallposts" name="deletegroupwallposts"></a>  deleteGroupWallPosts

▸ **deleteGroupWallPosts**(`groupId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="follow" name="follow"></a>  follow

▸ **follow**(): *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

**Returns:** *Promise‹[FollowUser](../modules/_client_apis_friendsapi_.md#followuser)›*

___

### <a id="friend" name="friend"></a>  friend

▸ **friend**(`source?`: undefined | string): *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`source?` | undefined &#124; string |

**Returns:** *Promise‹[SendFriendRequest](../modules/_client_apis_friendsapi_.md#sendfriendrequest)›*

___

### <a id="getavatar" name="getavatar"></a>  getAvatar

▸ **getAvatar**(): *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

**Returns:** *Promise‹[GetUserAvatar](../modules/_client_apis_avatarapi_.md#getuseravatar)›*

___

### <a id="getavatarbustimage" name="getavatarbustimage"></a>  getAvatarBustImage

▸ **getAvatarBustImage**(`options`: Omit‹[GetUsersAvatarBustImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarbustimagesoptions), "userIds"›): *Promise‹GetUsersAvatarBustImages["data"][0]›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersAvatarBustImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarbustimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersAvatarBustImages["data"][0]›*

___

### <a id="getavatarheadshotimage" name="getavatarheadshotimage"></a>  getAvatarHeadShotImage

▸ **getAvatarHeadShotImage**(`options`: Omit‹[GetUsersAvatarHeadShotsImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarheadshotsimagesoptions), "userIds"›): *Promise‹GetUsersAvatarHeadShotsImages["data"][0]›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersAvatarHeadShotsImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersavatarheadshotsimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersAvatarHeadShotsImages["data"][0]›*

___

### <a id="getbadges" name="getbadges"></a>  getBadges

▸ **getBadges**(`options?`: Omit‹[GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBadges["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserBadgesOptions](../modules/_client_apis_badgesapi_.md#getuserbadgesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBadges["data"][0]››*

___

### <a id="getbadgesawardeddates" name="getbadgesawardeddates"></a>  getBadgesAwardedDates

▸ **getBadgesAwardedDates**(`badges`: number[]): *Promise‹object[]›*

**Parameters:**

Name | Type |
------ | ------ |
`badges` | number[] |

**Returns:** *Promise‹object[]›*

___

### <a id="getbundles" name="getbundles"></a>  getBundles

▸ **getBundles**(`options?`: Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundles["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundles["data"][0]››*

___

### <a id="getbundlesbytype" name="getbundlesbytype"></a>  getBundlesByType

▸ **getBundlesByType**(`bundleType`: string, `options?`: Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundlesByType["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`bundleType` | string |
`options?` | Omit‹[GetUserBundlesOptions](../modules/_client_apis_catalogapi_.md#getuserbundlesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserBundlesByType["data"][0]››*

___

### <a id="getcantrade" name="getcantrade"></a>  getCanTrade

▸ **getCanTrade**(): *Promise‹boolean›*

**Returns:** *Promise‹boolean›*

___

### <a id="getcollectibles" name="getcollectibles"></a>  getCollectibles

▸ **getCollectibles**(`options?`: Omit‹[GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserCollectibles["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserCollectibles["data"][0]››*

___

### <a id="getcurrentlywearing" name="getcurrentlywearing"></a>  getCurrentlyWearing

▸ **getCurrentlyWearing**(): *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

**Returns:** *Promise‹[GetUserCurrentlyWearing](../modules/_client_apis_avatarapi_.md#getusercurrentlywearing)›*

___

### <a id="getfollowers" name="getfollowers"></a>  getFollowers

▸ **getFollowers**(`options?`: Omit‹[GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowers["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserFollowersOptions](../modules/_client_apis_friendsapi_.md#getuserfollowersoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowers["data"][0]››*

___

### <a id="getfollowerscount" name="getfollowerscount"></a>  getFollowersCount

▸ **getFollowersCount**(): *Promise‹number›*

**Returns:** *Promise‹number›*

___

### <a id="getfollowing" name="getfollowing"></a>  getFollowing

▸ **getFollowing**(`options?`: Omit‹[GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowing["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetUserFollowingOptions](../modules/_client_apis_friendsapi_.md#getuserfollowingoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserFollowing["data"][0]››*

___

### <a id="getfollowingcount" name="getfollowingcount"></a>  getFollowingCount

▸ **getFollowingCount**(): *Promise‹number›*

**Returns:** *Promise‹number›*

___

### <a id="getfriends" name="getfriends"></a>  getFriends

▸ **getFriends**(): *Promise‹[FriendRequest](_structures_user_.friendrequest.md)[]›*

**Returns:** *Promise‹[FriendRequest](_structures_user_.friendrequest.md)[]›*

___

### <a id="getfriendscount" name="getfriendscount"></a>  getFriendsCount

▸ **getFriendsCount**(): *Promise‹number›*

**Returns:** *Promise‹number›*

___

### <a id="getfriendswithstatuses" name="getfriendswithstatuses"></a>  getFriendsWithStatuses

▸ **getFriendsWithStatuses**(`userIds`: number[]): *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | number[] |

**Returns:** *Promise‹[GetUserFriendsWithStatuses](../modules/_client_apis_friendsapi_.md#getuserfriendswithstatuses)›*

___

### <a id="getfullbodyavatarimage" name="getfullbodyavatarimage"></a>  getFullBodyAvatarImage

▸ **getFullBodyAvatarImage**(`options`: Omit‹[GetUsersFullBodyAvatarImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersfullbodyavatarimagesoptions), "userIds"›): *Promise‹GetUsersFullBodyAvatarImages["data"][0]›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUsersFullBodyAvatarImagesOptions](../modules/_client_apis_thumbnailsapi_.md#getusersfullbodyavatarimagesoptions), "userIds"› |

**Returns:** *Promise‹GetUsersFullBodyAvatarImages["data"][0]›*

___

### <a id="getgroups" name="getgroups"></a>  getGroups

▸ **getGroups**(): *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

**Returns:** *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

___

### <a id="getinventory" name="getinventory"></a>  getInventory

▸ **getInventory**(`options`: Omit‹[GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventory["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventory["data"][0]››*

___

### <a id="getinventorybyassettypeid" name="getinventorybyassettypeid"></a>  getInventoryByAssetTypeId

▸ **getInventoryByAssetTypeId**(`options`: Omit‹[GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions), "userId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventoryByAssetTypeId["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions), "userId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserInventoryByAssetTypeId["data"][0]››*

___

### <a id="getitemsbytypeandtargetid" name="getitemsbytypeandtargetid"></a>  getItemsByTypeAndTargetId

▸ **getItemsByTypeAndTargetId**(`itemType`: GetUserItemsByTypeAndTargetIdOptions["itemType"], `id`: number): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserItemsByTypeAndTargetId["data"][0]››*

**Parameters:**

Name | Type |
------ | ------ |
`itemType` | GetUserItemsByTypeAndTargetIdOptions["itemType"] |
`id` | number |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹GetUserItemsByTypeAndTargetId["data"][0]››*

___

### <a id="getjoinrequestingroup" name="getjoinrequestingroup"></a>  getJoinRequestInGroup

▸ **getJoinRequestInGroup**(`groupId`: number): *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

___

### <a id="getoutfits" name="getoutfits"></a>  getOutfits

▸ **getOutfits**(`options`: Omit‹[GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions), "userId"›): *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetUserOutfitsOptions](../modules/_client_apis_avatarapi_.md#getuseroutfitsoptions), "userId"› |

**Returns:** *Promise‹[GetUserOutfits](../modules/_client_apis_avatarapi_.md#getuseroutfits)›*

___

### <a id="getpremiummembership" name="getpremiummembership"></a>  getPremiumMembership

▸ **getPremiumMembership**(): *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*

**Returns:** *Promise‹[ValidateUserMembership](../modules/_client_apis_premiumfeaturesapi_.md#validateusermembership)›*

___

### <a id="getpresence" name="getpresence"></a>  getPresence

▸ **getPresence**(): *Promise‹GetUsersPresences["userPresences"][0]›*

**Returns:** *Promise‹GetUsersPresences["userPresences"][0]›*

___

### <a id="getprimarygroup" name="getprimarygroup"></a>  getPrimaryGroup

▸ **getPrimaryGroup**(): *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

**Returns:** *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

___

### <a id="getresellableassetcopies" name="getresellableassetcopies"></a>  getResellableAssetCopies

▸ **getResellableAssetCopies**(`assetId`: number): *Promise‹[GetUserResellableAssetCopies](../modules/_client_apis_economyapi_.md#getuserresellableassetcopies)›*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹[GetUserResellableAssetCopies](../modules/_client_apis_economyapi_.md#getuserresellableassetcopies)›*

___

### <a id="getstatus" name="getstatus"></a>  getStatus

▸ **getStatus**(): *Promise‹string›*

**Returns:** *Promise‹string›*

___

### <a id="gettag" name="gettag"></a>  getTag

▸ **getTag**(): *Promise‹GetUsersTags[0]›*

**Returns:** *Promise‹GetUsersTags[0]›*

___

### <a id="getuser" name="getuser"></a>  getUser

▸ **getUser**(): *Promise‹[User](_structures_user_.user.md)›*

**Returns:** *Promise‹[User](_structures_user_.user.md)›*

___

### <a id="isfollowedbyuser" name="isfollowedbyuser"></a>  isFollowedByUser

▸ **isFollowedByUser**(`userId`: number): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="kickfromgroup" name="kickfromgroup"></a>  kickFromGroup

▸ **kickFromGroup**(`groupId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="ownsasset" name="ownsasset"></a>  ownsAsset

▸ **ownsAsset**(`assetId`: number): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`assetId` | number |

**Returns:** *Promise‹boolean›*

___

### <a id="payoutuserfromgroup" name="payoutuserfromgroup"></a>  payoutUserFromGroup

▸ **payoutUserFromGroup**(`options`: object): *Promise‹unknown›*

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

**Parameters:**

Name | Type |
------ | ------ |
`conversationId` | number |

**Returns:** *Promise‹[RemoveUserFromConversation](../modules/_client_apis_chatapi_.md#removeuserfromconversation)›*

___

### <a id="removefromteamcreate" name="removefromteamcreate"></a>  removeFromTeamCreate

▸ **removeFromTeamCreate**(`universeId`: number): *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

**Parameters:**

Name | Type |
------ | ------ |
`universeId` | number |

**Returns:** *Promise‹[RemoveUserFromUniverseTeamCreate](../modules/_client_apis_developapi_.md#removeuserfromuniverseteamcreate)›*

___

### <a id="sendmessage" name="sendmessage"></a>  sendMessage

▸ **sendMessage**(`options`: Omit‹[SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions), "userId"›): *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[SendMessageOptions](../modules/_client_apis_chatapi_.md#sendmessageoptions), "userId"› |

**Returns:** *Promise‹[SendMessage](../modules/_client_apis_chatapi_.md#sendmessage)›*

___

### <a id="sendtrade" name="sendtrade"></a>  sendTrade

▸ **sendTrade**(`offers`: Omit‹SendTradeOptions["offers"][0], "userId"›[]): *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`offers` | Omit‹SendTradeOptions["offers"][0], "userId"›[] |

**Returns:** *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*

___

### <a id="setgroupowner" name="setgroupowner"></a>  setGroupOwner

▸ **setGroupOwner**(`groupId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="setpendingtag" name="setpendingtag"></a>  setPendingTag

▸ **setPendingTag**(`tag`: string): *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

___

### <a id="settag" name="settag"></a>  setTag

▸ **setTag**(`tag`: string): *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

___

### <a id="startconversation" name="startconversation"></a>  startConversation

▸ **startConversation**(): *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

**Returns:** *Promise‹[StartOneToOneConversation](../modules/_client_apis_chatapi_.md#startonetooneconversation)›*

___

### <a id="unfollow" name="unfollow"></a>  unFollow

▸ **unFollow**(): *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

**Returns:** *Promise‹[UnFollowUser](../modules/_client_apis_friendsapi_.md#unfollowuser)›*

___

### <a id="unblock" name="unblock"></a>  unblock

▸ **unblock**(): *Promise‹boolean›*

**Returns:** *Promise‹boolean›*

___

### <a id="unfriend" name="unfriend"></a>  unfriend

▸ **unfriend**(): *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

**Returns:** *Promise‹[UnfriendUser](../modules/_client_apis_friendsapi_.md#unfrienduser)›*

___

### <a id="updatememberingroup" name="updatememberingroup"></a>  updateMemberInGroup

▸ **updateMemberInGroup**(`groupId`: number, `roleId`: number): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`groupId` | number |
`roleId` | number |

**Returns:** *Promise‹unknown›*

___

### <a id="updatetranslationgameaccess" name="updatetranslationgameaccess"></a>  updateTranslationGameAccess

▸ **updateTranslationGameAccess**(`options`: Omit‹[UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess), "userId"›): *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess), "userId"› |

**Returns:** *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*

___

### <a id="upsellpremiumcheck" name="upsellpremiumcheck"></a>  upsellPremiumCheck

▸ **upsellPremiumCheck**(`options`: Omit‹[PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions), "userId"›): *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PremiumUpsellCheckOptions](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheckoptions), "userId"› |

**Returns:** *Promise‹[PremiumUpsellCheck](../modules/_client_apis_premiumfeaturesapi_.md#premiumupsellcheck)›*
