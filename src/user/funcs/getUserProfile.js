const fetch = require('../../util/fetch.js');
var cheerio = require('cheerio')

const userClass = require('../class.js')

//'https://www.roblox.com/users/friends/list-json?currentPage=' + (i * maxPageSize) + '&friendsType=' + type + '&imgHeight=100&imgWidth=100&pageSize=' + pageSize + '&userId=' + userId






module.exports = async function (id) {
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://www.roblox.com/users/${id}/profile`
        fetch(url).then(({res}) => {
            if (res.statusCode != 200) return reject("This user does not exist")
            try {
                /*
                let jar = opts.jar;
                let xcsrf = opts.xcsrf;*/

                var body = res.body;
                var $ = cheerio.load(body);
                var userStatus = $('div[data-statustext]').attr('data-statustext')
                var userBlurb = $('.profile-about-content-text').text();
                var userName = $('.header-title').text();
                var previousNames = $('span[class="tooltip-pastnames"]')//.attr('data-original-title')//.split(/, +/g);
                if (previousNames != null) {
                    var bbplz = $('span[class="tooltip-pastnames"]').attr('data-original-title')
                }
                var joinDate = body.toString('utf8').match(/Join Date<p class=text-lead>(.*?)<li/)[1]
                var joinTime = new Date(joinDate).getTime();

                var accountAge = datediff(joinTime, Date.now());
                var bc = "NBC"

                var getObc = $('span[class=icon-obc]').html();
                var getTbc = $('span[class=icon-tbc]').html();
                var getBc = $('span[class=icon-bc]').html();

                if (getObc != null) {
                    bc = "OBC"
                } else if (getTbc != null) {
                    bc = "TBC"
                } else if (getBc != null) {
                    bc = "BC"
                }
                if (!previousNames || previousNames[0] == '' || previousNames[0] == null) previousNames = [];
                var makeReturn = {
                    Status: userStatus,
                    Blurb: userBlurb,
                    Username: userName,
                    UserId: id,
                    PreviousNames: previousNames,
                    JoinDate: joinDate,
                    AccountAge: accountAge,
                    BC: bc,
                    resBody:res.body
                }
                resolve(makeReturn);




            } catch (err) {
                reject(err);
            }
        })
    })
    return newPromise
}



function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

