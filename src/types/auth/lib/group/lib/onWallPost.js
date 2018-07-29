const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const EventEmitter = require('events')
const getWall = require('./getWall')
const bloxyClasses = require('../../../../../classes/index')

class WallPostEvent extends EventEmitter {
    
    constructor(group, settings) {
        super();
        settings = settings || {}
        this.interval;
        this.intervalWait = settings.interval || 10000;

        init(group.groupId, group._id, this);
    }


    stop() {
        clearInterval(this.interval);
    }
}


function init (groupId, cId, self) {
    getNewPosts(groupId, cId).then(posts=>{
        self.emit('ready')
    })

    self.interval = setInterval( () => {
        getNewPosts(groupId, cId).then(posts=>{
            if (!posts || posts.length <=0) return;
            let newPosts = [].concat(posts).map(x=> new bloxyClasses.groupClass.WallPost(x, groupId, cId));
            self.emit('posts', newPosts)
            let highest = getHighestId(newPosts);
            if (highest) globalCache.Walls[groupId] = highest;
        })
    }, self.intervalWait);
}






async function getNewPosts(groupId, id) {
    var newPromise = new Promise(function (resolve, reject) {
        getWall(groupId, null, id).then(({data}) => {
            let posts = [].concat(data).map(x=> new bloxyClasses.groupClass.WallPost(x, groupId, id));
            if (!posts || posts.length <= 0) {
                globalCache.Walls[groupId] = new bloxyClasses.groupClass.WallPost({ id: 1, poster: {}, body: '' }, groupId, id);
                return resolve(null)
            }
            var getBb = getHighestId(posts)
            if (!globalCache.Walls[groupId]) {
                globalCache.Walls[groupId] = new bloxyClasses.groupClass.WallPost(getHighestId(posts), groupId, id);
                return resolve(null);
            } else {
                var newPosts = getAllOver(posts, globalCache.Walls[groupId].postId);
                if (newPosts.length > 0) {
                    return resolve(newPosts)
                } else return resolve(null);
            }
        })
    })
    return newPromise
}

function getHighestId(l) {
    var b = l.sort(function (a, b) { return b.postId - a.postId })
    return b[0];
}

function getAllOver(l, x) {
    var all = []
    for (var i = 0; i < l.length; i++) {
        var post = l[i];
        if (post.postId > x) {
            all.push(post)
        }
    }
    return all;
}

module.exports = WallPostEvent;