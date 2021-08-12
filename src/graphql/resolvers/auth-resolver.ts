import { IResolvers } from '@graphql-tools/utils';
import { AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated';

export const AuthResolvers: IResolvers = {
  Query: {
    async login(_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return {
        token: "token"
      }
    }
  },
  Mutation: {
    async register(_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: "token"
      }
    }
  }
}
