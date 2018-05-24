const post = require('../../util/post.js')
const cheerio = require('cheerio');
const groupClass = require('../class.js');

const getRoles = require('./getRoles.js')
//const setRank = require('./setRank.js')
const getRankNameInGroup = require('./getRankNameInGroup.js');
var changeRank = require('./changeRank.js');


module.exports = async function (groupId, userId, opts) {
    return changeRank(groupId, userId, -1, opts);
}