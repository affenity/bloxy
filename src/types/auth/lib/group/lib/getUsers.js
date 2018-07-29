// Each page returns 20 users

const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio')


module.exports = async function(groupId, page, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !page || !id) return reject(`Did not provide groupId or page or identificator`);

        let url = `https://www.roblox.com/groups/${groupId}/groupmembers-html?pageNum=${page||1}`;
        let options = {
            id: id
        }


        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get users of group, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(handle(res.body));
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