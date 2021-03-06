import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import viewer from './viewer';
import mutations from './mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    description: 'The root query for GOT example',
    fields: () => ({
      viewer,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    description: 'The root mutation type for GOT example',
    fields: () => mutations,
  }),
});
