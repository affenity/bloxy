// All naming conventions Roblox uses for identifier types (userId, groupId, etc.)

export const identifierNames = {
    userId: [
        "ProfileUserId", "UserId", "userId", "userid", "PlayerId", "playerId", "playerid",
        "targetUserId", "ID", "id", "Id", "targetID"],
    groupId: [
        "GroupId", "groupId", "Groupid", "Id", "ID", "id"
    ],
    name: [
        "Name", "name"
    ],
    username: [
        "ProfileUserName", "Username", "username", "userName", "UserName", "Name", "name"
    ],
    friendsCount: [
        "numFriends", "NumFriends", "numfriends", "FriendsCount"
    ]
};

export const StatusCodeReasons = {
    400: [
        "Bad Request (invalid values provided)",
        "Invalid body type (content-type) sent",
        "Bloxy sent an invalid request (from faulty code, feel free to check it out and submit an issue / PR)"
    ],
    401: [
        "You're not logged in (use .login on the client to log in)",
        "The cookie was not provided in the request, or invalid cookie provided"
    ],
    403: [
        "A captcha is required",
        "You don't have the proper permissions",
        "You're not authorized"
    ],
    404: [
        "Invalid request method (i.e. POST instead of GET)",
        "Resource removed / updated to another route",
        "You're not logged in (use .login on the client to log in)"
    ],
    429: [
        "You're sending too many requests. Roblox has rate limits in place to prevent abuse",
        "Your IP has sent too many requests"
    ],
    500: [
        "Roblox is down",
        "There is an error in Roblox's API handler (causing a server error)",
        "Invalid body provided which results in the API failing"
    ]
};


export enum CreatorType {
    USER = 1,
    GROUP = 2
}


export enum MorphAvatarType {
    R6 = "MorphToR6",
    R15 = "MorphToR15"
}


export enum GameGenre {
    FPS = "FPS"
}
