/* eslint-disable */
const config = require("./config");

const bloxy = require("../index");
const c1 = new bloxy();

test("Checks if you can construct bloxy with just calling it", () => {
	expect(c1).toBeInstanceOf(bloxy);
});
