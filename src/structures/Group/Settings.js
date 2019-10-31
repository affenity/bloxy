module.exports = class GroupSettings {
	constructor (env, settings) {
		this.isApprovalRequired = settings.isApprovalRequired;
		this.isBuildersClubRequired = settings.isBuildersClubRequired;
		this.areEnemiesAllowed = settings.areEnemiesAllowed;
		this.areGroupFundsVisible = settings.areGroupFundsVisible;
		this.areGroupGamesVisible = settings.areGroupGamesVisible;
	}
};
