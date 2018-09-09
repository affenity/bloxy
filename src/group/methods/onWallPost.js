const EventEmitter    = require('events');
const group           = require('../group');
const getWall         = require('./getWall');

const Cache = {};

class WallPostEvent extends EventEmitter {

    constructor(group, settings) {
        super();
        settings = settings || {};
        this._group = group;
        this._self  = this._group._setup;
        
        this.interval;
        this.intervalWait = settings.interval || 10000;

        this.init();
    }

    init () {
        getNewPosts(this._group.groupId, this._self).then(posts=>{
            this.emit('ready');
        })

        this.interval = setInterval( () => {
            getNewPosts(this._group.groupId, this._self).then(posts=>{
                if (!posts || posts.length <=0) return;
                let newPosts = posts;
                let getHighest = getHighestId(newPosts);
                Cache[this._group.groupId] = getHighest || new group.WallPost({ id: 1, poster: {}, body: ''}, this._group.groupId, this._self);

                this.emit('posts', newPosts);
            })
        }, this.intervalWait);
    }

    stop () {
        return clearInterval(this.interval);
    }
}

async function getNewPosts(groupId, self) {
    let newPromise = new Promise(async function(resolve, reject) {
        getWall({ groupId: groupId }, self).then(posts=>{
            posts = posts.posts;
            if (!posts || posts.length <=0) {
                Cache[groupId] = new group.WallPost({ id: 1, poster: {}, body: ''}, groupId, self);
                return resolve(null);
            }
            let getHighest = getHighestId(posts);

            if (!Cache[groupId]) {
                Cache[groupId] = getHighest
                return resolve(null);
            } else {
                let newPosts = getAllOver(posts, Cache[groupId].postId);
                if (newPosts.length > 0) {
                    return resolve(newPosts);
                } else resolve(null);
            }
        }).catch(reject);
    })
    return newPromise;
}

function getHighestId(l=[]) {
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