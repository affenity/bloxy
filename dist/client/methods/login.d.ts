import Client from "../Client";
import { ClientCredentialsOptions } from "../../interfaces/ClientInterfaces";
import ClientUser from "../../structures/ClientUser";
export declare type AuthLoginV2 = {
    errors?: {
        code: number;
        message: string;
        userFacingMessage: string;
    }[];
    user?: {
        id: 0;
        name: string;
        displayName: string;
    };
    twoStepVerificationData?: {
        mediaType: "Email";
        ticket: string;
    };
};
export default function login(this: Client, credentials: ClientCredentialsOptions): Promise<ClientUser>;
