async function createVehicle(parent, args, context, info){
    return context.prisma.createVehicle({
        vehicleID: args.vehicleID,
        route: { connect: { id: args.routeID } },
        predictable: args.predictable,
        run: args.run,
        latitude: args.latitude,
        longitude: args.longitude,
        heading: args.heading,
        timeSinceReport: args.timeSinceReport,
        dataLoad: args.dataLoad
    });
}

async function createRoute(parent, args, context, info){
    return context.prisma.createRoute({
        routeID: args.routeID
        vehicles: null
    });
}

module.exports = {
    createVehicle,
    createRoute
}