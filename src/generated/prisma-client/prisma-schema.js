module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateRoute {
  count: Int!
}

type AggregateVehicle {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createRoute(data: RouteCreateInput!): Route!
  updateRoute(data: RouteUpdateInput!, where: RouteWhereUniqueInput!): Route
  updateManyRoutes(data: RouteUpdateManyMutationInput!, where: RouteWhereInput): BatchPayload!
  upsertRoute(where: RouteWhereUniqueInput!, create: RouteCreateInput!, update: RouteUpdateInput!): Route!
  deleteRoute(where: RouteWhereUniqueInput!): Route
  deleteManyRoutes(where: RouteWhereInput): BatchPayload!
  createVehicle(data: VehicleCreateInput!): Vehicle!
  updateVehicle(data: VehicleUpdateInput!, where: VehicleWhereUniqueInput!): Vehicle
  updateManyVehicles(data: VehicleUpdateManyMutationInput!, where: VehicleWhereInput): BatchPayload!
  upsertVehicle(where: VehicleWhereUniqueInput!, create: VehicleCreateInput!, update: VehicleUpdateInput!): Vehicle!
  deleteVehicle(where: VehicleWhereUniqueInput!): Vehicle
  deleteManyVehicles(where: VehicleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  route(where: RouteWhereUniqueInput!): Route
  routes(where: RouteWhereInput, orderBy: RouteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Route]!
  routesConnection(where: RouteWhereInput, orderBy: RouteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RouteConnection!
  vehicle(where: VehicleWhereUniqueInput!): Vehicle
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle]!
  vehiclesConnection(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VehicleConnection!
  node(id: ID!): Node
}

type Route {
  id: ID!
  createdAt: DateTime!
  routeID: String
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle!]
}

type RouteConnection {
  pageInfo: PageInfo!
  edges: [RouteEdge]!
  aggregate: AggregateRoute!
}

input RouteCreateInput {
  id: ID
  routeID: String
  vehicles: VehicleCreateManyWithoutRouteInput
}

input RouteCreateOneWithoutVehiclesInput {
  create: RouteCreateWithoutVehiclesInput
  connect: RouteWhereUniqueInput
}

input RouteCreateWithoutVehiclesInput {
  id: ID
  routeID: String
}

type RouteEdge {
  node: Route!
  cursor: String!
}

enum RouteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  routeID_ASC
  routeID_DESC
}

type RoutePreviousValues {
  id: ID!
  createdAt: DateTime!
  routeID: String
}

type RouteSubscriptionPayload {
  mutation: MutationType!
  node: Route
  updatedFields: [String!]
  previousValues: RoutePreviousValues
}

input RouteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RouteWhereInput
  AND: [RouteSubscriptionWhereInput!]
  OR: [RouteSubscriptionWhereInput!]
  NOT: [RouteSubscriptionWhereInput!]
}

input RouteUpdateInput {
  routeID: String
  vehicles: VehicleUpdateManyWithoutRouteInput
}

input RouteUpdateManyMutationInput {
  routeID: String
}

input RouteUpdateOneWithoutVehiclesInput {
  create: RouteCreateWithoutVehiclesInput
  update: RouteUpdateWithoutVehiclesDataInput
  upsert: RouteUpsertWithoutVehiclesInput
  delete: Boolean
  disconnect: Boolean
  connect: RouteWhereUniqueInput
}

input RouteUpdateWithoutVehiclesDataInput {
  routeID: String
}

input RouteUpsertWithoutVehiclesInput {
  update: RouteUpdateWithoutVehiclesDataInput!
  create: RouteCreateWithoutVehiclesInput!
}

input RouteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  routeID: String
  routeID_not: String
  routeID_in: [String!]
  routeID_not_in: [String!]
  routeID_lt: String
  routeID_lte: String
  routeID_gt: String
  routeID_gte: String
  routeID_contains: String
  routeID_not_contains: String
  routeID_starts_with: String
  routeID_not_starts_with: String
  routeID_ends_with: String
  routeID_not_ends_with: String
  vehicles_every: VehicleWhereInput
  vehicles_some: VehicleWhereInput
  vehicles_none: VehicleWhereInput
  AND: [RouteWhereInput!]
  OR: [RouteWhereInput!]
  NOT: [RouteWhereInput!]
}

