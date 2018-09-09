const classes = require('../../classes');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let page = (setup.page || 1) <= 0 ? 1: setup.page||1;
        let userId = setup.userId;

        let url = `https://api.roblox.com/users/${userId}/friends?page=${page}`;

        let options = {
            json: true
        };

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get friends, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let friends = res.body;
            friends = friends.map(x=> new classes.User.PartialUser(x, self));
            resolve(friends);
        }).catch(reject);   

    })
    return newPromise;
}