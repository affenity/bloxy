

[](#top)
 - **Classes**
    - [RobloxMessage](#robloxmessage)
    - [UserFunctions](#userfunctions)

***






# **RobloxMessage**
 ## **Properties**
  - id (Number) - The message id
  - sender (Class-PartialUser) - The one who sent the message
  - recipient (Class-PartialUser) - The one who received the message
  - subject (String) - The subject / title of the message
  - body (String) - The body of the message 
  - created (Date) - The date when the message was sent
  - updated (Date) - The date when the message was last updated
  - isRead (Boolean) - Whether or not the authenticated user has read the message
  - isSystemMessage (Boolean) - If it was an automated message
**
 ## **Methods**
 - [archive](#robloxmessage.archive)
 - [markRead](#robloxmessage.markread)
 - [moveToInbox](#robloxmessage.movetoinbox)
 - [reply](#robloxmessage.reply)


## RobloxMessage.archive
#### 
Archives the message

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.archive().then( () => {

})
```

## RobloxMessage.markRead
#### markRead?
Marks the message as either read or unread

**Parameters**
- markRead? (Boolean) - Whether or not the message should be marked as read

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.markRead().then( () => {

})
```

## RobloxMessage.moveToInbox 
####
Moves the message from the archive to the inbox

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.moveToInbox().then( () => {

})
```

## RobloxMessage.reply
#### subject, message
Sends a reply back to the sender

**Parameters**
- subject (String)
- message (String)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.reply("No thx", "I'm not interested").then( () => {

})
```

# **UserFunctions**
## **Properties**

## **Methods**
- [acceptFriendRequest](#userfunctions.acceptfriendrequest)

## UserFunctions.acceptFriendRequest
####
Accepts the friend request

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.acceptFriendRequest().then( () => {

})
```

## UserFunctions.blockUser
Blocks the user

**Parameters**

None
**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.blockUser().then( () => {

})
```

## UserFunctions.canManageAsset
#### assetId
Checks if the user owns the asset

**Parameters**
- assetId (Number)

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.canManageAsset(1).then( canManage => {

})
```

## UserFunctions.declineFriendRequest
Declines the friend request from the user

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.declineFriendRequest().then( () => {

})
```

## UserFunctions.followUser
Follows the user

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.followUser().then( () => {

})
```

## UserFunctions.friendUser
Sends a friend request to the user

**Parameters**

None

**Returns**
- Promise (Boolean)

**Example**
```JavaScript
.friendUser().then( () => {

})
```

## UserFunctions.getFollowers
#### (*page*)
Gets the user's followers

**Parameters**
- (*optional*) page (Number)

**Returns**
- Promise ()