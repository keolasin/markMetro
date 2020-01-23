const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { routeRequester } = require('./routeRequester');

// scheduling
const cron = require('node-cron');

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
    console.log(`This server will collect vehicle location data from a given metro and list of routes and store it`);
    
    // using cron to make a request every minute
    cron.schedule("* * * * *", () => {
      // making requests to the provided metro and array of desired routes
      routeRequester(routeList, metro);
    });
    console.log(`Data collection complete.`);
});
