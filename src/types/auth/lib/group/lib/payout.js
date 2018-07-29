const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

// one time payout with not percentage but amount
// https://www.roblox.com/groups/3295425/one-time-payout/false
// percentages: {"18442032":"1"}

// one time payout but percentage
// https://www.roblox.com/groups/3295425/one-time-payout/true
// percentages: {"18442032": "1"}

// recurring payout
// https://www.roblox.com/groups/3295425/recurring-payout
// same



/**
 * 
 * @param {Object} setup 
 * @param {Object[]} setup.members Array of users
 * @param {Number} setup.members[].userId User's userId
 * @param {Number} setup.members[].amount Amount to pay out to the user
 * @param {Boolean} setup.recurring If the payout will be recurring or not 
 * @param {Boolean} setup.usePercentage If the payout will be in percentage (true if recurring)
 * @param {Number} setup.groupId
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        setup = setup || {};
        console.log(setup)
        if (!setup || !setup.members || !setup.members[0] || !setup.members[0].userId || !setup.groupId || !id) return reject(`Did not provide setup necessary fields, groupId or identificator`);

        var url = "";

        if (setup.recurring) {
            console.log("recurring percentage")
            url = `https://www.roblox.com/groups/${setup.groupId}/recurring-payout`
        } else if (!setup.usePercentage && setup.recurring !== true) {
            // amount
            console.log("one-time amount")
            url = `https://www.roblox.com/groups/${setup.groupId}/one-time-payout/false`
        } else if (setup.usePercentage) {
            console.log("one-time percentage")
            url = `https://www.roblox.com/groups/${setup.groupId}/one-time-payout/true`
        }

        let data = {};
        for (var n=0;n<setup.members.length;n++) {
            let t = setup.members[n];
            data[t.userId.toString()] = t.amount.toString();
        }

        let options = {
            id: id,
            form: {
                percentages: JSON.stringify(data)
            },
            method:"POST"
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to do payout, status code: ${res.statuCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}

