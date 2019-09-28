export default {
	Query: {},
	Mutation: {
		createPost: async (parent, args, {db}, info) => {
			const {userId, message} = args;
			const queryUser = await db.Post.create({
				message,
				userId
			});

			return queryUser;
		}
	}
};
