const post = require('../../util/strictpost.js')
const getVerification = require('../../util/getVerification.js')


module.exports = async function (args, opts) {

    var assetId = args.assetId;
    var title = args.title;
    var description = args.description;
    var enableComments = args.enableComments;
    var sellForRobux = args.sellForRobux;
    var genreSelection = args.genreSelection;
    var newPromise = new Promise(function (resolve, reject) {
        getVerification(`https://www.roblox.com/my/item.aspx?id=${assetId}`, opts).then(response => {

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
            // if (allowCopying) events.ctl00$cphRoblox$PublicDomainCheckBox = 'on';

            var url = `https://www.roblox.com/my/item.aspx?id=${assetId}`

            var inputs = response.inputs;
            events['__EVENTTARGET'] = 'ctl00$cphRoblox$SubmitButtonBottom'
            let allInputs = Object.assign(inputs, events)
            post(url, {
                method:"POST",
                inputs: inputs,
                jar: opts.jar,
                xcsrf: opts.xcsrf
            }).then(({
                res
            }) => {
                if (res.statusCode == 200) {
                    resolve(true)
                } else reject("Failed to configure item")
            }).catch(reject);

        })



    })
    return newPromise
}