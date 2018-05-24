const rbx_js = require('./index.js')

const rbx = new rbx_js({
    cookie: "Cookie in here :D "
})

const rbx2 = new rbx_js({
    username: 'username',
    password: 'password'
})


rbx.login().then(()=>{
    rbx.getGroup(2704232).then(group=>{
        group.getRole({name: "Sponsor"}).then(role=>{
            console.log(role);
        })
    })
})

rbx2.login().then( () => {
    rbx2.getGroup(3544434).then(group=>{
        var onJoin = new group.onJoinRequest(group, {interval:2000})
        onJoin.on('requests', function(joinRequests) {
            joinRequests.forEach(joinRequest=>{
                joinRequest.isBot().then(isBot=>{
                    if (isBot)  return joinRequest.decline();
                    return joinRequest.accept();
                })
            })
        })
    })
})


var groupId = 3544434

rbx.getGroup(groupId).then(group => {
    var onWallPost = new group.onWallPost(group)

    onWallPost.on('posts', function (newPosts) {
        newPosts.forEach(post => {
            post.isBot().then(isBot => {
                // isBot is a boolean
                if (isBot) return post.delete();
            })
        })
    })
})