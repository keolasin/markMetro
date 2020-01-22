const gql = require('graphql-tag');

const ADD_VEHICLE = gql`
    mutation CreateVehicle( $vehicleID: String, $route: String,$predictable: Boolean, $run: String, $latitude: Float, $longitude: Float, $heading: Int, $timeSinceReport: Int){
        createVehicle(
            vehicleID: "6092",
            route: "20",
            predictable: true,
            run: "20_691_0",
            latitude: 34.013706,
            longitude: -118.490067,
            heading: 334,
            timeSinceReport: 78
        ){
            route
        }
    }
`;

module.exports = {
    ADD_VEHICLE
}