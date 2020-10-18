const postsResolver = require('./posts');
const userResolver = require('./users');
const commentsResolver = require('./comments');

module.exports = {
    Query: {
        ...postsResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...postsResolver.Mutation,
        ...commentsResolver.Mutation
    },
    Subscription: {
        ...postsResolver.Subscription
    }
}