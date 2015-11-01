/**
 * Created by mikhail on 31.10.15.
 */
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
import regions from './fields/regions';
import families from './fields/families';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    description: 'The root query for GOT example',
    fields: {
      regions,
      families
    }
  })
});