const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const EventEmitter = require('events')
const bloxyClasses = require('../../../../../classes/index')
const bloxyFunctions = require('../../../lib/bloxy/main')

/**
 * @event GroupChangeEvent#shout
 * @type {Object}
 * @property {String} new
 */
class GroupChangeEvent extends EventEmitter {

    /**
     * 
     * @param {Class} group 
     * @param {Object} settings
     * @param {Number} settings.interval 
     */
    constructor(group, settings) {
        super();
        this._id  = group._id;
        settings = settings || {};
        this.intervalWait = settings.interval || 30000;
        init(group.groupId, group._id, this);
    }

}



function init(groupId, cId, self) {
    bloxyFunctions.getGroup(groupId, cId).then(groupInfo=>{
        
        if (groupInfo && groupInfo.shout) globalCache.Shouts[groupId] = new bloxyClasses.groupClass.Shout(groupInfo.shout, self._id);
        self.emit('ready')
        self.interval = setInterval( () => {
            bloxyFunctions.getGroup(groupId, cId).then(groupInfo=>{
                if (!groupInfo || !groupInfo.shout) return;
                let thisShout = groupInfo.shout;
                let cachedShout = globalCache.Shouts[groupId]
                if (thisShout && cachedShout) {
                if (!cachedShout || thisShout.body.toLowerCase()!==cachedShout.body.toLowerCase()) self.emit('shout', {
                    new: thisShout.body,
                    old: cachedShout.body
                })
            }
                globalCache.Shouts[groupId] = new bloxyClasses.groupClass.Shout(thisShout, self._id);
            })
        }, self.intervalWait);
    })
}

module.exports = GroupChangeEvent