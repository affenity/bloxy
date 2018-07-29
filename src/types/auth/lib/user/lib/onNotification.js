const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const EventEmitter = require('events')


const signal = require('signalr-client').client;



class NotificationEvent extends EventEmitter {
    
    constructor(id) {


        super();
        this._id = id;
        let thisSetup = globalCache.Setups[this._id];
        this.listener = new signal('wss://realtime.roblox.com/notifications', ['usernotificationhub'], 3, true);
        this.listener.headers['Cookie'] = thisSetup.jar.getCookieString('https://roblox.com/');

        init(this);
    }

    /**
     * Stops the notification stream
     */
    stop () {
        listener.end();
    }
    

}

function init(self) {

    self.listener.on('usernotificationhub', 'notification', function(name, data) {

        let loweredName = name.toLowerCase();
        let otherName = name.toLowerCase();
        let dataJSON = JSON.parse(data);

        if (loweredName == 'messagenotification') {

            return self.emit('newMessage', dataJSON.MessageId);

        } else if (loweredName == 'newnotification') {

            return self.emit('newNotification');

        } else if (loweredName == 'presencecbulknotifications') {
            
            return self.emit('presenceBulkNotifications', dataJSON);
            
        }
        
        if (otherName == 'friendshipnotifications') {

            let typ = dataJSON.Type;

            if (typ == 'FriendshipRequested') return self.emit('friendRequest', dataJSON.UserId1)

        }

        console.log(loweredName)
        return self.emit('other', name, data);

        
    })


    self.listener.serviceHandlers.connected = function() {
        self.emit('ready');
    }

    self.listener.serviceHandlers.reconnected = function() {
        self.emit('reconnected')
    }

    self.listener.serviceHandlers.ended = function() {
        self.emit('ended')
    }

    self.listener.start()
}

module.exports = NotificationEvent;