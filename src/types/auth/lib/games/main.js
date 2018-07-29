const lib = require('./lib.js');



class GamesApi {

    constructor(id) {
        this._id = id;
    }


    /**
     * Favorites or unfavorites the game
     * @param {Number} universeId The id of the game/universe
     * @param {Boolean} favorite Whether or not you want to favorite it
     * @returns {Boolean}
     */
    async favoriteGame(universeId, favorite) {
        return lib.favoriteGame(universeId, favorite, this._id);
    }

    /**
     * Returns a JSON about the game's favorite count
     * @param {Number} universeId 
     */
    async getGameFavoriteCount(universeId) {
        return lib.getGameFavoriteCount(universeId, this._id);
    }

    /**
     * Returns a JSON about the game 
     * @param {Number} universeId 
     */
    async getGameInfo(universeId) {
        return lib.getGameInfo(universeId, this._id)
    }


    /**
     * Returns a JSON about the game
     * @param {Number} universeId 
     */
    async getGameList(universeId) {
        return lib.getGameList(universeId);
    }


    /**
     * Returns a JSON about the game's media
     * @param {Number} universeId 
     */
    async getGameMedia(universeId) {
        return lib.getGameMedia(universeId, this._id);
    }

    /**
     * Returns a JSON about the game's playability status (for the authenticated user)
     * @param {Number} universeId 
     */
    async getGamePlayability(universeId) {
        return lib.getGamePlayability(universeId, this._id)
    }


    /**
     * Returns a JSON about the game sorts
     * @param {String} gameSortsContext 
     */
    async getGameSorts(gameSortsContext) {
        return lib.getGameSorts(gameSortsContext, this._id)
    }

    /**
     * 
     * @param {Object} settings
     * @param {String} settings.algorithmName
     * @param settings.paginationKey
     * @param {Number} settings.maxRows 
     */
    async getGamesRecommendations(settings) {
        return lib.getGamesRecommendations(settings, this._id);
    }


    /**
     * Returns a JSON about the user's vote for the game
     * @param {Number} universeId 
     */
    async getGameVoteForUser(universeId) {
        return lib.getGameVoteForUser(universeId, this._id)
    }


    /**
     * Returns a JSON about the game's votes
     * @param {Number} universeId 
     */
    async getGameVotes(universeId) {
        return lib.getGameVotes(universeId, this._id);
    }


    /**
     * Returns a JSON about the places you provided (by id)
     * @param {Array} listPlaceIds 
     */
    async getPlacesInfo(listPlaceIds) {
        return lib.getPlacesInfo(listPlaceIds, this._id);
    }


    /**
     * Returns a JSON about if the game is favorited by the authenticated user
     * @param {Number} universeId 
     */
    async isGameFavorited(universeId) {
        return lib.isGameFavorited(universeId, this._id);
    }


    /**
     * Give a vote for the game (or not)
     * @param {Number} universeId 
     * @param {Boolean} giveVote Whether or not you want to give a vote for the game
     */
    async voteGame(universeId, giveVote) {
        return lib.voteGame(universeId, giveVote, this._id);
    }


}

module.exports = GamesApi