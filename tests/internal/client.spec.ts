import { expect } from "chai";
import { utilMergeDeep } from "../../dist/util/utilFunctions";
import { generalIdentifierToNumber } from "../../dist/util/converter";
import * as bloxy from "../../dist";

describe("Bloxy", function () {
  describe("Exporting of the client", function () {
    it("should export anything", function () {
      expect(bloxy).to.exist;
    });
    it("should export Client", function () {
      expect(bloxy.Client).to.exist;
    });
  });
  describe("Creation of the client", function () {
    it("should not error without any options", function () {
      expect(function () {
        new bloxy.Client();
      }).to.not.throw;
    });
    it("should not error with empty options", function () {
      expect(function () {
        new bloxy.Client({});
      }).to.not.throw;
    });
    it("should not error with empty credentials options", function () {
      expect(function () {
        new bloxy.Client({ credentials: {} });
      }).to.not.throw;
    });
    it("should not error with empty rest options", function () {
      expect(function () {
        new bloxy.Client({ rest: {} });
      }).to.not.throw;
    });
  });
  describe("utilDeepMerge", function () {
    it("should merge two objects and let the last object be dominating", function () {
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
      const expectedObj = {
        hello: "bye",
        world: {
          hello: "world",
          hi: "there"
        }
      };
      const merged = utilMergeDeep(merger1, merger2);
      expect(merged).to.deep.equal(expectedObj);
    });
  });
  describe("converter", () => {
    it("should convert string to number using #generalIdentifierToNumber", function () {
      expect(generalIdentifierToNumber("5")).to.equal(5);
      expect(generalIdentifierToNumber(5)).to.equal(5);
    });
  });
  describe("Testing login of Client", function () {
    it("should error because of no credentials provided", function () {
      const client = new bloxy.Client();
      expect(function () {
        client.login();
      }).to.throw;
    });
    it("should error with an invalid cookie", function () {
      const client = new bloxy.Client({
        credentials: { cookie: "invalid" }
      });
      expect(function () {
        client.login();
      }).to.throw;
    });
  });
});
