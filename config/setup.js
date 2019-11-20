// Import Data Types
const { dataTypes } = require("mongo-graphql-starter");
const {
  MongoIdType,
  MongoIdArrayType,
  StringType,
  StringArrayType,
  BoolType,
  IntType,
  IntArrayType,
  FloatType,
  FloatArrayType,
  DateType,
  arrayOf,
  objectOf,
  formattedDate,
  JSONType,
  typeLiteral
} = dataTypes;

// Define Author
const Author = {
  fields: {
    name: StringType,
    birthday: DateType
  }
};

// Define Book
const Book = {
  table: "books",
  fields: {
    _id: MongoIdType,
    title: StringType,
    pages: IntType,
    weight: FloatType,
    keywords: StringArrayType,
    editions: IntArrayType,
    prices: FloatArrayType,
    isRead: BoolType,
    mongoIds: MongoIdArrayType,
    authors: arrayOf(Author),
    primaryAuthor: objectOf(Author),
    strArrs: typeLiteral("[[String]]"),
    createdOn: DateType,
    createdOnYearOnly: formattedDate({ format: "%Y" }),
    jsonContent: JSONType
  }
};

// Define Subject
const Subject = {
  table: "subjects",
  fields: {
    _id: MongoIdType,
    name: StringType
  }
};

// Exports Author
exports.Author = Author;
// Exports Book
exports.Book = Book;
// Exports Subject
exports.Subject = Subject;
