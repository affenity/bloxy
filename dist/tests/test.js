"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bloxy = tslib_1.__importStar(require("../index"));
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const client = new bloxy.Client({
        credentials: {
            cookie: ""
        }
    });
    yield client.login();
    const res = yield client.apis.generalApi.getAssetVersions(5283967847);
    const affiliate = yield client.apis.accountInformationAPI.getStarCodeAffiliate();
    console.log(res);
}))();
