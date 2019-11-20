module.exports = {
  typeName: "Author",
  fields: {
    name: "String",
    birthday: {
      __isDate: true,
      format: "%m/%d/%Y"
    }
  },
  relationships: {}
};
