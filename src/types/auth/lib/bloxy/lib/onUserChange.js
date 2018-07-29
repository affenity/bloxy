const getUserProfile = require('./getUserProfile');
const EventEmitter = require('events');


const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;
const endpoint = bloxyUtil.endpoints.bloxy.messageUser;



// to-do

// Whenever the user changes something on their profile as:

// username (unnecessary but lol), blurb, status


class UserChange extends EventEmitter {


    constructor(userId, id) {
        this.setup = {
            userId: userId,
            _id: id
        };
        
        
    }

}