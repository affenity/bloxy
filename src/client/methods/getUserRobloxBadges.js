const classes = require('../../classes');


module.exports = async function (userId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !self) return reject(`Did not provide userId or self`);

        let url = `https://www.roblox.com/badges/roblox?userId=${userId}&imgWidth=110&imgHeight=110&imgFormat=png`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get user's roblox badges, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let createJson = {
                userId: res.body.UserId,
                badges: res.body.RobloxBadges
            }

            createJson.badges = createJson.badges.map(x=> new classes.User.RobloxBadge(x));
            resolve(createJson);
        }).catch(reject);
        
    })
    return newPromise;
}