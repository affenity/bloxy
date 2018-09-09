const cheerio = require('cheerio');
const Group   = require('../group.js');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        
        if (!setup || !self) return reject(`Did not provide setup or self`);

        let url = `https://www.roblox.com/Groups/Audit.aspx?groupid=${setup.groupId}&pageNum=${setup.page||1}${setup.action!=null?`&actionTypeId=`+action:''}${setup.username!=null?'&username='+setup.username:''}`;

        let options = {
            
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get audit logs, code: ${res.statusCode}, message: ${res.statusMessage}`);
            let getAudits = handle(res.body);
            resolve(getAudits.map(x=>new Group.AuditLog(x, self)));
        })
    })
    return newPromise;
}


function handle(body) {
    let $ = cheerio.load(body);

    let datarows = $('tr').filter('.datarow');



    let audits = [];
    for (var x=0;x<datarows.children().length;x++) {
        let thisAudit = datarows.eq(x);
        let thisHTML = thisAudit.html();
        if (thisHTML!=null) {
            let thisDate = new Date(thisAudit.find('.Date').text());
            let thisUser = {
                userId: thisAudit.find('.User').find('div').attr('data-user-id'),
                username: thisAudit.find('.User').find('span').text(),
                rank: thisAudit.find('.Rank').text().trim()
            }

            let action = thisAudit.find('.Description').text();
            audits.push({
                action: String(action).toString(),
                user: thisUser,
                date: thisDate
            })
        }
    }


    return audits;
}