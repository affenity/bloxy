const cheerio = require('cheerio');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let url = `https://www.roblox.com/my/groupadmin.aspx?gid=${setup.groupId}`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get group admin page, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let $ = cheerio.load(res.body);
            let funds = parseInt($('#GroupTitle').find('span').text().trim());
            resolve(funds);
        }).catch(reject);
    })

    return newPromise;
}