const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const cheerio = require('cheerio')


/**
 * 
 * @param {Object} setup 
 * @param {String} setup.query
 * @param {Number} setup.startIndex
 * @param {Number} id 
 */


module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);
        let startIndex = setup.startIndex || 0;
        let url = `https://www.roblox.com/search/users/results?keyword=${setup.query}&maxRows=12&startIndex=${startIndex}`
        let options = {
            id: id,
            json:true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to search for users, status code: ${res.statusCode}, message: ${res.statusMessage}`);
            

            let makeJson = {
                keyword: res.body.Keyword,
                startIndex: res.body.StartIndex,
                maxRows: res.body.MaxRows,
                totalResults: res.body.TotalResults,
                results: res.body.UserSearchResults
            }

            resolve(makeJson);
        }).catch(reject);
    })  
    return newPromise;
}