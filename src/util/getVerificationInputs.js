const parser = require('cheerio');

module.exports = function (html) {

    var $ = parser.load(html);

    var inputs = {};
    var find = ['__VIEWSTATE', '__VIEWSTATEGENERATOR', '__EVENTVALIDATION', '__RequestVerificationToken'];
    for (var i = 0; i < find.length; i++) {
        var get = find[i];
        inputs[get] = $('input[name=' + get + ']').val();
    }
    return inputs;
}