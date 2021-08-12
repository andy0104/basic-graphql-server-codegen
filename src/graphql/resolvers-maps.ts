import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { AuthResolvers } from './resolvers/auth-resolver';
import { UserResolvers } from './resolvers/user-resolver';

const resolverMap: IResolvers = merge(AuthResolvers, UserResolvers);
export default resolverMap;
