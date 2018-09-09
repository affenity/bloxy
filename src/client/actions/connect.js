const EventEmitter = require('events');
const BloxyClient = require('../client.js');
const signal = require('signalr-client').client;


class BloxyNotifications extends EventEmitter {
    
    /**
     * 
     * @param {BloxyClient} client 
     */
    constructor (client) {
        super();
        
        this.listener = new signal('wss://realtime.roblox.com/notifications', ['usernotificationhub'], 3, true);
        this.listener.headers['Cookie'] = client._setup.jar.getCookieString('https://roblox.com/');
        this._client = client;
        init(this);
    }

}


function init(self) {

    let client = self._client;

    self.listener.on('usernotificationhub', 'notification', function(name, data) {

        let loweredName = name.toLowerCase();
        let otherName = name.toLowerCase();
        let dataJSON = JSON.parse(data);

        let eventType = (dataJSON && dataJSON.Type != null) ? dataJSON.Type.toLowerCase() : loweredName;
        
        if (loweredName == 'friendshipnotifications') {

            if (eventType == 'friendshipcreated') {
                if (dataJSON.EventArgs.UserId2 !== self._client.account.userId) client.emit('newFriend', dataJSON.UserId2);
            } else if (eventType == 'friendshipdestroyed') {
                if (dataJSON.EventArgs.UserId2 !== self._client.account.userId) client.emit('lostFriend', dataJSON.EventArgs.UserId2);
            } else if (eventType == 'friendshiprequested') {
                if (dataJSON.EventArgs.UserId1 == self._client.account.userId) client.emit('friendRequestSent', dataJSON.EventArgs.UserId2);
                if (dataJSON.EventArgs.UserId1 != self._client.account.userId) client.emit('friendRequestReceived', dataJSON.EventArgs.UserId1);
            }

        } else if (loweredName == 'notificationstream') {

            client.emit('notification', eventType, dataJSON);

        } else if (loweredName == 'chatnotifications') {

            if (eventType == 'conversationremoved') {
                client.emit('conversationRemoved', dataJSON.ConversationId);
            } else client.emit('other', eventType, dataJSON);

        } else if (loweredName == 'messagenotification') {

            if (eventType == 'created') client.emit('message', dataJSON.MessageId);
            if (eventType == 'archived') client.emit('messageArchived', dataJSON.MessageId);
            if (eventType == 'unarchived') client.emit('messageUnarchived', dataJSON.MessageId);
            if (eventType == 'markasread') client.emit('messageRead', dataJSON.MessageId);
            if (eventType == 'markasunread') client.emit('messageUnread', dataJSON.MessageId);
            
        } else if (loweredName == 'presencebulknotifications') {

            if (eventType == 'presencechanged') client.emit('presenceChanged', dataJSON.UserId);

        } else if (loweredName == 'avatarassetownershipnotifications') {

            if (eventType == 'grant') client.emit('assetAdded', {
                assetTypeId: dataJSON.AssetTypeId,
                assetId: dataJSON.AssetId
            })
            if (eventType == 'revoke') client.emit('assetRemoved', {
                assetTypeId: dataJSON.AssetTypeId,
                assetId: dataJSON.AssetId
            })
        }
        
    })


    self.listener.serviceHandlers.connected = function() {
        
    }

    self.listener.serviceHandlers.reconnected = function() {
        client.emit('reconnected')
    }

    self.listener.serviceHandlers.ended = function() {
        client.emit('ended')
    }

    self.listener.start()
}

module.exports = BloxyNotifications