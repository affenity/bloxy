

exports.run = async function (userId, page) {
    page = page || 0;

    let response = await this._setup.request.request(`https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Followers&imgHeight=100&imgWidth=100&pageSize=50&userId=${userId}`, { json: true });
    if (response.statusCode !== 200) throw new Error(`Failed to get followers. ${response.status}`);

    let makeJson = {
        userId: response.body.UserId,
        totalFollowers: response.body.TotalFriends,
        currentPage: response.body.CurrentPage,
        totalPages: response.body.TotalPages,
        friendsType: response.body.FriendsType,
        followers: response.body.Friends
    };

    makeJson.followers = makeJson.followers.map(x=>new this._setup.classes.PartialUser(x, this));
    return makeJson;
}


exports.conf = {
    required: {
        params: 1
    },

    name: "getFollowers",
    description: "Gets a user's followers",
    params: ["userId (Number)", "page (Number)"]
}