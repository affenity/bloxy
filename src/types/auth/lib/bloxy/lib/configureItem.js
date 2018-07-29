const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const getVerification = bloxy.getVerification;

/**
 * 
 * @param {Object} setup
 * @param {Number} setup.assetId
 * @param {String} setup.title
 * @param {String} setup.description
 * @param {Boolean} setup.enableComments
 * @param {Number} setup.sellForRobux (*Optional*) 
 * @param {Number} setup.genreSelection
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {

        var assetId = setup.assetId;
        var title = setup.title;
        var description = setup.description;
        var enableComments = setup.enableComments;
        var sellForRobux = setup.sellForRobux;
        var genreSelection = setup.genreSelection;

        if (!assetId || !title || !id) return reject(`Did not provide assetId, title or identificator`);

        getVerification(`https://www.roblox.com/my/item.aspx?id=${assetId}`, id).then(response=>{

            var events = {
                ctl00$cphRoblox$NameTextBox: title,
                ctl00$cphRoblox$DescriptionTextBox: description,
                ctl00$cphRoblox$actualGenreSelection: genreSelection || 1
            };

            if (enableComments) events['ctl00$cphRoblox$EnableCommentsCheckBox'] = 'on';
            if (sellForRobux!=null && sellForRobux>0) {
                events.ctl00$cphRoblox$SellThisItemCheckBox = 'on';
                events.ctl00$cphRoblox$SellForRobux = 'on';
                events.ctl00$cphRoblox$RobuxPrice = sellForRobux;
            }

            let url = `https://www.roblox.com/my/item.aspx?id=${assetId}`;

            var inputs = response.inputs;
            events['__EVENTTARGET'] = 'ctl00$cphRoblox$SubmitButtonBottom'
            let allInputs = Object.assign(inputs, events)

            fetch(url, {
                id: id,
                method:"POST",
                inputs: allInputs
            }).then(({res})=>{
                if (res.statusCode!==200) return reject(`Failed to configure item, status code: ${res.statusCode}, message: ${res.statusMessage}`);
                resolve(true);
            }).catch(reject);
            
        }).catch(reject);
    })
    return newPromise;
}