import { validBody } from "./validBody";
import { validStatusMessage } from "./validStatusMessage";
import { validStatusCode } from "./validStatusCode";
import { updateHeaders } from "./updateHeaders";

export const responseHandlers = [
  updateHeaders,
  validStatusCode,
  validStatusMessage,
  validBody
];
