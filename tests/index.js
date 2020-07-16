import GeneralAPI from "../src/client/apis/GeneralAPI";

const { Client } = require("../dist");
const c = new Client();

c.login({
    cookie: ""
}).then(user => {
    c.apis.generalApi.declineFriendRequest({
        userId: ""
    });
})
