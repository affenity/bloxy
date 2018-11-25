

class UserFunctions {
	constructor () {

	}
}


exports.RobloxUser = class RobloxUser extends UserFunctions {


	constructor (data, self) {
		super();

		this.self = self;

		this.userId = Number(data.UserId || data.userId || data.userid || data.Id);
		this.username = (data.Username || data.username || data.Name || data.name || data.userName).toString();
		this.status = (data.Status || data.status).toString();
		this.blurb = (data.Blurb || data.blurb).toString();

		this.joinDate = new Date(data.JoinDate || data.joinDate || data.joindate);
		this.accountAge = Number(data.AccountAge || data.accountAge || data.age || data.Age);
		this.membership = Memberships[(data.BC || data.bc || data.membership || data.Membership || data.buildersClubMembershipType || data.memberShip || data.MemberShip || "undefined").toString().toLowerCase()];
		this.numFriends = Number(data.numFriends || data.NumFriends || data.numfriends);

		this.profilePicture = (data.pfp).toString();
		this.avatarPicture  = (data.avatarPic).toString();
	}

};

exports.PartialUser =  class PartialUser extends UserFunctions {

	constructor (data, self) {
		super();

		this.self = self;

		this.userId = parseInt(data.UserId || data.userId || data.userid || data.Id);
		this.username = (data.Username || data.username || data.Name || data.name || data.userName).toString();
		this.membership = Memberships[(data.BuildersClubStatus || data.BC || data.bc || data.Membership || data.membership || data.buildersClubMemberShipType || "undefined").toString().toLowerCase()];

	}
    
};


exports.RobloxMessage = class RobloxMessage {
	constructor (message, self) {
		
		this.self = self;

		this.messageId = message.Id;
		this.sender    = {}; //new exports.PartialUser(message.Sender, self);
		this.recipient = {}; // new exports.PartialUser(message.Recipient, self);

		this.subject = message.Subject;
		this.body 	 = message.Body;
		this.created = new Date(message.Created);
		this.updated = new Date(message.Updated);

		this.isRead  = (message.IsRead === true);
		this.isSystemMessage = (message.IsSystemMessage === true);
	}
};


const Memberships = {
	nbc: "NBC",
	bc:  "BC",
	tbc: "TBC",
	obc: "OBC",
	0: "NBC",
	1: "BC",
	2: "TBC",
	3: "OBC",
	"undefined": undefined
};