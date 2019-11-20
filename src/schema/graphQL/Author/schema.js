exports.type = `
  
  type Author {
    name: String
    birthday: String
  }

  input AuthorInput {
    name: String
    birthday: String
  }

  input AuthorMutationInput {
    name: String
    birthday: String
  }

  input AuthorArrayMutationInput {
    index: Int
    Updates: AuthorMutationInput
  }

  input AuthorSort {
    name: Int
    birthday: Int
  }

  input AuthorFilters {
    name_contains: String
    name_startsWith: String
    name_endsWith: String
    name_regex: String
    name: String
    name_ne: String
    name_in: [String]
    name_nin: [String]
    birthday_lt: String
    birthday_lte: String
    birthday_gt: String
    birthday_gte: String
    birthday: String
    birthday_ne: String
    birthday_in: [String]
    birthday_nin: [String]
    OR: [AuthorFilters]
  }
  
`;
