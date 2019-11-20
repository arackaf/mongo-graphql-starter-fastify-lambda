// Import MongoClient
const { MongoClient } = require("mongodb");

// Import Fastify GQL
const fastifyGql = require("fastify-gql");

// Import Fastify MongoDB
const fastifyMongo = require("fastify-mongodb");

// Import Resolvers
const resolvers = require("./schema/graphQL/resolver");

// Import Schema
const schema = require("./schema/graphQL/schema");

// Import the makeExecutableSchema function
const { makeExecutableSchema } = require("graphql-tools");

// Import Fastify
const fastify = require("fastify");

// Create a new Fastify Instance
const app = fastify();

// MongoDB Connection String
const connectionString = "mongodb://localhost:27017/";

// MongoDB Database Name
const databaseName = "Test";

// GraphQL Executable Schema
const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

// Register Fastify MongoDB
app.register(fastifyMongo, {
  forceClose: true,
  url: connectionString,
  database: databaseName
});

// Register GraphQL
app.register(fastifyGql, {
  schema: executableSchema,
  graphiql: true
});

if (require.main === module) {
  // called directly i.e. "node app"
  app.listen(3000, err => {
    if (err) console.error(err);
    console.log("Server listening on port 3000");
  });
} else {
  // required as a module => executed on aws lambda
  module.exports = app;
}

// Export the App
//module.exports = app;
