const UserClass = require('./User');
const ClientMethods = require('../client/methods');

class RobloxMessage {
    constructor(message, self) {
        this._self = self;


        this.id = message.Id;
        this.sender = new UserClass.PartialUser(message.Sender, self);
        this.recipient = new UserClass.PartialUser(message.Recipient, self);

        this.subject = message.Subject;
        this.body    = message.Body;

        this.created = new Date(message.Created);
        this.updated = new Date(message.Updated);

        this.isRead = Boolean(message.IsRead);
        this.isSystemMessage = Boolean(message.IsSystemMessage);

    }

    async reply (subject, message) {
        let setup = {
            subject: subject,
            message: message,
            recipientId: (this._self._client.account.userId == this.sender.userId ? this.recipient.userId : this.sender.userId)
        }
        return ClientMethods.messageUser(setup)
    }

    async archive () {
        return ClientMethods.archiveMessages([this.id], this._self);
    }

    async moveToInbox () {
        return ClientMethods.messagesToInbox([this.id], this._self);
    }

    async markRead (markRead) {
        if (markRead==true) return ClientMethods.markMessagesRead([this.id], this._self);
        return ClientMethods.markMessagesUnread([this.id], this._self);
    }
}

exports.RobloxMessage = RobloxMessage;