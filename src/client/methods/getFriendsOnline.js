

exports.run = async function () {

    let response = await this._setup.request.request("https://api.roblox.com/my/friendsonline", { json: true });
    if (response.statusCode !== 200) throw new Error(`Failed to get friends online. ${response.status}`);

    return (response.body.map(x=>new this._setup.classes.PartialUser(x, this)));
}


exports.conf = {
    required: {
        params: 0,
        auth: true
    },

    name: "getFriendsOnline",
    description: "Gets the authenticated user's current friends online",
    params: []
}