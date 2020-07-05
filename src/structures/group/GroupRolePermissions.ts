import Client from "../../client";
import PartialGroup from "./PartialGroup";
import GroupRole from "./GroupRole";


export interface GroupRolePermissionsOptions {
    groupId: number;
    role: {
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    };
    permissions: {
        groupPostsPermissions: {
            viewWall: boolean;
            postToWall: boolean;
            deleteFromWall: boolean;
            viewStatus: boolean;
            postToStatus: boolean;
        };
        groupMembershipPermissions: {
            changeRank: boolean;
            inviteMembers: boolean;
            removeMembers: boolean;
        };
        groupManagementPermissions: {
            manageRelationships: boolean;
            manageClan: boolean;
            viewAuditLogs: boolean;
        };
        groupEconomyPermissions: {
            spendGroupFunds: boolean;
            advertiseGroup: boolean;
            createItems: boolean;
            manageItems: boolean;
            addGroupPlaces: boolean;
            manageGroupGames: boolean;
            viewGroupPayouts: boolean;
        };
    };
}


export default class GroupRolePermissions {
    public client: Client;
    public group: PartialGroup;
    public role: GroupRole;
    public permissions: GroupRolePermissionsOptions["permissions"];

    constructor (data: GroupRolePermissionsOptions, client: Client) {
        this.client = client;
        this.group = new PartialGroup({
            id: data.groupId
        }, client);
        this.role = new GroupRole({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                id: this.group.id
            }
        }, client);
        this.permissions = data.permissions;
    }
}
