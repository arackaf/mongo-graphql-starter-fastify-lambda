const GraphQLJSON = require("graphql-type-json");

const BookRest = require("./Book/resolver");
const SubjectRest = require("./Subject/resolver");

const { Query: BookQuery, Mutation: BookMutation } = BookRest;
const { Query: SubjectQuery, Mutation: SubjectMutation } = SubjectRest;

module.exports = {
  JSON: GraphQLJSON,
  Query: Object.assign({}, BookQuery, SubjectQuery),
  Mutation: Object.assign({}, BookMutation, SubjectMutation),
  Book: { ...BookRest },
  Subject: { ...SubjectRest }
};
