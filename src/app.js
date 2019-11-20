// Import Fastify
const fastify = require("fastify");

// Create a new Fastify Instance
const app = fastify();

// Register Routes
app.get("/", (request, reply) => reply.send({ hello: "world" }));

// Export the App
module.exports = app;
