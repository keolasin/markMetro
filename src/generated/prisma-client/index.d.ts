// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  route: (where?: RouteWhereInput) => Promise<boolean>;
  vehicle: (where?: VehicleWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  route: (where: RouteWhereUniqueInput) => RouteNullablePromise;
  routes: (args?: {
    where?: RouteWhereInput;
    orderBy?: RouteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Route>;
  routesConnection: (args?: {
    where?: RouteWhereInput;
    orderBy?: RouteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RouteConnectionPromise;
  vehicle: (where: VehicleWhereUniqueInput) => VehicleNullablePromise;
  vehicles: (args?: {
    where?: VehicleWhereInput;
    orderBy?: VehicleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vehicle>;
  vehiclesConnection: (args?: {
    where?: VehicleWhereInput;
    orderBy?: VehicleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VehicleConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRoute: (data: RouteCreateInput) => RoutePromise;
  updateRoute: (args: {
    data: RouteUpdateInput;
    where: RouteWhereUniqueInput;
  }) => RoutePromise;
  updateManyRoutes: (args: {
    data: RouteUpdateManyMutationInput;
    where?: RouteWhereInput;
  }) => BatchPayloadPromise;
  upsertRoute: (args: {
    where: RouteWhereUniqueInput;
    create: RouteCreateInput;
    update: RouteUpdateInput;
  }) => RoutePromise;
  deleteRoute: (where: RouteWhereUniqueInput) => RoutePromise;
  deleteManyRoutes: (where?: RouteWhereInput) => BatchPayloadPromise;
  createVehicle: (data: VehicleCreateInput) => VehiclePromise;
  updateVehicle: (args: {
    data: VehicleUpdateInput;
    where: VehicleWhereUniqueInput;
  }) => VehiclePromise;
  updateManyVehicles: (args: {
    data: VehicleUpdateManyMutationInput;
    where?: VehicleWhereInput;
  }) => BatchPayloadPromise;
  upsertVehicle: (args: {
    where: VehicleWhereUniqueInput;
    create: VehicleCreateInput;
    update: VehicleUpdateInput;
  }) => VehiclePromise;
  deleteVehicle: (where: VehicleWhereUniqueInput) => VehiclePromise;
  deleteManyVehicles: (where?: VehicleWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  route: (
    where?: RouteSubscriptionWhereInput
  ) => RouteSubscriptionPayloadSubscription;
  vehicle: (
    where?: VehicleSubscriptionWhereInput
  ) => VehicleSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type VehicleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "vehicleID_ASC"
  | "vehicleID_DESC"
  | "predictable_ASC"
  | "predictable_DESC"
  | "runID_ASC"
  | "runID_DESC"
  | "latitude_ASC"
  | "latitude_DESC"
  | "longitude_ASC"
  | "longitude_DESC"
  | "heading_ASC"
  | "heading_DESC"
  | "timeSinceReport_ASC"
  | "timeSinceReport_DESC"
  | "serverTime_ASC"
  | "serverTime_DESC"
  | "data_ASC"
  | "data_DESC";

export type RouteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface RouteUpdateInput {
  name?: Maybe<String>;
  vehicles?: Maybe<VehicleUpdateManyWithoutRouteInput>;
}

export type RouteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VehicleUpdateWithoutRouteDataInput {
  vehicleID?: Maybe<String>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface VehicleWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  vehicleID?: Maybe<String>;
  vehicleID_not?: Maybe<String>;
  vehicleID_in?: Maybe<String[] | String>;
  vehicleID_not_in?: Maybe<String[] | String>;
  vehicleID_lt?: Maybe<String>;
  vehicleID_lte?: Maybe<String>;
  vehicleID_gt?: Maybe<String>;
  vehicleID_gte?: Maybe<String>;
  vehicleID_contains?: Maybe<String>;
  vehicleID_not_contains?: Maybe<String>;
  vehicleID_starts_with?: Maybe<String>;
  vehicleID_not_starts_with?: Maybe<String>;
  vehicleID_ends_with?: Maybe<String>;
  vehicleID_not_ends_with?: Maybe<String>;
  route?: Maybe<RouteWhereInput>;
  predictable?: Maybe<Boolean>;
  predictable_not?: Maybe<Boolean>;
  runID?: Maybe<String>;
  runID_not?: Maybe<String>;
  runID_in?: Maybe<String[] | String>;
  runID_not_in?: Maybe<String[] | String>;
  runID_lt?: Maybe<String>;
  runID_lte?: Maybe<String>;
  runID_gt?: Maybe<String>;
  runID_gte?: Maybe<String>;
  runID_contains?: Maybe<String>;
  runID_not_contains?: Maybe<String>;
  runID_starts_with?: Maybe<String>;
  runID_not_starts_with?: Maybe<String>;
  runID_ends_with?: Maybe<String>;
  runID_not_ends_with?: Maybe<String>;
  latitude?: Maybe<String>;
  latitude_not?: Maybe<String>;
  latitude_in?: Maybe<String[] | String>;
  latitude_not_in?: Maybe<String[] | String>;
  latitude_lt?: Maybe<String>;
  latitude_lte?: Maybe<String>;
  latitude_gt?: Maybe<String>;
  latitude_gte?: Maybe<String>;
  latitude_contains?: Maybe<String>;
  latitude_not_contains?: Maybe<String>;
  latitude_starts_with?: Maybe<String>;
  latitude_not_starts_with?: Maybe<String>;
  latitude_ends_with?: Maybe<String>;
  latitude_not_ends_with?: Maybe<String>;
  longitude?: Maybe<String>;
  longitude_not?: Maybe<String>;
  longitude_in?: Maybe<String[] | String>;
  longitude_not_in?: Maybe<String[] | String>;
  longitude_lt?: Maybe<String>;
  longitude_lte?: Maybe<String>;
  longitude_gt?: Maybe<String>;
  longitude_gte?: Maybe<String>;
  longitude_contains?: Maybe<String>;
  longitude_not_contains?: Maybe<String>;
  longitude_starts_with?: Maybe<String>;
  longitude_not_starts_with?: Maybe<String>;
  longitude_ends_with?: Maybe<String>;
  longitude_not_ends_with?: Maybe<String>;
  heading?: Maybe<Int>;
  heading_not?: Maybe<Int>;
  heading_in?: Maybe<Int[] | Int>;
  heading_not_in?: Maybe<Int[] | Int>;
  heading_lt?: Maybe<Int>;
  heading_lte?: Maybe<Int>;
  heading_gt?: Maybe<Int>;
  heading_gte?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  timeSinceReport_not?: Maybe<Int>;
  timeSinceReport_in?: Maybe<Int[] | Int>;
  timeSinceReport_not_in?: Maybe<Int[] | Int>;
  timeSinceReport_lt?: Maybe<Int>;
  timeSinceReport_lte?: Maybe<Int>;
  timeSinceReport_gt?: Maybe<Int>;
  timeSinceReport_gte?: Maybe<Int>;
  serverTime?: Maybe<String>;
  serverTime_not?: Maybe<String>;
  serverTime_in?: Maybe<String[] | String>;
  serverTime_not_in?: Maybe<String[] | String>;
  serverTime_lt?: Maybe<String>;
  serverTime_lte?: Maybe<String>;
  serverTime_gt?: Maybe<String>;
  serverTime_gte?: Maybe<String>;
  serverTime_contains?: Maybe<String>;
  serverTime_not_contains?: Maybe<String>;
  serverTime_starts_with?: Maybe<String>;
  serverTime_not_starts_with?: Maybe<String>;
  serverTime_ends_with?: Maybe<String>;
  serverTime_not_ends_with?: Maybe<String>;
  AND?: Maybe<VehicleWhereInput[] | VehicleWhereInput>;
  OR?: Maybe<VehicleWhereInput[] | VehicleWhereInput>;
  NOT?: Maybe<VehicleWhereInput[] | VehicleWhereInput>;
}

export interface VehicleCreateInput {
  id?: Maybe<ID_Input>;
  vehicleID?: Maybe<String>;
  route?: Maybe<RouteCreateOneWithoutVehiclesInput>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface VehicleScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  vehicleID?: Maybe<String>;
  vehicleID_not?: Maybe<String>;
  vehicleID_in?: Maybe<String[] | String>;
  vehicleID_not_in?: Maybe<String[] | String>;
  vehicleID_lt?: Maybe<String>;
  vehicleID_lte?: Maybe<String>;
  vehicleID_gt?: Maybe<String>;
  vehicleID_gte?: Maybe<String>;
  vehicleID_contains?: Maybe<String>;
  vehicleID_not_contains?: Maybe<String>;
  vehicleID_starts_with?: Maybe<String>;
  vehicleID_not_starts_with?: Maybe<String>;
  vehicleID_ends_with?: Maybe<String>;
  vehicleID_not_ends_with?: Maybe<String>;
  predictable?: Maybe<Boolean>;
  predictable_not?: Maybe<Boolean>;
  runID?: Maybe<String>;
  runID_not?: Maybe<String>;
  runID_in?: Maybe<String[] | String>;
  runID_not_in?: Maybe<String[] | String>;
  runID_lt?: Maybe<String>;
  runID_lte?: Maybe<String>;
  runID_gt?: Maybe<String>;
  runID_gte?: Maybe<String>;
  runID_contains?: Maybe<String>;
  runID_not_contains?: Maybe<String>;
  runID_starts_with?: Maybe<String>;
  runID_not_starts_with?: Maybe<String>;
  runID_ends_with?: Maybe<String>;
  runID_not_ends_with?: Maybe<String>;
  latitude?: Maybe<String>;
  latitude_not?: Maybe<String>;
  latitude_in?: Maybe<String[] | String>;
  latitude_not_in?: Maybe<String[] | String>;
  latitude_lt?: Maybe<String>;
  latitude_lte?: Maybe<String>;
  latitude_gt?: Maybe<String>;
  latitude_gte?: Maybe<String>;
  latitude_contains?: Maybe<String>;
  latitude_not_contains?: Maybe<String>;
  latitude_starts_with?: Maybe<String>;
  latitude_not_starts_with?: Maybe<String>;
  latitude_ends_with?: Maybe<String>;
  latitude_not_ends_with?: Maybe<String>;
  longitude?: Maybe<String>;
  longitude_not?: Maybe<String>;
  longitude_in?: Maybe<String[] | String>;
  longitude_not_in?: Maybe<String[] | String>;
  longitude_lt?: Maybe<String>;
  longitude_lte?: Maybe<String>;
  longitude_gt?: Maybe<String>;
  longitude_gte?: Maybe<String>;
  longitude_contains?: Maybe<String>;
  longitude_not_contains?: Maybe<String>;
  longitude_starts_with?: Maybe<String>;
  longitude_not_starts_with?: Maybe<String>;
  longitude_ends_with?: Maybe<String>;
  longitude_not_ends_with?: Maybe<String>;
  heading?: Maybe<Int>;
  heading_not?: Maybe<Int>;
  heading_in?: Maybe<Int[] | Int>;
  heading_not_in?: Maybe<Int[] | Int>;
  heading_lt?: Maybe<Int>;
  heading_lte?: Maybe<Int>;
  heading_gt?: Maybe<Int>;
  heading_gte?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  timeSinceReport_not?: Maybe<Int>;
  timeSinceReport_in?: Maybe<Int[] | Int>;
  timeSinceReport_not_in?: Maybe<Int[] | Int>;
  timeSinceReport_lt?: Maybe<Int>;
  timeSinceReport_lte?: Maybe<Int>;
  timeSinceReport_gt?: Maybe<Int>;
  timeSinceReport_gte?: Maybe<Int>;
  serverTime?: Maybe<String>;
  serverTime_not?: Maybe<String>;
  serverTime_in?: Maybe<String[] | String>;
  serverTime_not_in?: Maybe<String[] | String>;
  serverTime_lt?: Maybe<String>;
  serverTime_lte?: Maybe<String>;
  serverTime_gt?: Maybe<String>;
  serverTime_gte?: Maybe<String>;
  serverTime_contains?: Maybe<String>;
  serverTime_not_contains?: Maybe<String>;
  serverTime_starts_with?: Maybe<String>;
  serverTime_not_starts_with?: Maybe<String>;
  serverTime_ends_with?: Maybe<String>;
  serverTime_not_ends_with?: Maybe<String>;
  AND?: Maybe<VehicleScalarWhereInput[] | VehicleScalarWhereInput>;
  OR?: Maybe<VehicleScalarWhereInput[] | VehicleScalarWhereInput>;
  NOT?: Maybe<VehicleScalarWhereInput[] | VehicleScalarWhereInput>;
}

export interface RouteUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface VehicleUpsertWithWhereUniqueWithoutRouteInput {
  where: VehicleWhereUniqueInput;
  update: VehicleUpdateWithoutRouteDataInput;
  create: VehicleCreateWithoutRouteInput;
}

export interface RouteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RouteWhereInput>;
  AND?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
  OR?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
  NOT?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
}

export interface RouteUpsertWithoutVehiclesInput {
  update: RouteUpdateWithoutVehiclesDataInput;
  create: RouteCreateWithoutVehiclesInput;
}

export interface RouteCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  vehicles?: Maybe<VehicleCreateManyWithoutRouteInput>;
}

export interface RouteUpdateOneWithoutVehiclesInput {
  create?: Maybe<RouteCreateWithoutVehiclesInput>;
  update?: Maybe<RouteUpdateWithoutVehiclesDataInput>;
  upsert?: Maybe<RouteUpsertWithoutVehiclesInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<RouteWhereUniqueInput>;
}

export interface VehicleCreateManyWithoutRouteInput {
  create?: Maybe<
    VehicleCreateWithoutRouteInput[] | VehicleCreateWithoutRouteInput
  >;
  connect?: Maybe<VehicleWhereUniqueInput[] | VehicleWhereUniqueInput>;
}

export interface RouteCreateWithoutVehiclesInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
}

export interface VehicleCreateWithoutRouteInput {
  id?: Maybe<ID_Input>;
  vehicleID?: Maybe<String>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface RouteCreateOneWithoutVehiclesInput {
  create?: Maybe<RouteCreateWithoutVehiclesInput>;
  connect?: Maybe<RouteWhereUniqueInput>;
}

export interface VehicleUpdateManyDataInput {
  vehicleID?: Maybe<String>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface VehicleUpdateManyMutationInput {
  vehicleID?: Maybe<String>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface VehicleUpdateManyWithWhereNestedInput {
  where: VehicleScalarWhereInput;
  data: VehicleUpdateManyDataInput;
}

export interface RouteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  vehicles_every?: Maybe<VehicleWhereInput>;
  vehicles_some?: Maybe<VehicleWhereInput>;
  vehicles_none?: Maybe<VehicleWhereInput>;
  AND?: Maybe<RouteWhereInput[] | RouteWhereInput>;
  OR?: Maybe<RouteWhereInput[] | RouteWhereInput>;
  NOT?: Maybe<RouteWhereInput[] | RouteWhereInput>;
}

export interface VehicleUpdateWithWhereUniqueWithoutRouteInput {
  where: VehicleWhereUniqueInput;
  data: VehicleUpdateWithoutRouteDataInput;
}

export interface VehicleUpdateManyWithoutRouteInput {
  create?: Maybe<
    VehicleCreateWithoutRouteInput[] | VehicleCreateWithoutRouteInput
  >;
  delete?: Maybe<VehicleWhereUniqueInput[] | VehicleWhereUniqueInput>;
  connect?: Maybe<VehicleWhereUniqueInput[] | VehicleWhereUniqueInput>;
  set?: Maybe<VehicleWhereUniqueInput[] | VehicleWhereUniqueInput>;
  disconnect?: Maybe<VehicleWhereUniqueInput[] | VehicleWhereUniqueInput>;
  update?: Maybe<
    | VehicleUpdateWithWhereUniqueWithoutRouteInput[]
    | VehicleUpdateWithWhereUniqueWithoutRouteInput
  >;
  upsert?: Maybe<
    | VehicleUpsertWithWhereUniqueWithoutRouteInput[]
    | VehicleUpsertWithWhereUniqueWithoutRouteInput
  >;
  deleteMany?: Maybe<VehicleScalarWhereInput[] | VehicleScalarWhereInput>;
  updateMany?: Maybe<
    | VehicleUpdateManyWithWhereNestedInput[]
    | VehicleUpdateManyWithWhereNestedInput
  >;
}

export interface RouteUpdateWithoutVehiclesDataInput {
  name?: Maybe<String>;
}

export interface VehicleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VehicleWhereInput>;
  AND?: Maybe<VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput>;
  OR?: Maybe<VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput>;
  NOT?: Maybe<VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput>;
}

export type VehicleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VehicleUpdateInput {
  vehicleID?: Maybe<String>;
  route?: Maybe<RouteUpdateOneWithoutVehiclesInput>;
  predictable?: Maybe<Boolean>;
  runID?: Maybe<String>;
  latitude?: Maybe<String>;
  longitude?: Maybe<String>;
  heading?: Maybe<Int>;
  timeSinceReport?: Maybe<Int>;
  serverTime?: Maybe<String>;
  data?: Maybe<Json>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VehiclePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  vehicleID?: String;
  predictable?: Boolean;
  runID?: String;
  latitude?: String;
  longitude?: String;
  heading?: Int;
  timeSinceReport?: Int;
  serverTime?: String;
  data?: Json;
}

export interface VehiclePreviousValuesPromise
  extends Promise<VehiclePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  vehicleID: () => Promise<String>;
  predictable: () => Promise<Boolean>;
  runID: () => Promise<String>;
  latitude: () => Promise<String>;
  longitude: () => Promise<String>;
  heading: () => Promise<Int>;
  timeSinceReport: () => Promise<Int>;
  serverTime: () => Promise<String>;
  data: () => Promise<Json>;
}

export interface VehiclePreviousValuesSubscription
  extends Promise<AsyncIterator<VehiclePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  vehicleID: () => Promise<AsyncIterator<String>>;
  predictable: () => Promise<AsyncIterator<Boolean>>;
  runID: () => Promise<AsyncIterator<String>>;
  latitude: () => Promise<AsyncIterator<String>>;
  longitude: () => Promise<AsyncIterator<String>>;
  heading: () => Promise<AsyncIterator<Int>>;
  timeSinceReport: () => Promise<AsyncIterator<Int>>;
  serverTime: () => Promise<AsyncIterator<String>>;
  data: () => Promise<AsyncIterator<Json>>;
}

export interface AggregateRoute {
  count: Int;
}

export interface AggregateRoutePromise
  extends Promise<AggregateRoute>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRouteSubscription
  extends Promise<AsyncIterator<AggregateRoute>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Vehicle {
  id: ID_Output;
  createdAt: DateTimeOutput;
  vehicleID?: String;
  predictable?: Boolean;
  runID?: String;
  latitude?: String;
  longitude?: String;
  heading?: Int;
  timeSinceReport?: Int;
  serverTime?: String;
  data?: Json;
}

export interface VehiclePromise extends Promise<Vehicle>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  vehicleID: () => Promise<String>;
  route: <T = RoutePromise>() => T;
  predictable: () => Promise<Boolean>;
  runID: () => Promise<String>;
  latitude: () => Promise<String>;
  longitude: () => Promise<String>;
  heading: () => Promise<Int>;
  timeSinceReport: () => Promise<Int>;
  serverTime: () => Promise<String>;
  data: () => Promise<Json>;
}

export interface VehicleSubscription
  extends Promise<AsyncIterator<Vehicle>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  vehicleID: () => Promise<AsyncIterator<String>>;
  route: <T = RouteSubscription>() => T;
  predictable: () => Promise<AsyncIterator<Boolean>>;
  runID: () => Promise<AsyncIterator<String>>;
  latitude: () => Promise<AsyncIterator<String>>;
  longitude: () => Promise<AsyncIterator<String>>;
  heading: () => Promise<AsyncIterator<Int>>;
  timeSinceReport: () => Promise<AsyncIterator<Int>>;
  serverTime: () => Promise<AsyncIterator<String>>;
  data: () => Promise<AsyncIterator<Json>>;
}

export interface VehicleNullablePromise
  extends Promise<Vehicle | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  vehicleID: () => Promise<String>;
  route: <T = RoutePromise>() => T;
  predictable: () => Promise<Boolean>;
  runID: () => Promise<String>;
  latitude: () => Promise<String>;
  longitude: () => Promise<String>;
  heading: () => Promise<Int>;
  timeSinceReport: () => Promise<Int>;
  serverTime: () => Promise<String>;
  data: () => Promise<Json>;
}

export interface RouteEdge {
  node: Route;
  cursor: String;
}

export interface RouteEdgePromise extends Promise<RouteEdge>, Fragmentable {
  node: <T = RoutePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RouteEdgeSubscription
  extends Promise<AsyncIterator<RouteEdge>>,
    Fragmentable {
  node: <T = RouteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface RouteConnection {
  pageInfo: PageInfo;
  edges: RouteEdge[];
}

export interface RouteConnectionPromise
  extends Promise<RouteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RouteEdge>>() => T;
  aggregate: <T = AggregateRoutePromise>() => T;
}

export interface RouteConnectionSubscription
  extends Promise<AsyncIterator<RouteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RouteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRouteSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface Route {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name?: String;
}

export interface RoutePromise extends Promise<Route>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  vehicles: <T = FragmentableArray<Vehicle>>(args?: {
    where?: VehicleWhereInput;
    orderBy?: VehicleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RouteSubscription
  extends Promise<AsyncIterator<Route>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  vehicles: <T = Promise<AsyncIterator<VehicleSubscription>>>(args?: {
    where?: VehicleWhereInput;
    orderBy?: VehicleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RouteNullablePromise
  extends Promise<Route | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  vehicles: <T = FragmentableArray<Vehicle>>(args?: {
    where?: VehicleWhereInput;
    orderBy?: VehicleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RouteSubscriptionPayload {
  mutation: MutationType;
  node: Route;
  updatedFields: String[];
  previousValues: RoutePreviousValues;
}

export interface RouteSubscriptionPayloadPromise
  extends Promise<RouteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RoutePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RoutePreviousValuesPromise>() => T;
}

export interface RouteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RouteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RouteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RoutePreviousValuesSubscription>() => T;
}

export interface RoutePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name?: String;
}

export interface RoutePreviousValuesPromise
  extends Promise<RoutePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
}

export interface RoutePreviousValuesSubscription
  extends Promise<AsyncIterator<RoutePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface VehicleSubscriptionPayload {
  mutation: MutationType;
  node: Vehicle;
  updatedFields: String[];
  previousValues: VehiclePreviousValues;
}

export interface VehicleSubscriptionPayloadPromise
  extends Promise<VehicleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VehiclePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VehiclePreviousValuesPromise>() => T;
}

export interface VehicleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VehicleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VehicleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VehiclePreviousValuesSubscription>() => T;
}

export interface AggregateVehicle {
  count: Int;
}

export interface AggregateVehiclePromise
  extends Promise<AggregateVehicle>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVehicleSubscription
  extends Promise<AsyncIterator<AggregateVehicle>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VehicleConnection {
  pageInfo: PageInfo;
  edges: VehicleEdge[];
}

export interface VehicleConnectionPromise
  extends Promise<VehicleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VehicleEdge>>() => T;
  aggregate: <T = AggregateVehiclePromise>() => T;
}

export interface VehicleConnectionSubscription
  extends Promise<AsyncIterator<VehicleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VehicleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVehicleSubscription>() => T;
}

export interface VehicleEdge {
  node: Vehicle;
  cursor: String;
}

export interface VehicleEdgePromise extends Promise<VehicleEdge>, Fragmentable {
  node: <T = VehiclePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VehicleEdgeSubscription
  extends Promise<AsyncIterator<VehicleEdge>>,
    Fragmentable {
  node: <T = VehicleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Json = any;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Vehicle",
    embedded: false
  },
  {
    name: "Route",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
