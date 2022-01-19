import { RESTController } from "../RESTController";
import got from "got";

export function getRequester(
  controller: RESTController,
  customRequester?: RESTController["requester"]
) {
  if (
    !controller.requester &&
    !controller.client.options.rest!.requester &&
    customRequester === undefined
  ) {
    let requester: null | any;

    try {
      requester = got;
    } catch (e) {
      throw new Error(
        `Failed to retrieve module "got" and no custom requester provided!`
      );
    }

    controller.requester = requester;
  } else {
    controller.requester = customRequester!;
  }

  return controller.requester;
}
