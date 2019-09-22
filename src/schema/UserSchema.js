import { gql } from 'apollo-server-express'

export default gql`
type User {
	id: ID!
	firstName: String!
	lastName: String!
	email: String!
	posts: [Post!]
}

extend type Query {
	users: [User!],
	userById(id:Int!): User,
	userByName(firstName:String): User,
	getUserPost(firstName:String): User,
}

extend type Mutation {
	createUser(firstName:String!,lastName:String!,email:String!): User,
}
`
