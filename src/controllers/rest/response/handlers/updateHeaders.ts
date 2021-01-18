import RESTResponse from "../RESTResponse";
import { Cookie } from "tough-cookie";


export default function updateHeaders (response: RESTResponse): boolean {
    if (response.responseData.headers["set-cookie"]) {
        const setCookieHeader = response.responseData.headers["set-cookie"];

        if (Array.isArray(setCookieHeader)) {
            setCookieHeader.forEach(toSetCookie => {
                const parsedCookie = Cookie.parse(toSetCookie);

                if (parsedCookie) {
                    response.controller.addCookie(parsedCookie);
                }
            });
        } else {
            const parsedCookie = Cookie.parse(setCookieHeader);

            if (parsedCookie) {
                response.controller.addCookie(parsedCookie);
            }
        }
    }

    return true;
}
