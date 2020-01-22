const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { apiRequester } = require('./apiRequester');

// resolvers
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
    Query,
    Mutation,
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    },
});

server.start(() => {
    console.log(`Server is up and running on http://localhost:4000`);

    console.log(`Beginning call to la metro api`);
    apiRequester();
    console.log(`Ending function`);
});