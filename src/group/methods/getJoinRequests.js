const cheerio = require('cheerio');
const Group = require('../group');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let url = `https://www.roblox.com/groups/${setup.groupId}/joinrequests-html?pageNum=${setup.page||1}${setup.username!=null?`&username=${setup.username}`:''}`;

        let options = {
            
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get join requests, code: ${res.statusCode}, message: ${res.statusMessage}`);
            
            let requests = [];
            let $ = cheerio.load(res.body);
            let found = $('#JoinRequestsList').find('tr');

            if (found.length <= 1) return resolve([]);

            for (let num=0;num<found.length;num++) {
                let req = found.eq(num).find('td');
                if (req.eq(1).text().length > 2) {
                    requests.push({
                        username: req.eq(1).text(),
                        userId: String(req.eq(1).find('a').attr('href')).toString('utf8').match(/users\/(.*?)\/profile/)[1],
                        date: new Date(req.eq(2).text()),
                        requestId: Number(req.eq(3).find('span').attr('data-rbx-join-request')),
                        groupId: Number(setup.groupId)
                    })
                }
            }

            resolve(requests.map(x=> new Group.JoinRequest(x, self)));
        }).catch(reject);
    })
    return newPromise;
}