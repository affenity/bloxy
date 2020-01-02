/* eslint-disable */
const config = require("./config");

const bloxy = require("../index");

test("Constructing a new apis", () => {
	const c1 = new bloxy.Client();
	console.log(c1);
	expect(c1).toBeInstanceOf(bloxy);
});
