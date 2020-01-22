async function getVehicles(parent, args, context, info){
    const where = args.filter ? {
        OR: [
          { vehicleID_contains: args.filter },
          { route_contains: args.filter },
          { heading_contains: args.filter },
          { serverTime_contains: args.filter}
        ],
      } : {}
    
    const vehicles = await context.prisma.vehicles({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    });
    return vehicles;
}