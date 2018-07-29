const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(groupId, postId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !postId || !id) return reject(`Did not provide groupId, postId or identificator`);

        let url = `https://groups.roblox.com/v1/groups/${groupId}/wall/posts/${postId}`;
        let options = {
            id: id,
            method:"DELETE"
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to delete wall post, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}