const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio')


/**
 * 
 * @param {Number} groupId 
 * @param {Object} setup 
 * @param {String} setup.username
 * @param {Number} setup.page
 * @param {Number} id 
 */
module.exports = async function(groupId, setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !id) return reject(`Did not provide groupId or identificator`);

        let url = `https://www.roblox.com/groups/${groupId}/joinrequests-html?pageNum=${setup.page||1}${setup.username!==null?`&username=${setup.username}`:''}`
        let options = {
            id: id
        }


        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get join requests, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let requests = [];
            let $ = cheerio.load(res.body);
            let found = $('#JoinRequestsList').find('tr')

            if (found.length <=1) return resolve([]);

            for (var x=0;x<found.length;x++) {
                let req = found.eq(x).find('td');
                if (req.eq(1).text().length > 2) {
                    requests.push({
                        username: req.eq(1).text(),
                        userId: String(req.eq(1).find('a').attr('href')).toString('utf8').match(/users\/(.*?)\/profile/)[1],
                        date: new Date(req.eq(2).text()),
                        requestId: Number(req.eq(3).find('span').attr('data-rbx-join-request')),
                        groupId: Number(groupId)
                    })
                }
            }
            resolve(requests);
        }).catch(reject);
    })
    return newPromise;
}