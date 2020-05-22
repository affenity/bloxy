const bloxy = require("../dist");

describe("should create client", function () {
    it("should be created", function () {
        expect(bloxy).toBeDefined()
        expect(bloxy.Client).toBeDefined()
        expect(() => new bloxy.Client()).not.toThrow();
    });
});
