const { utilMergeDeep } = require("../../../dist/util/utilFunctions");
const converter = require("../../../dist/util/converter");


const bloxy = require("../../../dist");
const TEST_COOKIE = require("../../getCookie");


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
    describe("testing misc internal functions", function () {
        it("should merge two objects and let the last object be dominating", async function () {
            const merger1 = {
                hello: "world",
                world: {
                    hello: "world"
                }
            };
            const merger2 = {
                hello: "bye",
                world: {
                    hi: "there"
                }
            };
            const expectObj = {
                hello: "bye",
                world: {
                    hello: "world",
                    hi: "there"
                }
            };

            const merged = utilMergeDeep(merger1, merger2);

            expect(merged)
                .toStrictEqual(expectObj);
        });
        it("should convert string to number using converter.generalIdentifierToNumber", async function () {
            expect(
                converter.generalIdentifierToNumber("5")
            )
                .toStrictEqual(5);
            expect(
                converter.generalIdentifierToNumber(5)
            )
                .toStrictEqual(5);
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
