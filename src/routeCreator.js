const axios = require('axios');
const { request } = require('graphql-request');

// mutations
const { ADD_ROUTE } = require('./commands/Mutations');

async function routeCreator(routes){

    const prismaEndpoint = `https://powerful-ridge-68271.herokuapp.com`;
    routes.forEach( async (route) => {
        // define variables for mutation
        const routeVariables = {
            routeID: route
        }

        //graphQL mutation
        const mutation = `
            mutation CreateRoute($routeID: String) {
                CreateRoute(routeID: $routeID){
                    routeID
                    vehicles {
                        vehicleID
                    }
                }
            }
        `;
        
        // making request to prisma database to create each route
        const data = await request(prismaEndpoint, mutation, routeVariables);
        console.log(JSON.stringify(data,undefined, 2));
    });
}

module.exports = {
    routeCreator
}