const classes = require('../../classes');
const cheerio = require('cheerio');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let url = `https://www.roblox.com/groups/${setup.groupId}/groupmembers-html?pageNum=${setup.page||1}`;

        let options = {};

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get users, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let users = handle(res.body);
            users = users.map(x=> new classes.User.PartialUser(x, self));
            resolve(users);
        }).catch(reject);
    })
    return newPromise;
}


function handle(body) {
    let $ = cheerio.load(body);

    let bb = $('.member-name-container')
    let res = [];

    for (var x=0;x<bb.length;x++) {
        let thisBB = bb.eq(x);
        let thisUser = {
            username: thisBB.text().trim(),
            userId: Number(thisBB.find('a').attr('href').match(/\d+/g)[0])
        }
        res.push(thisUser);
    }
    return res;
}