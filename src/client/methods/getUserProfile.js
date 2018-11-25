

const cheerio = require("cheerio");


exports.run = async function (userId, overrideCache) {
    
	let url = `https://www.roblox.com/users/${userId}/profile`;
        
	if (!overrideCache) {
		let find = await this._setup.cache.getUserCache(userId);
		if (find) return new this._setup.classes.RobloxUser(find, this);
	}
    
	let response = await this._setup.request.request(url);
	if (response.statusCode !== 200) throw new Error(`Could not get user profile. User does not exist. ${response.status}`);


	try {
		let body = response.body;
		let $ = cheerio.load(body);
		let userStatus = $("div[data-statustext]").attr("data-statustext");
		let userBlurb = $(".profile-about-content-text").text();
		let userName = $(".header-title").text();


		let joinDate = body.toString("utf8").match(/Join Date<p class=text-lead>(.*?)<li/)[1];
		let joinTime = new Date(joinDate).getTime();

		let accountAgeREAL = datediff(joinTime, Date.now());
		let bc = "NBC";

		let numFriends = parseInt($("div[data-friendscount]").attr("data-friendscount"));

		let getObc = $("span[class=\"icon-obc\"]").html();
		let getTbc = $("span[class=\"icon-tbc\"]").html();
		let getBc = $("span[class=\"icon-bc\"]").html();

		if (getObc != null) {
			bc = "OBC";
		} else if (getTbc != null) {
			bc = "TBC";
		} else if (getBc != null) {
			bc = "BC";
		} else {
			bc = "NBC";
		}

		let findImgs = $(`img[alt="${userName}"]`);

		let pfp, avatarPic;

		if (findImgs != null) {
			pfp = findImgs.eq(0).attr("src").toString();
			avatarPic = findImgs.eq(1).attr("src").toString();
		}


		let makeReturn = {
			status: userStatus,
			blurb: userBlurb,
			username: userName,
			userId: userId,
			joinDate: joinDate,
			accountAge: accountAgeREAL,
			bc: bc,
			numFriends: numFriends,
			pfp: pfp,
			avatarPic: (typeof(avatarPic) == "string" ? avatarPic : null),        
		};

		this._setup.cache.cacheUser(userId, makeReturn);
		return new this._setup.classes.RobloxUser(makeReturn, this);




	} catch (err) {
		throw new Error(err);
	}
};

function datediff(first, second) {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

exports.conf = {
	required: {
		params: 1
	},

	name: "getUserProfile",
	description: "Gets a user's profile",
	params: ["userId (Number)"]
};