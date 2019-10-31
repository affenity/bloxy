module.exports = {
	userId: [
		[
			joi => joi.string()
		],
		[
			joi => joi.number()
		],
		[
			(joi, client) => joi.object().instance(client.structures.User.User),
			(env, user) => user.userId
		],
		[
			(joi, client) => joi.object().instance(client.structures.User.Partial),
			(env, user) => user.userId
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.Member),
			(env, member) => member.id
		]
	],
	groupId: [
		[
			joi => joi.string()
		],
		[
			joi => joi.number()
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.Group),
			(env, group) => group.id
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.Partial),
			(env, group) => group.id
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.User),
			(env, group) => group.id
		]
	],
	joinRequest: [
		[
			(joi, client) => joi.object().instance(client.structures.Group.JoinRequest),
			(env, joinRequest) => joinRequest.id
		],
		[
			joi => joi.number()
		],
		[
			joi => joi.string()
		]
	],
	groupRole: [
		[
			joi => joi.number()
		],
		[
			joi => joi.string()
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.Role),
			(env, role) => role.id
		]
	],
	groupPost: [
		[
			joi => joi.number()
		],
		[
			joi => joi.string()
		],
		[
			(joi, client) => joi.object().instance(client.structures.Group.WallPost),
			(env, post) => post.id
		]
	],
	any: [
		[
			joi => joi.number()
		],
		[
			joi => joi.string()
		]
	],
	message: [
		[
			joi => joi.number()
		],
		[
			joi => joi.string()
		],
		[
			(joi, client) => joi.object().instance(client.structures.Message),
			(env, message) => message.id
		]
	],
	arrayType: id => {
		const types = module.exports[id];
		const returnTypes = [];

		types.forEach(x => {
			const checker = x[0];
			returnTypes.push([
				// eslint-disable-next-line consistent-return
				(joi, client) => joi.array().items(joi.any().custom(val => {
					const { error } = checker(joi, client).validate(val);
					if (error) throw new Error(error);
					if (!error) {
						return val;
					}
				}, "custom validation")),
				x[1]
			]);
		});
		return returnTypes;
	}
};
