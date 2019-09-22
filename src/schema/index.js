import { gql } from 'apollo-server-express'
import UserSchema from './UserSchema'
import PostSchema from './PostSchema'

const Query = gql`
	type Query {
		_empty: String
	}
	type Mutation {
		_empty: String
	}
`


export default [
	Query,
	UserSchema,
	PostSchema
]