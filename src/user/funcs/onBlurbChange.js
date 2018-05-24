const getUserProfile = require('./getUserProfile.js')
const EventEmitter = require('events');


class UserBlurbChangeEvent extends EventEmitter {

    /**
     * Creates an event emitter that fires once a user changes their blurb
     * @param {Number} userId The userid
     * @param {Object} opts Set the interval, i.e opts.interval=2000
     * @example
     * var blurbChange = new user.onBlurbChange(user.userId, {interval:2000})
     * blurbChange.on('change', function(newBlurb, oldBlurb) {
     *      console.log(newBlurb);
     * })
     * // END
     */


    constructor(userId, opts) {
        super()
        var settings = settings || {}
        this.interval;
        this.intervalWait = settings.interval || 5000;
        this.init(userId, opts);
    }
    

    init(userId, opts) {
        getUserBlurb(userId, opts).then(blurb => {
            if (!blurb) return;
            global.Blurbs[userId] = blurb;
        })

        this.interval = setInterval(() => {
            getUserBlurb(userId).then(userBlurb => {
                if (!userBlurb) return;

                if (userBlurb != global.Blurbs[userId]) {
                    this.emit('change', userBlurb, global.Blurbs[userId]);
                    global.Blurbs[userId] = userBlurb;
                }
            })
        }, this.intervalWait)
    }


    stop() {
        clearInterval(this.interval)
        return true;
    }
}


module.exports = UserBlurbChangeEvent;
async function getUserBlurb(id, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        var userId = id//.valueOf()
        getUserProfile(userId).then(profile => {
            if (!profile || !profile.Blurb) resolve(null);
            let blurb = profile.Blurb
            resolve(blurb);
        })
    })

    return newPromise
}