
# Module: "util/constants"

## Index

### Enumerations

* [CreatorType](../enums/_util_constants_.creatortype.md)
* [GameGenre](../enums/_util_constants_.gamegenre.md)
* [MorphAvatarType](../enums/_util_constants_.morphavatartype.md)

### Object literals

* [StatusCodeReasons](_util_constants_.md#const-statuscodereasons)
* [identifierNames](_util_constants_.md#const-identifiernames)

## Object literals

### <a id="const-statuscodereasons" name="const-statuscodereasons"></a> `Const` StatusCodeReasons

### ▪ **StatusCodeReasons**: *object*

### <a id="400" name="400"></a>  400

• **400**: *string[]* = [
        "Bad Request (invalid values provided)",
        "Invalid body type (content-type) sent",
        "Bloxy sent an invalid request (from faulty code, feel free to check it out and submit an issue / PR)"
    ]

### <a id="401" name="401"></a>  401

• **401**: *string[]* = [
        "You're not logged in (use .login on the client to log in)",
        "The cookie was not provided in the request, or invalid cookie provided"
    ]

### <a id="403" name="403"></a>  403

• **403**: *string[]* = [
        "A captcha is required",
        "You don't have the proper permissions",
        "You're not authorized"
    ]

### <a id="404" name="404"></a>  404

• **404**: *string[]* = [
        "Invalid request method (i.e. POST instead of GET)",
        "Resource removed / updated to another route",
        "You're not logged in (use .login on the client to log in)"
    ]

### <a id="429" name="429"></a>  429

• **429**: *string[]* = [
        "You're sending too many requests. Roblox has rate limits in place to prevent abuse",
        "Your IP has sent too many requests"
    ]

### <a id="500" name="500"></a>  500

• **500**: *string[]* = [
        "Roblox is down",
        "There is an error in Roblox's API handler (causing a server error)",
        "Invalid body provided which results in the API failing"
    ]

___

### <a id="const-identifiernames" name="const-identifiernames"></a> `Const` identifierNames

### ▪ **identifierNames**: *object*

### <a id="friendscount" name="friendscount"></a>  friendsCount

• **friendsCount**: *string[]* = [
        "numFriends", "NumFriends", "numfriends", "FriendsCount"
    ]

### <a id="groupid" name="groupid"></a>  groupId

• **groupId**: *string[]* = [
        "GroupId", "groupId", "Groupid", "Id", "ID", "id"
    ]

### <a id="name" name="name"></a>  name

• **name**: *string[]* = [
        "Name", "name"
    ]

### <a id="userid" name="userid"></a>  userId

• **userId**: *string[]* = [
        "ProfileUserId", "UserId", "userId", "userid", "PlayerId", "playerId", "playerid",
        "targetUserId", "ID", "id", "Id", "targetID"]

### <a id="username" name="username"></a>  username

• **username**: *string[]* = [
        "ProfileUserName", "Username", "username", "userName", "UserName", "Name", "name"
    ]
