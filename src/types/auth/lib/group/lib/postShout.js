const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const getVerification = bloxy.getVerification;

module.exports = async function(groupId, newShout, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        if (!groupId || !newShout || !id) return reject(`Did not provide groupId, newShout or identificator`);

        let url = `https://www.roblox.com/My/Groups.aspx?gid=${groupId}`

        getVerification(url, id).then(response=>{
            
            var events = {};
            events["ctl00$cphRoblox$GroupStatusPane$StatusTextBox"] = newShout
            events["ctl00$cphRoblox$GroupStatusPane$StatusSubmitButton"] = "Group Shout"

            var inputs = response.inputs;
            let allInputs = Object.assign(inputs, events)

            let options = {
                id: id,
                inputs: allInputs,
                method: "POST"
            }
            fetch(url, options).then(({res})=>{
                if (res.statusCode!==200) return reject(`Failed to post shout, status code: ${res.statusCode}, message: ${res.statusMessage}`);
                resolve(true);
            }).catch(reject);
        }).catch(reject);
    })
    return newPromise;
}