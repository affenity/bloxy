//ctl00_cphRoblox_GroupStatusPane_StatusView

const fetch = require('../../util/fetch.js')
const groupClass = require('../class.js')
const groupFuncs = require('../main.js');
const getJoinRequests = require('../funcs/getJoinRequests.js')

const cheerio = require('cheerio');
const EventEmitter = require('events');





class GroupJoinEvent extends EventEmitter {
    /**
     * 
     * @param {Integer / String} groupId The group's id (number or string)
     * @param {Object} settings The settings to add *(optional)*
     * @example
     * var stream = new group.onJoinRequest(groupId, {interval:2000})
     * stream.on('request', function(request) {
     *      console.log("New join request")
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
        getNewRequests(groupId, opts).then(newReqs => {
            if (!newReqs || newReqs.length <= 0) return;

            var newReqs = newReqs.map(x => new groupClass.GroupJoinRequest(x, opts))
            this.emit('requests', newReqs);
            var getMyBB = getHighestId(newReqs)
            global.JoinRequests[groupId] = getMyBB;
        })

        this.interval = setInterval(() => {
            // Execute function to check the wall, if changed from the cached version, then emit the new post as GroupShout class and set it as the new cache
            getNewRequests(groupId, opts).then(newReqs => {
                if (!newReqs || newReqs.length <= 0) return;

                var newReqs = newReqs.map(x => new groupClass.GroupJoinRequest(x, opts))
                this.emit('requests', newReqs);
                var getMyBB = getHighestId(newReqs)
                global.JoinRequests[groupId] = getMyBB;
            })
        }, this.intervalWait);

    }

    /**
     * Call this function if you'd like to stop checking for new join requests
     */
    stop() {

        clearInterval(this.interval);
        return true;
    }
}



async function getNewRequests(groupId, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        getJoinRequests(groupId, opts).then(reqs => {
            if (!reqs || reqs.length <= 0) {
                global.JoinRequests[groupId] = new groupClass.GroupJoinRequest({ username: '', userId: 1, body: '', requestId: 1, groupId: groupId }, opts)
                return resolve(null)
            }
            var getBb = getHighestId(reqs)
            if (!global.JoinRequests[groupId]) {
                global.JoinRequests[groupId] = new groupClass.GroupJoinRequest(getHighestId(reqs), opts)
                return resolve(null);
            } else {
                var newReqs = getAllOver(reqs, global.JoinRequests[groupId].requestId);
                if (newReqs.length > 0) {
                    return resolve(newReqs)
                } else return resolve(null);
            }
        })
    })
    return newPromise
}

function getHighestId(l) {
    var b = l.sort(function (a, b) { return b.requestId - a.requestId })
    return b[0];
}

function getAllOver(l, x) {
    var all = []
    for (var i = 0; i < l.length; i++) {
        var req = l[i];
        if (req.requestId > x) {
            all.push(req)
        }
    }
    return all;
}


module.exports = GroupJoinEvent //function (/*groupClass, settings*/) {