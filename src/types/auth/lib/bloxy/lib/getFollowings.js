const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;


/**
 * 
 * @param {Object} setup 
 * @param {Number} setup.page
 * @param {String} setup.userId
 * @param {Number} id 
 */
module.exports = async function (setup, id) {
    var newPromise = new Promise(function(resolve, reject) {

        if (!setup || !id) return reject(`Did not provide setup, or identificator`);

        let options = {
            id: id,
            json: true
        }

        let page = setup.page || 0;
        let userId = setup.userId;

        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=Following&imgHeight=100&imgWidth=100&pageSize=20&userId=${userId}`
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get users the user is following, status code: ${res.statusCode}, message: ${res.statusMessage}`);


            let makeJson = {
                userId: res.body.UserId,
                totalFollowers: res.body.TotalFriends,
                currentPage: res.body.CurrentPage,
                pageSize: res.body.PageSize,
                totalPages: res.body.TotalPages,
                friendsType: res.body.FriendsType,
                following: res.body.Friends
            }
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}