const TEST_COOKIE = require("../getCookie");
const bloxy = require("../../dist");
const faker = require("faker");
const client = new bloxy.Client({
    credentials: {
        cookie: TEST_COOKIE
    }
});
const { wait } = require("../util");

beforeAll(async () => {
    return client.login(
        TEST_COOKIE
    )
        .then(clientUser => {
            console.log(`Using test account ${clientUser.id} with name ${clientUser.name}`);
        });
});

describe("testing CatalogAPI", function () {
    it("should retrieve bundle info", function () {
        return expect(client.apis.catalogAPI.getBundleDetails({
            bundleId: 192
        }))
            .resolves
            .toMatchObject({
                id: 192,
                bundleType: "BodyParts",
                product: {
                    id: 369653841
                },
                creator: {
                    id: 1
                }
            });
    });

    it("should retrieve bundle info in bulk", function () {
        return expect(client.apis.catalogAPI.getMultiBundleDetails({
            bundleIds: [192]
        }))
            .resolves
            .toMatchObject([
                {
                    id: 192,
                    bundleType: "BodyParts"
                }
            ]);
    });

    it("should retrieve categories", function () {
        expect(client.apis.catalogAPI.getCategories())
            .resolves
            .toStrictEqual({
                Featured: 0,
                All: 1,
                Collectibles: 2,
                Clothing: 3,
                BodyParts: 4,
                Gear: 5,
                Models: 6,
                Plugins: 7,
                Decals: 8,
                Audio: 9,
                Meshes: 10,
                Accessories: 11,
                AvatarAnimations: 12,
                CommunityCreations: 13,
                Video: 14,
                Recommended: 15
            });
    });

    it("should retrieve sub-categories", function () {
        expect(client.apis.catalogAPI.getSubCategories())
            .resolves
            .toStrictEqual({
                Featured: 0,
                All: 1,
                Collectibles: 2,
                Clothing: 3,
                BodyParts: 4,
                Gear: 5,
                Models: 6,
                Plugins: 7,
                Decals: 8,
                Hats: 9,
                Faces: 10,
                Packages: 11,
                Shirts: 12,
                Tshirts: 13,
                Pants: 14,
                Heads: 15,
                Audio: 16,
                RobloxCreated: 17,
                Meshes: 18,
                Accessories: 19,
                HairAccessories: 20,
                FaceAccessories: 21,
                NeckAccessories: 22,
                ShoulderAccessories: 23,
                FrontAccessories: 24,
                BackAccessories: 25,
                WaistAccessories: 26,
                AvatarAnimations: 27,
                ClimbAnimations: 28,
                FallAnimations: 30,
                IdleAnimations: 31,
                JumpAnimations: 32,
                RunAnimations: 33,
                SwimAnimations: 34,
                WalkAnimations: 35,
                AnimationPackage: 36,
                Bundles: 37,
                AnimationBundles: 38,
                EmoteAnimations: 39,
                CommunityCreations: 40,
                Video: 41,
                Recommended: 51
            })
    });
});
