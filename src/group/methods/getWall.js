const classes = require('../../classes');
const group   = require('../group.js');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let url = `https://groups.roblox.com/v1/groups/${setup.groupId}/wall/posts?sortOrder=Desc&limit=100${setup.cursor!=null?`&cursor=${setup.cursor}`: ''}`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to x, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let response = {
                previousPageCursor: res.body.previousPageCursor,
                nextPageCursor: res.body.nextPageCursor,
                posts: res.body.data
            }

            response.posts = response.posts.map(x=> new group.WallPost(x, setup.groupId, self));

            resolve(response);
        }).catch(reject);
    })
    return newPromise;
}