const ClientBase = require("./ClientBase");

/**
 * @type {Client}
 * @extends {ClientBase}
 */
class Client extends ClientBase {
	/**
	 * Creates a new bloxy apis
	 * @param {ClientConstructorOptions} options The options used to initiate a apis with
	 */
	constructor (options) {
		super(options);

		this.loggedIn = false;
		/**
		 * The user that is authenticated (only existent when authenticated)
		 * @type {ClientUser}
		 */
		this.user = null;
		this.login = require("./src/login").bind(this, this);
		this.connect = require("./src/websocket").bind(this, this);
	}

	/**
	 * Gets group information
	 * @param {GroupIdentifier} group The group identifier
	 * @returns {Promise<Group>}
	 */
	getGroup (group) {
		return this._validate.group.identifier(group).then(id => this.apis.groups.getGroupInfo(id).then(group => new this.structures.group(this, group)));
	}

	/**
	 * Gets user information
	 * @param {UserIdentifier} user The user identifier
	 * @param {boolean} isName Whether the userId provided is a username or not
	 * @returns {Promise<User>}
	 */
	async getUser (user, isName = false) {
		if (!isName) {
			user = await this._validate.user.validate.identifier(user);
		} else {
			user = await this.getUserId(user);
		}
		return this.apis.other.getUser(user).then(userData => new this.structures.user(this, userData));
	}

	/**
	 * Gets a user's groups
	 * @param {UserIdentifier} user The user identifier
	 * @returns {Promise<Array<UserGroup>>}
	 */
	getUserGroups (user) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.groups.getUserGroupsV2(id).then(data => data && data.data && data.data.map(group => new this.structures.group.User(this, group))));
	}

	/**
	 * Gets a user's id (and other data) by their username
	 * @param {string} user The user's username
	 * @param {boolean} returnFull Whether to return the full object or just the id
	 * @returns {Promise<number, Object>}
	 */
	getUserId (user, returnFull = false) {
		return this._validate(user, joi => joi.string()).then(name => this.apis.api.getUserByUsername(name).then(data => returnFull ? new this.structures.user.Partial(this, data) : data.Id));
	}

	/**
	 * Gets a user's username by their id
	 * @param {UserIdentifier} user The user's id
	 * @param {boolean} returnFull Whether to return all the data retrieved or not
	 * @returns {Promise<UserPartial | string>}
	 */
	getUsername (user, returnFull) {
		return this._validate.user.validate.identifier(user).then(id => this.apis.api.getUserById(id).then(data => returnFull ? new this.structures.user.Partial(this, data) : data.Username));
	}

	/**
	 * Gets multiple users (partial information)
	 * @param {UserIdentifier[]} users The users
	 * @param {boolean} names Whether or not the values are names, not ids
	 * @returns {Promise<UserPartial[]>}
	 */
	async getMultiUsers (users, names) {
		const ids = names === true ? await this._validate.user.validate.identifiers(users) :
			await this._validate(users, joi => joi.array().items(joi.string()));

		if (names) {
			return this.apis.users.getUsersByNames(ids).then(data => (data && data.data).map(user => new this.structures.user.Partial(this, user)));
		} else {
			return this.apis.users.getUsersByIds(ids).then(data => (data && data.data).map(user => new this.structures.user.Partial(this, user)));
		}
	}

	/**
	 * Searches for groups
	 * @param {string} query The query
	 * @param {boolean} isKeyword Whether the query is a keyword
	 * @param {string} cursor The page cursor (only if it is keyword search)
	 * @param {number} limit The max amount of data to be returned (only if keyword search)
	 * @returns {Promise<Array<GroupPartial>>}
	 */
	searchGroups (query, { isKeyword = false, cursor, limit = 100 } = {}) {
		return this._validate(query, joi => joi.string()).then(q => {
			if (isKeyword) {
				return this.apis.groups.searchGroupsByKeyword({
					keyword: q,
					cursor,
					limit
				}).then(d => {
					// TODO: Finish here
					const foundGroups = d.data.map(g => new this.structures.group.Partial(this, g));
					return {
						keyword: d.keyword,
						previousPageCursor: d.previousPageCursor,
						nextPageCursor: d.nextPageCursor,
						groups: foundGroups,
						next: () => this.searchGroups(query, { isKeyword, cursor: d.nextPageCursor, limit }),
						previous: () => this.searchGroups(query, { isKeyword, cursor: d.previousPageCursor, limit })
					};
				});
			} else {
				return this.apis.groups.searchGroups(q).then(data => data.data.map(group => new this.structures.group.Partial(this, group)));
			}
		});
	}

	/**
	 * Gets a user's Roblox verification status (fetched from eryn's API)
	 * @param {AnyIdentifier} userId The user's id
	 * @returns {Promise<Object>}
	 */
	getRobloxVerificationStatus (userId) {
		return this._validate.user.validate.identifier(userId).then(id => this.rest.request({
			url: `https://verify.eryn.io/api/user/${userId}`,
			json: true
		}).then(response => {
			const body = response.data.body;
			if (body instanceof Object) {
				if (body.error) {
					throw new Error("User does not exist");
				} else {
					return new this.structures.user.Partial(this, {
						username: body.robloxUsername,
						userId: body.robloxId
					});
				}
			}
		}));
	}
}

module.exports = Client;
