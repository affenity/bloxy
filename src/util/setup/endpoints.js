// Here are the endpoints that are configurable from one file



// Endpoints for authentication api (https://auth.roblox.com/docs);
exports.auth = {};

exports.auth.login      = "https://auth.roblox.com/v2/login"
exports.auth.logout     = "https://auth.roblox.com/v2/logout"
exports.auth.signup     = "https://auth.roblox.com/v2/signup"
exports.auth.resend2Step= "https://auth.roblox.com/v2/twostepverification/resend"
exports.auth.verify2Step= "https://auth.roblox.com/v2/twostepverification/verify"


// Endpoints for general bloxy functions
exports.bloxy = {};

exports.bloxy.acceptFriendRequest = "https://www.roblox.com/api/friends/acceptfriendrequest"
exports.bloxy.archiveMessages = "https://www.roblox.com/messages/api/archive-messages"
exports.bloxy.blockUser = "https://www.roblox.com/userblock/blockuser"
exports.bloxy.changeBlurb = "https://www.roblox.com/account/settings/description"
exports.bloxy.changeStatus = "https://www.roblox.com/home/updatestatus"
exports.bloxy.declineFriendRequest = "https://www.roblox.com/api/friends/declinefriendrequest";
exports.bloxy.followUser = "https://www.roblox.com/user/follow"
exports.bloxy.getCurrency = "https://api.roblox.com/currency/balance";
exports.bloxy.getFriendsOnline = "https://api.roblox.com/my/friendsonline";
exports.bloxy.getGroupsIManage = "https://develop.roblox.com/v1/user/groups/canmanage";
exports.bloxy.markMessagesRead = "https://www.roblox.com/messages/api/mark-messages-read"
exports.bloxy.markMessagesUnread = "https://www.roblox.com/messages/api/mark-messages-unread"
exports.bloxy.messagesToInbox = "https://www.roblox.com/messages/api/unarchive-messages"
exports.bloxy.messageUser = "https://www.roblox.com/messages/send";
exports.bloxy.unfolloUser = "https://www.roblox.com/api/user/unfollow";