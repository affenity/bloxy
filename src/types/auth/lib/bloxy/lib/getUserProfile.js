const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.auth.verify2Step;
const cheerio = require('cheerio');
const request = require('request')

module.exports = async function(userId) {
    
    var newPromise = new Promise(function(resolve, reject) {
        if (!userId) return reject("Did not provide userId");
        let url = `https://www.roblox.com/users/${userId}/profile`
        request(url, async function(err, res) {
            try {
                if (res.statusCode != 200) return reject("This user does not exist")
                var body = res.body;
                var $ = cheerio.load(body);
                var userStatus = $('div[data-statustext]').attr('data-statustext')
                var userBlurb = $('.profile-about-content-text').text();
                var userName = $('.header-title').text();


                var joinDate = body.toString('utf8').match(/Join Date<p class=text-lead>(.*?)<li/)[1]
                var joinTime = new Date(joinDate).getTime();

                var accountAgeREAL = datediff(joinTime, Date.now());
                var bc = "NBC"

                let numFriends = parseInt($('div[data-friendscount]').attr('data-friendscount'));

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

                var makeReturn = {
                    status: userStatus,
                    blurb: userBlurb,
                    username: userName,
                    userId: userId,
                    joinDate: joinDate,
                    accountAge: accountAgeREAL,
                    bc: bc,
                    numFriends: numFriends                
                }
                resolve(makeReturn);




            } catch (err) {
                reject(err);
            }

        })

    })

    return newPromise;
}



function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}