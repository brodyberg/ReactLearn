import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql'

let datax = [42, 43, 44];

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      datay: {
        type: new GraphQLList(GraphQLInt),
        resolve: () => datax
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: () => ++counter
      }
    })
  })
});

export default schema;