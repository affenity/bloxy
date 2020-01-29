import {
    AnyIdentifier,
    Client, ClientLoginCredentials,
    GenericFilterOptions,
    GroupIdentifier,
    UniverseSettingsOptions, UpdateDeveloperProductOptions,
    UpdatePlaceOptions, UserIdentifier
} from "./index";

class AccountInformationAPI {
    constructor(client: Client);

    public client: Client;
    public baseUrl: string;
    public request: Function;

    public getBirthdate(): Promise<any>;

    public updatgeBirthdate(options: { month: number, day: number, year: number }): Promise<any>;

    public getDescription(): Promise<any>;

    public updateDescription(description: string): Promise<any>;

    public getGender(): Promise<any>;

    public updateGender(gender: string): Promise<any>;

    public getConsecutiveXboxLoginDays(): Promise<any>;

    public getMetadata(): Promise<any>;

    public getVerifiedPhone(): Promise<any>;

    public updatePhone(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public deletePhone(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public resendPhoneCode(options: { countryCode: any, prefix: any, phone: any, password: string }): Promise<any>;

    public verifyPhoneCode(code: string | number): Promise<any>;

    public getPromotions(): Promise<any>;

    public updatePromotions(options: { facebook: string, twitter: string, youtube: string, twitch: string, visibility: string }): Promise<any>;

    public removeStarCodeAffiliate(): Promise<any>;

    public getStarCodeAffiliate(): Promise<any>;

    public setStarCodeAffiliate(affiliateCode: string): Promise<any>;
}

class AccountSettingsAPI {
    constructor(client: Client);
    public client: Client;
    public baseUrl: string;
    public request: Function;

    public getAppChatPrivacy(): Promise<any>;
    public updateAppChatPrivacy(privacy: string): Promise<any>;
    public getGameChatPrivacy(): Promise<any>;
    public updateGameChatPrivacy(privacy: string): Promise<any>;
    public getInventoryPrivacy(): Promise<any>;
    public updateInventoryPrivacy(privacy: string): Promise<any>;
    public getPrivacy(): Promise<any>;
    public updatePrivacy(privacy: string): Promise<any>;
}
class AuthAPI {
    constructor(client: Client);

    public removeAccountPin(): Promise<>;
    public getAccountPinStatus(): Promise<>;
    public updateAccountPin(pin: AnyIdentifier): Promise<>;
    public createAccountPin(pin: AnyIdentifier): Promise<>;
    public lockAccount(): Promise<>;
    public unlockAccount(pin: AnyIdentifier): Promise<>;
    public getAuthMetadata(): Promise<>;
    public login(credentials: ClientLoginCredentials): Promise<>;
    public logout(): Promise<>;
    public validatePassword(password: string): Promise<>;
    public changePassword(oldPassword: string, newPassword: string): Promise<>;
    public getRevertInformation(ticket: string): Promise<>;
    public revertAccount(revertData: RevertAccountData): Promise<>;
    public getConnectedSocialProviders(): Promise<>;
    public removeConnectedSocialProvider(provider: string, password: string): Promise<>;
    public resendTFACode(ticketData: TicketDataOptions): Promise<>;
    public verifyTFACode(ticketData: TicketDataOptions): Promise<>;

}

class DevelopAPI {
    constructor(client: Client);

    public client: Client;

    public getGameTemplates(): Promise<>;
    public getGameUpdates(universeId: AnyIdentifier): Promise<>;
    public postGameUpdate(universeId: AnyIdentifier, update: string): Promise<>;
    public filterText(text: string): Promise<>;
    public getGroupUniverses(groupId: GroupIdentifier, options: GenericFilterOptions): Promise<>;
    public getPlaceCompatibilities(placeId: AnyIdentifier): Promise<>;
    public updatePlace(placeId: AnyIdentifier, configuration: UpdatePlaceOptions): Promise<>;
    public getPlugins(plugins: Array<AnyIdentifier>): Promise<>;
    public updatePlugin(pluginId: AnyIdentifier, UpdatePluginOptions): Promise<>;
    public searchUniverses(query: string, sort: SearchUniversesSort, options: GenericFilterOptions): Promise<>;
    public getUniverse(universeId: AnyIdentifier): Promise<>;
    public getUniversePermissions(universeId: AnyIdentifier): Promise<>;
    public getUniversePlaces(universeId: AnyIdentifier): Promise<>;
    public getUniverses(universeIds: Array<AnyIdentifier>): Promise<>;
    public getUniversesPermissions(universeIds: Array<AnyIdentifier>): Promise<>;
    public activateUniverse(universeId: AnyIdentifier, activate: boolean): Promise<>;
    public getUniverseSettings(universeId: AnyIdentifier): Promise<>;
    public updateUniverseSettings(universeId: AnyIdentifier, options: UniverseSettingsOptions): Promise<>;
    public getVIPServersConfiguration(universeId: AnyIdentifier): Promise<>;
    public getTeamCreate(universeId: AnyIdentifier): Promise<>;
    public enableTeamCreate(universeId: AnyIdentifier, enabled: boolean): Promise<>;
    public removeUserFromTeamCreate(universeId: AnyIdentifier, user: UserIdentifier): Promise<>;
    public getUsersInTeamCreate(universeId: AnyIdentifier, options: GenericFilterOptions): Promise<>;
    public addUserToTeamCreate(universeId: AnyIdentifier, user: UserIdentifier): Promise<>;
    public getTeamCreatesJoined(options: GenericFilterOptions): Promise<>;
    public getManageableGroups(): Promise<>;
    public getStudioData(key: string): Promise<>;
    public saveStudioData(key: string, data: object): Promise<>;
    public getAuthorizedUniverses(options: GenericFilterOptions): Promise<>;
    public updateDeveloperProduct(universeId: AnyIdentifier, productId: AnyIdentifier, data: UpdateDeveloperProductOptions): Promise<>;
}

class GroupsAPI {
    constructor(client: Client, data: any);

    public client: Client;

    public getGroup(group: GroupIdentifier): Promise<>;
    public getAuditLogs(groupId: GroupIdentifier, sortOptions: GroupGetAuditLogsOptions): Promise<>;
}

