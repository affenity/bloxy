const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;



/**
 * Gets a user's followers
 * @param {Object} setup The setup
 * @param {String} setup.userId The user id to get followers from
 * @param {Number} setup.page The page to get followers from
 * @param {Number} id 
 */

module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id || !setup.userId) return reject(`Did not provide setup or identificator`);

        let userId = setup.userId;
        let page = setup.page || 0;

        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Followers&imgHeight=100&imgWidth=100&pageSize=50&userId=${userId}`
        
        let options = {
            id: id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to check user's followers, status code: ${res.statuCode}, message: ${res.statusMessage}`);

            let makeJson = {
                userId: res.body.UserId,
                totalFollowers: res.body.TotalFriends,
                currentPage: res.body.PageSize,
                totalPages: res.body.TotalPages,
                friendsType: res.body.FriendsType,
                followers: res.body.Friends
            }

            resolve(makeJson);

        }).catch(reject);
    })
    return newPromise;
}
