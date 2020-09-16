const { GraphQLServer, PubSub } = require("graphql-yoga");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const pubsub = new PubSub();

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Vote = require("./resolvers/Vote");
const Subscription = require("./resolvers/Subscription");
//todo resolvers
const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
};
//todo Server
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
      pubsub,
    };
  },
});

server.start(() => console.log(`Server listening on http://localhost:4000`));
