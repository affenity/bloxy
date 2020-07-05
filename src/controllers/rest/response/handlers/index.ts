import validBody from "./validBody";
import validStatus from "./validStatus";
import validStatusCode from "./validStatusCode";


const responseHandlers = [
    validStatusCode,
    validStatus,
    validBody
];

export default responseHandlers;
