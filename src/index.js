// Import AWS Lambda Fastify
const awsLambdaFastify = require("aws-lambda-fastify");
// Import Fastify APP
const app = require("./app");

// Setup the Lambda Proxy
const proxy = awsLambdaFastify(app, { callbackWaitsForEmptyEventLoop: false });

// Export the Proxy as Lambda Handler
exports.handler = proxy;
