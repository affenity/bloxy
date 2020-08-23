"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class ClientUser extends User_1.PartialUser {
    constructor(data, client) {
        super(data, client);
        this.client = client;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getAppChatPrivacy() {
        return this.client.apis.accountSettingsAPI.getAppChatPrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateAppChatPrivacy(privacy) {
        return this.client.apis.accountSettingsAPI.updateAppChatPrivacy({
            appChatPrivacy: privacy
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getGameChatPrivacy() {
        return this.client.apis.accountSettingsAPI.getGameChatPrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateGameChatPrivacy(privacy) {
        return this.client.apis.accountSettingsAPI.updateGameChatPrivacy({
            gameChatPrivacy: privacy
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getInventoryPrivacy() {
        return this.client.apis.accountSettingsAPI.getInventoryPrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateInventoryPrivacy(privacy) {
        return this.client.apis.accountSettingsAPI.updateInventoryPrivacy({
            inventoryPrivacy: privacy
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getPrivacy() {
        return this.client.apis.accountSettingsAPI.getUserPrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updatePrivacy(options) {
        return this.client.apis.accountSettingsAPI.updateUserPrivacy(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getPrivacySettingsInfo() {
        return this.client.apis.accountSettingsAPI.getUserPrivacySettingsInfo();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getPrivateMessagePrivacy() {
        return this.client.apis.accountSettingsAPI.getUserPrivateMessagePrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updatePrivateMessagePrivacy(privacy) {
        return this.client.apis.accountSettingsAPI.updateUserPrivateMessagePrivacy({
            privateMessagePrivacy: privacy
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getEmailStatus() {
        return this.client.apis.accountSettingsAPI.getUserEmailStatus();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateEmail(email, password) {
        return this.client.apis.accountSettingsAPI.updateUserEmail({
            emailAddress: email,
            password
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    sendEmailVerification() {
        return this.client.apis.accountSettingsAPI.sendEmailVerification();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getWebsiteTheme() {
        return this.client.apis.accountSettingsAPI.getWebsiteTheme();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateWebsiteTheme(theme) {
        return this.client.apis.accountSettingsAPI.updateWebsiteTheme({
            themeType: theme
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getTradePrivacy() {
        return this.client.apis.accountSettingsAPI.getUserTradePrivacy();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateTradePrivacy(privacy) {
        return this.client.apis.accountSettingsAPI.updateUserTradePrivacy({
            tradePrivacy: privacy
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getTradeQualityFilter() {
        return this.client.apis.accountSettingsAPI.getUserTradeQualityFilter();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateTradeQualityFilter(quality) {
        return this.client.apis.accountSettingsAPI.updateUserTradeQualityFilter({
            tradeValue: quality
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getTwoStepStatus() {
        return this.client.apis.accountSettingsAPI.getTwoStepStatus();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateTwoStepStatus(options) {
        return this.client.apis.accountSettingsAPI.updateTwoStepStatus(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getContactUpsell() {
        return this.client.apis.accountSettingsAPI.getContactUpsell();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateContactUpsellSuppression(options) {
        return this.client.apis.accountSettingsAPI.updateContactUpsellSuppression(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updatePromotionChannels(options) {
        return this.client.apis.accountSettingsAPI.updateUserPromotionChannels(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getBirthdate() {
        return this.client.apis.accountInformationAPI.getUserBirthdate();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateBirthdate(options) {
        return this.client.apis.accountInformationAPI.updateUserBirthdate(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getProfileDescription() {
        return this.client.apis.accountInformationAPI.getUserDescription();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateProfileDescription(description) {
        return this.client.apis.accountInformationAPI.updateUserDescription({
            description
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getGender() {
        return this.client.apis.accountInformationAPI.getUserGender();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateGender(gender) {
        return this.client.apis.accountInformationAPI.updateUserGender({
            gender
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getConsecutiveXboxLoginDays() {
        return this.client.apis.accountInformationAPI.getConsecutiveXboxLoginDays();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getVerifiedPhoneNumber() {
        return this.client.apis.accountInformationAPI.getVerifiedPhoneNumber();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    setPhoneNumber(options) {
        return this.client.apis.accountInformationAPI.setPhoneNumber(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    deletePhone(options) {
        return this.client.apis.accountInformationAPI.deletePhone(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    resendPhoneCode(options) {
        return this.client.apis.accountInformationAPI.resendPhoneCode(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    verifyPhone(options) {
        return this.client.apis.accountInformationAPI.verifyPhone(options);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getPromotionChannels() {
        return this.client.apis.accountInformationAPI.getSelfPromotionChannels();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    removeStarCodeAffiliate() {
        return this.client.apis.accountInformationAPI.removeStarCodeAffiliate();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getStarCodeAffiliate() {
        return this.client.apis.accountInformationAPI.getStarCodeAffiliate();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    addStarCodeAffiliate(code) {
        return this.client.apis.accountInformationAPI.addStarCodeAffiliate({
            code
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getPasswordStatus() {
        return this.client.apis.authAPI.getCurrentUserPasswordStatus();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    changeUserPassword(newPassword, oldPassword) {
        return this.client.apis.authAPI.changeUserPassword({
            currentPassword: oldPassword,
            newPassword
        });
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    changeUsername(newUsername, password) {
        return this.client.apis.authAPI.changeUserUsername({
            password,
            username: newUsername
        });
    }
}
exports.default = ClientUser;
