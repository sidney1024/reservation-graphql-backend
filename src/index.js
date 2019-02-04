const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    reservations: (parent, args, context) => {
      return context.prisma.reservations({ where: args })
    },
    reservation: (parent, { id }, context) => {
      return context.prisma.reservation({ id })
    },
  },
  Mutation: {
    createReservation(parent, { name, hotelName, arrivalDate, departureDate }, context) {
      return context.prisma.createReservation({
        name,
        hotelName,
        arrivalDate,
        departureDate
      })
    },
    deleteReservation(parent, { id }, context) {
      return context.prisma.deleteReservation({ id })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))
