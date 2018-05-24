const fetch = require('./fetch.js')
const getVerificationInputs = require('./getVerificationInputs.js');


module.exports = async function (url, opts) {
    var newPromise = new Promise(function (resolve, reject) {
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var inputs = getVerificationInputs(res.body);
            var match;
            if (res.headers && res.headers['set-cookie']) {
                match = res.headers['set-cookie'].toString().match(/__RequestVerificationToken=(.*?);/)
            }
            resolve({
                inputs: inputs,
                header: match && match[1]
            })
        }).catch(reject);
    })
    return newPromise
}