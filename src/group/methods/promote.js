const changeRank = require('./changeRank');


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !setup.groupId || !setup.userId || !self) return reject(`Did not provide setup, groupId, userId or self`);
        resolve(changeRank({
            groupId: setup.groupId,
            userId: setup.userId,
            amount: setup.amount
        }))
    })
    return newPromise;
}