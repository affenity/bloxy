const Joi = require("joi");

exports.GameUniverseSchema = Joi.object({
    id: Joi.number(),
    rootPlaceId: Joi.number(),
    name: Joi.string(),
    description: Joi.string(),
    creatorType: Joi.string(),
    creator: Joi.object({
        id: Joi.number(),
        name: Joi.string(),
    }),
    price: Joi.number(),
    allowedGearGenres: Joi.array().items(Joi.string()),
    allowedGearCategories: Joi.array().items(Joi.string()),
    playing: Joi.number(),
    visits: Joi.number(),
    maxPlayers: Joi.number(),
    created: Joi.string(),
    updated: Joi.string(),
    studioAccessToApisAllowed: Joi.bool(),
    createVipServersAllowed: Joi.bool(),
    universeAvatarType: Joi.string(),
    genre: Joi.string(),
});
exports.SearchUniverseDataSchema = Joi.object({
    id: Joi.number(),
    rootPlaceId: Joi.number(),
    name: Joi.string(),
    description: Joi.string(),
    isArchived: Joi.bool(),
    isActive: Joi.bool(),
    privacyType: Joi.string(),
    creatorType: Joi.string(),
    creatorTargetId: Joi.number(),
    creatorName: Joi.string(),
    created: Joi.string(),
    updated: Joi.string()
})

exports.PluginDataSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    description: Joi.string().allow(""),
    commentsEnabled: Joi.bool(),
    versionId: Joi.number(),
    created: Joi.string(),
    updated: Joi.string()
});
