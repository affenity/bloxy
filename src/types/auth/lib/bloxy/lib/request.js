const bloxyUtil = global.bloxy;
const globalCache = bloxyUtil.cache;
const fetch = bloxyUtil.fetch;

/**
 * 
 * @param {Object} setup
 * @param {String} setup.url 
 * @param {String} setup.method
 * @param setup.body
 * @param setup.json
 * @param setup.form
 * @param {Number} id 
 */
module.exports = async function(setup, id) {
    var newPromise = new Promise(async function(resolve, reject) {
        let url = setup.url;
        let method = setup.method || 'GET';

        fetch(url, {
            method: method,
            body: setup.body,
            json: setup.json,
            form: setup.form,
            id: id
        }).then(({res})=>{
            resolve(res);
        }).catch(reject);
    })
    return newPromise;
}