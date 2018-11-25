

exports.run = async function () {
    let response = await this._setup.request.request("https://api.roblox.com/currency/balance", { json: true });
    if (response.statusCode !== 200) throw new Error(`Failed to get currency. ${response.status}`);

    return response.body.robux;
}


exports.conf = {
    required: {
        params: 0,
        auth: true
    },

    name: "getCurrency",
    description: "Gets the current amount of Robux the authenticated user has"
}