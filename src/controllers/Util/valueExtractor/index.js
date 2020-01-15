/**
 * Gets a value from a data object. For example groupId from Group object etc.
 * @param {Object} data The data to extract from
 * @param {"userId" | "groupId" | "username" | "membership" | "name" | "friendsCount"} identifierType The type
 * @param {string[]} excludeTypes The ids in the type to ignore, for example "id" in Group
 * @returns {any}
 */
module.exports = (data, identifierType, excludeTypes) => {
	if (!data) {
		throw new Error("Did not provide the data object to extract value from");
	}
	if (!identifierType) {
		throw new Error("Did not provide the identifierType when extracting a value from object");
	}

	// eslint-disable-next-line security/detect-object-injection
	identifierType = identifiers[identifierType];
	excludeTypes = excludeTypes || [];
	if (!identifierType) {
		throw new Error(`Could not find an identifier type`);
	}

	for (let identifier of identifierType) {
		// eslint-disable-next-line security/detect-object-injection
		if (!excludeTypes.some(i => i === identifier) && data[identifier]) {
			// eslint-disable-next-line security/detect-object-injection
			return data[identifier];
		}
	}

	return null;
};

const identifiers = {
	userId: [
		"ProfileUserId", "userId", "UserId", "userid", "PlayerId", "playerId", "ID", "id", "Id", "targetUserId", "targetId"
	],
	groupId: [
		"groupId", "GroupId", "Groupid", "id", "Id"
	],
	username: [
		"ProfileUserName", "username", "Username", "userName", "UserName", "Name", "name"
	],
	membership: [
		"BC", "BuildersClubStatus", "bc", "Membership", "membership", "buildersClubMembershipType"
	],
	name: [
		"Name", "name"
	],
	friendsCount: [
		"numFriends", "NumFriends", "numfriends", "friendsCount"
	]
};
