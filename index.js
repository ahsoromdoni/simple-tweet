const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config');

const typeDefs = gql`
    type Query {
        hello:String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDb Connected!")
        return server.listen({ port: 9000 })
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })