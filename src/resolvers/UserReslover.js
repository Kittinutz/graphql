export default {
	Query:{
		userByName: (parent, args, { db }, info) =>{
			const { firstName } = args;
			return  db.User.findOne({ where:{ firstName:firstName } })
		},
		users: (parent, args, { db }, info) =>{
			return  db.User.findAll()
		},
		userById: (parent, args, { db }, info) =>{
			const { id } = args;

			return  db.User.findOne({where:{id:id}})
		},
	},
	Mutation:{
		createUser: async (parent, args, { db }, info) => {
			const { firstName,lastName,email="" } = args;
			const queryUser =   await db.User.create({
				firstName,
				lastName,
				email:email.toLowerCase()
			})
			return queryUser

		},
	}
}