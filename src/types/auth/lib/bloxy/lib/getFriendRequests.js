const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

/**
 * 
 * @param {Object} setup 
 * @param {Number} setup.page
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject("Did not provide setup or identificator");

        let page = setup.page || 0;

        let url = `https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=FriendRequests&imgHeight=100&imgWidth=100&pageSize=100`
        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get friend requests, status code: ${res.statusCode}, message: ${res.statusMessage}`);


            let json = res.body;
            if (json.isValid && json.isValid == false) return reject(`Make sure the request was valid`);


            let makeJson = {
                userId: json.UserId,
                totalRequests: json.TotalFriends,
                currentPage: json.CurrentPage,
                pageSize: json.PageSize,
                totalPages: json.TotalPages,
                friendsType: json.FriendsType,
                requests: json.Friends
            }

            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}