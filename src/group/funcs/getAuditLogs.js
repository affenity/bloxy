const fetch = require('../../util/fetch.js')
const cheerio = require('cheerio')



module.exports = async function (groupId, opts) {
    var pageNum = opts.page
    var actionType = opts.action;
    var username = opts.username;

    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://roblox.com/Groups/Audit.aspx?groupid=${groupId}${pageNum != null ? '&pageNum=' + pageNum : ''}${actionType != null ? '&actionTypeId=' + actionType : ''}${username != null ? '&username=' + username : ''}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(async ({res}) => {
            var bb = await HandleResponse(res)
            bb.page = pageNum || 1;
            resolve(bb);
        }).catch(reject);
    })

    return newPromise
}



async function HandleResponse(res) {

    var location = String(res.url).toString('utf8');
    if (location.toLowerCase().includes('/groups/group.aspx?gid=')) {
        throw new Error("You do not have permission to view the audit log for this group")
    }

    var newPromise = new Promise(function (resolve, reject) {
        var body = res.body
        var $ = cheerio.load(body);
        var maxPages = parseInt($('#MaxPages').html());
        var allRows = $('.AuditLogContainer').find('.datarow');

        var thisPageLogs = [];

        for (var num = 0; num < allRows.length; num++) {
            var thisRow = allRows.eq(num);
            var thisDesc = thisRow.find('.Description');
            var thisAction = doVal(thisDesc);

            var log = {
                user: {
                    name: thisRow.find('.username').text(),
                    id: parseInt(thisRow.find('.roblox-avatar-image').attr('data-user-id'), 10),
                    role: thisRow.find('.Rank').find('span').text()
                },
                text: thisDesc.text(),
                action: thisAction,
                date: thisRow.find('.Date').text()
            }

            thisPageLogs.push(log);

        }

        return resolve(thisPageLogs);

    })
    return newPromise
}


// Define
var regex = [
    /rank from (.+) to (.+)\.$/,
    /deleted post "(.+)" by user .+\.$/,
    /changed the group status to: (.*)$/
];

function doVal(row) {
    var text = row.text();
    var params = [];
    for (var i = 0; i < regex.length; i++) {
        var match = text.match(regex[i]);
        if (match) {
            for (var j = 1; j < match.length; j++) {
                params.push(match[j]);
            }
        }
    }
    var target = row.find('a').last().attr('href');
    var found = target.match(/\?ID=(\d+)$/);
    if (!found) {
        found = target.match(/^games\/(\d+)\//);
    }
    found = found && parseInt(found[1], 10);
    return {
        target: found,
        params: params
    };
}