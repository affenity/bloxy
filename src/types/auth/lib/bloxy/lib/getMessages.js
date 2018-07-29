const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


/**
 * 
 * @param {Object} setup 
 * @param {Number} setup.page
 * @param {Number} setup.limit
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);
        let page = setup.page || 0;
        let limit = setup.limit || 20;

        const options = {
            id: id,
            json: true
        }

        let url = `https://www.roblox.com/messages/api/get-messages?messageTab=0&pageNumber=${page}&pageSize=${limit}`;
        
        fetch(url, options).then(({res})=> {
            if (res.statusCode !== 200) return reject(`Failed to get messages, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                pageNumber: res.body.PageNumber,
                totalPages: res.body.TotalPages,
                messages: res.body.Collection
            }

            resolve(makeJson);
        }).catch(reject);

    })
    return newPromise;
}