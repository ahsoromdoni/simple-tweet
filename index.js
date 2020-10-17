//Dependencies Import
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

//Relative Import
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDb Connected!")
        return server.listen({ port: 9000 })
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })