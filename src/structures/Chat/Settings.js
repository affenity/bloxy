module.exports = class ChatSettings {
	constructor (env, data) {
		this.chatEnabled = data.chatEnabled;
		this.isActiveChatUser = data.isActiveChatUser;
	}
};
