import RESTController from "../RESTController";

export default async function updateXCSRFToken (restController: RESTController): Promise<string> {
    return restController.request({
        url: "https://auth.roblox.com/v2/auth/logout",
        checks: {
            xcsrf: false
        }
    }).then(() => "hi"); // TODO: Do an actual request to fetch xcsrf tokens
}
