const group = require('../../group/group.js');


module.exports = async function (query, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        let url = `https://www.roblox.com/search/groups/list-json?keyword=${query}&maxRows=10&startRow=0`;

        let options = {
            json: true
        }

        self._request(url, options).then(({res})=>{
            if (res.statusCode !== 200) return reject(`Failed to search for groups named "${query}", code: ${res.statusCode}, message: ${res.statusMessage}`);
            let makeJson = {
                keyword: res.body.Keyword,
                startRow: res.body.StartRow,
                maxRows: res.body.MaxRows,
                totalResults: res.body.TotalResults,
                searchKeywordMinLength: res.body.SearchKeywordMinLength,
                results: res.body.GroupSearchResults.map(x=> new group.GroupSearchResult(x, self))                
            }
            resolve(makeJson);
        }).catch(reject);
    })
    return newPromise;
}