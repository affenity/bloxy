const fetch = require('../../util/fetch.js')
const userClass = require('../class.js')
const groupClass = require('../../group/class.js');
const getUserProfile = require('./getUserProfile.js');
const getUserGroups = require('./getUserGroups.js');

const parser = require('cheerio');

module.exports = async function (userId, opts) {
    var newPromise = new Promise(async function (resolve, reject) {
        let userProfile = await getUserProfile(userId);
        let {res} = await fetch(`https://www.roblox.com/users/profile/playerassets-json?assetTypeId=21&userId=${userId}`, {jar:opts.jar, xcsrf:opts.xcsrf})
        let groups = await getUserGroups(userId, opts);
        if (res.statusCode != 200) reject(`Internal error, make sure the request was valid`)
        let json = JSON.parse(res.body);
        let $ = parser.load(userProfile.resBody);
        let amountOfBadges = json.Assets.length;
        var userFriends = parseInt($('div[data-friendscount]').attr('data-friendscount'))

        let friendsWeight = (userFriends>1?0:2);
        let badgesWeight = (amountOfBadges>1?0:3);
        let groupsWeight = (groups.length>=1?0:2);
        let ageWeight = (userProfile.AccountAge>=60?0:2);
        let expressWeight = (userProfile.Blurb.length+userProfile.Status.length>3?0:2);
        let nameWeight = (!userProfile.Username.includes("_") && userProfile.Username.match(/\d+/g)==null?0:1)

        let totalWeight = friendsWeight+badgesWeight+groupsWeight+ageWeight+expressWeight+nameWeight;
        if (totalWeight>=5) resolve(true)
        resolve(false);
    })
    return Boolean(await newPromise);
}