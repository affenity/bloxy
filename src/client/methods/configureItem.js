

exports.run = async function (setup) {
	let assetId = setup.assetId;
	let title = setup.title;
	let description = setup.description;
	let enableComments = setup.enableComments;
	let sellForRobux = setup.sellForRobux;
	let genreSelection = setup.genreSelection;

	if (typeof(assetId) === "undefined" || !title) throw new Error("Must provide assetId and title");

	let url = `https://www.roblox.com/My/Item.aspx?ID=${assetId}`;

	let verificationResponse = await this._setup.request.getVerification(url);


	let events = {
		ctl00$cphRoblox$NameTextBox: title,
		ctl00$cphRoblox$DescriptionTextBox: description,
		ctl00$cphRoblox$actualGenreSelection: genreSelection || 1
	};

	if (enableComments) events["ctl00$cphRoblox$EnableCommentsCheckBox"] = "on";
	if (sellForRobux != null && sellForRobux > 0) {
		events.ctl00$cphRoblox$SellThisItemCheckBox = "on";
		events.ctl00$cphRoblox$SellForRobux = "on";
		events.ctl00$cphRoblox$RobuxPrice = sellForRobux;
	}

	events["__EVENTTARGET"] = "ctl00$cphRoblox$SubmitButtonBottom";
	let inputs = verificationResponse.inputs;
	let allInputs = Object.assign(inputs, events);
    
	let options = {
		inputs: allInputs,
		method: "POST"
	};

	let response = await this._setup.request.request(url, options);
	if (response.statusCode !== 200) throw new Error(`Failed to configure item. ${response.status}`);

	return {
		success: true
	};

};


exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "configureItem",
	description: "Configures an item",
	params: ["setup (Object)", "setup.assetId (Number)", "setup.title (String)", "setup.description (String)", "setup.enableComments (Boolean)", "setup.sellForRobux (Number)", "setup.genreSelection (String)"]
};