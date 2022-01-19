"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequester = void 0;
const tslib_1 = require("tslib");
const got_1 = (0, tslib_1.__importDefault)(require("got"));
function getRequester(controller, customRequester) {
    if (!controller.requester &&
        !controller.client.options.rest.requester &&
        customRequester === undefined) {
        let requester;
        try {
            requester = got_1.default;
        }
        catch (e) {
            throw new Error(`Failed to retrieve module "got" and no custom requester provided!`);
        }
        controller.requester = requester;
    }
    else {
        controller.requester = customRequester;
    }
    return controller.requester;
}
exports.getRequester = getRequester;
