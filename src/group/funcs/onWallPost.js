//ctl00_cphRoblox_GroupStatusPane_StatusView

const fetch = require('../../util/fetch.js')
const groupClass = require('../class.js')
const getWall = require('../funcs/getWall.js')

const cheerio = require('cheerio');
const EventEmitter = require('events');






class GroupWallPostEvent extends EventEmitter {
    /**
     * 
     * @param {Integer / String} groupId The group's id (number or string)
     * @param {Object} settings The settings to add *(optional)*
     * @example
     * var stream = new group.onWallPost(groupId, {interval:2000})
     * stream.on('posts', function(newPosts) {
     *      console.log("New posts")
     * })
     */
    constructor(group, settings) {
        super()
        this.hidden = group.hidden;
        var settings = settings || {}
        this.interval;
        this.intervalWait = settings.interval || 5000;
        this.init(group.id, this.hidden);
    }

    /**
     * 
     * @param {Int} groupId The group id
     * DO **NOT** USE THIS, USING THIS WILL STRESS THE NETWORK EVEN MORE,
     * AND COULD POTENTIALLY FIRE THE EVENT MORE THAN ONCE!
     */
    init(groupId, opts) {

        getNewPosts(groupId, opts).then(newPosts => {
            if (!newPosts || newPosts.length <= 0) return;

            console.log(newPosts)
            var newPosts = newPosts.map(x => new groupClass.WallPost(x, groupId, opts))
            this.emit('posts', newPosts);
            var getMyBB = getHighestId(newPosts)
            global.Walls[groupId] = getMyBB;
        })

        this.interval = setInterval(() => {
            // Execute function to check the wall, if changed from the cached version, then emit the new post as GroupShout class and set it as the new cache
            getNewPosts(groupId, opts).then(newPosts => {
                if (!newPosts || newPosts.length <= 0) return;
                var newPosts = newPosts.map(x => new groupClass.WallPost(x, groupId, opts))
                this.emit('posts', newPosts);
                var getMyBB = getHighestId(newPosts)
                global.Walls[groupId] = getMyBB;
            })
        }, this.intervalWait);

    }

    /**
     * Call this function if you'd like to stop checking for new wall posts
     */
    stop() {

        clearInterval(this.interval);
        return true;
    }
}



async function getNewPosts(groupId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        getWall(groupId, opts).then(posts => {


            if (!posts || posts.length <= 0) {
                global.Walls[groupId] = new groupClass.WallPost({ id: 1, poster: {}, body: '' }, groupId, opts)
                return resolve(null)
            }
            var getBb = getHighestId(posts)
            if (!global.Walls[groupId]) {
                global.Walls[groupId] = new groupClass.WallPost(getHighestId(posts), groupId, opts)
                return resolve(null);
            } else {
                var newPosts = getAllOver(posts, global.Walls[groupId].id);
                if (newPosts.length > 0) {
                    return resolve(newPosts)
                } else return resolve(null);
            }
        })
    })
    return newPromise
}

function getHighestId(l) {
    var b = l.sort(function (a, b) { return b.id - a.id })
    return b[0];
}

function getAllOver(l, x) {
    var all = []
    for (var i = 0; i < l.length; i++) {
        var post = l[i];
        if (post.id > x) {
            all.push(post)
        }
    }
    return all;
}


module.exports = GroupWallPostEvent //function (/*groupClass, settings*/) {