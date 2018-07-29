const bloxy = require('./')
const fs = require('fs')

const blx = new bloxy({

})

blx.login().then(fullAccount=>{
    console.log(fullAccount.account);


    fullAccount.getGroup(3295425).then(async group=>{
        group.payout([{
            userId: 18442032,
            amount: 1
        }], false, false);
        let s = Date.now();
        let funds = await group.getGroupFunds();
        console.log(`Spent ${Date.now() - s} ms to get group funds`)
        console.log("Group funds: " + funds.toString());
    })

    let stream = fullAccount.onNotification();
    stream.on('other', function(name, data) {
        console.log("EVENT " + name)
        console.log(data);
    })


    stream.on('friendRequest', async function(requesterId) {
        console.log(requesterId);
        let isBot = await fullAccount.isAssumedBot(requesterId);
        console.log("Is bot: " + isBot);
        if (isBot) {
            fullAccount.declineFriendRequest(requesterId).then( () => {
                console.log("Deleted friend request from a user assumed as a bot");
            })
        }  else {
            let getUser = await fullAccount.getUser(requesterId, 'number');
            if (getUser) {
                console.log(`Received new friend request from ${getUser.username} (${getUser.userId})`)
            } else {
                fullAccount.declineFriendRequest(requesterId).then( () => {
                    console.log("Deleted a friend request from a user that didn't exist????");
                })
            }
        }
    })
})


    /*full.uploadAsset({
        assetType: 11,
        name: 'maybe js',
        file: fs.readFileSync('./Image.png'),
        fullInfo: true
    }).then(assetId=>{
        console.log(`Uploaded asset, assetId: ${assetId}`)
    }).catch(console.error);
})

// example xd*/

