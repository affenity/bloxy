


module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);


        let url = `https://www.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid=${setup.userId}&groupId=${setup.groupId}`;

        let options = {
            
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get rank name in group, code: ${res.statusCode}, message: ${res.statusMessage}`);
            resolve(res.body);
        }).catch(reject);
    })
    
    return newPromise;
}