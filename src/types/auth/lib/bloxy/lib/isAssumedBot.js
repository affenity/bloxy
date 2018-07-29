const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.changeBlurb;

const parser = require('cheerio')

const module_getUserProfile = require('./getUserProfile')
const module_getUserGroups = require('./getUserGroups')

module.exports = async function(userId, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let userProfile = await module_getUserProfile(userId);
        let {res} = await fetch(`https://www.roblox.com/users/profile/playerassets-json?assetTypeId=21&userId=${userId}`, {id: id, json:true});
        if (res.statusCode !== 200) return reject(`Internal error, make sure the request was valid. Status code: ${res.statusCode}, message: ${res.statusMessage}`);
        let groups = await module_getUserGroups(userId, id);
        let amountOfBadges = res.body.Assets.length;

        let friendsWeight = (userProfile.numFriends > 1 ? 0 : 2);
        let badgesWeight = (amountOfBadges > 1 ? 0 : 3);
        let groupsWeight = (groups.length >= 1 ? 0 : 2);
        let ageWeight = (userProfile.accountAge >= 60 ? 0 : 2);
        let expressWeight = (userProfile.blurb.length + userProfile.status.length > 3 ? 0 : 2);
        let nameWeight = (!userProfile.username.includes("_") && userProfile.username.match(/\d+/g) == null ? 0 : 1)


        let totalWeight = friendsWeight + badgesWeight + groupsWeight + ageWeight + expressWeight + nameWeight;
        if (totalWeight >= 5) resolve(true)
        resolve(false);
        
    })
    return newPromise;
}