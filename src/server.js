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
app.get('/',(req,res)=>{
  res.send('helloworld')
})
server.applyMiddleware({ app });

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at https://localhost:4000${server.graphqlPath}`)
);

console.log('test')