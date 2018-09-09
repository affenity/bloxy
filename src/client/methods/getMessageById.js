const m_getMessages = require('./getMessages');
const classes = require('../../classes')

module.exports = async function (messageId, self) {
    let newPromise = new Promise(async function (resolve, reject) {
        getMessagesAndFindById(0, messageId, self).then( msg => {
            resolve(msg);
        }).catch(reject);
    })
    return newPromise;
}

async function getMessagesAndFindById (page, id, self) {
    let newPromise = new Promise(async function (resolve, reject) {

        m_getMessages({page: page || 0, limit: 50}, self).then(response=>{
            let { totalPages, currentPage, messages } = response;

            let findMessage = messages.find(x=>x.id.toString() == id.toString());
            if (findMessage != null) return resolve(findMessage);
            if (currentPage >= totalPages) return reject(`Could not find message by id`)

            resolve(getMessagesAndFindById(page+1, id, self));
        }).catch(reject);

    })
    return newPromise;
}