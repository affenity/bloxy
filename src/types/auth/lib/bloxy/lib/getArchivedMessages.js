const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;


/**
 * 
 * @param {Object} setup 
 * @param {Number} setup.page
 * @param {Number} setup.limit
 * @param {Number} id 
 */

module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let page = setup.page || 0;
        let limit = setup.limit || 20;

        let url = `https://www.roblox.com/messages/api/get-messages?messageTab=3&pageNumber=${page}&pageSize=${limit}`

        let options = {
            id: id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get messages GA, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            if (res.body.PageNumber==null || res.body.TotalPages==null || res.body.Collection == null) return reject(`Failed to get messages, status code: ${res.statusCode}, message: ${res.statusMessage}`);
           
            let makeJson = {
                currentPage: res.body.PageNumber,
                totalPages: res.body.TotalPages,
                messages: res.body.Collection
            }
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}