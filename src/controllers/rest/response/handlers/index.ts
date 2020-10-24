import validBody from "./validBody";
import validCsrf from "./validCsrf";
import validStatus from "./validStatus";
import validStatusCode from "./validStatusCode";


const responseHandlers = [
    validCsrf,
    validStatusCode,
    validStatus,
    validBody
];

export default responseHandlers;
