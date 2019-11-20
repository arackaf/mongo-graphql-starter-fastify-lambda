const {
  query: BookQuery,
  mutation: BookMutation,
  type: BookType
} = require("./Book/schema");
const {
  query: SubjectQuery,
  mutation: SubjectMutation,
  type: SubjectType
} = require("./Subject/schema");
const { type: AuthorType } = require("./Author/schema");

module.exports = `

  scalar JSON

  type DeletionResultInfo {
    success: Boolean!,
    Meta: MutationResultInfo!
  }

  type MutationResultInfo {
    transaction: Boolean!,
    elapsedTime: Int!
  }

  type QueryResultsMetadata {
    count: Int!
  }

  type QueryRelationshipResultsMetadata {
    count: Int!
  }

  input StringArrayUpdate {
    index: Int!,
    value: String!
  }

  input IntArrayUpdate {
    index: Int!,
    value: Int!
  }

  input FloatArrayUpdate {
    index: Int!,
    value: Float!
  }


  ${AuthorType}

  ${BookType}

  ${SubjectType}

  type Query {
    ${BookQuery}

    ${SubjectQuery}
  }

  type Mutation {
    ${BookMutation}

    ${SubjectMutation}
  }

`;
