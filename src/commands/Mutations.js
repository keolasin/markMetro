const gql = require('graphql-tag');

const ADD_VEHICLE = gql`
    mutation CreateVehicle( 
        $vehicleID: String, 
        $route: ID!, 
        $predictable: Boolean, 
        $runID: String, 
        $latitude: Float, 
        $longitude: Float, 
        $heading: Int, 
        $timeSinceReport: Int, 
        $dataLoad: Json,
    ) {
        createVehicle(
            vehicleID: $vehicleID,
            route: $route,
            predictable: $predictable,
            runID: $runID,
            latitude: $latitude,
            longitude: $longitude,
            heading: $heading,
            timeSinceReport: $timeSinceReport
            dataLoad: $dataLoad
        ) {
            latitude,
            longitude
        }
    }
`;

const ADD_ROUTE = gql`
    mutation CreateRoute($routeID: String) {
        routeID
    }
`;

module.exports = {
    ADD_VEHICLE,
    ADD_ROUTE
}