const identifiers = {

	userId: ["ProfileUserId", "userId", "UserId", "userid", "PlayerId", "playerId", "ID", "id", "targetUserId", "targetId"],
	groupId: ["groupId", "GroupId", "Groupid", "id", "groupId", "Id"],
	username: ["ProfileUserName", "username", "Username", "userName", "UserName", "Name", "name"],
	membership: ["BC", "BuildersClubStatus", "bc", "Membership", "membership", "buildersClubMembershipType"],
	name: ["Name", "name"],
	friendsCount: ["numFriends", "NumFriends", "numfriends", "FriendsCount"]
};

// eslint-disable-next-line consistent-return
module.exports = (typeIdentifier, data, excludeIdentifiers = []) => {
	if (!data) throw new Error("Did not provide data to extract from when attempting to get a value");
	if (!typeIdentifier) throw new Error("Did not provide typeIdentifier when attempting to get a value");

	typeIdentifier = identifiers[typeIdentifier];
	if (!typeIdentifier) throw new Error("Invalid typeIdentifier provided when attempting to get a value");

	for (let x = 0; x < typeIdentifier.length; x++) {
		let thisIdentifier = typeIdentifier[x];
		if (!excludeIdentifiers.some(i => i === thisIdentifier) && data[thisIdentifier]) return data[thisIdentifier];
	}
};
