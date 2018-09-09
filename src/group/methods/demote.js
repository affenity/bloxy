

const changeRank = require('./changeRank');

module.exports = async function (setup, self) {
    if (!setup || !self) throw new Error("Did not provide setup or self");
    return changeRank({groupId: setup.groupId, userId: setup.userId, amount: setup.amount}, self);
}