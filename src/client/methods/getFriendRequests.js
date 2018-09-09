const classes = require('../../classes');

module.exports = async function (page, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!self) return reject(`Did not provide self`);


        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=FriendRequests&imgHeight=100&imgWidth=100&pageSize=100`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{

            if (res.statusCode !== 200) return reject(`Failed to get friend requests, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let json = res.body;
            if (json.isValid != null && json.isValid != true) return reject(`Make sure the request was valid. Code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                userId: json.UserId,
                totalRequests: json.TotalFriends,
                currentPage: json.CurrentPage,
                pageSize: json.PageSize,
                totalPages: json.TotalPages,
                friendsType: json.FriendsType,
                requests: json.Friends
            }

            makeJson.requests = makeJson.requests.map(x => new classes.User.FriendRequest(x, self));
            resolve(makeJson);

        }).catch(reject);
    })
    return newPromise;
}