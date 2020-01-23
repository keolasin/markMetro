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

    console.log(`This server will collect data from the LA metro API and store it`);

    /*
        1. define timeframe for data collection
        2. define routes to collect from and store in prisma as Route model
        3. make request to api every 2 seconds for each chosen route
        4. save each vehicle for each route to the prisma server (linked vehicle model to its respective route)
        5. dump every week to avoid database size limit (?)
    */
    apiRequester();
    console.log(`Data collection complete.`);
});