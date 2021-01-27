import RESTController from "../RESTController";


export default function getRequester (controller: RESTController, custom?: RESTController["requester"]) {
    if (!controller.requester && custom === undefined) {
        controller.requester = require("got");
    } else {
        controller.requester = custom!;
    }

    return controller.requester;
}
