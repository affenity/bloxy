/* eslint-disable no-console */
const bloxy = require("../index");

let client = new bloxy();

client.getIdByUsername("CodeTheIdiot").then(userId=>{
	console.log(userId);
});