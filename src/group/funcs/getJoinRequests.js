const fetch = require('../../util/fetch.js')

const cheerio = require('cheerio');
var groupClass = require('../class.js');

module.exports = async function (groupId, opts) {
    var newPromise = new Promise(function (resolve, reject) {

        var url = `https://www.roblox.com/groups/${groupId}/joinrequests-html`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var body = res.body;

            var requests = [];
            var $ = cheerio.load(body);
            var found = $('#JoinRequestsList').find('tr');

            if (found.length <= 1) return resolve([]);

            for (var num = 0; num < found.length; num++) {
                var req = found.eq(num).find('td');
                if (req.eq(1).text().length > 2) {
                    requests.push({
                        username: req.eq(1).text(),
                        userId: String(req.eq(1).find('a').attr('href')).toString('utf8').match(/users\/(.*?)\/profile/)[1],
                        date: req.eq(2).text(),
                        requestId: Number(req.eq(3).find('span').attr('data-rbx-join-request')),
                        groupId: Number(groupId)
                    })
                }

            }

            resolve(requests);



        })
    })
    return [].concat(await newPromise).map(x=>new groupClass.GroupJoinRequest(x, opts));
}
