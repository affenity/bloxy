import validBody from "./validBody";
import validStatusMessage from "./validStatusMessage";
import validStatusCode from "./validStatusCode";
import updateHeaders from "./updateHeaders";


const responseHandlers = [
    updateHeaders,
    validStatusCode,
    validStatusMessage,
    validBody
];

export default responseHandlers;
