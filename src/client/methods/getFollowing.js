

exports.run = async function (userId, page) {
    page = page || 0;

    let response = await this._setup.request.request(`https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Following&imgHeight=100&imgWidth=100&pageSize=50&userId=${userId}`, { json: true });
    if (response.statusCode !== 200) throw new Error(`Failed to get following users. ${response.status}`);

    let makeJson = {
        userId: response.body.UserId,
        totalFollowings: response.body.TotalFriends,
        currentPage: response.body.CurrentPage,
        pageSize: response.body.PageSize,
        totalPages: response.body.TotalPages,
        friendsType: response.body.FriendsType,
        following: response.body.Friends 
    };

    makeJson.following = makeJson.following.map(x=>new this._setup.classes.PartialUser(x, this));

    return makeJson;
}

exports.conf = {
    required: {
        params: 1
    },

    name: "getFollowing",
    description: "Gets the users the user is following",
    params: ["userId (Number)", "page (Number)"]
}