
exports.run = async function (page) {
    page = page || 0;

    let response = await this._setup.request.request(`https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=FriendRequests&imgHeight=100&imgWidth=100&pageSize=100`, { json: true });
    if (response.statusCode !== 200) throw new Error(`Could not get friend requests. ${response.status}`);

    let makeJson = {
        userId: json.UserId,
        totalRequests: json.TotalFriends,
        currentPage: json.CurrentPage,
        pageSize: json.PageSize,
        totalPages: json.TotalPages,
        friendsType: json.FriendsType,
        requests: json.Friends
    };

    makeJson.requests = makeJson.requests.map(x=>new this._setup.classes.PartialUser(x, this));
    return makeJson;
}


exports.conf = {
    required: {
        params: 0,
        auth: true
    },

    name: "getFriendRequests",
    description: "Gets the authenticated user's friend requests",
    params: ["page (Number)"]
}