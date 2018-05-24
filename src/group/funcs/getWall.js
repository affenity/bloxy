//paging_pagenums_container
const fetch = require('../../util/fetch.js')
const parser = require('cheerio');
var groupClass = require('../class.js');
var userClass = require('../../user/class.js');
/*
function getPosts(page) {
    let $ = parser.load(page);
    var posts = $('.GroupWall_PostContainer');
    console.log("loaded")
    let cPage = $('#ctl00_cphRoblox_GroupWallPane_GroupWallPager_ctl01_Div1').text().trim();
    console.log(cPage);

    var totPosts = [];

    for (var x = 0; x < posts.length; x++) {
        let container = posts.eq(x);
        let post = container.parent().parent();
        let user = post.find('.UserLink').find('a');
        console.log('hi');
        let elm = {
            content: container.text(),
            author: {
                id: parseInt(user.attr('href').match(/\d+/)[0], 10),
                name: user.text().trim()
            },
            date: new Date(post.find('.GroupWall_PostDate').find('span').eq(0).text()),
            parent: {
                page: cPage,
                index: x
            }
        }
        console.log(elm);
        totPosts.push(elm);
    }
}*/


module.exports = async function (groupId, opts) {
    
    var opts = opts || {}
    var newPromise = new Promise(function (resolve, reject) {
        var url = `https://groups.roblox.com/v1/groups/${groupId}/wall/posts?sortOrder=Desc&limit=${opts.limit || 50}`
        fetch(url, {jar:opts.jar, xcsrf:opts.xcsrf}).then(({res}) => {
            var json = JSON.parse(res.body);
            var listWallPosts = json.data;

            var listPosts = [];
            resolve(listWallPosts);
        }).catch(reject);
    })
    return [].concat(await newPromise).map(x=>new groupClass.WallPost(x, groupId, opts));
}