import 'graphql-import-node';
import * as authTypeDefs from './schemas/auth.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolverMap from './resolvers-maps';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, authTypeDefs],
  resolvers: resolverMap
});

export default schema;

