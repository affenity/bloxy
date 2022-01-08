import { Client } from "../../dist";
import { expect } from "chai";
import GlobalDataStore from "../../dist/client/lib/DataStoreManager/structures/GlobalDataStore";
import {} from "mocha";

const authenticatedClient = new Client();
const unauthenticatedClient = new Client();

before(async () => {
  const authenticatedUser = await authenticatedClient.login(
    process.env.ROBLOSECURITY
  );
  console.log(
    `Logged in as ${authenticatedUser.name} (${authenticatedUser.id})`
  );
});

describe("DataStoreManager", function () {
  describe("Unauthorized client", function () {
    it("should error when accessing a datastore", function () {
      expect(() =>
        unauthenticatedClient.dataStoreManager.getDataStore(1, "test")
      ).to.throw;
    });
  });
  describe("Authorized client", function () {
    let dataStore!: GlobalDataStore<unknown>;
    it("should get the datastore", function () {
      dataStore = authenticatedClient.dataStoreManager.getDataStore(
        8406754815,
        "test"
      );
      expect(dataStore).to.exist;
    });
    it("should write to the datastore", async function () {
      this.slow(1000);
      expect(dataStore, "DataStore does not exist, did the previous test fail?")
        .to.exist;
      expect(
        await (async function () {
          dataStore.setAsync("testKey", "testValue");
        })()
      ).to.not.throw;
    });
    it("should read the datastore", async function () {
      this.slow(1000);
      expect(dataStore, "DataStore does not exist, did the previous test fail?")
        .to.exist;
      let value!: string;
      expect(
        await (async function () {
          const returnedValue = JSON.parse(
            (await dataStore.getAsync("testKey")) as string
          );
          value = returnedValue;
        })()
      ).to.not.throw;
      expect(value).to.equal("testValue");
    });
    it("should error when accessing a datastore without permissions", async function () {
      expect(function () {
        authenticatedClient.dataStoreManager.getDataStore(1, "test");
      }).to.throw;
    });
  });
});
