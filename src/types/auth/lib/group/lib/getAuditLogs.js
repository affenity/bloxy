const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio')


/**
 * 
 * @param {Object} setup 
 * @param {Number} setup.page
 * @param {String} setup.action
 * @param {String} setup.username
 * @param {Number} setup.groupId
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let {groupId, page, action, username} = setup;
        if (!groupId || !id) return reject(`Did not provide groupId or identificator`);

        let url = `https://www.roblox.com/Groups/Audit.aspx?groupid=${groupId}&pageNum=${page||1}${action!=null?`&actionTypeId=`+action:''}${username!=null?'&username='+username:''}`
        let options = {
            id:id
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get audit logs, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            let getAudits = handle(res.body);
            resolve(getAudits);
        }).catch(reject);
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