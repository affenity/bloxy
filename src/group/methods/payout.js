


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self || !setup.members || !setup.members[0] || !setup.groupId) return reject(`Did not provide setup or self`);

        let url = ``;
        if (setup.recurring) {
        url = `https://www.roblox.com/groups/${setup.groupId}/recurring-payout`
        } else if (!setup.usePercentage && setup.recurring !== true) {
            // amount
            url = `https://www.roblox.com/groups/${setup.groupId}/one-time-payout/false`
        } else if (setup.usePercentage) {
            url = `https://www.roblox.com/groups/${setup.groupId}/one-time-payout/true`
        }

        let data = {};
        for (let n=0;n<setup.members.length;n++) {
            let t = setup.members[n];
            data[t.userId.toString()] = t.amount.toString();
        }
        let options = {
            form: {
                percentages: JSON.stringify(data)
            },
            method: "POST"
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to do payout, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(true);
        }).catch(reject);
    })
    return newPromise;
}