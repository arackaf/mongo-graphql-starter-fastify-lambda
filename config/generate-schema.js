// Import the createGraphqlSchema function
const { createGraphqlSchema } = require("mongo-graphql-starter");

// Import the Schema setup
const setup = require("./setup");

// Import the Path library
const path = require("path");

// Create the GraphqlSchema inside the src/schema folder
createGraphqlSchema(setup, path.resolve("./src/schema"));
