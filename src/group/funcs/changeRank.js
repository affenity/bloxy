const post = require('../../util/post.js')
const cheerio = require('cheerio');

const groupClass = require('../class.js');
const getRoles = require('./getRoles.js')
const setRank = require('./setRank.js')
const getRankNameInGroup = require('./getRankNameInGroup.js');



module.exports = async function (groupId, userId, amount, opts) {
    
    var newPromise = new Promise(async function (resolve, reject) {
        getRankNameInGroup(userId, groupId, opts).then(rank => {
            if (rank == 'Guest') reject("Target user is not in group");
            getRoles(groupId, opts).then(roles => {
                for (var x = 0; x < roles.length; x++) {
                    var role = roles[x];
                    var thisRank = role.Name;
                    if (thisRank == rank) {
                        var change = x + amount
                        var found = roles[change]
                        if (!found || !found.Id) {
                            reject("Rank change is out of range");
                        } else {

                        setRank(groupId, found.Id, userId, opts).then(async s => {
                            resolve(found);
                        })
                    }
                    }
                }
            })
        })
    })
    return new groupClass.GroupRole(await newPromise, groupId, opts);
}