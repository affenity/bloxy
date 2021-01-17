const verifyObjectTypes = require("./util/verifyObjectTypes");

expect.extend({
    verifyObjectTypes
});

describe("testing", function () {
    it("should test", function () {
        expect.verifyObjectTypes({
            hello: "world"
        }, {
            h: "number"
        });
    });
});
