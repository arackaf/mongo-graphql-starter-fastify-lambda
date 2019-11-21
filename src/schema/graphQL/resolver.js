const GraphQLJSON = require("graphql-type-json");

const BookImport = require("./Book/resolver");
const SubjectImport = require("./Subject/resolver");

const { Query: BookQuery, Mutation: BookMutation, ...BookRest } = BookImport;
const { Query: SubjectQuery, Mutation: SubjectMutation, ...SubjectRest } = SubjectImport;

module.exports = {
  JSON: GraphQLJSON,
  Query: Object.assign({}, BookQuery, SubjectQuery),
  Mutation: Object.assign({}, BookMutation, SubjectMutation),
  Book: { ...BookRest },
  Subject: { ...SubjectRest }
};
