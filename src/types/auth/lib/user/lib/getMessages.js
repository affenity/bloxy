// https://www.roblox.com/messages/api/get-messages?messageTab=0&pageNumber=0&pageSize=20
const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

module.exports = async function(settings, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        settings = settings || {};
        if (!id) return reject(`Did not provide identificator`);

        let url = `https://www.roblox.com/messages/api/get-messages?messageTab=0&pageNumber=${settings.page||0}&pageSize=20`
        let options = {
            id: id,
            json: true
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get messages, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let createResponse = {
                pageNumber: res.body.PageNumber,
                totalPages: res.body.TotalPages,
                messages: res.body.Collection
            }
            resolve(createResponse);
        }).catch(reject);
    })
    return newPromise;
}