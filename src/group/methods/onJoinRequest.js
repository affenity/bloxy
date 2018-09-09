const EventEmitter    = require('events');
const group           = require('../group');
const getJoinRequests = require('./getJoinRequests');

const Cache = {};


class JoinRequestEvent extends EventEmitter {

    /**
     * 
     * @param {group.Group} group 
     * @param {Object} settings 
     */
    constructor(group, settings) {
        super();
        this._group = group;
        this._self  = group._setup;
        settings = settings || {};
        this.interval;
        this.intervalWait = settings.interval || 10000;
        this.init(); 
    }


    init () {


        getJoinRequests({groupId: this._group.groupId}, this._self).then(reqs=>{
            var newReqs = reqs.map(x=> new group.JoinRequest(x, this._self));
            var getHighest = getHighestId(newReqs);
            Cache[this._group.groupId] = getHighest || 0;
            this.emit('ready');
            this.interval = setInterval( () => {
                getNewRequests(this._group.groupId, this._self).then(reqs => {
                    if (!reqs || reqs.length <=0) return;

                    var newReqs = reqs.map(x=> new group.JoinRequest(x, this._self));
                    this.emit('requests', newReqs);
                    var getHighest = getHighestId(newReqs);
                    Cache[this._group.groupId] = getHighest;
                });
            }, this.intervalWait)
        })
    }

    stop () {
        return clearInterval(this.interval)
    }
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


async function getNewRequests(groupId, self) {
    let newPromise = new Promise(function (resolve, reject) {
        getJoinRequests({groupId: groupId}, self).then(reqs => {
            if (!reqs || reqs.length <= 0) {
                Cache[groupId] = new group.JoinRequest({ username: '', userId: 1, body: '', requestId: 1, groupId: groupId }, self);
                return resolve(null)
            }
            if (!Cache[groupId]) {
                Cache[groupId] = new group.JoinRequest(getHighestId(reqs), opts)
                return resolve(null);
            } else {
                var newReqs = getAllOver(reqs, Cache[groupId].requestId);
                if (newReqs.length > 0) {
                    return resolve(newReqs)
                } else return resolve(null);
            }
        })
    })
    return newPromise
}


module.exports = JoinRequestEvent