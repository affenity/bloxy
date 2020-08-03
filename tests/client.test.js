const bloxy = require("../dist");
const TEST_COOKIE = require("./getCookie");


describe("testing client", function () {
    describe("testing creation of client", function () {
        it("should have .Client property", function () {
            expect(bloxy)
                .toBeDefined();
            expect(bloxy.Client)
                .toBeDefined();
        });

        describe("should be created without erroring without client options", function () {
            it("should not error without any options", function () {
                expect(() => new bloxy.Client())
                    .not
                    .toThrow();
            });
            it("should not error with empty options", function () {
                expect(() => new bloxy.Client({}))
                    .not
                    .toThrow();
            });
            it("should not error with empty credentials options", function () {
                expect(() => new bloxy.Client({ credentials: {} }))
                    .not
                    .toThrow();
            });
            it("should not error with empty rest options", function () {
                expect(() => new bloxy.Client({ rest: {} }))
                    .not
                    .toThrow();
            });
        });
    });

    describe("testing login function of client", function () {
        it("should error because of no credentials provided", function () {
            const client = new bloxy.Client();
            expect(client.login())
                .rejects
                .toThrow();
        });
        it("should error because invalid cookie", function () {
            const client = new bloxy.Client({
                credentials: {
                    cookie: "test"
                }
            });

            expect(client.login())
                .rejects
                .toThrow();
        });
    });
});