input RouteWhereUniqueInput {
  id: ID
}

type Subscription {
  route(where: RouteSubscriptionWhereInput): RouteSubscriptionPayload
  vehicle(where: VehicleSubscriptionWhereInput): VehicleSubscriptionPayload
}

type Vehicle {
  id: ID!
  createdAt: DateTime!
  vehicleID: String
  route: Route
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

type VehicleConnection {
  pageInfo: PageInfo!
  edges: [VehicleEdge]!
  aggregate: AggregateVehicle!
}

input VehicleCreateInput {
  id: ID
  vehicleID: String
  route: RouteCreateOneWithoutVehiclesInput
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleCreateManyWithoutRouteInput {
  create: [VehicleCreateWithoutRouteInput!]
  connect: [VehicleWhereUniqueInput!]
}

input VehicleCreateWithoutRouteInput {
  id: ID
  vehicleID: String
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

type VehicleEdge {
  node: Vehicle!
  cursor: String!
}

enum VehicleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  vehicleID_ASC
  vehicleID_DESC
  predictable_ASC
  predictable_DESC
  runID_ASC
  runID_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  heading_ASC
  heading_DESC
  timeSinceReport_ASC
  timeSinceReport_DESC
  dayOfWeek_ASC
  dayOfWeek_DESC
  dataLoad_ASC
  dataLoad_DESC
}

type VehiclePreviousValues {
  id: ID!
  createdAt: DateTime!
  vehicleID: String
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  vehicleID: String
  vehicleID_not: String
  vehicleID_in: [String!]
  vehicleID_not_in: [String!]
  vehicleID_lt: String
  vehicleID_lte: String
  vehicleID_gt: String
  vehicleID_gte: String
  vehicleID_contains: String
  vehicleID_not_contains: String
  vehicleID_starts_with: String
  vehicleID_not_starts_with: String
  vehicleID_ends_with: String
  vehicleID_not_ends_with: String
  predictable: Boolean
  predictable_not: Boolean
  runID: String
  runID_not: String
  runID_in: [String!]
  runID_not_in: [String!]
  runID_lt: String
  runID_lte: String
  runID_gt: String
  runID_gte: String
  runID_contains: String
  runID_not_contains: String
  runID_starts_with: String
  runID_not_starts_with: String
  runID_ends_with: String
  runID_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  heading: Int
  heading_not: Int
  heading_in: [Int!]
  heading_not_in: [Int!]
  heading_lt: Int
  heading_lte: Int
  heading_gt: Int
  heading_gte: Int
  timeSinceReport: Int
  timeSinceReport_not: Int
  timeSinceReport_in: [Int!]
  timeSinceReport_not_in: [Int!]
  timeSinceReport_lt: Int
  timeSinceReport_lte: Int
  timeSinceReport_gt: Int
  timeSinceReport_gte: Int
  dayOfWeek: String
  dayOfWeek_not: String
  dayOfWeek_in: [String!]
  dayOfWeek_not_in: [String!]
  dayOfWeek_lt: String
  dayOfWeek_lte: String
  dayOfWeek_gt: String
  dayOfWeek_gte: String
  dayOfWeek_contains: String
  dayOfWeek_not_contains: String
  dayOfWeek_starts_with: String
  dayOfWeek_not_starts_with: String
  dayOfWeek_ends_with: String
  dayOfWeek_not_ends_with: String
  AND: [VehicleScalarWhereInput!]
  OR: [VehicleScalarWhereInput!]
  NOT: [VehicleScalarWhereInput!]
}

type VehicleSubscriptionPayload {
  mutation: MutationType!
  node: Vehicle
  updatedFields: [String!]
  previousValues: VehiclePreviousValues
}

input VehicleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VehicleWhereInput
  AND: [VehicleSubscriptionWhereInput!]
  OR: [VehicleSubscriptionWhereInput!]
  NOT: [VehicleSubscriptionWhereInput!]
}

input VehicleUpdateInput {
  vehicleID: String
  route: RouteUpdateOneWithoutVehiclesInput
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleUpdateManyDataInput {
  vehicleID: String
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleUpdateManyMutationInput {
  vehicleID: String
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleUpdateManyWithoutRouteInput {
  create: [VehicleCreateWithoutRouteInput!]
  delete: [VehicleWhereUniqueInput!]
  connect: [VehicleWhereUniqueInput!]
  set: [VehicleWhereUniqueInput!]
  disconnect: [VehicleWhereUniqueInput!]
  update: [VehicleUpdateWithWhereUniqueWithoutRouteInput!]
  upsert: [VehicleUpsertWithWhereUniqueWithoutRouteInput!]
  deleteMany: [VehicleScalarWhereInput!]
  updateMany: [VehicleUpdateManyWithWhereNestedInput!]
}

input VehicleUpdateManyWithWhereNestedInput {
  where: VehicleScalarWhereInput!
  data: VehicleUpdateManyDataInput!
}

input VehicleUpdateWithoutRouteDataInput {
  vehicleID: String
  predictable: Boolean
  runID: String
  latitude: Float
  longitude: Float
  heading: Int
  timeSinceReport: Int
  dayOfWeek: String
  dataLoad: Json
}

input VehicleUpdateWithWhereUniqueWithoutRouteInput {
  where: VehicleWhereUniqueInput!
  data: VehicleUpdateWithoutRouteDataInput!
}

input VehicleUpsertWithWhereUniqueWithoutRouteInput {
  where: VehicleWhereUniqueInput!
  update: VehicleUpdateWithoutRouteDataInput!
  create: VehicleCreateWithoutRouteInput!
}

input VehicleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  vehicleID: String
  vehicleID_not: String
  vehicleID_in: [String!]
  vehicleID_not_in: [String!]
  vehicleID_lt: String
  vehicleID_lte: String
  vehicleID_gt: String
  vehicleID_gte: String
  vehicleID_contains: String
  vehicleID_not_contains: String
  vehicleID_starts_with: String
  vehicleID_not_starts_with: String
  vehicleID_ends_with: String
  vehicleID_not_ends_with: String
  route: RouteWhereInput
  predictable: Boolean
  predictable_not: Boolean
  runID: String
  runID_not: String
  runID_in: [String!]
  runID_not_in: [String!]
  runID_lt: String
  runID_lte: String
  runID_gt: String
  runID_gte: String
  runID_contains: String
  runID_not_contains: String
  runID_starts_with: String
  runID_not_starts_with: String
  runID_ends_with: String
  runID_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  heading: Int
  heading_not: Int
  heading_in: [Int!]
  heading_not_in: [Int!]
  heading_lt: Int
  heading_lte: Int
  heading_gt: Int
  heading_gte: Int
  timeSinceReport: Int
  timeSinceReport_not: Int
  timeSinceReport_in: [Int!]
  timeSinceReport_not_in: [Int!]
  timeSinceReport_lt: Int
  timeSinceReport_lte: Int
  timeSinceReport_gt: Int
  timeSinceReport_gte: Int
  dayOfWeek: String
  dayOfWeek_not: String
  dayOfWeek_in: [String!]
  dayOfWeek_not_in: [String!]
  dayOfWeek_lt: String
  dayOfWeek_lte: String
  dayOfWeek_gt: String
  dayOfWeek_gte: String
  dayOfWeek_contains: String
  dayOfWeek_not_contains: String
  dayOfWeek_starts_with: String
  dayOfWeek_not_starts_with: String
  dayOfWeek_ends_with: String
  dayOfWeek_not_ends_with: String
  AND: [VehicleWhereInput!]
  OR: [VehicleWhereInput!]
  NOT: [VehicleWhereInput!]
}

input VehicleWhereUniqueInput {
  id: ID
}
`
      }
    