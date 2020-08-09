// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import GroupStructures from "./group";
import ClientUser from "./ClientUser";


export declare type Structures = {
    ClientUser: typeof ClientUser;
};

export default function initStructures (): Structures {
    return {
        ClientUser
    };
}
