const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;


/**
 * 
 * @param {Object} setup 
 * @param {String} setup.userId
 * @param {Number} setup.page
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(function(resolve, reject) {
        if (!setup || !id) return reject(`Did not provide setup or identificator`);

        let page = setup.page || 0;
        let userId = setup.userId;
        let url = `https://www.roblox.com/users/inventory/list-json?assetTypeId=9&cursor=&itemsPerPage=100&pageNumber=${page}&placeTab=Created&sortOrder=Desc&userId=${userId}`

        let options = {
            id: id,
            json: true
        }

        fetch(url, options).then(({res})=>{
            if (res.statusCode!==200) return reject(`Failed to get user places!`);
            let data = res.body.Data;
            let it = data.Items.shift();

            var myDate = new Date(it.Item.LastUpdated.match(/\d+/)[0] * 1);
            let createJson = {
                totalItems: data.TotalItems,
                start: data.Start,
                end: data.End,
                currentPage: data.Page,
                nextPage: data.nextPageCursor,
                itemsPerPage: data.ItemsPerPage,
                pageType: data.PageType,
                places: data.Items
            }

            resolve(createJson);
        }).catch(reject);
    })
    return newPromise;
}