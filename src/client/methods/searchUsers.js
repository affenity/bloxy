const classes = require('../../classes');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);
        
        let startIndex = setup.startIndex || 0;
        let url = `https://www.roblox.com/search/users/results?keyword=${setup.query}&maxRows=12&startIndex=${startIndex}`;

        let options = {
            json: true
        }
        
        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to search users, code: ${res.statusCode}, message: ${res.statusMessage}`);

            let makeJson = {
                keyword: res.body.Keyword,
                startIndex: res.body.StartIndex,
                maxRows: res.body.MaxRows,
                totalResults: res.body.TotalResults,
                results: res.body.UserSearchResults
            }

            makeJson.results = makeJson.results.map(x=> new classes.User.UserSearchResult(x, self));
            resolve(makeJson);
        })
    })
    return newPromise;
}