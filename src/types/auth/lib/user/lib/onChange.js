const bloxyFunctions = require('../../bloxy/main')
const EventEmitter = require('events')
const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;



class UserChangedEvent extends EventEmitter {

    constructor(userId, settings, id) {
        super();
        settings = settings || {};
        this._id = id;
        this.userId = userId,
        this.interval;
        this.intervalWait = settings.interval || 5000;
        init(this.userId, this);
    }

    stop() {
        if (this.interval) clearInterval(this.interval);
        return true;
    }
}



function init(userId, self) {
    bloxyFunctions.getUserProfile(userId).then(profile=>{
        if (profile.status) {
            let status = profile.status;
            globalCache.Statuses[userId] = status;
        }
        if (profile.blurb) {
            let blurb = profile.blurb;
            globalCache.Blurbs[userId] = blurb;
        }
        
        self.interval = setInterval( () => {
            bloxyFunctions.getUserProfile(userId).then(profile=>{
                let {status, blurb} = profile;
                if (status) {
                    let cachedStatus = globalCache.Statuses[userId];
                    if (!cachedStatus || status.toLowerCase() !== cachedStatus.toLowerCase() ) self.emit('newStatus', {
                        new: status,
                        old: cachedStatus || ''
                    })
                    globalCache.Statuses[userId] = status;
                }

                if (blurb) {
                    let cachedBlurb = globalCache.Blurbs[userId];
                    if (!cachedBlurb || blurb.toLowerCase() !== cachedBlurb.toLowerCase()) self.emit('newBlurb', {
                        new: blurb,
                        old: cachedBlurb||''
                    })
                    globalCache.Blurbs[userId] = blurb;
                }
            }).catch(console.error);
        }, self.intervalWait);
    }).catch(console.error);
}


module.exports = UserChangedEvent;