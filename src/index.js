// The entry file for bloxy

// This file just initialises everything 

// Uses the global function, will not 


global.bloxy = {};

// This is just easier for me to develop bloxy
global.bloxy.cache    = require('./util/globalCache')
global.bloxy.fetch    = require('./util/fetch')
global.bloxy.getXcsrf = require('./util/getXcsrf')
global.bloxy.messages = require('./util/setup/messages')
global.bloxy.endpoints= require('./util/setup/endpoints')
global.bloxy.authenticate = require('./util/authenticate')
global.bloxy.getVerification = require('./util/getVerification')
global.bloxy.captchaHandler = require('./util/captchaHandler')
global.bloxy.validateUser = require('./util/validateUser')


module.exports = require('./types/noAuth/index')