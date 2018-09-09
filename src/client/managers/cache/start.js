const easydata = require('easydata');
const path     = require('path');

const cacher   = new easydata({
    name: '.cache',
    path: path.join(__dirname, './storage'),
    compress: false
})

cacher.init().then( async () => {
    
})

module.exports = cacher;