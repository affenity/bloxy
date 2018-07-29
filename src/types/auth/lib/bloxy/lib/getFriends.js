const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

/**
 * 
 * @param {Object} setup 
 * @param {String} setup.userId
 * @param {Number} setup.page
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let page = (setup.page || 1) <= 0 ? 1:setup.page||1;
        let userId = setup.userId;

        let url = `https://api.roblox.com/users/${userId}/friends?page=${page}`;

        let options = {
            id: id,
            json: true
        }
        fetch(url, options).then(({res}) => {
            if (res.statusCode !== 200) return reject(`Failed to get friends, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);


    })
    return newPromise;
}