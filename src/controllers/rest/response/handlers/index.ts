import validBody from "./validBody";
import validStatus from "./validStatus";
import validStatusCode from "./validStatusCode";
import updateHeaders from "./updateHeaders";


const responseHandlers = [
    updateHeaders,
    validStatusCode,
    validStatus,
    validBody
];

export default responseHandlers;
