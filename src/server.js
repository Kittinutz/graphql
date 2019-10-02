const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
var fs = require('fs')
var https = require('https')
import  db  from '../models'
import schema from  './schema'
import resolvers from './resolvers'

const typeDefs = schema;

const server = new ApolloServer({ typeDefs, resolvers, context:{ db } });
const app = express();
app.get('/', async (req,res)=>{
  console.log(db);
  const data = await db.User.findOne({
    where: {
      id: 1,
    },
    include: [
      {
        model: db.users_posts,
        include:[
          {
            model:db.Post
          }
        ]
      }
    ]
  });
  res.send(data);
})
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at https://localhost:4000${server.graphqlPath}`)
);