const easydata = require('easydata');
const path     = require('path');


let toHour     = (n) => n * 1000 * 60 * 60;
let cache      = {};
let cacheInfo  = {};

const cacher   = new easydata({
    name: '.cache',
    path: path.join(__dirname, './storage'),
    compress: true
})

const defaultCacheSettings = {

    getuser: {
        duration: toHour (.5),
        cachedKeys: [] // { key: x, last: Date.now() etc.}
    },
    getgroup: {
        duration: toHour (2),
        cachedKeys: [] // { key: x, last: Date.now() etc.}
    },
    getidbyusername: {
        duration: null
    }

}


cacher.init().then( async () => {
    cache = await cacher.get('cache') || {};
    let getCacheInfo = await cacher.get('cacheInformation');
    if (!getCacheInfo) await cacher.save('cacheInformation', defaultCacheSettings);
    cacheInfo = defaultCacheSettings;

    setInterval( async () => {
        await exports.getCacheInfo();
        let keys = Object.keys(cacheInfo);
        
        let newCacheInfo = {};

        for (let n=0; n<keys.length;n++) {
            let categorySettings = cacheInfo[keys[n]];
            if (categorySettings && categorySettings.duration != null && categorySettings.cachedKeys != null) {
                let newCachedKeys = [];
                for (let x=0;x<categorySettings.cachedKeys.length;x++) {
                    let thisKey = categorySettings.cachedKeys[x];
                    let isOutdated = ((Date.now() - parseInt(thisKey.last)) >= (categorySettings.duration) ? true: false);
                    if (isOutdated != true) newCachedKeys.push(thisKey);
                    if (isOutdated == true) {
                        exports.deleteCache(keys[n], thisKey.key);
                    }
                }
                categorySettings.cachedKeys = newCachedKeys;
            }
            newCacheInfo[keys[n]] = categorySettings;
        }

        await exports.updateCacheInfo(newCacheInfo);
    }, 60000);  
})

exports.getCacheInfo = async function () {
    cacheInfo = await cacher.get('cacheInformation') || defaultCacheSettings;
    return cacheInfo;
}

exports.updateCacheInfo = async function (info) {
    cacheInfo = info || cacheInfo;
    await cacher.save('cacheInformation', info || cacheInfo);
}

exports.cache = async function (category, key, value) {
    if (!category || key == null || value == null) throw new Error("Tried to set cache but did not provide category, key and value");
    category = category.toString().toLowerCase(), key = key.toString().toLowerCase();
    if (!cache[category]) cache[category] = {[key]: value};
    cacher.save('cache', cache);
    await exports.getCacheInfo();

    let categorySettings = cacheInfo[category];
    if (categorySettings && categorySettings.duration != null && categorySettings.cachedKeys != null) {
        categorySettings.cachedKeys.push({key: key, last: Date.now().toString()});
        cacheInfo[category] = categorySettings;
        await exports.updateCacheInfo();
    }    
}

exports.getCache = async function (category, key) {
    if (!category || key == null) throw new Error("Tried to set cache but did not provide category and key");
    category = category.toString().toLowerCase(), key = key.toString().toLowerCase();
    if (!cache[category]) return null;
    return cache[category][key];
}

exports.deleteCache = async function (category, key) {
    if (!category || key == null) throw new Error("Tried to set cache but did not provide category and key");
    category = category.toString().toLowerCase(), key = key.toString().toLowerCase();
    if (!cache[category]) return null;
    delete cache[category][key];
    await cacher.save('cache', cache);
}


exports.setCacheDuration = async function (options={}) {
    return mergeCacheSettings(options);
}


async function mergeCacheSettings (other) {
    let original = await exports.getCacheInfo();
    if (other.user !== undefined) original.getuser.duration = toHour(other.user);
    if (other.group !== undefined) original.getgroup.duration = toHour(other.group);
    if (other.getIdByUsername !== undefined) original.getidbyusername.duration = toHour(other.getIdByUsername);
    if (original.getidbyusername !== undefined) original.getidbyusername.cachedKeys = [];
    return await exports.updateCacheInfo(original);
}