const AccountManager = require('../managers/account');

module.exports = async function (setup, self) {
    let newPromise = new Promise(async function(resolve, reject) {

        if (!setup || !self) return reject(`Did not provide setup or self`);

        let assetId        = setup.assetId;
        let title          = setup.title;
        let description    = setup.description;
        let enableComments = setup.enableComments;
        let sellForRobux   = setup.sellForRobux;
        let genreSelection = setup.genreSelection;

        if (!assetId || !title) return reject(`Must provide assetId and the title`);

        let url = `https://www.roblox.com/My/Item.aspx?ID=${assetId}`;
        let response = await self._setup.getVerification(url);
            let events = {
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
            

            let inputs = response.inputs;

            events['__EVENTTARGET'] = 'ctl00$cphRoblox$SubmitButtonBottom'
            let allInputs = Object.assign(inputs, events);

            
            self._request(url, {
                _id: self._setup._id,
                method: "POST",
                inputs: allInputs
            }).then(({res})=>{
                if (res.statusCode !== 200) return reject(`Failed to configure item, code: ${res.statusCode}, message: ${res.statusMessage}`);
                resolve(true);
            }).catch(reject);
        })
    
    return newPromise;
}