const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const bloxyClasses = require('../../../../../classes');

const getJoinRequests = require('./getJoinRequests')

const cheerio = require('cheerio')
const EventEmitter = require('events')


/**
 * @event JoinRequestEvent#requests
 * @type {Array} lol
 */


class JoinRequestEvent extends EventEmitter {


    /**
     * An event emitter that emits once a new user requested to join a group
     * @param {Class} group The group class
     * @param {Object} settings (*Optional*) Settings
     * @param {Number} settings.interval The time to wait between each check for new join requests
     */
    constructor(group, settings) {
        super();
        this._id = group._id;
        settings = settings || {};
        this.interval;
        this.intervalWait = settings.interval || 5000;
        init(group.groupId, this._id, this);
    }


    stop() {
        if (this.interval) clearInterval(this.interval);
        return true;
    }

}

 

/**
 * @event JoinRequestEvent#requests 
 */
function init(groupId, id, self) {
    
    getJoinRequests(groupId, {}, id).then(reqs=>{
        let newReqs = reqs.map(x=> new bloxyClasses.groupClass.JoinRequest(x, id));
        let getMyBB = getHighestId(newReqs)
        globalCache.JoinRequests[groupId] = getMyBB || 0;
        self.emit('ready')
        self.interval = setInterval( () => {
            getNewRequests(groupId, id).then(reqs=>{
                if (!reqs || reqs.length <= 0) return;

        let newReqs = reqs.map(x=> new bloxyClasses.groupClass.JoinRequest(x, id));
        self.emit('requests', newReqs)
        let getMyBB = getHighestId(newReqs)
        globalCache.JoinRequests[groupId] = getMyBB;
            })
        }, self.intervalWait);
    })
}





async function getNewRequests(groupId, id) {
    var newPromise = new Promise(function (resolve, reject) {
        getJoinRequests(groupId, {},  id).then(reqs => {
            if (!reqs || reqs.length <= 0) {
                globalCache.JoinRequests[groupId] = new bloxyClasses.groupClass.JoinRequest({ username: '', userId: 1, body: '', requestId: 1, groupId: groupId }, id)
                return resolve(null)
            }
            var getBb = getHighestId(reqs)
            if (!globalCache.JoinRequests[groupId]) {
                globalCache.JoinRequests[groupId] = new bloxyClasses.groupClass.JoinRequest(getHighestId(reqs), opts)
                return resolve(null);
            } else {
                var newReqs = getAllOver(reqs, globalCache.JoinRequests[groupId].requestId);
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


module.exports = JoinRequestEvent;