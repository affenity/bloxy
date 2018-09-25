## Bloxy_noAuth class

This page documents all methods of the Bloxy_noAuth class

***

[](#top)
 - **Methods**
    - [acceptFriendRequest](#acceptfriendrequest)
    - [addDeveloperProduct](#adddeveloperproduct)
    - [archiveMessages](#archivemessages)
    - [blockUser](#blockuser)
    - [buyAsset](#buyasset)
    - [canManageAsset](#canmanageasset)
    - [changeBlurb](#changeblurb)
    - [changeStatus](#changestatus)
    - [configureItem](#configureitem)
    - [declineFriendRequest](#declinefriendrequest)
    - [followUser](#followuser)
    - [friendUser](#frienduser)
    - [getArchivedMessages](#getarchivedmessages)
    - [getVerificationStatus](#getverificationstatus)
    - [getCurrency](#getcurrency)
    - [getFollowers](#getfollowers)
    - [getFollowing](#getfollowing)
    - [getFriendRequests](#getfriendrequests)
    - [getFriends](#getfriends)
    - [getFriendsOnline](#getfriendsonline)
    - [getGroup](#getgroup)
    - [getGroupsIManage](#getgroupsimanage)
    - [getIdByUsername](#getidbyusername)
    - [getMessageById](#getmessagebyid)
    - [getMessages](#getmessages)
    - [getNumFriends](#getnumfriends)
    - [getProductInfo](#getproductinfo)
    - [getUser](#getuser)
    - [getUserGroups](#getusergroups)
    - [getUsernameById](#getusernamebyid)
    - [getUserPrimaryGroup](#getuserprimarygroup)
    - [getUserRobloxBadges](#getuserrobloxbadges)
    - [isFriends](#isfriends)
    - [isNameTaken](#isnametaken)
    - [login](#login)
    - [markMessagesRead](#markmessagesread)
    - [markMessagesUnread](#markmessagesunread)
    - [messageUser](#messageuser)
    - [moveMessagesToInbox](#movemessagestoinbox)
    - [ownsAsset](#ownsasset)
    - [redeemPromoCode](#redeempromocode)
    - [searchUsers](#searchusers)
    - [unblockUser](#unblockuser)
    - [unfollowUser](#unfollowuser)
    - [unfriendUser](#unfriendUser)
    - [uploadAsset](#uploadasset)
    - [setCacheDuration](#setcacheduration)

***


### acceptFriendRequest
##### userId
Accepts a friend request from the user (Must be signed in)

**Parameters**
- userId (Number)

**Returns**
- promise (Boolean)

**Example**
```JavaScript
.acceptFriendRequest(1).then( () => {

})
```

***

### addDeveloperProduct
##### options
Adds a developer product to a game (Must be signed in)

**Parameters**
- options (Object)
- options.name (String)
- options.description (String)
- options.universeId (Number)
- options.price (Number)

**Returns**
- Promise (ProductId)

**Example**
```JavaScript
.addDeveloperProduct({
    name: 'test',
    description: 'test',
    universeId: 1,
    price: 69
}).then(productId=>{

})
```

***

### archiveMessages
##### array[messageId]
Archives messages identified by their id (Must be signed in)

**Parameters**
- array[messageId]

**Returns**
- Promise (boolean)

**Example**
```JavaScript
.archiveMessages([1,2,3]).then( () => {

})
```

***

### blockUser
##### userId
Blocks a user from the authenticated user (Must be signed in)

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.blockUser(1).then( () => {

})
```

***

### buyAsset
##### productId, expectedPrice, sellerId
Buys an asset (Must be signed in)

**Parameters**
- productId (Number)
- expectedPrice (Number)
- sellerId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.buyAsset(1,2,3).then( () => {

})
```

***

### canManageAsset
##### userId, assetId
Checks if the user (identified by userId) can manage the asset (identified by its id) 

**Parameters**
- userId (Number)
- assetId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.canManageAsset(1, 2).then(canManage=>{
    console.log("Can manage: " + canManage)
})
```

***

### changeBlurb
##### message
Updates the authenticated user's blurb. (Account PIN must be disabled for it to work) (Must be signed in)

**Parameters**
- message (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.changeBlurb("Hello, world!").then( () => {

})
```

***

### changeStatus
##### message
Updates the authenticated user's status. (Must be signed in)

**Parameters**
- message (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.changeStatus("Hello, world!").then( () => {
    
})
```

***

### configureItem
##### options
Configures an existing asset. (Must be signed in)

**Parameters**
- options (Object)
- options.assetId (Number)
- options.title (String)
- options.description (String)
- options.enableComments (Boolean)
- options.sellForRobux (Number)
- options.genreSelection (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.configureItem({
    assetId: 1,
    title: "test",
    sellForRobux: 69
}).then( () => {

})
```

***

### declineFriendRequest
##### userId
Declines a friend request from the user (Must be signed in)

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.declineFriendRequest(1).then( () => {

})
```

***

### followUser
##### userId
Follows a user with the authenticated user. (Must be signed in)

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.followUser(1).then( () => {

})
```

***

### friendUser
##### userId
Sends a friend request to the user. Note that you are prone to get captcha'd if you use this a lot or if you're using a recently made account (<2 years) (Must be signed in)

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.friendUser(1).then( () => {

})
```

***

### getArchivedMessages 
##### options
Gets messages that are archived belonging to the authenticated user (Must be signed in)

**Parameters**
- options (Object)
- options.page (Number)
- options.limit (Number)

**Returns**
- Promise (Array[Class-RobloxMessage])

**Example**
```JavaScript
.getArchivedMessages({
    page: 1,
    limit: 20
}).then(messages=>{

})
```

***

### getVerificationStatus
##### identifier, platform
Gets the user's verification status using Eryn's API ([link here](https://verify.eryn.io/api))

**Parameters**
- identifier (Number) - The UserId for either roblox or discord
- (*optional*) platform (String) - Either "roblox" or "discord", default: "roblox"

**Returns**
- Promise (Class-RoVerResponseDiscord | Class-RoVerResponseRoblox)

**Example**
```JavaScript
// Getting verification status using Roblox userid
.getVerificationStatus(18442032).then(status=>{
    console.log(status);
})

// Getting verification status using Discord userId
.getVerificationStatus('211122613429338112', 'discord').then(status=>{
    console.log(status);
})

```

***

### getCurrency
##### 
Gets the authenticated user's amount of Robux (you don't get free robux :face_palm:) (Must be signed in)

**Parameters**

none

**Returns**
- Promise (Number)

**Example**
```JavaScript
.getCurrency().then(robux=>{
    console.log(robux);
})
```

***

### getFollowers
##### options
Gets the user's followers, optional with page to retrieve

**Parameters**
- options (Object)
- options.userId (Number)
- options.page (Number)

**Returns**
- Promise (Object)
- Object {
    * userId: Number,
    * totalFollowers: Number,
    * currentPage: Number,
    * totalPages: Number,
    * friendsType: String,
    * followers: Array[Class-PartialUser]
}

**Example**
```JavaScript
.getFollowers({userId: 1}).then(response=>{
    console.log("Total followers: " + response.totalFollowers);
    response.followers.forEach(follower=>{
        console.log(follower);
    })
})
```


***


### getFollowing
##### options
Gets the users the user (identified by their userId) is following

**Parameters**
- options (Object)
- options.userId (Number)
- options.page (Number)

**Returns**
- Promise<Object>
- Object {
    * userId: Number
    * totalFollowers: Number
    * currentPage: Number
    * pageSize: Number
    * totalPages: Number
    * friendsType: String
    * following: Array<Follower>
}

**Example**

```JavaScript
.getFollowing(18442032, 2).then(response=>{
    console.log("Total followers: " + response.totalFollowers);
    response.following.forEach(following=>{
        console.log(following);
    })
})
```


***


### getFriendRequests
##### (page)
Gets the authenticated user's friend requests (Must be signed in)

**Parameters**
- (*optional*) page (Number)

**Returns**
- Promise (Array[Class-JoinRequest])

**Example**
```JavaScript
.getFriendRequests(2).then(friendRequests => {
    
})
```

***


### getFriends
##### options
Gets the user's friends (identified by userId)

**Parameters**
- options (Number)
- options.userId (Number)
- (*optional*) options.page (Number)

**Returns**
- Promise (Array[Class-PartialUser])

**Example**
```JavaScript
.getFriends({
    userId: 1,
    page: 2
}).then(friends=>{
    // get first in the array
    let getFriend = friends.shift();
    console.log(getFriend.username);
})
```


***

### getFriendsOnline 
##### 
Gets the authenticated user's online friends. (Must be signed in)

**Parameters**

None

**Returns**
- Promise (Array[PartialUser])

**Example**
```JavaScript
.getFriendsOnline().then(friends=>{
    console.log(friends);
})
```

***


### getGroup
##### groupId
Gets a group specified by its id

**Parameters**
- groupId (Number)

**Returns**
- Promise (Class-Group)

**Examples**
```JavaScript
.getGroup(1).then(group=>{

})
```

***


### getGroupsIManage
#####
Gets all the groups that the authenticated user can manage.

**Parameters**

None

**Returns**
- Promise (Array[Class-PartialGroup])

**Example**
```JavaScript
.getGroupsIManage().then(groups=>{

})
```

*** 

### getIdByUsername
##### username
Gets a user's userId from their username

**Parameters**
- username (String)

**Returns**
- Promise (Number)

**Example**
```JavaScript
.getIdByUsername('CodeTheIdiot').then(userId=>{
    
})
```

***


### getMessageById
##### messageId
Gets a message by the id

**Parameters**
- messageId (number)

**Returns**
- Promise (Class-RobloxMessage)

**Example**
```JavaScript
.getMessageById(23213).then(message=>{

})
```

***

### getMessages
##### options
Gets messages in the authenticated user's inbox

**Paramaters**
- options (Object)
- (*optional*) options.page (Number)
- (*optional*) options.limit (Number)

**Returns**
- Promise (Array[Class-RobloxMessage])

**Example**
```JavaScript
.getMessages({
    page: 2,
    limit: 20
}).then(messages=>{

})
```

*** 


### getNumFriends
###### userId
Gets the user's total amount of friends (identified by their userId)

**Parameters**
- userId (Number)

**Returns**
- Promise (Number)

**Example**
```JavaScript
.getNumFriends(18442032).then(totalFriends=>{
    console.log("Total amount of friends: " + totalFriends);
})
```


***

### getProductInfo
##### assetId
Gets information about a product/asset

**Parameters**
- assetId (Number)

**Returns**
- Promise (Class-ProductInfo)

**Example**
```JavaScript
.getProductInfo(1).then(info=>{

})
```


***

### getUser
##### identifier (userId | username), specified
Gets a user either by userId or name

**Parameters**
- userId (Number) OR username (String)
- (specified) (String: 'username' | 'userId')

**Returns**
- Promise (Class-RobloxUser)

**Example**
```JavaScript
// Get user by id without specifying
// Must provide number
.getUser(18442032)
// Get user by name
.getUser('CodeTheIdiot')
// Get user by name, when the name is numbers etc.
.getUser(132, 'username')
```


***

### getUserGroups
##### userId
Gets the user's groups (identified by their userId)

**Parameters**
- userId (Number)

**Returns**
- Promise (Array[Classes-UserGroup])

**Example**
```JavaScript
.getUserGroups(18442032).then(groups=>{
    let firstGroup = groups.shift();
    console.log("Group name: " + firstGroup.partialGroup.name)
})
```


*** 

### getUsernameById
##### userId
Gets the user's username from their userId

**Parameters**
- userId (Number)

**Returns**
- Promise (String)

**Example**
```JavaScript
.getUsernameById(18442032).then(username=>{
    
})
```

***



### getUserPrimaryGroup
##### userId
Gets the user's primary group (if any)

**Parameters**
- userId (Number)

**Returns** 
- Promise (Class-UserGroup || null)

**Example**
```JavaScript
.getUserPrimaryGroup(18442032).then(primaryGroup=>{
    if (primaryGroup) {
        console.log("Group id: " + primaryGroup.partialGroup.groupId);
    }
})
```


***


### getUserRobloxBadges
##### userId
Gets the user's roblox badges

**Parameters**
- userId (Number)

**Returns**
- Promise (Array[Class-RobloxBadge])

**Example**
```JavaScript
.getUserRobloxBadges(18442032).then(badges=>{
    console.log(badges)
})
```

***


***

### isFriends
##### userId1, userId2
Checks if two users are friends or not identified by their userIds

**Parameters**
- userId1 (Number)
- userId2 (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.isFriends(1, 18442032).then(isFriends=>{
    //isFriends = false because Roblox is not friends with me D:
    console.log(isFriends);
})
```


***


### isNameTaken
##### nme
Checks if the username is taken or not

**Parameters**
- username (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.isNameTaken('roblox').then(isTaken=>{
    console.log("Is taken: " + isTaken);
})
```

***


### login
##### (settings)
Logs in using provided credentials (either when initializing the bloxy client, or the settings when calling this method)

**Parameters**
- settings (Object)
- settings.type What to sign in with (username, email, phone)
- settings.value The value of what you chose to sign in with (username, email, phone)
- settings.password The password of the account
- settings.cookie If you'd like to login using the .ROBLOSECURITY cookie, then all you have to provide is that. For more information check the Getting started guide

**Returns**

null

**Example**
```JavaScript
.login();

.login({
    username: 'Username',
    password: 'Password'
});

.login({
    cookie: '.ROBLOSECURITY Contents'
});

.login({
    CaptchaKey: 'Get the api key at https://2captcha.com?from=6229671
});
```


***


### markMessagesRead
##### array
Marks the messages provided as read

**Parameters**
- array (Array)
- array.messageId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.markMessagesRead([1,2,3]).then( () => {

})
```

***


### markMessagesUnread
##### array
Marks the messages provided as unread

**Parameters**
- array (Array)
- array.messageId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.markMessagesUnread([1,2,3]).then( () => {

})
```

***


### messageUser
##### options
Messages a user on through the authenticated user

**Parameters**
- options (Object)
- options.subject (String)
- options.body (string)
- options.recipientId (string)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.messageUser({
    subject: 'Hello world!',
    body: 'Bye world!',
    recipientId: 1
}).then( () => {

})
```

***

### moveMessagesToInbox
##### array
Moves provided messages to the inbox (from the archive)

**Parameters**
- array (Array[MessageId | Class-RobloxMessage])

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.moveMessagesToInbox([1,2,3]).then( () => {

})
```

***


### ownsAsset
##### userId, assetId
Checks if the user owns the asset identified by their ids

**Parameters**
- userId (Number)
- assetId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.ownsAsset(18442032, 6969699).then(ownsAsset=>{
    console.log("Owns asset: " + ownsAsset);
})
```


***


### redeemPromoCode
##### code
Redeems a promo code

**Parameters**
- code (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.redeemPromoCode("!HAPPY12BIRTHDAYROBLOX!").then( () => {

})
```

***

### searchGroups
##### query
Search on Roblox for groups

**Parameters**
- query (String)

**Returns**
- Promise (Object)
- Object {
    keyword: String
    startRow: Number
    maxRows: Number
    totalResults: Number
    searchKeywordMinLength: Number
    results: Array[Class-GroupSearchResult]
}

**Example**
```JavaScript
.searchGroups('exabyte').then(response=>{
    
})
```

***

### searchUsers
##### query
Search on Roblox for users

**Parameters**
- query (String)

**Returns**
- Promise (Array[Class-PartialUser])

**Example**
```JavaScript
.searchUsers('builderman').then(users=>{

})
```

***

### searchUsers
##### query, startIndex
Searches for users, starting from the `startIndex` provided or 0

**Parameters**
- query (String)
- (startIndex) (Number)

**Returns**
- Promise (ResultsUserSearch)
- Object {
    * maxRows: Number
    * query: String
    * results: Array[Class-UserSearchResult]
    * startIndex: Number
    * totalResults: Number
}

**Examples**
```JavaScript
.searchUsers('builderman').then(response=>{
    console.log("Total results: " + response.totalResults);
})
```

***

### unblockUser
##### userId
Unblocks a user from the authenticated user

**Parameters**
- userId (NumberId)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.unblockUser(18442302).then( () => {

})
```

***

### unfollowUser
##### userId
Unfollows a user from the authenticated user

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.unfollowUser(18442032).then( () => {

})
```

***

### unfriendUser
##### userId
Unfriends a user from the authenticated user

**Parameters**
- userId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.unfriendUser(18442032).then( () => {

})
```

***

### uploadAsset
##### options
Uploads an asset to Roblox either as the authenticated user or as a group (specified by id)

**Parameters**
- options (Object)
- options.name (String)
- options.assetTypeId (Number)
- (*optional*) options.groupId (Number)
- options.file (String) -- The path to the file you want to upload
- (*optional*) options.fileName (String)
- (*optional*) options.contentType (String) -- Don't set this to anything unless you know what you're doing

**Returns**
- Promise (ProductId | AssetId)

**Example**
```JavaScript
.uploadAsset({
    name: 'test',
    assetTypeId: 11, // shirt
    file: './path/to/file.png'
}).then(assetId=>{
    
})
```

***

### setCacheDuration
##### options
Sets the duration for caching

**Parameters**
- options (Object)
- options.user (Number) - (in hours) duration of how long the caching should be for when using .getUser, default: .5
- options.group (Number) - (in hours) how long the cache should last when using .getGroup, default: 2
- options.getIdByUsername (Number) - (in hours) how long the cache should last, default: permanent

**Returns**
- Promise ()

**Example**
```JavaScript
.setCacheDuration({
    user: .1,
    group: 0,
    getIdByUsername: null
}).then( () => {

})
```