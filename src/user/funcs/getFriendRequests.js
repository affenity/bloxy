// https://www.roblox.com/users/friends/list-json?currentPage=0&friendsType=FriendRequests&imgHeight=100&imgWidth=100&pageSize=18&userId=18442032


const fetch = require('../../util/fetch.js')
const userClass = require('../class.js');


module.exports = async function (page, setup) {
    let jar = setup.jar,
        xcsrf = setup.xcsrf;
    var page = page || 0;

    var newPromise = new Promise(function (resolve, reject) {
        fetch(`https://www.roblox.com/users/friends/list-json?currentPage=${page}&friendsType=FriendRequests&imgHeight=100&imgWidth=100&pageSize=50`, { jar: jar, headers: { 'x-csrf-token': xcsrf } }).then(async ({ res }) => {

            let json = JSON.parse(res.body);
            if (json.isValid && json.isValid==false) reject(`Request was not valid, make sure you've putted in correct fields and parameters`);
            let totalRequests = json.TotalFriends;
            let TotalPages    = json.TotalPages;
            let CurrentPage   = json.CurrentPage;
            let TargetId      = json.UserId;

            let Requests      = json.Friends;

            resolve({
                Requests: Requests,
                TotalRequests: totalRequests,
                TotalPages: TotalPages,
                CurrentPage:CurrentPage,
                TargetId : TargetId
            })
        })
    })

    let wait = await newPromise;
    let reqs = wait.Requests;
    setup.targetId = wait.TargetId;
    let bb = {
        Requests: [].concat(reqs).map(x=>new userClass.FriendRequest(x, setup)),
        TotalRequests: Number(wait.TotalRequests),
        TotalPages: Number(wait.TotalPages),
        CurrentPage: Number(wait.CurrentPage),
        TargetId: Number(wait.TargetId)
    }
    return bb;
}