const { GraphQLServer } = require('graphql-yoga');

// resolvers

const resolvers = {

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
});