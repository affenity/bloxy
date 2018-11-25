

exports.run = async function (setup) {

    let page = setup.page || 0;
    let limit = setup.limit || 20;

    let options = {
        json: true
    }

    let response = await this._setup.request.request(`https://www.roblox.com/messages/api/get-messages?messageTab=3&pageNumber=${page}&pageSize=${limit}`, options);
    if (response.statusCode !== 200) throw new Error(`Failed to get archived messages. ${response.status}`);

    let makeResponse = {
        currentPage: response.body.PageNumber,
        totalPages: response.body.TotalPages,
        messages: response.body.Collection
    }

    makeResponse.messages = makeResponse.messages.map(message => new this._setup.classes.RobloxMessage(message, this));
    return makeResponse;
}


exports.conf = {
    required: {
        params: 1,
        auth: true
    },

    name: "getArchivedMessages",
    description: "Gets the archived messages from the authorized user",
    params: ["setup (Object)", "setup.page (Number)", "setup.limit (Number)"]
}