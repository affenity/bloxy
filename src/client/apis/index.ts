import Client from "../Client";
import GeneralAPI from "./GeneralAPI";
import AccountInformationAPI from "./AccountInformationAPI";
import AccountSettingsAPI from "./AccountSettingsAPI";
import AdConfigurationAPI from "./AdConfigurationAPI";
import AdsAPI from "./AdsAPI";
import AssetDeliveryAPI from "./AssetDeliveryAPI";
import AuthAPI from "./AuthAPI";
import AvatarAPI from "./AvatarAPI";
import BadgesAPI from "./BadgesAPI";
import BillingAPI from "./BillingAPI";
import CaptchaAPI from "./CaptchaAPI";
import CatalogAPI from "./CatalogAPI";
import ChatAPI from "./ChatAPI";
import ContactsAPI from "./ContactsAPI";
import DevelopAPI from "./DevelopAPI";
import EconomyAPI from "./EconomyAPI";
import EconomyCreatorStatsAPI from "./EconomyCreatorStatsAPI";
import EngagementPayoutsAPI from "./EngagementPayoutsAPI";
import FollowingsAPI from "./FollowingsAPI";
import FriendsAPI from "./FriendsAPI";
import GamesAPI from "./GamesAPI";
import GameInternationalizationAPI from "./GameInternationalizationAPI";
import GroupsAPI from "./GroupsAPI";
import InventoryAPI from "./InventoryAPI";
import ItemConfigurationAPI from "./ItemConfigurationAPI";
import LocaleAPI from "./LocaleAPI";
import MetricsAPI from "./MetricsAPI";
import NotificationsAPI from "./NotificationsAPI";
import PremiumFeaturesAPI from "./PremiumFeaturesAPI";
import PresenceAPI from "./PresenceAPI";
import PrivateMessagesAPI from "./PrivateMessagesAPI";
import PublishAPI from "./PublishAPI";
import ThumbnailsAPI from "./ThumbnailsAPI";
import TradesAPI from "./TradesAPI";
import TranslationRolesAPI from "./TranslationRolesAPI";
import UsersAPI from "./UsersAPI";
import OtherAPI from "./OtherAPI";
import TwoStepVerification from "./TwoStepVerification";


export declare type APIs = {
    accountInformationAPI: AccountInformationAPI;
    accountSettingsAPI: AccountSettingsAPI;
    adConfigurationAPI: AdConfigurationAPI;
    adsAPI: AdsAPI;
    assetDeliveryAPI: AssetDeliveryAPI;
    authAPI: AuthAPI;
    avatarAPI: AvatarAPI;
    badgesAPI: BadgesAPI;
    billingAPI: BillingAPI;
    captchaAPI: CaptchaAPI;
    catalogAPI: CatalogAPI;
    chatAPI: ChatAPI;
    contactsAPI: ContactsAPI;
    developAPI: DevelopAPI;
    economyAPI: EconomyAPI;
    economyCreatorStats: EconomyCreatorStatsAPI;
    engagementPayouts: EngagementPayoutsAPI;
    followingsAPI: FollowingsAPI;
    friendsAPI: FriendsAPI;
    gamesAPI: GamesAPI;
    gameInternationalizationAPI: GameInternationalizationAPI;
    groupsAPI: GroupsAPI;
    inventoryAPI: InventoryAPI;
    itemConfigurationAPI: ItemConfigurationAPI;
    localeAPI: LocaleAPI;
    metricsAPI: MetricsAPI;
    notificationsAPI: NotificationsAPI;
    otherAPI: OtherAPI;
    premiumFeaturesAPI: PremiumFeaturesAPI;
    presenceAPI: PresenceAPI;
    privateMessagesAPI: PrivateMessagesAPI;
    publishAPI: PublishAPI;
    thumbnailsAPI: ThumbnailsAPI;
    tradesAPI: TradesAPI;
    translationRolesAPI: TranslationRolesAPI;
    usersAPI: UsersAPI;
    generalApi: GeneralAPI;
    twpStepVerification: TwoStepVerification;
};

export default function initAPIs (client: Client): APIs {
    return {
        accountInformationAPI: new AccountInformationAPI(client),
        accountSettingsAPI: new AccountSettingsAPI(client),
        adConfigurationAPI: new AdConfigurationAPI(client),
        adsAPI: new AdsAPI(client),
        assetDeliveryAPI: new AssetDeliveryAPI(client),
        authAPI: new AuthAPI(client),
        avatarAPI: new AvatarAPI(client),
        badgesAPI: new BadgesAPI(client),
        billingAPI: new BillingAPI(client),
        captchaAPI: new CaptchaAPI(client),
        catalogAPI: new CatalogAPI(client),
        chatAPI: new ChatAPI(client),
        contactsAPI: new ContactsAPI(client),
        developAPI: new DevelopAPI(client),
        economyAPI: new EconomyAPI(client),
        economyCreatorStats: new EconomyCreatorStatsAPI(client),
        engagementPayouts: new EngagementPayoutsAPI(client),
        followingsAPI: new FollowingsAPI(client),
        friendsAPI: new FriendsAPI(client),
        gamesAPI: new GamesAPI(client),
        gameInternationalizationAPI: new GameInternationalizationAPI(client),
        groupsAPI: new GroupsAPI(client),
        inventoryAPI: new InventoryAPI(client),
        itemConfigurationAPI: new ItemConfigurationAPI(client),
        localeAPI: new LocaleAPI(client),
        metricsAPI: new MetricsAPI(client),
        generalApi: new GeneralAPI(client),
        notificationsAPI: new NotificationsAPI(client),
        otherAPI: new OtherAPI(client),
        premiumFeaturesAPI: new PremiumFeaturesAPI(client),
        presenceAPI: new PresenceAPI(client),
        privateMessagesAPI: new PrivateMessagesAPI(client),
        publishAPI: new PublishAPI(client),
        thumbnailsAPI: new ThumbnailsAPI(client),
        tradesAPI: new TradesAPI(client),
        translationRolesAPI: new TranslationRolesAPI(client),
        usersAPI: new UsersAPI(client),
        twpStepVerification: new TwoStepVerification(client)
    };
}
