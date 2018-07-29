const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, cursor, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !id) return reject(`Did not provide groupId or identificator`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/wall/posts?sortOrder=Desc&limit=100${cursor!=null?`&cursor=${cursor}`:''}`;

        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get wall, status code: ${res.statusCode}, message: ${res.statusMessage}`);

            let response = {
                previousPageCursor: res.body.previousPageCursor,
                nextPageCursor: res.body.nextPageCursor,
                data: res.body.data
            }

            resolve(response);
        }).catch(reject);
    })
    return newPromise;
}