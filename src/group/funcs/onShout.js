//ctl00_cphRoblox_GroupStatusPane_StatusView

const fetch = require('../../util/fetch.js')
const groupClass = require('../class.js')

const cheerio = require('cheerio');
const EventEmitter = require('events');






class GroupShoutPostEvent extends EventEmitter {
    /**
     * 
     * @param {Class} group The group 
     * @param {Object} settings Settings to add *(optional)*
     * @example
     * var onShout = new group.onShout(group, {interval:2000})
     * onShout.on('shout', function(shout) {
     *      
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
     * @param {GroupClass} group The group id
     * DO **NOT** USE THIS, USING THIS WILL STRESS THE NETWORK EVEN MORE,
     * AND COULD POTENTIALLY FIRE THE EVENT MORE THAN ONCE!
     */
    init(groupId, opts) {

        this.interval = setInterval(() => {
            // Execute function to check the wall, if changed from the cached version, then emit the new post as GroupShout class and set it as the new cache
            fetch(`https://groups.roblox.com/v1/groups/${groupId}`, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
                var body = JSON.parse(res.body);
                var theShout = body.shout;
                if (!theShout || !theShout.body) return;
                if (!global.Shouts[groupId]) {
                    global.Shouts[groupId] = new groupClass.Shout(theShout, opts);
                } else if (global.Shouts[groupId].body != theShout.body) {
                    if (!global.Shouts[groupId].body) return;

                    global.Shouts[groupId] = new groupClass.Shout(theShout, opts) //new shout class here
                    //this.emit('wallPost', new groupClass.GroupShout(theShout));
                    this.emit('shout', new groupClass.Shout(theShout, opts))
                }
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




module.exports = GroupShoutPostEvent/*async function (groupClass, settings) {
    return new GroupShoutPostEvent(groupClass, settings);
}*/