module.exports = {
        typeDefs: /* GraphQL */ `type AggregateReservation {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createReservation(data: ReservationCreateInput!): Reservation!
  updateReservation(data: ReservationUpdateInput!, where: ReservationWhereUniqueInput!): Reservation
  updateManyReservations(data: ReservationUpdateManyMutationInput!, where: ReservationWhereInput): BatchPayload!
  upsertReservation(where: ReservationWhereUniqueInput!, create: ReservationCreateInput!, update: ReservationUpdateInput!): Reservation!
  deleteReservation(where: ReservationWhereUniqueInput!): Reservation
  deleteManyReservations(where: ReservationWhereInput): BatchPayload!
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
  reservation(where: ReservationWhereUniqueInput!): Reservation
  reservations(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reservation]!
  reservationsConnection(where: ReservationWhereInput, orderBy: ReservationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReservationConnection!
  node(id: ID!): Node
}

type Reservation {
  id: ID!
  name: String!
  hotelName: String!
  arrivalDate: String!
  departureDate: String!
}

type ReservationConnection {
  pageInfo: PageInfo!
  edges: [ReservationEdge]!
  aggregate: AggregateReservation!
}

input ReservationCreateInput {
  name: String!
  hotelName: String!
  arrivalDate: String!
  departureDate: String!
}

type ReservationEdge {
  node: Reservation!
  cursor: String!
}

enum ReservationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  hotelName_ASC
  hotelName_DESC
  arrivalDate_ASC
  arrivalDate_DESC
  departureDate_ASC
  departureDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReservationPreviousValues {
  id: ID!
  name: String!
  hotelName: String!
  arrivalDate: String!
  departureDate: String!
}

type ReservationSubscriptionPayload {
  mutation: MutationType!
  node: Reservation
  updatedFields: [String!]
  previousValues: ReservationPreviousValues
}

input ReservationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReservationWhereInput
  AND: [ReservationSubscriptionWhereInput!]
  OR: [ReservationSubscriptionWhereInput!]
  NOT: [ReservationSubscriptionWhereInput!]
}

input ReservationUpdateInput {
  name: String
  hotelName: String
  arrivalDate: String
  departureDate: String
}

input ReservationUpdateManyMutationInput {
  name: String
  hotelName: String
  arrivalDate: String
  departureDate: String
}

input ReservationWhereInput {
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
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  hotelName: String
  hotelName_not: String
  hotelName_in: [String!]
  hotelName_not_in: [String!]
  hotelName_lt: String
  hotelName_lte: String
  hotelName_gt: String
  hotelName_gte: String
  hotelName_contains: String
  hotelName_not_contains: String
  hotelName_starts_with: String
  hotelName_not_starts_with: String
  hotelName_ends_with: String
  hotelName_not_ends_with: String
  arrivalDate: String
  arrivalDate_not: String
  arrivalDate_in: [String!]
  arrivalDate_not_in: [String!]
  arrivalDate_lt: String
  arrivalDate_lte: String
  arrivalDate_gt: String
  arrivalDate_gte: String
  arrivalDate_contains: String
  arrivalDate_not_contains: String
  arrivalDate_starts_with: String
  arrivalDate_not_starts_with: String
  arrivalDate_ends_with: String
  arrivalDate_not_ends_with: String
  departureDate: String
  departureDate_not: String
  departureDate_in: [String!]
  departureDate_not_in: [String!]
  departureDate_lt: String
  departureDate_lte: String
  departureDate_gt: String
  departureDate_gte: String
  departureDate_contains: String
  departureDate_not_contains: String
  departureDate_starts_with: String
  departureDate_not_starts_with: String
  departureDate_ends_with: String
  departureDate_not_ends_with: String
  AND: [ReservationWhereInput!]
  OR: [ReservationWhereInput!]
  NOT: [ReservationWhereInput!]
}

input ReservationWhereUniqueInput {
  id: ID
}

type Subscription {
  reservation(where: ReservationSubscriptionWhereInput): ReservationSubscriptionPayload
}
`
      }
    