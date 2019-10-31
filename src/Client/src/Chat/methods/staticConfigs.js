const staticTypes = require("../../../../misc/util/staticTypeDeclarations");

module.exports = [
	{
		names: ["getSettings"],
		type: "request",
		params: [],
		request: {
			url: "https://chat.roblox.com/v2/chat-settings"
		},
		response: (env, params, data) => new env.client.structures.Chat.Settings(env, data)
	},
	{
		names: ["getConversationsById"],
		type: "request",
		params: [
			[
				"conversations",
				true,
				staticTypes.arrayType("any")
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/get-conversations",
			queries: (env, { conversations }) => ({
				conversationIds: conversations
			})
		},
		response: (env, params, data) => data.map(convo => new env.client.structures.Chat.Conversation(env, convo))
	},
	{
		names: ["getConversation"],
		type: "custom",
		params: [
			[
				"conversation",
				true,
				staticTypes.any
			]
		],
		run: function run ({ conversation }) {
			return this.getConversationsById([conversation]).then(conversations => conversations[0]);
		}
	},
	{
		names: ["getConversationMessages"],
		type: "request",
		params: [
			[
				"options",
				true,
				joi => joi.object({
					conversationId: joi.any(),
					pageSize: joi.any().default(100)
				})
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/get-messages",
			queries: (env, { options }) => ({
				conversationId: options.conversationId,
				pageSize: options.pageSize || 100
			})
		},
		response: (env, params, data) => data.map(msg => new env.client.structures.Chat.Message(env, msg, params.conversationId))
	},
	{
		names: ["getUnreadConversationsCount"],
		type: "request",
		params: [],
		request: {
			url: "https://chat.roblox.com/v2/get-unread-conversation-count"
		},
		response: (env, params, data) => data.count
	},
	{
		names: ["getUnreadConversationMessages"],
		type: "request",
		params: [
			[
				"conversations",
				true,
				staticTypes.arrayType("any")
			],
			[
				"pageSize",
				false,
				joi => joi.number().default(100)
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/get-unread-messages",
			queries: (env, { conversations, pageSize }) => ({
				conversationIds: conversations,
				pageSize: pageSize || 100
			})
		},
		response: (env, params, data) => {
			const response = {};
			data.forEach(conversation => {
				response[conversation.conversationId] = conversation.chatMessages.map(msg => new env.client.structures.Chat.Message(env, msg, conversation.conversationId));
			});
			return response;
		}
	},
	{
		names: ["getConversations"],
		type: "request",
		params: [
			[
				"page",
				false,
				joi => joi.number()
			],
			[
				"pageSize",
				false,
				joi => joi.number().default(100)
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/get-user-conversations",
			queries: (env, { page, pageSize }) => ({
				pageNumber: page || 1,
				pageSize: pageSize || 100
			})
		},
		response: (env, params, data) => data.map(convo => new env.client.structures.Chat.Conversation(env, convo))
	},
	{
		names: ["getMetadata"],
		type: "request",
		params: [],
		request: {
			url: "https://chat.roblox.com/v2/metadata"
		},
		response: (env, params, data) => new env.client.structures.Chat.Metadata(env, data)
	},
	{
		names: ["addToConversation"],
		type: "request",
		params: [
			[
				"userIds",
				true,
				staticTypes.arrayType("userId")
			],
			[
				"conversation",
				true,
				staticTypes.any
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/add-to-conversation",
			method: "POST",
			json: (env, { userIds, conversation }) => ({
				participantUserIds: userIds,
				conversationId: conversation
			})
		}
	},
	{
		names: ["markMessageRead"],
		type: "request",
		params: [
			[
				"conversation",
				true,
				staticTypes.any
			],
			[
				"messageId",
				true,
				staticTypes.any
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/mark-as-read",
			method: "POST",
			json: (env, { conversation, messageId }) => ({
				conversationId: conversation,
				endMessageId: messageId
			})
		}
	},
	{
		names: ["markConversationsRead"],
		type: "request",
		params: [
			[
				"conversations",
				true,
				staticTypes.arrayType("any")
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/mark-as-seen",
			method: "POST",
			json: (env, { conversations }) => ({
				conversationsToMarkSeen: conversations
			})
		}
	},
	{
		names: ["removeFromConversation"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			],
			[
				"conversation",
				true,
				staticTypes.any
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/remove-from-conversation",
			method: "POST",
			json: (env, { userId, conversation }) => ({
				participantUserId: userId,
				conversationId: conversation
			})
		}
	},
	{
		names: ["renameGroupConversation"],
		type: "request",
		params: [
			[
				"conversation",
				true,
				staticTypes.any
			],
			[
				"title",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/rename-group-conversation",
			method: "POST",
			json: (env, { conversation, title }) => ({
				conversationId: conversation,
				newTitle: title
			})
		}
	},
	{
		names: ["sendMessage"],
		type: "request",
		params: [
			[
				"message",
				true,
				joi => joi.string()
			],
			[
				"conversation",
				true,
				staticTypes.any
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/send-message",
			method: "POST",
			json: (env, { message, conversation }) => ({
				message,
				conversationId: conversation
			})
		},
		response: () => true
	},
	{
		names: ["createGroupConversation"],
		type: "request",
		params: [
			[
				"users",
				true,
				staticTypes.arrayType("userId")
			],
			[
				"title",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/start-group-conversation",
			method: "POST",
			json: (env, { users, title }) => ({
				participantUserIds: users,
				title
			})
		},
		response: (env, params, data) => new env.client.structures.Chat.Conversation(env, data.conversation)
	},
	{
		names: ["updateTypingStatus"],
		type: "request",
		params: [
			[
				"conversation",
				true,
				staticTypes.any
			],
			[
				"isTyping",
				true,
				joi => joi.bool()
			],
			[
				"duration",
				false,
				joi => joi.number()
			]
		],
		request: {
			url: "https://chat.roblox.com/v2/update-user-typing-status",
			method: "POST",
			json: (env, { conversation, isTyping }) => ({
				conversationId: conversation,
				isTyping: isTyping || false
			})
		},
		response: (env, { conversation, duration }) => {
			if (duration) {
				env.client.setTimeout(() => {
					env.updateTypingStatus(conversation, false);
				}, duration * 1000);
			}
			return true;
		}
	},
	{
		names: ["getConversationsWithUser"],
		type: "custom",
		params: [
			[
				"user",
				true,
				staticTypes.userId
			]
		],
		run: async ({ user }) => {
			const conversations = await this.getConversations(1, 100);
			return conversations.filter(x => x.participants.some(u => u.id === user));
		}
	}
];
