const getMessages = require('./getMessages')

module.exports = async function(messageId, id) {
    var newPromise = new Promise(async function(resolve, reject) {

        function check(msgs) {
            let findMessage = msgs.find(msg=>msg.Id==messageId);
            return findMessage;
        }
        let firstGetMessages = await getMessages({page:0}, id).catch(reject);
        let totalPages = firstGetMessages.totalPages;
        let messages = firstGetMessages.messages;

        let find = check(messages);
        if (find) return resolve(find);

        for (var page=1;page<totalPages;page++) {
            let msgs = await getMessages({page: page}, id).catch(reject);
            let find = check(msgs.messages);
            if (find) return resolve(find);
        }
        resolve(null);
    })
    return newPromise;
}