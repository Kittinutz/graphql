import {gql} from "apollo-server-express";

export default gql`
	type Post {
		id: Int!
		message: String!
		createAt: String!
		updateAt: String!
	}
	extend type Query {
		posts: [Post!]
	}

	extend type Mutation {
		createPost(userId: Int!, message: String!): User
	}
`;
