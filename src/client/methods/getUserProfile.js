

const cheerio = require('cheerio');
const classes = require('../../classes');


module.exports = async function (userId, self, overrideCache) {
    
    let newPromise = new Promise(async function(resolve, reject) {
        if (!userId || !self) return reject(`Did not provide userId or self`);
        let url = `https://www.roblox.com/users/${userId}/profile`;

        if (!overrideCache) {
            let find = await self._setup.cache.getCache('getuser', userId);
            if (find != null) return resolve(new classes.User.RobloxUser(find, self));
        }
        self._request(url).then(({res})=>{
            if (res.statusCode !== 200) return reject(`This user does not exist. code: ${res.statusCode}, message: ${res.statusMessage}`);

            try {
                if (res.statusCode != 200) return reject("This user does not exist")
                let body = res.body;
                let $ = cheerio.load(body);
                let userStatus = $('div[data-statustext]').attr('data-statustext')
                let userBlurb = $('.profile-about-content-text').text();
                let userName = $('.header-title').text();


                let joinDate = body.toString('utf8').match(/Join Date<p class=text-lead>(.*?)<li/)[1]
                let joinTime = new Date(joinDate).getTime();

                let accountAgeREAL = datediff(joinTime, Date.now());
                let bc = "NBC"

                let numFriends = parseInt($('div[data-friendscount]').attr('data-friendscount'));

                let getObc = $('span[class="icon-obc"]').html();
                let getTbc = $('span[class="icon-tbc"]').html();
                let getBc = $('span[class="icon-bc"]').html();

                if (getObc != null) {
                    bc = "OBC"
                } else if (getTbc != null) {
                    bc = "TBC"
                } else if (getBc != null) {
                    bc = "BC"
                } else {
                    bc = "NBC"
                }

                let findImgs = $(`img[alt="${userName}"]`);

                let pfp, avatarPic;

                if (findImgs != null) {
                    pfp = findImgs.eq(0).attr('src').toString();
                    avatarPic = findImgs.eq(1).attr('src').toString();
                }


                let makeReturn = {
                    status: userStatus,
                    blurb: userBlurb,
                    username: userName,
                    userId: userId,
                    joinDate: joinDate,
                    accountAge: accountAgeREAL,
                    bc: bc,
                    numFriends: numFriends,
                    pfp: pfp,
                    avatarPic: (typeof(avatarPic) == 'string' ? avatarPic : null),        
                }
                
                self._setup.cache.cache('getuser', userId, makeReturn);
                resolve(new classes.User.RobloxUser(makeReturn, self));




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