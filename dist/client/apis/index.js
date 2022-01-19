"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAPIs = void 0;
const GeneralAPI_1 = require("./GeneralAPI");
const AccountInformationAPI_1 = require("./AccountInformationAPI");
const AccountSettingsAPI_1 = require("./AccountSettingsAPI");
const AdConfigurationAPI_1 = require("./AdConfigurationAPI");
const AssetDeliveryAPI_1 = require("./AssetDeliveryAPI");
const AuthAPI_1 = require("./AuthAPI");
const AvatarAPI_1 = require("./AvatarAPI");
const BadgesAPI_1 = require("./BadgesAPI");
const BillingAPI_1 = require("./BillingAPI");
const CatalogAPI_1 = require("./CatalogAPI");
const ChatAPI_1 = require("./ChatAPI");
const ContactsAPI_1 = require("./ContactsAPI");
const DevelopAPI_1 = require("./DevelopAPI");
const EconomyAPI_1 = require("./EconomyAPI");
const EconomyCreatorStatsAPI_1 = require("./EconomyCreatorStatsAPI");
const EngagementPayoutsAPI_1 = require("./EngagementPayoutsAPI");
const FollowingsAPI_1 = require("./FollowingsAPI");
const FriendsAPI_1 = require("./FriendsAPI");
const GamesAPI_1 = require("./GamesAPI");
const GameInternationalizationAPI_1 = require("./GameInternationalizationAPI");
const GroupsAPI_1 = require("./GroupsAPI");
const InventoryAPI_1 = require("./InventoryAPI");
const ItemConfigurationAPI_1 = require("./ItemConfigurationAPI");
const LocaleAPI_1 = require("./LocaleAPI");
const MetricsAPI_1 = require("./MetricsAPI");
const NotificationsAPI_1 = require("./NotificationsAPI");
const PremiumFeaturesAPI_1 = require("./PremiumFeaturesAPI");
const PresenceAPI_1 = require("./PresenceAPI");
const PrivateMessagesAPI_1 = require("./PrivateMessagesAPI");
const PublishAPI_1 = require("./PublishAPI");
const ThumbnailsAPI_1 = require("./ThumbnailsAPI");
const TranslationRolesAPI_1 = require("./TranslationRolesAPI");
const UsersAPI_1 = require("./UsersAPI");
const OtherAPI_1 = require("./OtherAPI");
const TwoStepVerificationAPI_1 = require("./TwoStepVerificationAPI");
const DataAPI_1 = require("./DataAPI");
/**
 * @hidden
 */
function initAPIs(client) {
    return {
        accountInformationAPI: new AccountInformationAPI_1.AccountInformationAPI(client),
        accountSettingsAPI: new AccountSettingsAPI_1.AccountSettingsAPI(client),
        adConfigurationAPI: new AdConfigurationAPI_1.AdConfigurationAPI(client),
        assetDeliveryAPI: new AssetDeliveryAPI_1.AssetDeliveryAPI(client),
        authAPI: new AuthAPI_1.AuthAPI(client),
        avatarAPI: new AvatarAPI_1.AvatarAPI(client),
        badgesAPI: new BadgesAPI_1.BadgesAPI(client),
        billingAPI: new BillingAPI_1.BillingAPI(client),
        catalogAPI: new CatalogAPI_1.CatalogAPI(client),
        chatAPI: new ChatAPI_1.ChatAPI(client),
        contactsAPI: new ContactsAPI_1.ContactsAPI(client),
        dataAPI: new DataAPI_1.DataAPI(client),
        developAPI: new DevelopAPI_1.DevelopAPI(client),
        economyAPI: new EconomyAPI_1.EconomyAPI(client),
        economyCreatorStats: new EconomyCreatorStatsAPI_1.EconomyCreatorStatsAPI(client),
        engagementPayouts: new EngagementPayoutsAPI_1.EngagementPayoutsAPI(client),
        followingsAPI: new FollowingsAPI_1.FollowingsAPI(client),
        friendsAPI: new FriendsAPI_1.FriendsAPI(client),
        gamesAPI: new GamesAPI_1.GamesAPI(client),
        gameInternationalizationAPI: new GameInternationalizationAPI_1.GameInternationalizationAPI(client),
        groupsAPI: new GroupsAPI_1.GroupsAPI(client),
        inventoryAPI: new InventoryAPI_1.InventoryAPI(client),
        itemConfigurationAPI: new ItemConfigurationAPI_1.ItemConfigurationAPI(client),
        localeAPI: new LocaleAPI_1.LocaleAPI(client),
        metricsAPI: new MetricsAPI_1.MetricsAPI(client),
        generalApi: new GeneralAPI_1.GeneralAPI(client),
        notificationsAPI: new NotificationsAPI_1.NotificationsAPI(client),
        otherAPI: new OtherAPI_1.OtherAPI(client),
        premiumFeaturesAPI: new PremiumFeaturesAPI_1.PremiumFeaturesAPI(client),
        presenceAPI: new PresenceAPI_1.PresenceAPI(client),
        privateMessagesAPI: new PrivateMessagesAPI_1.PrivateMessagesAPI(client),
        publishAPI: new PublishAPI_1.PublishAPI(client),
        thumbnailsAPI: new ThumbnailsAPI_1.ThumbnailsAPI(client),
        translationRolesAPI: new TranslationRolesAPI_1.TranslationRolesAPI(client),
        usersAPI: new UsersAPI_1.UsersAPI(client),
        twoStepVerification: new TwoStepVerificationAPI_1.TwoStepVerificationAPI(client)
    };
}
exports.initAPIs = initAPIs;
