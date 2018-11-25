const cheerio = require("cheerio");

module.exports = function (html) {
	let $ = cheerio.load(html);

	let inputs = {};
	let toFind = ["__VIEWSTATE", "__VIEWSTATEGENERATOR", "__EVENTVALIDATION", "__RequestVerificationToken"];

	for (let num = 0; num < toFind.length; num++) {
		let find = toFind[num];

		inputs[find] = $(`input[name=${find}]`).val();
	}

	return inputs;
};