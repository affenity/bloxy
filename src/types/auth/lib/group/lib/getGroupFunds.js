// https://www.roblox.com/my/groupadmin.aspx?gid=3295425
const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio');

module.exports = async function(groupId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !id) return reject(`Did not provide groupId or identificator`);

        let options = {
            id: id
        }
        fetch(`https://www.roblox.com/my/groupadmin.aspx?gid=${groupId}`, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get group admin page, make sure you have the correct permissions and try again. Status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let $ = cheerio.load(res.body);
            let funds = parseInt($('#GroupTitle').find('span').text().trim());
            resolve(funds);
        }).catch(reject);
    })
    return newPromise;
}