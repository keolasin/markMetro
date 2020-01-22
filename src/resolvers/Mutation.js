async function createVehicle(parent, args, context, info){
    return context.prisma.createVehicle({
        vehicleID: args.vehicleID,
        route: args.routeID,
        predictable: args.predictable,
        run: args.run,
        latitude: args.latitude,
        longitude: args.longitude,
        heading: args.heading,
        timeSinceReport: args.timeSinceReport,
    });
}

module.exports = {
    createVehicle,
}