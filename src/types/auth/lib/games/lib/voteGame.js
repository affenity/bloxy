const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


module.exports = async function(universeId, voteUp, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!universeId || !id) return reject(`Did not provide universeId or identificator`);

        let url = `https://games.roblox.com/v1/games/${universeId}/user-votes`
        let options = {
            id: id,
            method: "PATCH",
            json: {
                vote: voteUp || false
            }
        }
        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to vote for game, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    return newPromise;
}