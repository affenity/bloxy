const classes = require('../../classes');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`);

        let userId = setup.userId;
        let page   = setup.page || 0;

        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Followers&imgHeight=100&imgWidth=100&pageSize=50&userId=${userId}`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get user's followers, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                userId: res.body.UserId,
                totalFollowers: res.body.TotalFriends,
                currentPage: page,
                totalPages: res.body.TotalPages,
                friendsType: res.body.FriendsType,
                followers: res.body.Friends
            }

            makeJson.followers = makeJson.followers.map(x=> new classes.User.PartialUser(x, self));
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}