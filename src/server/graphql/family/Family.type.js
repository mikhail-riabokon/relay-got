import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';
import {globalIdField} from 'graphql-relay';
// import {nodeInterface} from '../graphqlRelay.js';

export default new GraphQLObjectType({
  name: 'Family',
  descriptions: 'Family',
  // isTypeOf: (obj) => {
  //   let {type} = obj;
  //
  //   if (type && type.toLocaleLowerCase) {
  //     type = type.toLocaleLowerCase();
  //   }
  //
  //   return type === 'family';
  // },
  fields: () => ({
    id: globalIdField('Family'),
    // regionId: globalIdField('Region', (obj) => obj.regionId),
    name: {
      type: GraphQLString
    },
    words: {
      type: GraphQLString
    },
    coatOfArms: {
      type: GraphQLString
    }
  })
  // ,
  // interfaces: [nodeInterface]
});