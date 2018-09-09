const EventEmitter  = require('events');
const group         = require('../group');
const ClientMethods = require('../../client/methods');

const Cache = {};

class GroupChangeEvent extends EventEmitter {

    /**
     * 
     * @param {group.Group} group 
     */
    constructor (group, settings) {
        super();
        this._group = group;
        this._self = group._setup;

        settings = settings || {};
        this.intervalWait = settings.interval || 30000;
        this.init();
    }

    init () {
        ClientMethods.getGroup(this._group.groupId, this._self).then(groupInfo => {

            if (groupInfo && groupInfo.shout) Cache[this._group.groupId] = new group.GroupShout(groupInfo.shout, this._self);
            this.emit('ready');
            this.interval = setInterval( () => {
                ClientMethods.getGroup(this._group.groupId, this._self).then(groupInfo => {
                    if (!groupInfo || !groupInfo.shout) return;
                    let thisShout = groupInfo.shout;
                    let cachedShout = Cache[this._group.groupId];
                    if (!cachedShout) return Cache[this._group.groupId] = new group.GroupShout(thisShout, this._self);
                    
                    if (thisShout.body.toLowerCase() != cachedShout.body.toLowerCase()) self.emit('shout', {
                        new: new group.GroupShout(thisShout, self),
                        old: cachedShout
                    })

                    Cache[this._group.groupId] = new group.GroupShout(thisShout, this._self);
                })
            }, this.intervalWait);
        })
    }

    stop () {
        return clearInterval(this.interval);
    }
}


module.exports = GroupChangeEvent;