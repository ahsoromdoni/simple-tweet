const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

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

server.listen({ port: 9000 })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })