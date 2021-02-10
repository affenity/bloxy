import RESTController from "../RESTController";


export default function getRequester (controller: RESTController, custom?: RESTController["requester"]) {
    if (!controller.requester && !controller.client.options.rest!.requester && custom === undefined) {
        try {
            controller.requester = require("got");
        } catch (e) {

        }
    } else {
        controller.requester = custom!;
    }

    return controller.requester;
}
