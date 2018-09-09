const cacher = require('./start');
let cache  = {};


exports.cache = async function (category, identifier, value) {
    await refreshCache();
    addToCategory(category, identifier, value);
    await saveCache();   
}

exports.getCache = async function (category, identifier) {
    await refreshCache();
    let find = getFromCategory(category, identifier);
    return find;
}


async function refreshCache () {
    cache = {};
    cache = await cacher.get('cache') || {};
}

function handleCategory (cat) {
    let get = getCategory(cat);
    if (!get) addCategory(cat, get);
    return get || getCategory(cat);
}

function getCategory (cat) {
    return cache[cat.toString().toLowerCase()];
}

function addCategory (cat, v) {
    return cache[cat.toString().toLowerCase()] = v || {};
}

async function addToCategory (cat, identifier, value) {
    let category = handleCategory(cat);
    category[identifier.toString().toLowerCase()] = value;
    return true;
}

async function getFromCategory (cat, identifier) {
    let category = handleCategory(cat);
    return category[identifier.toString().toLowerCase()];
}

async function saveCache () {
    await cacher.save('cache', cache);
}