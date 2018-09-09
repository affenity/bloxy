const classes = require('../../classes')

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        if (!setup || !self) return reject(`Did not provide setup or self`);
        
        let page = setup.page || 0;
        let limit= setup.limit || 20;

        const options = {
            json: true
        };

        let url = `https://www.roblox.com/messages/api/get-messages?messageTab=0&pageNumber=${page}&pageSize=${limit}`;

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to get messages, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                currentPage: res.body.PageNumber,
                totalPages : res.body.TotalPages,
                messages   : res.body.Collection
            }

            
            makeJson.messages = makeJson.messages.map(x=> new classes.Message.RobloxMessage(x, self));
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}