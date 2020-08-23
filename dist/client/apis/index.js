"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const GeneralAPI_1 = tslib_1.__importDefault(require("./GeneralAPI"));
const AccountInformationAPI_1 = tslib_1.__importDefault(require("./AccountInformationAPI"));
const AccountSettingsAPI_1 = tslib_1.__importDefault(require("./AccountSettingsAPI"));
const AdConfigurationAPI_1 = tslib_1.__importDefault(require("./AdConfigurationAPI"));
const AdsAPI_1 = tslib_1.__importDefault(require("./AdsAPI"));
const AssetDeliveryAPI_1 = tslib_1.__importDefault(require("./AssetDeliveryAPI"));
const AuthAPI_1 = tslib_1.__importDefault(require("./AuthAPI"));
const AvatarAPI_1 = tslib_1.__importDefault(require("./AvatarAPI"));
const BadgesAPI_1 = tslib_1.__importDefault(require("./BadgesAPI"));
const BillingAPI_1 = tslib_1.__importDefault(require("./BillingAPI"));
const CaptchaAPI_1 = tslib_1.__importDefault(require("./CaptchaAPI"));
const CatalogAPI_1 = tslib_1.__importDefault(require("./CatalogAPI"));
const ChatAPI_1 = tslib_1.__importDefault(require("./ChatAPI"));
const ContactsAPI_1 = tslib_1.__importDefault(require("./ContactsAPI"));
const DevelopAPI_1 = tslib_1.__importDefault(require("./DevelopAPI"));
const EconomyAPI_1 = tslib_1.__importDefault(require("./EconomyAPI"));
const EconomyCreatorStatsAPI_1 = tslib_1.__importDefault(require("./EconomyCreatorStatsAPI"));
const EngagementPayoutsAPI_1 = tslib_1.__importDefault(require("./EngagementPayoutsAPI"));
const FollowingsAPI_1 = tslib_1.__importDefault(require("./FollowingsAPI"));
const FriendsAPI_1 = tslib_1.__importDefault(require("./FriendsAPI"));
const GamesAPI_1 = tslib_1.__importDefault(require("./GamesAPI"));
const GameInternationalizationAPI_1 = tslib_1.__importDefault(require("./GameInternationalizationAPI"));
const GroupsAPI_1 = tslib_1.__importDefault(require("./GroupsAPI"));
const InventoryAPI_1 = tslib_1.__importDefault(require("./InventoryAPI"));
const ItemConfigurationAPI_1 = tslib_1.__importDefault(require("./ItemConfigurationAPI"));
const LocaleAPI_1 = tslib_1.__importDefault(require("./LocaleAPI"));
const MetricsAPI_1 = tslib_1.__importDefault(require("./MetricsAPI"));
const NotificationsAPI_1 = tslib_1.__importDefault(require("./NotificationsAPI"));
const PremiumFeaturesAPI_1 = tslib_1.__importDefault(require("./PremiumFeaturesAPI"));
const PresenceAPI_1 = tslib_1.__importDefault(require("./PresenceAPI"));
const PrivateMessagesAPI_1 = tslib_1.__importDefault(require("./PrivateMessagesAPI"));
const PublishAPI_1 = tslib_1.__importDefault(require("./PublishAPI"));
const ThumbnailsAPI_1 = tslib_1.__importDefault(require("./ThumbnailsAPI"));
const TradesAPI_1 = tslib_1.__importDefault(require("./TradesAPI"));
const TranslationRolesAPI_1 = tslib_1.__importDefault(require("./TranslationRolesAPI"));
const UsersAPI_1 = tslib_1.__importDefault(require("./UsersAPI"));
const OtherAPI_1 = tslib_1.__importDefault(require("./OtherAPI"));
function initAPIs(client) {
    return {
        accountInformationAPI: new AccountInformationAPI_1.default(client),
        accountSettingsAPI: new AccountSettingsAPI_1.default(client),
        adConfigurationAPI: new AdConfigurationAPI_1.default(client),
        adsAPI: new AdsAPI_1.default(client),
        assetDeliveryAPI: new AssetDeliveryAPI_1.default(client),
        authAPI: new AuthAPI_1.default(client),
        avatarAPI: new AvatarAPI_1.default(client),
        badgesAPI: new BadgesAPI_1.default(client),
        billingAPI: new BillingAPI_1.default(client),
        captchaAPI: new CaptchaAPI_1.default(client),
        catalogAPI: new CatalogAPI_1.default(client),
        chatAPI: new ChatAPI_1.default(client),
        contactsAPI: new ContactsAPI_1.default(client),
        developAPI: new DevelopAPI_1.default(client),
        economyAPI: new EconomyAPI_1.default(client),
        economyCreatorStats: new EconomyCreatorStatsAPI_1.default(client),
        engagementPayouts: new EngagementPayoutsAPI_1.default(client),
        followingsAPI: new FollowingsAPI_1.default(client),
        friendsAPI: new FriendsAPI_1.default(client),
        gamesAPI: new GamesAPI_1.default(client),
        gameInternationalizationAPI: new GameInternationalizationAPI_1.default(client),
        groupsAPI: new GroupsAPI_1.default(client),
        inventoryAPI: new InventoryAPI_1.default(client),
        itemConfigurationAPI: new ItemConfigurationAPI_1.default(client),
        localeAPI: new LocaleAPI_1.default(client),
        metricsAPI: new MetricsAPI_1.default(client),
        generalApi: new GeneralAPI_1.default(client),
        notificationsAPI: new NotificationsAPI_1.default(client),
        otherAPI: new OtherAPI_1.default(client),
        premiumFeaturesAPI: new PremiumFeaturesAPI_1.default(client),
        presenceAPI: new PresenceAPI_1.default(client),
        privateMessagesAPI: new PrivateMessagesAPI_1.default(client),
        publishAPI: new PublishAPI_1.default(client),
        thumbnailsAPI: new ThumbnailsAPI_1.default(client),
        tradesAPI: new TradesAPI_1.default(client),
        translationRolesAPI: new TranslationRolesAPI_1.default(client),
        usersAPI: new UsersAPI_1.default(client)
    };
}
exports.default = initAPIs;
