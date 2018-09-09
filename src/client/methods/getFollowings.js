const classes = require('../../classes');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`);

        let page = setup.page || 0;
        let userId = setup.userId;

        let options = {
            json: true
        }

        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Following&imgHeight=100&imgWidth=100&pageSize=50&userId=${userId}`;

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get users the user is following. Code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                userId: res.body.UserId,
                totalFollowings: res.body.TotalFriends,
                currentPage: page,
                pageSize: res.body.PageSize,
                totalPages: res.body.TotalPages,
                friendsType: res.body.FriendsType,
                following: res.body.Friends 
            }
            
            makeJson.following = makeJson.following.map(x=> new classes.User.PartialUser(x, self));
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}